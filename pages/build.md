![Audinux](../images/AudinuxBanner.png)

## Build

### Tickets

A ticket has been opened for vst3sdk: https://github.com/steinbergmedia/vst3sdk/issues/123

### Fedora 41

Build started.
Python2 has been removed from rawhide and Fedora 41.
Paython-3.12 is the default version of Python on Fedora 41.

#### guitarix-vst
```
mkdir -p build/Guitarix.vst3/Contents/x86_64-linux/gx_head/factorysettings
g++ -o build/Guitarix.vst3/Contents/x86_64-linux/Guitarix.so build/intermediate/Release/include_juce_audio_plugin_client_VST3_dd633589.o  build/Guitarix.a  -Lbuild -Lbuild -lasound -lfreetype -lcurl -lgiomm-2.4 -lgio-2.0 -lglibmm-2.4 -lgobject-2.0 -lsigc-2.0 -lavahi-gobject -lavahi-glib -lglib-2.0 -lavahi-common -lavahi-client -lfftw3f -lsndfile -llilv-0 -fvisibility=hidden -I../../guitarix/trunk/src/headers -lrt -ldl -lpthread  -Wl,-z,relro -Wl,--as-needed  -Wl,-z,pack-relative-relocs -Wl,-z,now -specs=/usr/lib/rpm/redhat/redhat-hardened-ld -specs=/usr/lib/rpm/redhat/redhat-annobin-cc1  -Wl,--build-id=sha1 -specs=/usr/lib/rpm/redhat/redhat-package-notes   -shared -Wl,--no-undefined  
/usr/bin/ld: build/Guitarix.a(include_juce_audio_formats_15f82001.o): in function `juce::AiffAudioFormat::createMemoryMappedReader(juce::File const&)':
/builddir/build/BUILD/vst3-guitarix-0.3-build/guitarix.vst/Builds/LinuxMakefile/../../JuceModules/modules/juce_core/containers/juce_Array.h:132:(.text.unlikely+0x12f2): undefined reference to `std::unique_ptr<juce::FileInputStream, std::default_delete<juce::FileInputStream> >::~unique_ptr()'
/usr/bin/ld: build/Guitarix.a(include_juce_audio_formats_15f82001.o): in function `juce::WavAudioFormat::createMemoryMappedReader(juce::File const&)':
/builddir/build/BUILD/vst3-guitarix-0.3-build/guitarix.vst/Builds/LinuxMakefile/../../JuceModules/modules/juce_core/containers/juce_Array.h:132:(.text.unlikely+0x1316): undefined reference to `std::unique_ptr<juce::FileInputStream, std::default_delete<juce::FileInputStream> >::~unique_ptr()'
/usr/bin/ld: build/Guitarix.a(include_juce_audio_formats_15f82001.o): in function `juce::AudioFormatManager::createReaderFor(juce::File const&)':
/builddir/build/BUILD/vst3-guitarix-0.3-build/guitarix.vst/Builds/LinuxMakefile/../../JuceModules/modules/juce_core/containers/juce_Array.h:132:(.text.unlikely+0x133a): undefined reference to `std::unique_ptr<juce::FileInputStream, std::default_delete<juce::FileInputStream> >::~unique_ptr()'
/usr/bin/ld: build/Guitarix.a(include_juce_audio_formats_15f82001.o): in function `juce::OggVorbisAudioFormat::estimateOggFileQuality(juce::File const&)':
/builddir/build/BUILD/vst3-guitarix-0.3-build/guitarix.vst/Builds/LinuxMakefile/../../JuceModules/modules/juce_audio_formats/codecs/juce_OggVorbisAudioFormat.cpp:502:(.text.unlikely+0x13b3): undefined reference to `std::unique_ptr<juce::FileInputStream, std::default_delete<juce::FileInputStream> >::~unique_ptr()'
/usr/bin/ld: build/Guitarix.a(include_juce_audio_formats_15f82001.o): in function `juce::WavAudioFormat::replaceMetadataInFile(juce::File const&, juce::StringPairArray const&) [clone .cold]':
/builddir/build/BUILD/vst3-guitarix-0.3-build/guitarix.vst/Builds/LinuxMakefile/../../JuceModules/modules/juce_audio_formats/codecs/juce_WavAudioFormat.cpp:2041:(.text.unlikely+0x1b83): undefined reference to `std::unique_ptr<juce::FileInputStream, std::default_delete<juce::FileInputStream> >::~unique_ptr()'
/usr/bin/ld: build/Guitarix.a(include_juce_audio_formats_15f82001.o):/builddir/build/BUILD/vst3-guitarix-0.3-build/guitarix.vst/Builds/LinuxMakefile/../../JuceModules/modules/juce_audio_formats/codecs/juce_WavAudioFormat.cpp:2074: more undefined references to `std::unique_ptr<juce::FileInputStream, std::default_delete<juce::FileInputStream> >::~unique_ptr()' follow
collect2: error: ld returned 1 exit status
```

#### dssi-vst
```
dssi-vst_gui.cpp: In function â€˜int main(int, char**)â€™:
dssi-vst_gui.cpp:237:60: error: invalid conversion from â€˜int (*)(const char*, const char*, lo_arg**, int, void*, void*)â€™ to â€˜lo_method_handlerâ€™ {aka â€˜int (*)(const char*, const char*, lo_arg**, int, lo_message_*, void*)â€™} [-fpermissive]
  237 |     lo_server_add_method(oscserver, "/dssi/control", "if", control_handler, 0);
      |                                                            ^~~~~~~~~~~~~~~
      |                                                            |
      |                                                            int (*)(const char*, const char*, lo_arg**, int, void*, void*)
