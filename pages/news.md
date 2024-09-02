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


### News for august 2024

* new packages
  * delirion 0.0.1-1
  * gearmulator 0.0.1-1

* updated packages
  * HISE 3.6.2-2
  * aeolus_plugin 0.2.1-3
  * airwindows 0.0.1-88
  * audibleplanets 1.1.5-1
  * caps-lv2 0.9.26.250844a-1
  * chaffverb 0.2.3-1
  * cmajor 1.0.2616-1
  * common-music 3.10.2-3
  * deteriorate-lv2 1.0.7-2
  * dm-graindelay 0.0.1-2
  * drumlabooh 4.0.0-1
  * drumrox-kits 0.0.1-5
  * enscribe 0.1.0-1
  * ensemble-chorus 0.0.1-2
  * fasttracker2 1.85-3
  * fatfrog 1.0.0-1
  * firefly-synth 1.9.0-1
  * furnace 0.6.7-4
  * grandorgue 3.15.0.1-7
  * jconvolver-reverbs 0.8.7-1
  * js80p 3.1.3-1
  * kernel-rt-mao 6.6.48.rt40-13
  * kernel-rt-stable-mao 5.10.223.rt115-12
  * lebiniou 3.67.0-3
  * lebiniou-data 3.67.0-5
  * lmms-mao-weekly 1.2.99-15
  * lsp-plugins 1.2.17-1
  * lv2-neural-amp-modeler 0.1.4-1
  * mandelbulber2 2.32-1
  * non-mixer-xt 2.0.3-4
  * plugdata 0.9.1-2
  * projectM-mao 4.1.2-15
  * protracker2 1.70-4
  * puredata 0.55.0-4
  * python-wstd2daisy 0.5.2-1
  * python3-wstd2daisy 0.5.2-1
  * rack-v2-Ahornberg 2.3.3-2
  * rack-v2-Cella 2.0.1-2
  * rack-v2-CosineKitty-Sapphire 2.4.9-2
  * rack-v2-DrumKit 2.0.1-2
  * rack-v2-ImpromptuModular 2.5.0-2
  * rack-v2-JW-Modules 2.0.5-2
  * rack-v2-NOI 2.0.7-2
  * rack-v2-PitchGrid 2.0.1-2
  * rack-v2-SSE 2.0.2-2
  * rack-v2-SanguineMonsters 2.3.0-2
  * rack-v2-SanguineMutants 2.3.2-2
  * rack-v2-SickoCV 2.6.15-2
  * rack-v2-SmarTAZZStudio-Free 2.3.0-2
  * rack-v2-Sparkette 2.8.1-2
  * rack-v2-StochasticTelegraph 2.0.16-2
  * rack-v2-SurgeXTRack 2.2.4.0-2
  * rack-v2-TinyTricks 2.5.3-2
  * rack-v2-Venom 2.9.0-2
  * rack-v2-captvolt 2.1.0-2
  * rack-v2-gwrthiant 2.0.2-2
  * rack-v2-vanTies 2.5.0-2
  * rakarrack-plus 1.2.6-2
  * ratatouille 0.8-1
  * roomreverb 1.2.0-1
  * saugns 0.4.5-1
  * schismtracker 20240809-2
  * seq66 0.99.14-1
  * surge-xt 1.3.4-2
  * tuxguitar 1.6.4-14
  * uhhyouplugins 0.62.0-1
  * zl-equalizer 0.3.5-2

### News for july 2024

* new packages
  * xenos 1.0.1-1
  * bassman-preamp 0.5.0-1
  * beataligninglooper 0.0.1-1
  * cmajor 1.0.2591-1

