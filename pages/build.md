![Audinux](../images/AudinuxBanner.png)

## Build

### Tickets

For this release, 2 tickets have been opened:
- https://bugzilla.redhat.com/show_bug.cgi?id=2128041 - libsndfile problem (not fixed)
- https://bugzilla.redhat.com/show_bug.cgi?id=2127286 - lv2 headers problem (fixed)

### Fedora 37

Package | x86_64 | aarch64
------- | ------ | -------
sisco.lv2 | lv2 headers | lv2 headers
shuriken | OK | arch unknow during configure
shortcircuit | format-security | format-security
shiro | OK | -msse flags
herlock.lv2 | lv2 headers | lv2 headers
sequencer64 | sched_yield not declared | sched_yield not declared
scarlett-mixer | lv2 headers | lv2 headers
ryukau | undefined ref to DGL::Rectangle | undefined ref to DGL::Rectangle
rkrlv2 | lv2 headers | lv2 headers 
Rack-v1 | OK | Intrinsic problem
Rack-v2 | OK | Intrinsic problem
rivendell | OK  gcc cannot create executable
rezound | libsndfile missing | libsndfile missing
remid | lv2 headers | lv2 headers
raffosynth | lv2 headers | lv2 headers
rakarrack-plus | lv2 headers | lv2 headers
qutecsound | libsndfile missing | libsndfile missing
qsampler | linuxsampler dep not built | linuxsampler dep not built
purr-data | config.h not found |  config.h not found
puredata | OK | patch pb
psi-plugins-doc | lv2 headers | lv2 headers
psindustrializer | libsndfile missing | libsndfile missing
protrekkr | OK | -m64 flag
processing | OK | invalid platform
plujain-ramp | lv2 headers | lv2 headers
plebtracker | format-security | format-security
picoloop | libsndfile missing | libsndfile missing
patchmatrix | lv2 headerss | lv2 headers
padthv1 | lv2 headers | lv2 headers
oxefmsynth | OK | -m64 flag
orca | format security | format security
orbit.lv2 | lv2 headers | lv2 headers
openFrameworks | libsndfile missing | libsndfile missing
openboard | ffmpeg conflict | ffmpeg conflict
odin2 | OK | -m64  flag
obxd | OK | -m64 flag
non-daw-lv2 | lv2 headers | lv2 headers
noise-repellent-lv2 | lv2 headers | lv2 headers
mx44 | OK | assembly language
moony.lv2 | lv2 headers | lv2 headers
monique-monosynth | std header pb | std header pb
mod-ui | lv2 headers | lv2 headers
mod-pitchshifter | lv2 headers | lv2 headers
mod-host | lv2 headers | lv2 headers
mod-gxpitchshifter | lv2 headers | lv2 headers
mod-distortion | lv2 headers | lv2 headers
midi-monitor | std header pb | std header pb
midi_matrix.lv2 | lv2 headers | lv2 headers
mda-lv2 | lv2 headers | lv2 headers
mclk.lv2 | lv2 headers | lv2 headers
matrixmixer.lv2 | lv2 headers | lv2 headers
mapmap | libsndfile missing | libsndfile missing
mammut | OK | -msse2 flag
lv2-triceratops | lv2 headers | lv2 headers
lv2-screcord-plugin | lv2 headers | lv2 headers
lv2-polylv2 } lv2 headers | lv2 headers
lv2-mrfreeze | lv2 headers | lv2 headers
lv2-metaltone | lv2 headers | lv2 headers
lv2lint | lv2 headers | lv2 headers
lv2-kn0ck0ut | lv2 headers | lv2 headers
lv2-harmonizer | lv2 headers | lv2 headers
lv2-GxReverseDelay | lv2 headers | lv2 headers
lv2-gxmrfreeze | lv2 headers | lv2 headers
lv2-GxMatchEQ | lv2 headers | lv2 headers
lv2-fil-plugins | lv2 headers | lv2 headers
lv2file | lv2 headers | lv2 headers
lv2-EQ10Q-plugins | lv2 headers | lv2 headers
lv2-collisiondrive | lv2 headers | lv2 headers
lv2-BSlizr | lv2 headers | lv2 headers
lv2-BShapr | lv2 headers | lv2 headers
lv2-BSEQuencer | lv2 headers | lv2 headers
lv2-BSchaffl | lv2 headers | lv2 headers
lv2-BOops | lv2 headers | lv2 headers
lv2-BJumblr | lv2 headers | lv2 headers
lv2-BHarvestr | lv2 headers | lv2 headers
lv2-BChoppr | lv2 headers | lv2 headers
lv2-avw-plugins | lv2 headers | lv2 headers
lv2-avldrums-x42-plugin | lv2 headers | lv2 headers
lv2-artyfx-plugins | lv2 headers | lv2 headers
lsp-plugins | lv2 headers | lv2 headers
lmms-mao | carla problem | carla problem
lives-mao | too few arg for calloc | too few arg for calloc
livecd-tools-mao | OK | files not found
littlefly | lv2 headers | lv2 headers
liquidsfz | lv2 headers | lv2 headers
LinVst | OK | x32 arch
librearp | lv2 headers | lv2 headers
kernel-rt-stable-mao | vmlinux: Unknown error -22make | vmlinux: Unknown error -22make
kernel-rt-mao | vmlinux: Unknown error -22make | vmlinux: Unknown error -22make
jamesdsp | OK | NMCTXREGS undeclared
jacktrip | libsndfile missing | libsndfile missing
improviz | OK | unsupported platform
HISE | OK | intrinsic pb
hexosynth | rust error | rust error
helio-workstation | std header pb | std header pb
harvid | ffmpeg pb | ffmpeg pb
GxPlugins | lv2 headers | lv2 headers
gula | lv2 headers | lv2 headers
guitarmidi | lv2 headers | lv2 headers
glava | libsndfile missing | libsndfile missing
geonkick | lv2 headers | lv2 headers
frequalizer | lv2 headers | lv2 headers
fat1.lv2 | lv2 headers | lv2 headers
eteroj.lv2 | lv2 headers | lv2 headers
element | lv2 headers | lv2 headers
ecasound | format security | format security
dssi-vst | OK | x86 only ?
drumgizmo | lv2 headers | lv2 headers
ChowMatrix | lv2 headers | lv2 headers
Carla-mao | OK | x86 only ?
cardinal | linuxsamper missing | linuxsampler missing
BYOD | lv2 headers | lv2 headers
buzztrax | No rich dependencies | No rich dependencies
brutefir | OK | packaging pb
bipscript | port-smf was missing | portsmf was missing
BespokeSynth | error: invalid use of incomplete type 'PyFrameObject | error: invalid use of incomplete type 'PyFrameObject
beatslash-lv2 | lv2 headers | lv2 headers
BAngr | lv2 headers | lv2 headers
AnalogTapeModel | lv2 headers | lv2 headers
amsynth | lv2 headers | lv2 headers
ams-lv2 | lv2 headers | lv2 headers
alsa-scarlett-gui | format security | OK
aether | error overflow | error overflow
aeolus | OK | file not found in lib64
faust | OK | file not found during packaging
cwiid | OK | -m64 flag
midimsg-lv2 | lv2 headers | lv2 headers
portsmf | la file not found during packaging | la file not found during packaging
lvtk | lv2 headers | lv2 headers
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
surge | OK | configure fails
tap-lv2 | OK | -msse
tsunami | libsndfile missing | libsndfile missing
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
zytrax | libsndfile missing | libsndfile missing
masterme | OK | fqust qudinux is missing

## Todo

For Rack v1: use these patches:
- https://github.com/hexdump0815/vcvrack-dockerbuild-v1

For Rack v2: use these patches:
- https://aur.archlinux.org/packages/vcvrack

Patch linuxampler following. this instructions:
- https://rpc.gehennom.org/2015/06/mellotron-on-the-raspberry-pi/
