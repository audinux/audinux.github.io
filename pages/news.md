![Audinux](../images/AudinuxBanner.png)

## News

Since Fedora 35, the repository is called Audinux (due to a conflict with the website linuxmao.org).

I will stop building the RT kernel 5.15 because it has too many problems with audio (the USB Audio driver seems to have a lot of problems and doesn't play well with pipewire).
I will stop building the RT kernel 5.10 because it has a build problem with the last version of gcc..

Build for Fedora 42 is now over (4 days of rebuild).

### News for may 2025

* new packages
  * nih-plug-0:0.4.3-1
  * tek-0:0.2.2-1
  * virtual-playing-orchestra-0:3.2.4-1

* updated packages
  * BYOD-0:1.3.0-1
  * BambooTracker-0:0.6.5-1
  * BatLib-1:0.1-2
  * BespokeSynth-weekly-0:1.3.10-5
  * Cadence-0:0.9.2-5
  * ChowCentaur-0:1.4.0-1
  * ChowKick-0:1.2.0-1
  * ChowPhaser-0:1.1.1-1
  * FoxDot-1:0.8.11-1
  * FoxDotQuark-1:0.1-2
  * HISE-0:4.1.0-4
  * IanniX-0:0.9.20.fd6df51-5
  * Rack-v1-0:1.1.6-13
  * Rack-v2-0:2.6.4-7
  * actuate-0:1.3.91-1
  * aeolus_plugin-0:0.3.0-4
  * airwindows-0:0.0.1-94
  * ams-lv2-0:1.2.2-3
  * audibleplanets-0:1.2.3-1
  * bipscript-0:0.22-1
  * bipscript-ide-0:0.22-1
  * cabbage-0:2.10.0-3
  * chaffverb-0:0.2.3-1
  * chordv-0:1.2-1
  * chuck-0:1.5.5.1-2
  * cmajor-0:1.0.2893-1
  * common-music-0:3.10.2-3
  * coppwr-0:1.6.2-1
  * csound-0:6.18.1-12
  * csound-plugins-0:1.0.2-1
  * cstop-0:1.0.0-1
  * cyclone-0:0.1.3-1
  * ddsp-0:1.1.0-1
  * din-0:59.0.0-1
  * dm-LFO-0:0.0.4-1
  * dm-Reverse-0:0.0.5-1
  * dm-SD1-0:0.0.6-1
  * dm-Spaceecho-0:0.1.3-1
  * dm-TimeWarp-0:0.0.1-1
  * dm-TubeScreamer-0:0.0.6-2
  * dm-Whammy-0:0.0.6-1
  * dm-bigmuff-0:0.0.4-1
  * dm-ds1-0:0.0.9-1
  * dm-fuzz-0:0.0.6-1
  * dm-graindelay-0:0.0.1-2
  * dm-octaver-0:0.0.4-1
  * dm-rat-0:0.0.8-1
  * dm-repeat-0:0.0.6-1
  * dm-reverb-0:0.1.0-1
  * dm-shredmaster-0:0.0.8-1
  * dm-stutter-0:0.1.0-1
  * dm-vibrato-0:0.0.5-1
  * drumlabooh-0:9.1.0-1
  * drumrox-kits-ARP_Axxe-0:3.0.0-7
  * drumrox-kits-ASR-XPro-0:3.0.0-7
  * drumrox-kits-Cheetah_SpecDrum_Afro-0:3.0.0-7
  * drumrox-kits-Cheetah_SpecDrum_Electro-0:3.0.0-7
  * drumrox-kits-Cheetah_SpecDrum_Latin-0:3.0.0-7
  * drumrox-kits-Cheetah_SpecDrum_Standard-0:3.0.0-7
  * drumrox-kits-ChoosyHouseKit-0:3.0.0-7
  * drumrox-kits-Copyc4tElNacho-0:3.0.0-7
  * drumrox-kits-Drumulator-0:3.0.0-7
  * drumrox-kits-ELI_CompuRhythm_CR_7030-0:3.0.0-7
  * drumrox-kits-ElgamCarousel-0:3.0.0-7
  * drumrox-kits-FormantaPolivoks-0:3.0.0-7
  * drumrox-kits-FrickeMFB512-0:3.0.0-7
  * drumrox-kits-Fricke_MFB512-0:3.0.0-7
  * drumrox-kits-GEM_Drum15-0:3.0.0-7
  * drumrox-kits-Gretch_Jazzkit-0:3.0.0-7
  * drumrox-kits-KloneDualPercussionSynthesiser-0:3.0.0-7
  * drumrox-kits-Lel-DR8-0:3.0.0-7
  * drumrox-kits-Lel-PSR-0:3.0.0-7
  * drumrox-kits-Ludwig_Basic-0:3.0.0-7
  * drumrox-kits-Ludwig_Sixties-0:3.0.0-7
  * drumrox-kits-MTI_AO_1-0:3.0.0-7
  * drumrox-kits-Rokton-UDS-0:3.0.0-7
  * drumrox-kits-SoundMaster_SR-88-0:3.0.0-7
  * drumrox-kits-Tamil-0:3.0.0-7
  * drumrox-kits-TamilMultiLayered-0:3.0.0-7
  * drumrox-kits-Technics_PCM_DP50-0:3.0.0-7
  * drumrox-kits-WatfordRhythmGenerator-0:3.0.0-7
  * drumrox-kits-Wooden-0:3.0.0-7
  * element-0:0.46.6-1
  * emissioncontrol2-0:1.2-1
  * ensemble-chorus-0:0.0.1-2
  * fasttracker2-0:1.96-3
  * faustlive-0:2.5.19-1
  * fil4.lv2-0:0.8.10-1
  * furnace-0:0.6.8.2-4
  * gearmulator-0:1.4.4-1
  * geonkick-0:3.5.2-2
  * grainbow-0:1.0.3-1
  * gtick-0:0.5.5-1
  * helio-workstation-0:3.16.0-2
  * hexter-dssi-0:1.1.1-4
  * hybridreverb2-0:2.1.2-1
  * jack-director-0:0.1.1-1
  * jack-link-0:0.2.4-1
  * jack_capture-0:0.9.73-17
  * jack_delay-0:0.4.2-1
  * jack_utils-0:0.0.1-1
  * jackass-0:1.1-1
  * jamin-0:0.98.9-2
  * jc303-0:0.12.1-2
  * juceopl-0:1.0.1-1
  * june21-0:0.9.6-1
  * kernel-lqx-mao-0:6.14.5.lqx1-14
  * kernel-xan-mao-0:6.14.5.xan1-12
  * kickmess-0:0.2.2-1
  * klystrack-0:1.7.6-4
  * komposter-0:0.1-1
  * konfyt-0:1.6.2-3
  * kpp-0:1.2.1-2
  * ladspa-t5-plugins-0:1.8-1
  * lenmus-0:6.0.1-2
  * line-0:0.6.1-1
  * lmms-mao-weekly-0:1.2.99-21
  * loopidity-0:0.14.026-1
  * lsp-plugins-0:1.2.22-1
  * lv2-mephisto-0:0.18.2-1
  * lv2-neural-amp-modeler-0:0.1.8-1
  * lv2-neural-amp-modeler-ui-0:0.0.1-2
  * lv2-toobamp-plugins-0:1.1.61-1
  * lvtk-0:2.0.0.6bfe981-4
  * maim-0:1.1.1-1
  * mammut-0:0.61.71986a4-2
  * midi-monitor-0:30072020-2
  * midifilter.lv2-0:0.7.4-1
  * midilooper-0:0.0.2.1-1
  * midizap-0:1.0.0.dc62671-1
  * miniaudicle-0:1.5.5.1-2
  * mx44-0:2.0.0-1
  * nam-juce-0:0.4.0-1
  * nanoinvaders-0:0.1-2
  * neothesia-0:0.3.1-1
  * neuralrack-0:0.1.7-1
  * neuralrack-0:0.1.8-1
  * noteahead-0:0.8.0-1
  * odin2-0:2.4.1-5
  * onetrick-bboi-0:1.0.1-1
  * osc2midi-0:0.2.5-1
  * padthv1-0:1.3.1-4
  * paulxstretch-0:1.6.0-1
  * phaserotate.lv2-0:0.6.7-1
  * phasex-0:0.14.97-9.20150304git4942467
  * pipecontrol-0:0.3.0-1
  * plugdata-0:0.9.1-2
  * princepedal-0:1.0-1
  * processing-0:4.4.4-2
  * proteus-0:1.2.0-2
  * protracker2-0:1.75-4
  * protrekkr-0:1.0.0-4
  * python2.7-0:2.7.18-43
  * python3-soundfile-0:0.13.1-1
  * qtractor-mao-0:1.5.5-2
  * qutecsound-0:1.1.3-3
  * rack-v1-Fundamental-0:1.4.0-6
  * rack-v1-KRTPluginA-0:1.25.25-3
  * rack-v1-RJModules-0:1.7.2-3
  * rack-v1-SurgeRack-0:1.7.1.2-3
  * rack-v1-squinkylabs-plug1-0:1.0.23-3
  * rack-v2-Bogaudio-0:2.6.46-2
  * rack-v2-Cella-0:2.9.0-2
  * rack-v2-Chinenual-VCV-0:2.7.4-2
  * rack-v2-Fundamental-0:2.6.3-3
  * rack-v2-HardSeqs-0:2.0.0-2
  * rack-v2-HawthornLabs-0:2.0.2-2
  * rack-v2-JW-Modules-0:2.0.13-2
  * rack-v2-JulioChaos-0:2.0.0-2
  * rack-v2-LogicalAudio-0:2.0.1-2
  * rack-v2-ParableInstruments-0:1.0.0-1
  * rack-v2-RSBATechModules-0:2.1.7-2
  * rack-v2-SanguineMutants-0:2.6.7-2
  * rack-v2-StochasticTelegraph-0:2.0.20-2
  * rack-v2-SurgeRack-0:2.1.7.2-2
  * rack-v2-Venom-0:2.12.1-2
  * rack-v2-VsWorld-0:2.1.4-2
  * rack-v2-WordGenerator-0:2.0.0-2
  * rack-v2-dbRackSequencer-0:2.6.2-2
  * rack-v2-nullpath-0:2.0.1-2
  * rack-v2-vanTies-0:2.6.0-2
  * ratatouille-0:0.9.11-1
  * remid-0:0.3-1
  * samplebrain-0:0.18.5-1
  * slv2-0:0.6.6-35
  * smartamp-0:1.3-2
  * snd-0:25.3-1
  * splash-0:0.11.4-1
  * supercollider-0:3.13.1-6
  * tsunami-0:2024.10-2
  * tuna.lv2-0:0.6.7-1
  * vswell-0:0.3.0-1
  * wild-blossom-plugins-0:0.0.1-2
  * wstd-3q-0:1.0-1
  * wstd-crshr-0:1.0.1-1
  * wstd-dl3y-0:1.0-1
  * wstd-dlay-0:1.0-1
  * wstd-eq-0:1.0-1
  * wstd-fl3ngr-0:1.0-1
  * wstd-flangr-0:1.0-1
  * wstd-fldr-0:1.0.1-1
  * wstd-m3nglr-0:1.0-1
  * wstd-manglr-0:1.1.0-1
  * wstd-smthr-0:1.0.1-1
  * ysfx-0:0.0.38-1
  * zconvo.lv2-0:0.7.2-1

### News for april 2025

* new packages
  * lv2-gtk-ui-bridge 0.1-1
  * noteahead 0.6.0-1
  * qarecord 0.0.1-1
  * qmidicontrol 0.0.1-1
  * qmidiroute 0.4.0.2-1
  * zita-eq1 0.3.4-1

* updated packages
  * Carla-mao 1:2.5.9-4
  * DISTRHO-Ports 1.1.0-4
  * JUCE 8.0.7-10
  * Rack-v2 2.6.3-6
  * airwindows 0.0.1-93
  * cmajor 1.0.2829-1
  * drumlabooh 8.0.2-1
  * drumrox-kits-ARP_Axxe 2.0.1-6
  * drumrox-kits-Cheetah_SpecDrum_Afro 2.0.1-6
  * drumrox-kits-Cheetah_SpecDrum_Electro 2.0.1-6
  * drumrox-kits-Cheetah_SpecDrum_Latin 2.0.1-6
  * drumrox-kits-Cheetah_SpecDrum_Standard 2.0.1-6
  * drumrox-kits-Copyc4tElNacho 2.0.1-6
  * drumrox-kits-Drumulator 2.0.1-6
  * drumrox-kits-ELI_CompuRhythm_CR_7030 2.0.1-6
  * drumrox-kits-Fricke_MFB512 2.0.1-6
  * drumrox-kits-GEM_Drum15 2.0.1-6
  * drumrox-kits-Gretch_Jazzkit 2.0.1-6
  * drumrox-kits-Lel-DR8 2.0.1-6
  * drumrox-kits-Lel-PSR 2.0.1-6
  * drumrox-kits-Ludwig_Basic 2.0.1-6
  * drumrox-kits-Ludwig_Sixties 2.0.1-6
  * drumrox-kits-MTI_AO_1 2.0.1-6
  * drumrox-kits-Rokton-UDS 2.0.1-6
  * drumrox-kits-SoundMaster_SR-88 2.0.1-6
  * drumrox-kits-Tamil 2.0.1-6
  * drumrox-kits-TamilMultiLayered 2.0.1-6
  * drumrox-kits-Technics_PCM_DP50 2.0.1-6
  * drumrox-kits-WatfordRhythmGenerator 2.0.1-6
  * drumrox-kits-Wooden 2.0.1-6
  * elektroid 3.2.3-1
  * giada 1.2.0-1
  * helio-workstation 3.15.0-2
  * iem-plugins 1.15.0-1
  * jacktrip 2.6.0-2
  * lmms-mao 1.2.2-12
  * lmms-mao-weekly 1.2.99-20
  * neuralrack 0.1.6-1
  * ossia-score 3.5.1-1
  * polyphone 2.5.1-4
  * processing 4.4.3-2
  * protracker2 1.74-4
  * puredata 0.55.2-4
  * rack-v2-Befaco 2.9.1-2
  * rack-v2-Cella 2.0.7-2
  * rack-v2-Cella 2.8.0-2
  * rack-v2-Chinenual-VCV 2.7.2-2
  * rack-v2-Fundamental 2.6.2-3
  * rack-v2-HawthornLabs 2.0.1-2
  * rack-v2-HetrickCV 2.5.2-2
  * rack-v2-Moffenzeef 2.0.3-2
  * rack-v2-Ondas 2.0.4-2
  * rack-v2-OrangeLine 2.4.9-2
  * rack-v2-PitchGrid 2.2.0-2
  * rack-v2-SanguineMonsters 2.3.2-2
  * rack-v2-SanguineMutants 2.6.5-2
  * rack-v2-SickoCV 2.7.3-2
  * rack-v2-SonusModular 2.1.1-2
  * rack-v2-Sulamith 2.0.2-2
  * rack-v2-SurgeXTRack 2.2.9.0-2
  * rack-v2-VsWorld 2.0.1-2
  * rack-v2-dbRackSequencer 2.6.1-2
  * rack-v2-not-things 2.0.2-2
  * rack-v2-squinktronix-plug1 2.2.7-2
  * rack-v2-trowaSoft 2.0.9-2
  * rack-v2-voxglitch 2.32.4-2
  * schismtracker 20250415-2
  * seq192 1.7.0-1
  * supercollider 3.13.1-6
  * ysfx 0.0.37-1
  * zita-ajbridge 0.8.4-1
  * zita-bls1 0.4.0-1
  * zl-equalizer 0.6.2-2

### News for march 2025

* new packages
  * podcastplugins 1.0.0-1

* updated packages
  * BespokeSynth-weekly 1.3.10-2
  * Rack-v2 2.6.3-5
  * aloop 0.4-1
  * alsa-scarlett-gui 0.5.1-2
  * chuck 1.5.5.0-2
  * clap 1.2.6-1
  * cmajor 1.0.2788-1
  * ddsp 1.1.0-1
  * drumlabooh 7.0.1-1
  * drumrox-kits 2.0.0-6
  * fasttracker2 1.95-3
  * faust 2.79.3-39
  * furnace 0.6.8.1-4
  * gearmulator 1.4.4-1
  * jnoisemeter 0.4.1-1
  * lmms-mao-weekly 1.2.99-19
  * lv2-toobamp-plugins 1.1.58-1
  * maim 1.1.1-1
  * mandelbulber2 2.33-1
  * miniaudicle 1.5.5.0-2
  * neuralrack 0.1.4-1
  * pipecontrol 0.3.0-1
  * premake5 5.0.0beta6-1
  * qlcplus 4.14.1-1
  * qtractor-mao 1.5.4-2
  * rack-v2-ArhythmeticUnits-Fourier 2.1.1-2
  * rack-v2-Befaco 2.9.0-2
  * rack-v2-CVfunk 2.0.14-2
  * rack-v2-CosineKitty-Sapphire 2.5.8-2
  * rack-v2-HoyerHoppes 2.0.1-2
  * rack-v2-JW-Modules 2.0.8-2
  * rack-v2-Moffenzeef 2.0.1-2
  * rack-v2-NOI 2.0.8-2
  * rack-v2-SanguineMutants 2.6.4-2
  * rack-v2-SickoCV 2.7.1-2
  * rack-v2-not-things 2.0.1-2
  * rack-v2-wildergarden 2.1.0-2
  * ratatouille 0.9.10-1
  * scrollscope 1.4.2-1
  * seq192 1.6.1-1
  * sg-323 1.0.1-1
  * six-sines 1.1.0-2
  * stegosaurus 0.0.1-1
  * supercollider 3.13.1-6
  * vst3-guitarix 0.5-1
  * ysfx 0.0.35-1
  
### News for february 2025

* new packages
  * aloop 0.3-1
  * bombaz 1.0.0-1
  * enover 1.0-1
  * minaton-xt 0.2.0-1
  * miriyaki-xt 0.0.1-1
  * prototracker-modular 0.0.8-3
  * prototracker-opll 0.0.8-1
  * rcverb 1.0-2
  * ripplerx 1.4.2-1
  * rp2a03 0.0.1-1
  * trackerboy 0.6.5-1
  * wild-blossom-plugins 0.0.1-1

* updated packages
  * ImpulseLoader 0.4-1
  * actuate 1.3.8-1
  * alsa-scarlett-gui 0.5.0-2
  * clap 1.2.5-1
  * cmajor 1.0.2771-1
  * fasttracker2 1.94-3
  * gearmulator 1.4.2-1
  * giada 1.1.1-1
  * gmsynth.lv2 0.6.2-1
  * hvcc 0.13.2-2
  * lsp-plugins 1.2.21-1
  * lv2-neural-amp-modeler 0.1.7-1
  * lvtk 2.0.0.6bfe981-4
  * premake5 5.0.0beta5-1
  * processing 4.3.4-2
  * prototracker 0.0.2-1
  * protrekkr2 2.8.2-1
  * python3-wstd2daisy 0.5.3-1
  * qtractor-mao 1.5.3-2
  * rack-v2-Cella 2.0.6-2
  * rack-v2-ChemicalElements 2.0.0-2
  * rack-v2-HoyerHoppes 2.0.0-2
  * rack-v2-QuantalAudio 2.2.2-2
  * rack-v2-SickoCV 2.7.0-2
  * rack-v2-StochasticTelegraph 2.0.19-2
  * rack-v2-not-things 2.0.0-2
  * rack-v2-not-things 2.0.0-2
  * rack-v2-voxglitch 2.32.3-2
  * rack-v2-wildergarden 2.0.1-2
  * ratatouille 0.9.7-1
  * rosegarden4 24.12.1-4
  * saugns 0.5.1-1
  * seq66 0.99.19-1
  * sg-323 1.0.0-1
  * six-sines 1.0.5-2
  * spek 0.8.5-2
  * tascar 0.234.2-1
  * vst3sdk 3.7.13-1
  * wavetable 1.0.23-1
  * ysfx 0.0.33-1
  * zl-equalizer 0.6.0-2

### News for january 2025

* new packages
  * python2.7 - added back for build tasks only. Mainly to be able to build some old plugins

* updated packages
  * JUCE 8.0.6-10
  * airwindows 0.0.1-92
  * cabbage 2.10.0-3
  * chuck 1.5.4.4-2
  * clap 1.2.3-1
  * cloudreverb 0.2-2
  * din 59.0.0-1
  * faust 2.77.3-39
  * gmsynth.lv2 0.6.1-1
  * jacktrip 2.5.1-2
  * js80p 3.4.1-1
  * mda-lv2 1.2.10-4
  * miniaudicle 1.5.4.4-2
  * non-mixer-xt 2.0.7-4
  * ossia-score 3.4.1-1
  * oxefmsynth 1.3.5.fe078ea-3
  * padthv1 1.3.0-4
  * polyphone 2.5.1-3
  * processing 4.3.3-2
  * projectM-mao 4.1.4-15
  * protrekkr2 2.8.1-1
  * qlcplus 4.14.0-1
  * qtractor-mao 1.5.2-2
  * rack-v2-CVfunk 2.0.12-2
  * rack-v2-CosineKitty-Sapphire 2.5.7-2
  * rack-v2-HetrickCV 2.5.1-2
  * rack-v2-Minilab3 2.0.1-2
  * rack-v2-SickoCV 2.6.17-2
  * rack-v2-StochasticTelegraph 2.0.18-2
  * rack-v2-camouflage 2.4.0-2
  * rack-v2-dbRackSequencer 2.5.0-2
  * rack-v2-pachde-hc-one 2.0.1-2
  * rack-v2-voxglitch 2.31.1-2
  * rack-v2-voxglitch 2.32.1-2
  * rakarrack-plus 1.2.7-3
  * roomreverb 1.3.0-1
  * saugns 0.5.0c-1
  * seq42 2.1.5-1
  * seq66 0.99.17.1-1
  * six-sines 1.0.4-2
  * tascar 0.234.0-1
  * zix 0.6.2-1

### Past news

* [2024](news-2024.md)
* [2023](news-2023.md)
* [2022](news-2022.md)
* [2021](news-2021.md)
