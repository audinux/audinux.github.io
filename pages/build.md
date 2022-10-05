![Audinux](../images/AudinuxBanner.png)

## Build

### Tickets

For this release, 2 tickets have been opened:
- https://bugzilla.redhat.com/show_bug.cgi?id=2128041 - libsndfile problem (fixed)
- https://bugzilla.redhat.com/show_bug.cgi?id=2127286 - lv2 headers problem (fixed)

### Fedora 37

#### Global status

Package | x86_64 | aarch64
------- | ------ | -------
sisco.lv2 | OK | -msse
shuriken | OK | arch unknow during configure
shortcircuit | format-security | format-security
shiro | OK | -msse flags
sequencer64 | sched_yield not declared | sched_yield not declared
ryukau | undefined ref to DGL::Rectangle | undefined ref to DGL::Rectangle
rkrlv2 | OK | -msse 
Rack-v1 | OK | Intrinsic problem
Rack-v2 | OK | Intrinsic problem
rivendell | OK  gcc cannot create executable
qsampler | linuxsampler dep not built | linuxsampler dep not built
purr-data | config.h not found |  config.h not found
puredata | OK | patch pb
protrekkr | OK | -m64 flag
processing | OK | invalid platform
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
LinVst | OK | x32 arch
kernel-rt-stable-mao | vmlinux: Unknown error -22make | vmlinux: Unknown error -22make
jamesdsp | OK | NMCTXREGS undeclared
improviz | OK | unsupported platform
HISE | OK | intrinsic pb
hexosynth | rust error | rust error
helio-workstation | std header pb | std header pb
harvid | ffmpeg pb | ffmpeg pb
frequalizer | JUCE5 | JUCE5
fat1.lv2 | OK | -msse
ecasound | format security | format security
dssi-vst | OK | x86 only ?
Carla-mao | OK | x86 only ?
cardinal | linuxsamper missing | linuxsampler missing
buzztrax | No rich dependencies | No rich dependencies
brutefir | OK | packaging pb
bipscript | port-smf was missing | portsmf was missing
BespokeSynth | error: invalid use of incomplete type 'PyFrameObject | error: invalid use of incomplete type 'PyFrameObject
ams-lv2 | OK | -msse
alsa-scarlett-gui | format security | OK
aether | error overflow | error overflow
aeolus | OK | file not found in lib64
cwiid | OK | -m64 flag
portsmf | la file not found during packaging | la file not found during packaging
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

#### Rack v1

Package | x86_64 | aarch64
------- | ------ | -------
rack-v1-WrongPeople | lua.hpp not found | lua.hpp not found
rack-v1-Valley | OK | pmmintrin.h not found
rack-v1-UnforgettableLuncheon | source problem | source problem
rack-v1-SynthKit | arptest/build.mk not found | arptest/build.mk not found 
rack-v1-SubmarineUtility | source problem | source problem
rack-v1-STS | downloaded sources corrupted | downloaded sources corrupted
rack-v1-stocaudio | libsamplerate download | libsamplerate download
rack-v1-Starling_Via | gateseq.hpp not found | gateseq.hpp not found
rack-v1-Southpole-parasites | source problem | source problem
rack-v1-SerialRacker | source problem | source problem
rack-v1-RODENTMODULES | source problem | source problem
rack-v1-Quadraphonics | source problem | source problem
rack-v1-PvC | source problem | source problem
rack-v1-PG-Instruments | source problem | source problem
rack-v1-NauModular | source problem | source problem
rack-v1-mtsch-plugins | source problem | source problem
rack-v1-Gratrix | source problem | source problem
rack-v1-com-soundchasing-stochasm | source problem | source problem
rack-v1-CaptainsSounds | util.h not found | util.h not found
rack-v1-BOKONTEPByteBeatMachine | source problem | source problem
rack-v1-BeckstromResearch | source problem | source problem
rack-v1-Bark | OK | xmmintrin.h not found
rack-v1-arjo_modules | source problem | source problem
rack-v1-AriaSalvatrice | QuickJS/quickjs.h not found | QuickJS/quickjs.h not found
rack-v1-aP-Modules | source problem | source problem


#### Rack v2

Package | x86_64 | aarch64
------- | ------ | -------
rack-v2-VO | source version | source version
rack-v2-Valley | OK | pmmintrin.h
rack-v2-UnforgettableLuncheon | source version | source version
rack-v2-trowaSoft | window.hpp missing | window.hpp missing
rack-v2-SubmarineUtility | window.hpp missing | window.hpp missing
rack-v2-SubmarineFree | format securiry | format security
rack-v2-StudioSixPlusOne | simd/vector.hpp missing | simd/vector.hpp missing
rack-v2-Stoermelder-P1 | source version | source version 
rack-v2-WrongPeople | CFLAGS problem | CFLAGS problem
rack-v2-Southpole-parasites | source problem | source problem
rack-v2-SerialRacker | source problem | source problem
rack-v2-RPJ | OK | emmintrin.h
rack-v2-RODENTMODULES | source problem | source problem
rack-v2-RJModules | source problem | source problem 
rack-v2-ReTunesFree | source problem | source problem
rack-v2-RebelTech | pmmintrin.h | pmmintrin.h
rack-v2-RacketScience | source problem | source problem
rack-v2-PvC | source problem | source problem
rack-v2-PG-Instruments | source problem | source problem
rack-v2-NauModular | source problem | source problem
rack-v2-MyLittleTools | source problem | source problem
rack-v2-mtsch-plugins | source problem | source problem
rack-v2-mscHack | source problem | source problem
rack-v2-MpSeries | source problem | source problem
rack-v2-Mog | source problem | source problem
rack-v2-ModularFungi | source problem | source problem
rack-v2-NocturnalEncoder | source problem | source problem
rack-v2-luckyxxl | source problem | source problem
rack-v2-Koralfx-Modules | source problem | source problem
rack-v2-ILovePerlin | source problem | source problem
rack-v2-HetrickCV | Gamma/Domain.h not found | Gamma/Domain.h not found
rack-v2-Gratrix | source problem | source problem
rack-v2-FreeSurface | libsamplerate download | libsamplerate download
rack-v2-forsitan | source problem | source problem
rack-v2-DelexanderVol1 | source problem | source problem
rack-v2-BeckstromResearch | source problem | source problem
rack-v2-Bark | OK | xmmintrin.h
rack-v2-BaconMusic | MidiFile.h not found | MidiFile.h not found
rack-v2-AuntyLangtonsFree | source problem | source problem
rack-v2-arjo_modules | source problem | source problem
rack-v2-AriaSalvatrice | source problem | source problem
rack-v2-aP-Modules | source problem | source problem
rack-v2-23volts | source problem | source problem
rack-v2-squinkylabs-plug1 | OK | emmintrin.h not found

## Todo

For Rack v1: use these patches:
- https://github.com/hexdump0815/vcvrack-dockerbuild-v1

For Rack v2: use these patches:
- https://aur.archlinux.org/packages/vcvrack

Patch linuxampler following. this instructions:
- https://rpc.gehennom.org/2015/06/mellotron-on-the-raspberry-pi/
- Patch applies but HAVE_SMP problem
