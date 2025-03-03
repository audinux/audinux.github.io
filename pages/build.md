![Audinux](../images/AudinuxBanner.png)

## Build

### Tickets

A ticket has been opened for vst3sdk: https://github.com/steinbergmedia/vst3sdk/issues/123

### Fedora 42

No beta release yet

### Fedora 41

Python2 has been removed from rawhide and Fedora 41.
Paython-3.12 is the default version of Python on Fedora 41.

#### psi-plugin

python2 problem

#### Missing packages:

```
lv2-avw-plugins  - No matching package to install: 'slv2-devel'
opl3bankeditor  - No matching package to install: 'qwt-devel'
opn2bankeditor  -No matching package to install: 'qwt-devel'
prelude  - No matching package to install: 'sfizz-devel' - rebusmitted
toccata  - No matching package to install: 'sfizz-devel'
rack-v2-RPJ  - fatal error: emmintrin.h: No such file or directory
```

## Todo

For Rack v1: use these patches:
- https://github.com/hexdump0815/vcvrack-dockerbuild-v1

For Rack v2: use these patches:
- https://aur.archlinux.org/packages/vcvrack

Patch linuxampler following. this instructions:
- https://rpc.gehennom.org/2015/06/mellotron-on-the-raspberry-pi/

Porting intrinsics to ARM using simde:
- https://wiki.debian.org/SIMDEverywhere