In file included from /usr/include/lo/lo.h:32,
                 from dssi-vst_gui.cpp:25:
/usr/include/lo/lo_lowlevel.h:876:72: note:   initializing argument 4 of â€˜lo_method_* lo_server_add_method(lo_server, const char*, const char*, lo_method_handler, const void*)â€™
  876 |                                const char *typespec, lo_method_handler h,
      |                                                      ~~~~~~~~~~~~~~~~~~^
dssi-vst_gui.cpp:238:60: error: invalid conversion from â€˜int (*)(const char*, const char*, lo_arg**, int, void*, void*)â€™ to â€˜lo_method_handlerâ€™ {aka â€˜int (*)(const char*, const char*, lo_arg**, int, lo_message_*, void*)â€™} [-fpermissive]
  238 |     lo_server_add_method(oscserver, "/dssi/program", "ii", program_handler, 0);
      |                                                            ^~~~~~~~~~~~~~~
      |                                                            |
      |                                                            int (*)(const char*, const char*, lo_arg**, int, void*, void*)
/usr/include/lo/lo_lowlevel.h:876:72: note:   initializing argument 4 of â€˜lo_method_* lo_server_add_method(lo_server, const char*, const char*, lo_method_handler, const void*)â€™
  876 |                                const char *typespec, lo_method_handler h,
      |                                                      ~~~~~~~~~~~~~~~~~~^
dssi-vst_gui.cpp:239:62: error: invalid conversion from â€˜int (*)(const char*, const char*, lo_arg**, int, void*, void*)â€™ to â€˜lo_method_handlerâ€™ {aka â€˜int (*)(const char*, const char*, lo_arg**, int, lo_message_*, void*)â€™} [-fpermissive]
  239 |     lo_server_add_method(oscserver, "/dssi/configure", "ss", configure_handler, 0);
      |                                                              ^~~~~~~~~~~~~~~~~
      |                                                              |
      |                                                              int (*)(const char*, const char*, lo_arg**, int, void*, void*)
/usr/include/lo/lo_lowlevel.h:876:72: note:   initializing argument 4 of â€˜lo_method_* lo_server_add_method(lo_server, const char*, const char*, lo_method_handler, const void*)â€™
  876 |                                const char *typespec, lo_method_handler h,
      |                                                      ~~~~~~~~~~~~~~~~~~^