* updated packages
  * ImpulseLoader 0.3-1
  * ImpulseLoaderStereo 0.3-1
  * JUCE 8.0.1-10
  * airwin2rack 2.12.0-1
  * airwindows 0.0.1-87
  * audibleplanets 1.1.4-1
  * chuck 1.5.2.5-2
  * dexed 0.9.7-1
  * drumlabooh 3.0.0-1
  * firefly-synth 1.8.3-1
  * gnomedistort2 1.0.0-1
  * guitarmidi 1.6-2
  * jack-link 0.2.2-1
  * jack_mixer 19-1
  * jacktrip 2.3.1-2
  * js80p 3.1.2-1
  * kernel-lqx-mao 6.9.9.lqx1-14
  * kernel-rt-mao 6.6.41.rt37-13
  * kernel-rt-stable-mao 5.10.221.rt113-12
  * kernel-xan-mao 6.9.9.xan1-12
  * line 0.6.7.4-1
  * livecd-tools-mao 31.0-8
  * lmms-mao-weekly 1.2.99-14
  * miniaudicle 1.5.2.5-2
  * non-mixer-xt 2.0.2-4
  * octasine 0.9.1-1
  * onetrick-cryptid 1.0.2-1
  * onetrick-keys 1.0.1-1
  * onetrick-urchin 1.0.2-1
  * ossia-score 3.2.4-1
  * plugdata 0.9.0-1
  * python3-soundfile 0.12.1-1
  * qutecsound 1.1.2-3
  * rack-v2-Ahornberg 2.3.2-2
  * rack-v2-Airwin2Rack 2.12.0-2
  * rack-v2-BaconMusic 2.7.0-2
  * rack-v2-CosineKitty-Sapphire 2.4.7-2
  * rack-v2-TinyTricks 2.5.2-2
  * rack-v2-dbRackModules 2.4.0-2
  * ratatouille 0.7-1
  * saugns 0.4.4d-1
  * showdmidi 1.9.9-1
  * specmatch 0.10.0-1
  * splash 0.10.16-1
  * tascar 0.232.2-1
  * vst3sdk 3.7.12-1
  * zl-equalizer 0.3.3-2

### News for june 2024

* new packages
  * zl-ecomp 0.2.3-1
  * zl-equalizer 0.3.2-2
  * zl-inflator 0.3.0-1
  * zl-lmakeup 0.2.7-1
  * zl-lmatch 0.2.4-1
  * zl-warm 0.2.1-1
  * dexed 0.9.6-1
  * guitarix 0.46.0-10

* updated packages
  * JUCE 8.0.0-10
  * JUCE7 7.0.12-10
  * ToneTwistPlugs 0.8-1
  * airwindows 0.0.1-86
  * balance.lv2 0.7.0-1
  * chataigne 1.9.19-1
  * darc.lv2 0.7.0-1
  * dpl.lv2 0.7.0-1
  * fat1.lv2 0.8.8-1
  * faust 2.74.6-37
  * fil4.lv2 0.8.9-1
  * firefly-synth 1.8.0-1
  * furnace 0.6.5-4
  * hvcc 0.12.0-2
  * jjazzlab 4.1.0-2
  * js80p 3.1.1-1
  * kernel-rt-mao 6.6.35.rt34-13
  * kernel-rt-stable-mao 5.10.219.rt111-12
  * konfyt 1.6.2-3
  * libefsw 1.4.0-1
  * lv2-avldrums-x42-plugin 0.7.3-3
  * matrixmixer.lv2 0.4.7-2
  * meters.lv2 0.9.26-1
  * mixtri.lv2 0.4.11-1
  * non-mixer-xt 2.0.1-1
  * ossia-score 3.2.3-1
  * padthv1 1.0.0-4
  * phaserotate.lv2 0.6.6-1
  * powertabeditor 0.0.1-3
  * qlcplus 4.13.1-1
  * qtractor-mao 1.0.0-2
  * rack-v2-Ahornberg 2.3.1-2
  * rack-v2-Biset 2.0.13-2
  * rack-v2-CVfunk 2.0.7-2
  * rack-v2-CosineKitty-Sapphire 2.4.6-2
  * rack-v2-CuteFoxModules 2.0.1-2
  * rack-v2-FrozenWasteland 2.1.1-2
  * rack-v2-Hutara 2.0.0-2
  * rack-v2-NOI 2.0.6-2
  * rack-v2-RPJ 2.2.4-2
  * rack-v2-SIM 2.1.2-2
  * rack-v2-SanguineMutants 2.3.0-2
  * rack-v2-SickoCV 2.6.14-2
  * rack-v2-SmarTAZZStudio-Free 2.2.0-2
  * rack-v2-Sparkette 2.8.0-2
  * rack-v2-StochasticTelegraph 2.0.15-2
  * rack-v2-TMT 2.1.10-2
  * rack-v2-Venom 2.8.0-2
  * rack-v2-WavsynModular 2.0.0-2
  * rack-v2-computerscare 2.1.11-2
  * rack-v2-eightfold 2.0.1-2
  * rack-v2-squinktronix-plug1 2.2.4-2
  * rack-v2-trowaSoft 2.0.8-2
  * rack-v2-vanTies 2.4.1-2
  * ratatouille 0.4-1
  * rivendell 4.3.0-1
  * rosegarden4 24.06-4
  * saugns 0.4.4c-1
  * schismtracker 20240630-2
  * sfxr-qt 1.5.1-1
  * sisco.lv2 0.9.11-1
  * spectra.lv2 0.6.6-1
  * splash 0.10.12-1
  * stepseq.lv2 0.6.14-1
  * stomptuner 0.5-1
  * testsignal.lv2 0.7.0-1
  * thekissofshame 1.0.2-1
  * tuna.lv2 0.6.6-1
  * tuxguitar 1.6.3-14

