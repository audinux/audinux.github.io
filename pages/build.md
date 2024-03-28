![Audinux](../images/AudinuxBanner.png)

## Build

### Tickets

A ticket has been opened for vst3sdk: https://github.com/steinbergmedia/vst3sdk/issues/123

### Fedora 40

A lot of implicit function declarations in C.
vst3 problems due to vst3sdk error.

### Fedora 38

#### Cstdint missing:

```
ddsp-vst - cstdint
drumgizmo - cstdint
EmissionControl2 - cstdint
grandorgue - cstdint
jamesdsp  - cstdint + error: bad date in %changelog: Mon OCt 24 2022 Yann Collette <ycollette.nospam@free.fr> - 2.3-2
ossia-score - cstdint
rack-v1-trowaSoft  - cstdint
rack-v2-SurgeXTRack - cstdint
rack-v2-trowaSoft  - cstdint
seq66  - cstdint
sequencer64- cstdint
sfizz  - (Git Build ID) Error: could not find Git / cstdint
shortcircuit  - cstdint
soundux  - cstdint
spectmorph  - cstdint
stone-phaser  - cstdint
string-machine  - cstdint
surge-xt  - cstdint
tipic  - cstdint
uhhyouplugins  - cstdint
vmpc - cstdint
yabridge  - cstdint
zynayumi  - cstdint
zytrax  - cstdint
tsunami  - error: 'printf' was not declared in this scope
```

#### SIMD:

```
Chameleon - error: xsimd/stl/algorithms.hpp: No such file or directory
princepedal - fatal error: xsimd/stl/algorithms.hpp: No such file or directory
proteus  - fatal error: xsimd/stl/algorithms.hpp: No such file or directory
ts-m1n3  - fatal error: xsimd/stl/algorithms.hpp: No such file or directory
rack-v1-BaconMusic  - fatal error: pmmintrin.h: No such file or directory
rack-v1-JE  -fatal error: pmmintrin.h: No such file or directory
rack-v1-ParableInstruments  - fatal error: pmmintrin.h: No such file or directory
rack-v1-squinkylabs-plug1  - fatal error: pmmintrin.h: No such file or directory
rack-v1-SurgeRack  - fatal error: xmmintrin.h: No such file or directory
```

#### Missing packages:

```
lv2-avw-plugins  - No matching package to install: 'slv2-devel'
miniaudicle  - No matching package to install: 'qscintilla-devel'
opl3bankeditor  - No matching package to install: 'qwt-devel'
opn2bankeditor  -No matching package to install: 'qwt-devel'
polyphone  - No matching package to install: 'qcustomplot-devel'
prelude  - No matching package to install: 'sfizz-devel' - rebusmitted
toccata  - No matching package to install: 'sfizz-devel'
rack-v2-RPJ  - fatal error: emmintrin.h: No such file or directory
```

#### Various other errors:

```
aether  - error: 'memset' offset [0, 3] is out of the bounds [0, 0] [-Werror=array-bounds=]
improviz - ??
inconcert  - error: #error C++ versions less than C++14 are not supported.
loudness-scanner  -  Problem: package libchromaprint-1.5.1-8.fc38.x86_64 requires libavutil.so.58()(64bit), but none of the providers can be 
mamba  - error: no matching function for call to 'std::vector<std::__cxx11::basic_string<char> >::push_back(char [256])'
master_me  - ERROR : -lang cpp not supported since CPP backend is not built
mpk-m2-editor  - Error: The version in the Python package metadata 0.0.0 normalizes to zero.
obxd  -  unrecognized command-line option '-m64'
rack-v2-EH_modules  - ../arch.mk:10: *** Could not determine CPU architecture of aarch64-redhat-linux. Try hacking around in arch.mk.  Stop.
rack-v2-FrankBuss - ../arch.mk:10: *** Could not determine CPU architecture of aarch64-redhat-linux. Try hacking around in arch.mk.  Stop.
rack-v2-SynthKit  - ../arch.mk:10: *** Could not determine CPU architecture of aarch64-redhat-linux. Try hacking around in arch.mk.  Stop.
rivendell  - error: File must begin with "/": %{_unitdir}/*
ryukau  - g++: error: unrecognized command-line option '-mavx512f'
          g++: error: unrecognized command-line option '-mfma'
          g++: error: unrecognized command-line option '-mavx512vl'
          g++: error: unrecognized command-line option '-mavx512bw'
          g++: error: unrecognized command-line option '-mavx512dq'
```


