![Audinux](../images/AudinuxBanner.png)

## Build

### Tickets

A ticket has been opened for vst3sdk: https://github.com/steinbergmedia/vst3sdk/issues/123

### Fedora 42

Packages to fix:
* tunefish 
* infernal-synth -> linux not supported 
* gtk-wave-cleaner -> ticket opened - problems with prototypes. Needs a patch.
* rt-tests - ticket opened
* kernel-rt-mao -> standard kernel has real time capabilities
* veejay-core -> waiting for a new release
* camomile -> ticket
* vmpc -> ticket
* jamesdsp -> wrong variable in function -> disabling the package

Missing packages:
* BambooTracker
* BatLib
* ChowCentaur
* ChowPhaser
* FoxDot
* FoxDotQuark
* IanniX
* LinVst3
* abNinjam
* backupband
* bintracker
* buzztrax
* clap-plugins
* fluxus
* fodpad-port
* fugio
* hybridreverb2
* imogen
* improviz
* jack_delay
* jack_utils
* jackass
* juceopl
* kernel-rt-stable-mao
* klystrack
* komposter
* kpp
* ladspa-t5-plugins
* lomse
* loopidity
* lv2-BSpacr
* lv2-dexed-presets
* midi2voice
* mod-dm-graindelay
* musikernel2
* nanoinvaders
* onetrick-bboi
* peaksynth-audio-plugin
* performer
* purr-data
* python%{pybasever}
* rack-v1-BOKONTEPByteBeatMachine
* rack-v1-BaconMusic
* rack-v1-BeckstromResearch
* rack-v1-CaptainsSounds
* rack-v1-ErraticInstruments
* rack-v1-Gratrix
* rack-v1-NauModular
* rack-v1-PG-Instruments
* rack-v1-PvC
* rack-v1-Quadraphonics
* rack-v1-RODENTMODULES
* rack-v1-SLUGNAME
* rack-v1-STS
* rack-v1-SerialRacker
* rack-v1-Southpole-parasites
* rack-v1-SubmarineUtility
* rack-v1-SunsetSignals
* rack-v1-TheXOR
* rack-v1-UnforgettableLuncheon
* rack-v1-VCV-Prototype
* rack-v1-aP-Modules
* rack-v1-arjo_modules
* rack-v1-com-soundchasing-stochasm
* rack-v1-mtsch-plugins
* rack-v2-23volts
* rack-v2-AriaSalvatrice
* rack-v2-BOKONTEPByteBeatMachine
* rack-v2-BeckstromResearch
* rack-v2-CaptainsSounds
* rack-v2-ChowDSP
* rack-v2-DelexanderVol1
* rack-v2-ErraticInstruments
* rack-v2-Gratrix
* rack-v2-ILovePerlin
* rack-v2-Koralfx-Modules
* rack-v2-ModularFungi
* rack-v2-Mog
* rack-v2-MpSeries
* rack-v2-MyLittleTools
* rack-v2-NauModular
* rack-v2-OuroborosModules
* rack-v2-PG-Instruments
* rack-v2-ParableInstruments
* rack-v2-PvC
* rack-v2-RJModules
* rack-v2-RODENTMODULES
* rack-v2-RPJVisualizer
* rack-v2-RacketScience
* rack-v2-ReTunesFree
* rack-v2-SLUGNAME
* rack-v2-SerialRacker
* rack-v2-Southpole
* rack-v2-Southpole-parasites
* rack-v2-SubmarineFree
* rack-v2-SubmarineUtility
* rack-v2-SurgeRack
* rack-v2-TheXOR
* rack-v2-UnforgettableLuncheon
* rack-v2-WrongPeople
* rack-v2-aP-Modules
* rack-v2-arjo_modules
* rack-v2-com-soundchasing-stochasm
* rack-v2-luckyxxl
* rack-v2-monome
* rack-v2-mscHack
* rack-v2-mtsch-plugins
* rack-v2-pachde-one
* redkite
* rtcqs
* samplebrain
* shoopdaloop
* shortcircuit
* slv2
* sonic-pi
* soundux
* veejay-gui
* veejay-server
* virtualanalog
* vswell
* vsxu
* zrythm

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

