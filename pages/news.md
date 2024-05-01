![Audinux](../images/AudinuxBanner.png)

## News

Since Fedora 35, the repository is called Audinux (due to a conflict with the website linuxmao.org).

I will stop building the RT kernel 5.15 because it has too many problems with audio (the USB Audio driver seems to have a lot of problems and doesn't play well with pipewire).

Build of Fedora 40 and Rawhide version is not over (4 days of rebuild). Now it's time to fix the broken packages.

* packages to fix for Fedora 40
  * cardinal -> gcc segfault on arm64
  * surge-xt - arm64 -> compiler segfault
  * dssi-vst
  * linvst -> 32 bits packages pb
  * yabridge -> wineg++ pb
  * mscore-mao
  * lv2-loop192
  * bipescript-ide -> conversion error on f40 / rawhide
  * vmpc -> error: assignment of read-only member
  * soundux -> convertion error
  * shortcircuit -> distutils missing - python 3.12
  * seq192 -> rawhide - conversion error
  * rack-v2-monome -> -Wincompatible-pointer-types
  * performer -> moc_performer.cpp:198:21: error: â€˜class Performerâ€™ has no member named â€˜loadHelpâ€™
  * peaksynth-audio-plugin -> error: juce_audio_basics/juce_audio_basics.h: No such file or directory
  * mapmap -> src/control/OscInterface.cpp:54:25: error: invalid conversion (rawhide only)
  * loop192 -> error: invalid conversion
  * glava -> is triggering the generation of an executable stack (because it has an executable .note.GNU-stack section) - rawhide only
  * lives-mao -> libunicap-devel missing on rawhide

### News for may 2024

* new packages
  * ratatouille 0.2-1
  * multimeter 1.0.0-1
  * sfxr-qt 1.5.0-1
  * thekissofshame 1.0.0-1
  * mxtune 1.2.0-1
  * bridgelite 1.0.5-1

* updated packages
  * tascar 0.232.1-1
  * firefly-synth 1.7.4-1
  * audibleplanets 1.0.20-1
  * grandorgue 3.14.2.1-7
  * valentine 1.0.1-1
  * schismtracker 20240426-2
  * js80p 2.9.0-1
  * ykchorus 0.2.4-1
  * rack-v2-SurgeXTRack 2.2.3.0-2
  * xjadeo 0.8.14-5
  * rivendell 4.2.1-1
  * vst3sdk 3.7.11-1
  * jamesdsp 2.7.3-2
  * protracker2 1.69.2-4
  * rack-v2-Stoermelder-P1 2.0.beta4-2
  * rack-v2-SIM 2.1.0-2
  * rack-v2-SickoCV 2.6.9-2
  * rack-v2-PS-PurrSoftware 2.0.34-2
  * rack-v2-CVfunk 2.0.3-2
  * rack-v2-Befaco 2.7.0-2
  * ossia-score 3.1.14-1
  * gtk-wave-cleaner 0.22.06-1
  * cardinal 24.04-2
  * kernel-rt-stable-mao 5.10.215.rt107-12
  * miniaudicle 1.5.2.4-2
  * chuck 1.5.2.4-2
  * Rack-v2 2.5.1-4
  * rack-v2-VCV-Recorder 2.0.2-3
  * lmms-mao-weekly 1.2.99-12
  * JUCE 7.0.12-10
  * saugns 0.4.4b-1
  * konfyt 1.6.1-3
  * amsynth 1.13.3-3
  * openav-luppp 1.1-11
  * receivemidi 1.4.2-3
  * sendmidi 1.3.1-3
  * jamin 0.98.9-2
  * qtractor-mao 0.9.90-2
  * drmr 1.0.0.2879121-3
  * padthv1 0.9.90-4
  * drumrox-kits 0.0.1-2
  * fasttracker2 1.81-3
  * kernel-rt-mao 6.6.25.rt29-13
  * rack-v2-Sparkette 2.6.0-2
  * rack-v2-MUS-X 2.0.2-2
  * rack-v2-Biset 2.0.12-2
  * seq42 2.1.4-1
  * drumlabooh 2.4.0-1
  * drumrox 3.3.0-1
  * tuxguitar 1.6.2-10
  * splash 0.10.10-1
  * faust 2.72.14-37
  * faustlive 2.5.18-1
  * furnace 0.6.2-4

### News for march 2024

* new packages
  * onetrick-keys 1.0.0-1
  * onetrick-urchin 1.0.0-1
  * onetrick-cryptid 1.0.1-1
  * eko 7.1.0-1

* updated packages
  * rack-v2-Venom 2.7.0-2
  * rack-v2-Sparkette 2.5.0-2
  * rack-v2-SmarTAZZStudio-Free 2.1.0-2
  * rack-v2-SickoCV 2.6.8-2
  * rack-v2-MockbaModular 2.0.1-2
  * rack-v2-ImpromptuModular 2.4.3-2
  * rack-v2-Geodesics 2.3.2-2
  * rack-v2-eightfold 2.0.0-2
  * rack-v2-CosineKitty-Sapphire 2.4.3-2
  * rack-v2-dbRackSequencer 2.4.0-2
  * rack-v2-CVfunk 2.0.1-2
  * rack-v2-Biset 2.0.11-2
  * rack-v2-Befaco2.5.0-2
  * grandorgue 3.14.1.0-7
  * firefly-synth 1.6.0-1
  * bipscript-ide 0.20-1
  * bipscript 0.20-1
  * jacktrip 2.2.5-2
  * JUCE 7.0.11-10
  * premake5 5.0.0beta2-1
  * audibleplanets 1.0.4-1
  * projectM-mao 4.1.1-15
  * mamba 2.6-4
  * qlcplus 4.13.0-1
  * tascar 0.231.0-1
  * lmms-mao-weekly 1.2.99-11
  * kernel-rt-mao 6.6.22.rt27-13
  * kernel-rt-stable-mao 5.10.212.rt104-12
  * audiogridder 1.2.0-1
  * miniaudicle 1.5.2.2-2
  * chuck 1.5.2.2-2
  * protracker2 1.67-4
  * fasttracker2 1.79.2-3
  * fogpad 1.0.3-1 
  * BYOD 1.3.0-1
  * rakarrack-plus 1.2.5-2
  * non-mixer-xt 1.3.2-1
  * neothesia 0.2.1-1
  * vst3-guitarix 0.3-1
  * drumlabooh 2.3.0-1
  * schismtracker 20240308-2

### News for february 2024

* new packages:
  * qlcplus
  * lv2-neural-amp-modeler-ui
  * ImpulseLoaderStereo
  * xruncounter
  * line
  * ImpulseLoaderStereo
  * kickmess
  * ImpulseLoader

* updated packages:
  * projectM-mao
  * vaporizer2
  * rack-v2
  * aeolus_plugin
  * kernel-xan-mao
  * kernel-lqx-mao
  * kernel-rt-mao
  * vst3-guitarix
  * fasttracker2
  * lmms-mao-weekly
  * stochas
  * protrekkr2
  * jack-link
  * hvcc
  * equis
  * mandelbulber2
  * leiningen
  * JUCE
  * xjadeo
  * prototracker-modular
  * cabbage
  * infernal-synth
  * clap-info
  * jacktrip
  * non-mixer-xt
  * hexosynth
  * surge-xt
  * splash
  * ossia-score
  * furnace
  * tuxguitar
  * sparta
  * grainbow
  * aida-x

### News for january 2024

* new packages:
  * firefly-synth
  * sg-323
  * wstd-smthr
  * wstd-manglr
  * wstd-m3nglr
  * wstd-fldr
  * wstd-flangr
  * wstd-fl3ngr
  * wstd-eq
  * wstd-dlay
  * wstd-dl3y
  * wstd-crshr
  * wstd-3q
  * minaton-xt
  * roboverb
  * octasine
  * clap-info
  * clap-validator
  * seq192

* updated packages:
  * non-mixer-xt
  * rack-v2-SickoCV
  * jack-link
  * grainbow
  * kernel-rt-mao
  * kernel-lqx-mao
  * kernel-xan-mao
  * puredata
  * jacktrip
  * schismtracker
  * vmpc
  * sparta
  * stargate
  * leiningen
  * qtractor-mao
  * geonkick
  * non-daw
  * padthv1
  * mscore-mao
  * rivendell
  * drumlabooh
  * hvcc
  * wavetable
  * JUCE
  * vocoder
  * din
  * clap
  * jc303
  * protracker2
  * stargate
  * elektroid
  * Carla-mao
  * miniaudicle
  * chuck
  * plugdata
  * airwindows
  * sfizz-ui
  * sfizz
  * konfyt
  * neothesia
  * seq66
  * hydrogen
  * fluida
  * grandorgue
  * fasttracker2
  * splash
  * jjazzlab
  * faustlive
  * faust
  * lives-mao
  * xuidesigner
  * lv2-MelMatchEQ

### Past news

* [2023](news-2023.md)
* [2022](news-2022.md)
* [2021](news-2021.md)