dssi-vst_gui.cpp:240:55: error: invalid conversion from â€˜int (*)(const char*, const char*, lo_arg**, int, void*, void*)â€™ to â€˜lo_method_handlerâ€™ {aka â€˜int (*)(const char*, const char*, lo_arg**, int, lo_message_*, void*)â€™} [-fpermissive]
  240 |     lo_server_add_method(oscserver, "/dssi/show", "", show_handler, 0);
      |                                                       ^~~~~~~~~~~~
      |                                                       |
      |                                                       int (*)(const char*, const char*, lo_arg**, int, void*, void*)
/usr/include/lo/lo_lowlevel.h:876:72: note:   initializing argument 4 of â€˜lo_method_* lo_server_add_method(lo_server, const char*, const char*, lo_method_handler, const void*)â€™
  876 |                                const char *typespec, lo_method_handler h,
      |                                                      ~~~~~~~~~~~~~~~~~~^
dssi-vst_gui.cpp:241:55: error: invalid conversion from â€˜int (*)(const char*, const char*, lo_arg**, int, void*, void*)â€™ to â€˜lo_method_handlerâ€™ {aka â€˜int (*)(const char*, const char*, lo_arg**, int, lo_message_*, void*)â€™} [-fpermissive]
  241 |     lo_server_add_method(oscserver, "/dssi/hide", "", hide_handler, 0);
      |                                                       ^~~~~~~~~~~~
      |                                                       |
      |                                                       int (*)(const char*, const char*, lo_arg**, int, void*, void*)
/usr/include/lo/lo_lowlevel.h:876:72: note:   initializing argument 4 of â€˜lo_method_* lo_server_add_method(lo_server, const char*, const char*, lo_method_handler, const void*)â€™
  876 |                                const char *typespec, lo_method_handler h,
      |                                                      ~~~~~~~~~~~~~~~~~~^
dssi-vst_gui.cpp:242:55: error: invalid conversion from â€˜int (*)(const char*, const char*, lo_arg**, int, void*, void*)â€™ to â€˜lo_method_handlerâ€™ {aka â€˜int (*)(const char*, const char*, lo_arg**, int, lo_message_*, void*)â€™} [-fpermissive]
  242 |     lo_server_add_method(oscserver, "/dssi/quit", "", quit_handler, 0);
      |                                                       ^~~~~~~~~~~~
      |                                                       |
      |                                                       int (*)(const char*, const char*, lo_arg**, int, void*, void*)
/usr/include/lo/lo_lowlevel.h:876:72: note:   initializing argument 4 of â€˜lo_method_* lo_server_add_method(lo_server, const char*, const char*, lo_method_handler, const void*)â€™
  876 |                                const char *typespec, lo_method_handler h,
      |                                                      ~~~~~~~~~~~~~~~~~~^
dssi-vst_gui.cpp:243:49: error: invalid conversion from â€˜int (*)(const char*, const char*, lo_arg**, int, void*, void*)â€™ to â€˜lo_method_handlerâ€™ {aka â€˜int (*)(const char*, const char*, lo_arg**, int, lo_message_*, void*)â€™} [-fpermissive]
  243 |     lo_server_add_method(oscserver, NULL, NULL, debug_handler, 0);
      |                                                 ^~~~~~~~~~~~~
      |                                                 |
      |                                                 int (*)(const char*, const char*, lo_arg**, int, void*, void*)
/usr/include/lo/lo_lowlevel.h:876:72: note:   initializing argument 4 of â€˜lo_method_* lo_server_add_method(lo_server, const char*, const char*, lo_method_handler, const void*)â€™
  876 |                                const char *typespec, lo_method_handler h,
      |                                                      ~~~~~~~~~~~~~~~~~~^
