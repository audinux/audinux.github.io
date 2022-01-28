![Audinux](../images/AudinuxBanner.png)

## News

### News of january 2022
Various updates to packages:
* new packages:
  * suge-xt 1.0 has been added to the repository
  * vamp-aubio-plugins have been added to the repository
  * ua-vamp-plugin vamp plugins have been added to the repository
  * azi vamp plugins have been added to the repository
  * tuning-differences vamp plugins have been added to the repository
  * tipic vamp plugins have been added to the repository
  * vamp tempogram vamp plugins have been added to the repository
  * vamp-simple-cepstrum vamp plugins have been added to the repository
  * silvet vamp plugins have been added to the repository
  * sigmentino vamp plugins have been added to the repository
  * qm-vam-plugin vamp plugins have been added to the repository
  * tsunami has beed added to the repository
  * famitracker has been added to the repository
  * vamp nnls-chroma plugins has been added to the repository
  * vamp bbc-vamp-plugins has been added to the repository
  * vamp beatroot-vamp has been added to the repository
  * vamp cepstral-pitchtracker has been added to the repository
  * vamp cqvamp has been added to the repository
  * vamp match-vamp  has been added to the repository
  * vamp miredu has been added to the repository
  * vamp ofa-vamp-plugin has been added to the repository
  * vamp pyin has been added to the repository

* updated packages:
  * konfyt has been updated to 1.1.7
  * kernel rt have been updated to 5.16.2-rt19. Be careful, there are some problem with some usb audio cards (like the FocusRite ones) during JACK playback. Still not fixed on 5.16 branch.
  * schismtracker has been updated to 20220125
  * padthv1 has been updated to 0.9.24
  * spectmorph has been updated to 0.5.2
  * traverso has been updated to the last master version
  * JUCE has been updated to 6.1.5
  * stargate has been updated to 22.01.1
  * kernel-rt-mao was updated to 5.15.14-rt27
  * kernel-rt-stable-mao was updated to 5.10.90-rt60
  * amsynth has been updated to 1.12.4
  * some rack v2 plugins have been updated
  * geonkick has been updated to 2.8.1
  * fasttracker has been updated to 1.50
  * protracker has been updated to 1.39
  * sonobus has been updated to 1.4.9
  * bipscript has been updated to 0.15
  * Ray Session has been updated to 0.12.2
  * yabridge has been updated to 3.8.0
  * sfizz has been updated to 1.2.0
  * DISTRHO plugins has been added back
  * hydrogen-drumkits has been added back
  * fverb has been added back

### News of december 2021
Various updates to packages:
* new packages:
  * Rack v2 is now in the repository
  * psindustrializer is now in the repository
  * sfxr is now in the repository
  * monique-monosynth is now in the repository
  * lives-mao is now in the repository
  
* updated packages:
  * kernel-rt-mao was updated to 5.15.12-rt25
  * kernel-rt-stable-mao was updated to 5.10.87-rt59
  * JUCE was updated to 6.1.3
  * hydrogen was updated to 1.1.1
  * stargate was updated to 21.12.3
  * Various fixed related to tracker packages: protrekkr (hangs because of lxml update), goattracker, mammut, plebtracker and zytrax
  * airwindows has been updated too last master
  * din has been updated to version 52
  * Rack is currently updated to version 2. Rack v1 and Rack v2 will be useable in parallel.
  * din as been updated to 52.0
  * improviz has been updated to 1.0.2
  * fasttracker has been updated to 1.49
  * Ray Session has been updated to 0.12.2
  * JUCE has been updated to 6.1.4
  * lsp-plugins has been updated to 1.1.31
  * ChowMatrix has been updated to 1.3.0
  * AnalogTapeModel has been updated to 2.10.0
  * pure-data has been updated to 0.52.0
  * linux-show-player has been updated to 0.5.3
  * protracker2 has been updated to 1.38
  * lebiniou has been updated to 3.64.0
  * amsynth has been updated to 1.12.3
  * jacktrip has been updated to 1.3.0
  * non-daw and ntk has been fixed
  * BespokeSynth has been updated to 1.1.0
  
### News of november 2021
Various updates to packages:
* new packages:
  * 2 new packages related to Akai pieces of gear:
    * mpk-m2-editor: to configure the Akai MPK mini keyboard (this package is to be fixed: it silently conflict with the Ray Session package)
    * lpd8editor: to configure the Akai LPD8 MIDI controller
  * A new package to add LiVes master version has been added. This packaged will be updated once a month with a compilable master version of LiVes
  * A new LV2 synth has been added: zynayumi. It emulates an old chiptune synth
  * A new package has been added: tangamp a LV2 amplifier

* updated packages:
  * mpk-m2-editor has been fixed. There was a conflict with Ray Session. Once mpk-m2-editor was installed, Ray Session stopped working.
  * as usual, several VCVRack plugins packages have been updated. Normally, by the end of the month, the version 2 of VCVRack should be out
  * Airwindows too saw some periodic updates. Normally, airwindows is updated upstream once a week with, most of the time, a new plugin
  * lebiniou has been updated to the last version: 3.64.3
  * stargate has been updated to the version 21.11.7
  * fasttracker2 has been updated to the version 1.48. I recommend the following YouTube video about the [history of trackers](https://www.youtube.com/watch?v=roBkg-iPrbw)
  * YABridge has been updated to the version 3.7.0
  * Kernel have been updated:
    * The last RT kernel is now 5.12.2.rt20
    * The stable kernel is now packaged as kernel-rt-stable-mao (to ease the update of your stable RT kernel) and it contains version 5.10.78.rt55
  * SchismTracker is now updated to 20211116
  * BespokeSynth is updated to 1.1.0. An article about how to start with BespokeSynth will be released in Fedora Magazine by the end of the week
  * XUIDesigner (a tool to create GUI for LV2 plugins) is updated to version 0.3
  * jacktrip (Jack over network) is updated to version 1.4.1
  * Leiningen has been updated to version 2.9.7
  * SFizz has been updated to version 1.1.1
  * Helio-Workstation has been updated to 3.8.0
  * Mandelbulder has been updated to version 2.26
  * Some OpenKontroller's LV2 plugins have been updated (check midi_matrix.lv2, patchmatrix, sherlock.lv2, eteroj.lv2, moony.lv2)
  * Faust language has been updated to version 2.37.3
  * protracker has been updated to version 1.37
  * Triceratops LV2 plugin has been updated to version 0.5.0

### Archives