### Fedora 37

#### Global status

Package | x86_64 | aarch64
------- | ------ | -------
protrekkr | OK | narrowing conversion of '-80' from 'int' to 'char' [-Wnarrowing]
protrekkr2 | OK | narrowing conversion of '-80' from 'int' to 'char' [-Wnarrowing]
mammut | OK | #error "AVOIDDENORMALS is not defined"
odin2 | OK | -m64  flag
obxd | OK | -m64 flag

purr-data | config.h not found |  config.h not found
openFrameworks | conflicting declaration | conflicting declarationg
lives-mao | too few arg for calloc | too few arg for calloc
kernel-rt-stable-mao | dwarves problem: vmlinux: Unknown error -22make | dwarves problem: vmlinux: Unknown error -22make
hexosynth | rust error | rust error
buzztrax | No rich dependencies | No rich dependencies
sonic-pi  | ruby version | ruby version
veejay-core | compat-ffmpeg28-devel missing | compat-ffmpeg28-devel missing
veejay-gui | veejay-server and compat-ffmpeg28-devel missing | veejay-server and compat-ffmpeg28-devel missing
veejay-server | compat-ffmpeg28-devel missing | compat-ffmpeg28-devel missing
vsxu | pointer comparison | pointer comparison
zrythm | libpcre missing | libpcre missing
rivendell | OK  gcc cannot create executable
tsunami | OK | cast error

spectmorph | OK | assembler error
mx44 | OK | x86 only
processing | OK | x86 only
LinVst | OK | x86 only
improviz | OK | x86 only
dssi-vst | OK | x86 only
Carla-mao | OK | x86 only
wineasio | OK | x86 only
yabridge | OK | x86 only
aeolus_plugin | OK | x86 only
HISE | OK | x86 only
ryukau | OK | x86 only

#### Rack v1

Package | Not available
rack-v1-CaptainsSounds | util.h not found | util.h not found
rack-v1-STS | repo empty | repo empty
rack-v1-WrongPeople | does not build | does not build
rack-v1-UnforgettableLuncheon | not available on VCV Rack 1 anymore
rack-v1-SubmarineUtility | not available on VCV Rack 1 anymore
rack-v1-Southpole-parasites | not available on VCV Rack 1 anymore
rack-v1-SerialRacker | not available on VCV Rack 1 anymore
rack-v1-RODENTMODULES | not available on VCV Rack 1 anymore
rack-v1-Quadraphonics | not available on VCV Rack 1 anymore
rack-v1-PvC | not available on VCV Rack 1 anymore
rack-v1-PG-Instruments | not available on VCV Rack 1 anymore
rack-v1-NauModular | not available on VCV Rack 1 anymore
rack-v1-mtsch-plugins | not available on VCV Rack 1 anymore
rack-v1-Gratrix | not available on VCV Rack 1 anymore
rack-v1-com-soundchasing-stochasm | not available on VCV Rack 1 anymore
rack-v1-BOKONTEPByteBeatMachine | not available on VCV Rack 1 anymore
rack-v1-BeckstromResearch | not available on VCV Rack 1 anymore
rack-v1-arjo_modules | not available on VCV Rack 1 anymore
rack-v1-aP-Modules | not available on VCV Rack 1 anymore
rack-v1-SunsetSignals | OK | arch.mk pb
rack-v1-squinkylabs-plug1 | OK | intrinsic pb

Source problem:
```
date incorrecte dans %changelog : Thu Nov 03 2020 Yann Collette <ycollette.nospam@free.fr> - 1.4.0-3
rack-v1-sfjack-0.6.8-1.fc36.src.rpm

BaconPlugs.tar.gz -> doesn"t build
Erratic.tar.gz -> 0.6
VCVRack-plugin-JE.tar.gz -> 0.6
rack-v1-squinkylabs-plug1-6bb6d1a.tar.gz -> repo not available / check v2
rack-v1-SunsetSignals-2f3a991.tar.gz  -> repo not available / check v2
rack-v1-TheXOR-168a32e.tar.gz -> repo disappeared
```

