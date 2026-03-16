![Audinux](../images/AudinuxBanner.png)

## Build

### Tickets

### Fedora 44

#### Errors

liquidsfz: termios missing ?? a priori a missing include
kernel-xan:drivers/gpu/drm/amd/amdgpu/amdgpu_gart.c:305:18: error: variable ‘p’ set but not used [-Werror=unused-but-set-variable=]
Cadence: deactivated: python3-qt4 not available anymore and project archived
chaffverb: requires hvcc 0.10
vswell: requires hvcc 0.10
cmajor: cmajor/juce/modules/juce_audio_processors/processors/juce_AudioPluginInstance.h:164:74: error: no matching constructor for initialization of 'AudioProcessor'
ensemble-chorus: error: invalid use of incomplete type ‘class Fl_Group’
fxseq: make: *** No rule to make target 'fxseq-VST3_All'.  Stop.
kpp: undefined reference to `vtable for __cxxabiv1::__si_class_type_info'
loudness-scanner: error: ‘uint’ is not a member of ‘TagLib’; did you mean ‘uint’?
lmms-mao: CMake Error at CMakeLists.txt:540 (GET_TARGET_PROPERTY): The LOCATION property may not be read from target "bin2res".
miriyaki-xt: error: the type ‘const DISTRHO::Parameter’ of ‘constexpr’ variable ‘DISTRHO::kParameterBypass’ is not literal
kickmess: error: failed to get `baseview` as a dependency of package `kickmessvst v0.2.2 (/builddir/build/BUILD/kickmess-0.2.2-build/Kickmess-e02760ca72031587007c33395419d5f67e2296d8)`
nih-plug: error[E0554]: `#![feature]` may not be used on the stable release channel
milkdrop-preset: Cannot open: Invalid cross-device link on some files with tar ... -> To avoid this, you can use the --one-file-system option when creating the archive
rakarrack: rakarrack.cxx:22467:3: error: ‘fl_register_images’ was not declared in this scope
sonobus: Source/VersionInfo.cpp:119:116: error: no matching function for call to ‘VersionInfo::VersionInfo(<brace-enclosed initializer list>)’
  119 |     return std::unique_ptr<VersionInfo> (new VersionInfo ({ versionString, releaseNotes, std::move (parsedAssets) }));
vocoder: DPF/distrho/DistrhoDetails.hpp:750:34: error: the type ‘const DISTRHO::Parameter’ of ‘constexpr’ variable ‘DISTRHO::kParameterBypass’ is not literal
wolf-shaper: dpf/distrho/DistrhoDetails.hpp:750:34: error: the type ‘const DISTRHO::Parameter’ of ‘constexpr’ variable ‘DISTRHO::kParameterBypass’ is not literal

#### Warnings

chowkick: source.sh script not using the good url
csound-plugins: # {_libdir}/csound/plugins-6.0/libchua.so -> because eigen3 not correctly detected ...
FoxDot: restart at the end
audiogridder: package libpostproc not found -> to restart a little bit latter.

## TODO

For Rack v1: use these patches:
- https://github.com/hexdump0815/vcvrack-dockerbuild-v1

For Rack v2: use these patches:
- https://aur.archlinux.org/packages/vcvrack

Patch linuxampler following. this instructions:
- https://rpc.gehennom.org/2015/06/mellotron-on-the-raspberry-pi/

Porting intrinsics to ARM using simde:
- https://wiki.debian.org/SIMDEverywhere

