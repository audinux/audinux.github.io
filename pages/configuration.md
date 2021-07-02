![Audinux](../images/AudinuxBanner.png)

## Configuration of the repository

### Installing the repository

To install this repo, as a root user, enter the following command:
```
$ dnf copr enable ycollet/linuxmao
```
To list all the package provided by this repo (you must enable the repo before):
```
$ dnf list --available | grep ycollet
```
To list the last 20 updated packages:
```
$ dnf repoquery --repoid=ycollet-linuxmao --queryformat "%45{name} %{evr} %{buildtime}" | sort -r -k3 | head --lines=20
```

### Installing the real time kernel

You can install the real time kernel. We will be able to select at boot time the real time kernel:
```
$ dnf install kernel-rt-mao
```
This command will install the last available RT kernel (the 5.11.4.rt11 as of today).

You can install some old kernel versions like 5.10.35.rt39:
```
$ dnf install kernel-rt-mao-5.10.35.rt39
```

### Configuring the system

Before using the real time kernel, you need to fine tune /etc/security/limits.d/95-jack.conf.
This file is installed by the jack-audio-connection-kit package.
Under Fedora 34, you have the following content:
```
# Default limits for users of jack-audio-connection-kit

@jackuser - rtprio 70
@jackuser - memlock 4194304

@pulse-rt - rtprio 20
@pulse-rt - nice -20
```

You can add a "@jackuser - nice -20" line and comment all the @pulse-rt lines. Here is the result:
```
# Default limits for users of jack-audio-connection-kit

@jackuser - rtprio 90
@jackuser - memlock 4194304
@jackuser - nice -20

#@pulse-rt - rtprio 20
#@pulse-rt - nice -20
```

And then, add yourself to the jackuser group:
```
# as a root user
$ usermod -a -G jackuser <my_user_id>
```

And then log off from your session and log in again so that the changes can take effect.

With the latest kernel, there is a problem with AMD/Radeon graphic cards. This is a combination of problem between the kernel graphic driver and the xorg server.
One way to wark around this problem is to deactivate the graphic acceleration layer of xorg.
Add a file  /etc/X11/xorg.conf.d/disable-gpu.conf with the following content:
```
Section "Extensions"
    Option "GLX" "Disable"
EndSection
```

The article "[Configure Fedora to practice and compose music](https://fedoramagazine.org/configure-fedora-to-practise-and-compose-music/)" talk a little bit more on this topic.