#### Rack v2

Package | Not available
rack-v2-WrongPeople | v1 only
rack-v2-SubmarineUtility | v1 only
rack-v2-SubmarineFree | v1 only
rack-v2-StudioSixPlusOne | v1 only
rack-v2-VO | Not available on VCV Rack 2 anymore
rack-v2-UnforgettableLuncheon | Not available on VCV Rack 2 anymore
rack-v2-Stoermelder-P1 | Not available on VCV Rack 2 anymore 
rack-v2-Southpole-parasites | Not available on VCV Rack 2 anymore
rack-v2-SerialRacker | Not available on VCV Rack 2 anymore
rack-v2-RODENTMODULES | Not available on VCV Rack 2 anymore
rack-v2-RJModules | Not available on VCV Rack 2 anymore 
rack-v2-ReTunesFree | Not available on VCV Rack 2 anymore
rack-v2-RacketScience | Not available on VCV Rack 2 anymore
rack-v2-PvC | Not available on VCV Rack 2 anymore
rack-v2-PG-Instruments | Not available on VCV Rack 2 anymore
rack-v2-NauModular | Not available on VCV Rack 2 anymore
rack-v2-MyLittleTools | Not available on VCV Rack 2 anymore
rack-v2-mtsch-plugins | Not available on VCV Rack 2 anymore
rack-v2-mscHack | Not available on VCV Rack 2 anymore
rack-v2-MpSeries | Not available on VCV Rack 2 anymore
rack-v2-Mog | Not available on VCV Rack 2 anymore
rack-v2-ModularFungi | Not available on VCV Rack 2 anymore
rack-v2-NocturnalEncoder | Not available on VCV Rack 2 anymore
rack-v2-luckyxxl | Not available on VCV Rack 2 anymore
rack-v2-Koralfx-Modules | Not available on VCV Rack 2 anymore
rack-v2-ILovePerlin | Not available on VCV Rack 2 anymore
rack-v2-Gratrix | Not available on VCV Rack 2 anymore
rack-v2-forsitan | Not available on VCV Rack 2 anymore
rack-v2-DelexanderVol1 | Not available on VCV Rack 2 anymore
rack-v2-BeckstromResearch | Not available on VCV Rack 2 anymore
rack-v2-AuntyLangtonsFree | Not available on VCV Rack 2 anymore
rack-v2-arjo_modules | Not available on VCV Rack 2 anymore
rack-v2-AriaSalvatrice | Not available on VCV Rack 2 anymore
rack-v2-aP-Modules | Not available on VCV Rack 2 anymore
rack-v2-23volts | Not available on VCV Rack 2 anymore

Source problem:
```
Erratic.tar.gz -> 0.6 only
VCVRack-plugin-JE.tar.gz -> 0.6 only
modular80.tar.gz -> 0.6 only
rack-v1-s-ol-17f7b13.tar.gz -> 0.6 only
southpole-vcvrack.tar.gz -> 0.6 only
surge-rack.tar.gz -> build problem
rack-v1-TheXOR-168a32e.tar.gz -> Source disappeared

rack-v2-EH_modules-53c958c.tar.gz
rack-v2-FrankBuss-5074123.tar.gz
synthkit.tar.gz
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

## List of broken packages

spectmorph
odin2
mammut
protrekkr
protrekkr2
rack-v1-DelexanderVol1
rack-v1-SurgeRack
rack-v1-WrongPeople
rack-v1-STS
rack-v1-CaptainsSounds
rack-v1-squinkylabs-plug1
rack-v1-ParableInstruments
rack-v1-JE
rack-v1-BaconMusic
rack-v2-SynthKit
rack-v2-FrankBuss
rack-v2-EH_modules
rack-v2-SubmarineFree
rack-v2-ChowDSP
rivendell
openFrameworks
tsunami
kernel-rt-stable-mao
zrythm
vsxu
veejay-core
veejay-server
veejay-gui
sonic-pi
purr-data
processing
obxd
mx44
improviz
HISE
hexosynth
buzztrax
lives-mao
yabridge
wineasio
LinVst
