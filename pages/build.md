![Audinux](../images/AudinuxBanner.png)

## Build

### Tickets

For this release, 2 tickets have been opened:
- https://bugzilla.redhat.com/show_bug.cgi?id=2128041 - libsndfile problem (fixed)
- https://bugzilla.redhat.com/show_bug.cgi?id=2127286 - lv2 headers problem (fixed)

### Fedora 37

Package | x86_64 | aarch64
------- | ------ | -------
sisco.lv2 | OK | -msse
shuriken | OK | arch unknow during configure
shortcircuit | format-security | format-security
shiro | OK | -msse flags
sequencer64 | sched_yield not declared | sched_yield not declared
ryukau | undefined ref to DGL::Rectangle | undefined ref to DGL::Rectangle
rkrlv2 | OK | -msse 
rivendell | OK  gcc cannot create executable
qsampler | linuxsampler dep not built | linuxsampler dep not built
purr-data | config.h not found |  config.h not found
puredata | OK | patch pb
protrekkr | OK | -m64 flag
processing | OK | x86 only
plebtracker | format-security | format-security
oxefmsynth | OK | -m64 flag
orca | format security | format security
openFrameworks | conflicting declaration | conflicting declarationg
openboard | ffmpeg conflict | ffmpeg conflict
odin2 | OK | -m64  flag
obxd | OK | -m64 flag
mx44 | OK | assembly language
monique-monosynth | std header pb | std header pb
mod-pitchshifter | OK | -msse
mod-gxpitchshifter | OK | -msse
midi-monitor | std header pb | std header pb
matrixmixer.lv2 | OK | -msse
mammut | OK | -msse2 flag
lv2-mrfreeze | OK | -msse
lv2-EQ10Q-plugins | pstreams-devel missing | pstreams-devel missing
lv2-avldrums-x42-plugin | OK | -msse
lv2-artyfx-plugins | OK | -msse
lmms-mao | carla problem | carla problem
lives-mao | too few arg for calloc | too few arg for calloc
livecd-tools-mao | OK | files not found
LinVst | OK | x86 only
kernel-rt-stable-mao | dwarves problem: vmlinux: Unknown error -22make | dwarves problem: vmlinux: Unknown error -22make
jamesdsp | OK | NMCTXREGS undeclared
improviz | OK | x86 only
HISE | OK | intrinsic pb
hexosynth | rust error | rust error
helio-workstation | std header pb | std header pb
harvid | ffmpeg pb | ffmpeg pb
frequalizer | JUCE5 | JUCE5
ecasound | format security | format security
dssi-vst | OK | x86 only
Carla-mao | OK | x86 only
cardinal | linuxsamper missing | linuxsampler missing
buzztrax | No rich dependencies | No rich dependencies
brutefir | OK | packaging pb
ams-lv2 | OK | -msse
alsa-scarlett-gui | format security | OK
aether | error overflow | error overflow
aeolus | OK | file not found in lib64
cwiid | OK | -m64 flag
liblscp | linuxsampler missing | linuxsampler missing
linuxsampler | lv2 headers | lv2 headers
JUCE5 | std::array pb | std::array pb
smartamppro  | OK | x86_64 hardcoded in spec
sonobus | OK | x86_64 hardcoded in spec
spectmorph | OK | __m128 type
sonic-pi  | ruby version | ruby version
spek | ffmpeg devel pb| ffmpeg devel pb
stone-phaser | OK | -msse
supercollider | conflicting declaration | conflicting declaration
supercollider-sc3-plugins | Supercollider missing | Supercollider missing
tap-lv2 | OK | -msse
tsunami | OK | cast error
tunefish | OK | xmintrinsic
tuning-difference | OK | -msse
ultranova4linux | libusb-devel missing | libusb-devel missing
veejay-core | compat-ffmpeg28-devel missing | compat-ffmpeg28-devel missing
veejay-gui | veejay-server and compat-ffmpeg28-devel missing | veejay-server and compat-ffmpeg28-devel missing
veejay-server | compat-ffmpeg28-devel missing | compat-ffmpeg28-devel missing
vsxu | pointer comparison | pointer comparison
wineasio | OK | x86 only
wolf-shaper | OK | -msse
xjadeo | ffmpeg pb | ffmpeg pb
yabridge | OK | x86 only
ykchorus | OK | lib64 hardcoded in spec
zrythm | libpcre missing | libpcre missing

## Todo

For Rack v1: use these patches:
- https://github.com/hexdump0815/vcvrack-dockerbuild-v1

For Rack v2: use these patches:
- https://aur.archlinux.org/packages/vcvrack

Patch linuxampler following. this instructions:
- https://rpc.gehennom.org/2015/06/mellotron-on-the-raspberry-pi/
- Patch applies but HAVE_SMP problem
