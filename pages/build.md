![Audinux](../images/AudinuxBanner.png)

## Build

### Tickets

A ticket has been opened for vst3sdk: https://github.com/steinbergmedia/vst3sdk/issues/123

### Fedora 42

Repository has been built for Fedora 42 Beta. Still some packages to be fixed.

Packages to fix:
* BYOD
* Cadence
* ChowKick
* HISE
* actuate
* bipscript
* bipscript-ide
* bristol
* cabbage
* camomile
* chaffverb
* chordv
* common-music
* cstop
* cyclone
* ddsp
* element
* emissioncontrol2
* ensemble-chorus
* faustlive
* gearmulator
* geonkick
* grainbow
* gtick
* gtk-wave-cleaner
* hexter-dssi
* inconcert
* infernal-synth
* jamesdsp
* june21
* kernel-rt-mao
* kickmess
* konfyt
* lenmus
* lv2-mephisto
* lv2-neural-amp-modeler-ui
* lv2-toobamp-plugins
* lvtk
* maim
* mammut
* midilooper
* nam-juce
* padthv1
* paulxstretch
* pipecontrol
* princepedal
* proteus
* protrekkr
* python2.7
* python3-soundfile
* rack-v1-KRTPluginA
* rack-v1-RJModules
* rack-v1-SurgeRack
* rack-v1-squinkylabs-plug1
* remid
* rt-tests
* smartamp
* tsunami
* tunefish
* veejay-core
* vmpc
* wild-blossom-plugins
* wstd-3q
* wstd-crshr
* wstd-dl3y
* wstd-dlay
* wstd-eq
* wstd-fl3ngr
* wstd-flangr
* wstd-fldr
* wstd-m3nglr
* wstd-manglr
* wstd-smthr

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

