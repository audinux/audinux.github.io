# Audinux User Guide

## Introduction

To enable the Audinux COPR repository, you have to enter the following command as a root user:
```
$ dnf copr enable ycollet/audinux 
```

To be able to use some applications with the real time priorities, the following setup is required:

- Add "preempt=full threadirqs" as options on the kernel command line (via grub just before booting a kernel). Check [1] for how to set up kernel options
- In the file /etc/security/limits.d/25-pw-rlimits.conf (you must be a super user to be able to edit this file), replace the line "@pipewire   – rtprio  …" by "@pipewire   – rtprio  95"
- Add your user to the pipewire group. As a super user, enter the command "usermod -a -G pipewire <USERNAME>"
- Add pipewire-jack to be able to use the low latency audio driver. As a root user, enter the command "dnf install pipewire-jack-audio-connection-kit"
- Disconnect from your current window manager session and re-login to your session (so the last two steps take effect)

Now that all the most important settings are done, you are ready to make sounds / music in real-time mode.

You can perform some other settings describred in [2] (most of these settings are optional).

The article "[Configure Fedora to practice and compose music](https://fedoramagazine.org/configure-fedora-to-practise-and-compose-music/)" talk a little bit more on this topic.

## Links

- [1] <https://docs.fedoraproject.org/en-US/fedora/latest/system-administrators-guide/kernel-module-driver-configuration/Working_with_the_GRUB_2_Boot_Loader>
- [2] <https://linuxmusicians.com/viewtopic.php?p=167895#p167895>