### News for may 2024

* new packages
  * zl-equalizer 0.3.0-1
  * hera 0.0.1-1
  * cetone-synth-light 0.0.1-1
  * cetone033-synth 0.0.1-1
  * cetone-synth 0.0.1-1
  * foam-synth 0.1.3-1
  * airwin2rack 2.11.0-1

* updated packages
  * schismtracker 20240529-2
  * showdmidi 0.9.0-1
  * receivemidi 1.4.3-3
  * blocks 0.1-3
  * kernel-rt-mao 6.6.32.rt32-13
  * kernel-rt-stable-mao 5.10.217.rt109-12
  * ossia-score 3.2.0-1
  * js80p 3.1.0-1
  * orca-lang 0.1.0.d6bf8e2-4
  * line 0.6.2-1
  * cardinal 24.05-2
  * mda-lv2 0.9.b2df88c-4
  * airwindows 0.0.1-83
  * lsp-plugins 1.2.16-1
  * rt-tests 2.7-1
  * noise-suppression-for-voice 1.10-3
  * firefly-synth 1.7.6-1
  * jacktrip 2.3.0-2
  * non-mixer-xt 1.3.3-1
  * Rack-v2 2.5.2-4
  * rack-v2-vanTies 2.4.0-2
  * rack-v2-TMT 2.1.9-2
  * rack-v2-SIM 2.1.1-2
  * rack-v2-PdArray 2.1.1-2
  * rack-v2-minimal-friction 2.1.0-2
  * rack-v2-CVfunk 2.0.5-2
  * rack-v2-CosineKitty-Sapphire 2.4.4-2
  * rack-v2-StochasticTelegraph 2.0.14-2
  * rack-v2-SickoCV 2.6.10-2
  * rack-v2-questionablemodules 2.1.14-2
  * rack-v2-PathSet 2.5.0-1
  * rack-v2-MML 2.1.0-2
  * rack-v2-Chinenual-VCV 2.7.0-2
  * rack-v2-Befaco 2.7.1-2
  * rack-v2-Airwin2Rack 2.11.0-2
  * zam-mao-plugins 4.3-4
  * fasttracker2 1.84-3
  * surge-xt 1.3.2-2
  * helio-workstation 3.13.0-2
  * openboard 1.7.1-3
  * audibleplanets 1.0.22-1
  * rack-v2-Sparkette 2.7.1-2
  * librearp 2.5-2
  * wstd-manglr 1.1.0-1
  * grandorgue 3.14.3.0-7
  * lmms-mao-weekly 1.2.99-13
  * clap 1.2.1-1
  * kernel-lqx-mao 6.8.9.lqx1-14
  * kernel-xan-mao 6.8.9.xan1-12
  * digitsvst 0.0.1-1
  * multimeter 1.0.0-1
  * thekissofshame 1.0.1-1
  * padthv1 0.9.91-4
  * qtractor-mao 0.9.91-2
  * rivendell 4.2.2-1
  * amsynth 1.13.4-3
  * furnace 0.6.3-4
  * coppwr 1.6.0-1
  * tascar 0.232.1-1

### News for april 2024

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
