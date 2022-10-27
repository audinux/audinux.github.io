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
