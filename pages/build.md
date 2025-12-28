![Audinux](../images/AudinuxBanner.png)

## Build

### Tickets

### Fedora 43

Packages to fix:
* tunefish 
* infernal-synth -> linux not supported 
* gtk-wave-cleaner -> ticket opened - problems with prototypes. Needs a patch.
* rt-tests - ticket opened
* kernel-rt-mao -> standard kernel has real time capabilities
* veejay-core -> waiting for a new release
* veejay-gui -> waiting for a new release
* veejay-server -> waiting for a new release
* camomile -> ticket
* vmpc -> ticket
* jamesdsp -> wrong variable in function -> disabling the package
* imogen -> to deactivate - abandonned
* redkite -> to deactivate
* vsxu -> to deactivate - abandonned
* zrythm -> to deactivate - waiting for 2.0
* kernel-rt-stable-mao -> to deactivate
* purr-data -> to deactivate
* lomse -> to deactivate - included in lenmus
* sonic-pi -> to deactivate - still doesn't work on Fedora
* lv2-dexed-presets -> WIP
* rack-v1-BOKONTEPByteBeatMachine -> to deactivate - doesn't build anymore - 0.6 only maybe
* rack-v1-BaconMusic -> to deactivate - doesn't build anymore - 0.6 only maybe
* rack-v1-BeckstromResearch -> to deactivate - doesn't build anymore - 0.6 only maybe
* rack-v1-CaptainsSounds -> to deactivate - doesn't build anymore - 0.6 only maybe
* rack-v1-ErraticInstruments -> to deactivate - doesn't build anymore - 0.6 only maybe
* rack-v1-Gratrix -> to deactivate - doesn't build anymore - 0.6 only maybe
* rack-v1-NauModular -> to deactivate - doesn't build anymore - 0.6 only maybe
* rack-v1-PG-Instruments -> to deactivate - doesn't build anymore - 0.6 only maybe
* rack-v1-PvC -> to deactivate - doesn't build anymore - 0.6 only maybe
* rack-v1-Quadraphonics -> to deactivate - doesn't build anymore - 0.6 only maybe
* rack-v1-RODENTMODULES -> to deactivate - doesn't build anymore - 0.6 only maybe
* rack-v1-STS -> to deactivate - doesn't build anymore - 0.6 only maybe
* rack-v1-SerialRacker -> to deactivate - doesn't build anymore - 0.6 only maybe
* rack-v1-Southpole-parasites -> to deactivate - doesn't build anymore - 0.6 only maybe
* rack-v1-SubmarineUtility -> to deactivate - doesn't build anymore - 0.6 only maybe
* rack-v1-SunsetSignals -> to deactivate - doesn't build anymore - 0.6 only maybe
* rack-v1-TheXOR -> to deactivate - doesn't build anymore - 0.6 only maybe
* rack-v1-UnforgettableLuncheon -> to deactivate - doesn't build anymore - 0.6 only maybe
* rack-v1-VCV-Prototype - LUAJIT not found via wget -> to deactivate - doesn't build anymore - 0.6 only maybe
* rack-v1-aP-Modules -> to deactivate - doesn't build anymore - 0.6 only maybe
* rack-v1-arjo_modules -> to deactivate - doesn't build anymore - 0.6 only maybe
* rack-v1-com-soundchasing-stochasm -> to deactivate - doesn't build anymore - 0.6 only maybe
* rack-v1-mtsch-plugins -> to deactivate - doesn't build anymore - 0.6 only maybe
* rack-v2-23volts -> to deactivate - doesn't build anymore 
* rack-v2-AriaSalvatrice -> to deactivate - doesn't build anymore 
* rack-v2-BOKONTEPByteBeatMachine -> to deactivate - doesn't build anymore 
* rack-v2-BeckstromResearch -> to deactivate - doesn't build anymore 
* rack-v2-CaptainsSounds -> to deactivate - doesn't build anymore 
* rack-v2-ChowDSP -> to deactivate - doesn't build anymore 
* rack-v2-DelexanderVol1 -> to deactivate - doesn't build anymore 
* rack-v2-ErraticInstruments -> to deactivate - doesn't build anymore 
* rack-v2-Gratrix -> to deactivate - doesn't build anymore 
* rack-v2-ILovePerlin -> to deactivate - doesn't build anymore 
* rack-v2-Koralfx-Modules -> to deactivate - doesn't build anymore 
* rack-v2-ModularFungi -> to deactivate - doesn't build anymore 
* rack-v2-Mog -> to deactivate - doesn't build anymore 
* rack-v2-MpSeries -> to deactivate - doesn't build anymore 
* rack-v2-MyLittleTools -> to deactivate - doesn't build anymore 
* rack-v2-NauModular -> to deactivate - doesn't build anymore 
* rack-v2-OuroborosModules -> to deactivate - doesn't build anymore 
* rack-v2-PG-Instruments -> to deactivate - doesn't build anymore 
* rack-v2-ParableInstruments -> to deactivate - doesn't build anymore 
* rack-v2-PvC -> to deactivate - doesn't build anymore 
* rack-v2-RJModules -> to deactivate - doesn't build anymore 
* rack-v2-RODENTMODULES -> to deactivate - doesn't build anymore 
* rack-v2-RPJVisualizer - projectM missing -> to deactivate - doesn't build anymore 
* rack-v2-RacketScience -> to deactivate - doesn't build anymore 
* rack-v2-ReTunesFree -> to deactivate - doesn't build anymore 
* rack-v2-SerialRacker -> to deactivate - doesn't build anymore 
* rack-v2-Southpole -> to deactivate - doesn't build anymore 
* rack-v2-Southpole-parasites -> to deactivate - doesn't build anymore 
* rack-v2-SubmarineFree -> to deactivate - doesn't build anymore 
* rack-v2-SubmarineUtility -> to deactivate - doesn't build anymore 
* rack-v2-TheXOR - no more sources -> to deactivate - doesn't build anymore 
* rack-v2-UnforgettableLuncheon -> to deactivate - doesn't build anymore 
* rack-v2-WrongPeople -> to deactivate - doesn't build anymore 
* rack-v2-aP-Modules -> to deactivate - doesn't build anymore 
* rack-v2-arjo_modules -> to deactivate - doesn't build anymore 
* rack-v2-com-soundchasing-stochasm -> to deactivate - doesn't build anymore 
* rack-v2-luckyxxl -> to deactivate - doesn't build anymore 
* rack-v2-mscHack -> to deactivate - doesn't build anymore 
* rack-v2-mtsch-plugins -> to deactivate - doesn't build anymore 
* clap-plugins -> ticket opened
* fodpad-port -> to deactivate - doesn't build
* abNinjam -> broken build
* mod-dm-graindelay -> dm-graindelay
* improviz -> deprecated
* fluxus -> racket3m not found
* fugio -> a submodule is not available anymore
* lv2-BSpacr -> was a 1st april joke
* performer -> does not build anymore
* shoopdaloop -> use rust but needs a zita-resampler-config.cmake 
* musikernel2 -> source code not available anymore
* virtualanalog -> replaced by wavetable
* soundux -> doesn't build anymore
* LinVst3 -> ticket opened

WIP:
* backupband
* bintracker
* shortcircuit
* rtcqs
* midi2voice

To fix:
* rack-v2-monome
* peaksynth-audio-plugin
* buzztrax -> gstreamer bug during build

## Todo

For Rack v1: use these patches:
- https://github.com/hexdump0815/vcvrack-dockerbuild-v1

For Rack v2: use these patches:
- https://aur.archlinux.org/packages/vcvrack

Patch linuxampler following. this instructions:
- https://rpc.gehennom.org/2015/06/mellotron-on-the-raspberry-pi/

Porting intrinsics to ARM using simde:
- https://wiki.debian.org/SIMDEverywhere