make: *** [Makefile:77: dssi-vst_gui] Error 1
```

#### seq192

```
Compilation from src/core/perform.cpp to src/core/perform.o 
g++ -g -Og  -Wall -Wpointer-arith -O2 -flto=auto -ffat-lto-objects -fexceptions -g -grecord-gcc-switches -pipe -Wall -Werror=format-security -Wp,-U_FORTIFY_SOURCE,-D_FORTIFY_SOURCE=3 -Wp,-D_GLIBCXX_ASSERTIONS -specs=/usr/lib/rpm/redhat/redhat-hardened-cc1 -fstack-protector-strong -specs=/usr/lib/rpm/redhat/redhat-annobin-cc1  -m64 -march=x86-64 -mtune=generic -fasynchronous-unwind-tables -fstack-clash-protection -fcf-protection -mtls-dialect=gnu2 -fno-omit-frame-pointer -mno-omit-leaf-frame-pointer  -I/usr/include/gtkmm-3.0 -I/usr/lib64/gtkmm-3.0/include -I/usr/include/atkmm-1.6 -I/usr/lib64/atkmm-1.6/include -I/usr/include/gtk-3.0/unix-print -I/usr/include/gdkmm-3.0 -I/usr/lib64/gdkmm-3.0/include -I/usr/include/giomm-2.4 -I/usr/lib64/giomm-2.4/include -I/usr/include/gtk-3.0 -I/usr/include/cloudproviders -I/usr/include/cairo -I/usr/include/at-spi2-atk/2.0 -I/usr/include/at-spi-2.0 -I/usr/include/atk-1.0 -I/usr/include/dbus-1.0 -I/usr/lib64/dbus-1.0/include -I/usr/include/gio-unix-2.0 -I/usr/include/pangomm-1.4 -I/usr/lib64/pangomm-1.4/include -I/usr/include/glibmm-2.4 -I/usr/lib64/glibmm-2.4/include -I/usr/include/cairomm-1.0 -I/usr/lib64/cairomm-1.0/include -I/usr/include/sigc++-2.0 -I/usr/lib64/sigc++-2.0/include -I/usr/include/pango-1.0 -I/usr/include/pixman-1 -I/usr/include/fribidi -I/usr/include/libxml2 -I/usr/include/harfbuzz -I/usr/include/freetype2 -I/usr/include/gdk-pixbuf-2.0 -I/usr/include/libpng16 -I/usr/include/webp -I/usr/include/glib-2.0 -I/usr/lib64/glib-2.0/include -DWITH_GZFILEOP -I/usr/include/libmount -I/usr/include/blkid -I/usr/include/sysprof-6 -pthread -DGTKMM_DISABLE_DEPRECATED -D USE_GTK  -D USE_JACK -MMD -MP -c src/core/perform.cpp -o src/core/perform.o
src/core/perform.cpp: In member function â€˜void perform::init()â€™:
src/core/perform.cpp:107:43: error: invalid conversion from â€˜int (*)(const char*, const char*, lo_arg**, int, void*, void*)â€™ to â€˜lo_method_handlerâ€™ {aka â€˜int (*)(const char*, const char*, lo_arg**, int, lo_message_*, void*)â€™} [-fpermissive]
  107 |         oscserver->add_method(NULL, NULL, &perform::osc_callback, this);
      |                                           ^~~~~~~~~~~~~~~~~~~~~~
      |                                           |
      |                                           int (*)(const char*, const char*, lo_arg**, int, void*, void*)
In file included from src/core/perform.h:27,
                 from src/core/perform.cpp:17:
src/core/osc.h:39:77: note:   initializing argument 3 of â€˜void OSCServer::add_method(const char*, const char*, lo_method_handler, void*)â€™
   39 |     void add_method (const char* path, const char* types, lo_method_handler h, void* user_data = NULL);
      |                                                           ~~~~~~~~~~~~~~~~~~^
src/core/perform.cpp: In static member function â€˜static int perform::osc_callback(const char*, const char*, lo_arg**, int, void*, void*)â€™:
src/core/perform.cpp:345:68: error: invalid conversion from â€˜void*â€™ to â€˜lo_messageâ€™ {aka â€˜lo_message_*â€™} [-fpermissive]
  345 |                 address = lo_address_get_url(lo_message_get_source(data));
      |                                                                    ^~~~
      |                                                                    |
      |                                                                    void*
In file included from /usr/include/lo/lo.h:32,
                 from src/core/osc.h:20:
/usr/include/lo/lo_lowlevel.h:330:45: note:   initializing argument 1 of â€˜lo_address_* lo_message_get_source(lo_message)â€™
  330 | lo_address lo_message_get_source(lo_message m);
```

#### psi-plugin

python2 problem

### Fedora 40

A lot of implicit function declarations in C.

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

