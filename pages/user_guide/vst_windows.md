# VST from Windows

## yabridge

yabridge is a wrapper tool which will generate a Linux compatible VST2 / VST3 / CLAP from a VST2 / VST3 / CLAP Windows dll.
The source code of this tool is hosted here: <https://github.com/robbert-vdh/yabridge>

First, install yabridge:
```
$ dnf install yabridge
```

Set the folder where all the Linux compatible VST files will be generated (by default, it's in <USER_HOME>/.vst / <USER_HOME>/.vst3 / <USER_HOME>/.clap):
```
$ yabridgectl set --path=<path>
```

Set the folder where all the VST dll files are installed:
```
$ yabridgectl add <vst_folder>
```

Now run the synchronisation to create all the Linux compatible wrappers:
```
$ yabridgectl sync
```

# linvst
