# Getting Started with Audinux

Table of Content
---
- **Audinux: Fedora Audio Production Environment** 

- **Practical audio routing and monitoring**
  The goal is to help new users get sound working *first*, then gradually explore the deeper features of the system.
  
- **Understand Your Voice Chain**  
  From input (mic or instrument) to output (speakers/headphones), understand how audio flows in a basic setup using PipeWire or JACK.

- **Build Your Audio Workflow**  
  Learn how to connect software instruments, audio effects, and DAWs using Carla, JACK Patchbay, or similar tools.

- **Monitor and Test Sound**  
  Make sure your inputs and outputs are routed correctly. Learn how to monitor levels and avoid xruns or silent devices.

- **Use Racks and Patchbays Visually**  
  Use Carla to easily connect plugins and audio sources just like physical hardware.


# Audinux: Fedora Audio Production Environment

Audinux is a Fedora COPR repository designed to provide a complete audio production environment on Fedora. Audinux maintains the latest upstream versions of audio packages to ensure users have access to the most up-to-date features and fixes. Below is a categorized summary of the main software available in Audinux:

## Plugin Hosts and Session Management

- **Carla**: A modular plugin host that supports LV2, VST, and LADSPA plugins.
- **Ray Session**: A session manager for JACK that allows you to save and restore the state of multiple audio applications.

## Audio Plugins and Effects

- **LADSPA, LV2, VST Plugins**: A wide selection of audio effects and virtual instruments, including plugins from Calf Studio Gear, x42, LSP, and Airwindows.

## Digital Audio Workstations (DAWs)

- **Ardour**: A professional-grade DAW for audio and MIDI editing.
- **LMMS**: A DAW well-suited for electronic music production, focused on sample-based workflows.

## Modular Systems

- **VCV Rack**: A virtual modular synthesizer that allows patching together various modules to create sound.
- **Cardinal**: A standalone and plugin version of VCV Rack, optimized for integration with DAWs and plugin hosts.

## Guitar and Amp Simulation

- **Guitarix**: A virtual guitar amp and effects simulator with a wide range of customization options.
- **AIDA-X, NAM**: AI-powered amp modeling tools that replicate the sound of real amplifiers.

## Synths and Samplers

- **ZynAddSubFX, Surge**: Versatile synthesizers with a broad palette of sounds.
- **SFZ / SF2 Players**: Sampler engines that support SoundFont files for instrument playback.

## Spectrum Analyzer

- **LSP Spectrum Analyzer**: You can connect LSP Analyzer in LV2 format to Ardour or Carla to receive real-time feedback during mixing.

## Audio Signal Visualisation and Measurement

- **VAMP**: An audio processing plugin system for plugins that extract descriptive information from audio data — typically referred to as audio analysis plugins or audio feature extraction plugins.
- **Sonic Visualiser**: A program for highly configurable detailed visualisation, analysis, and annotation of audio recordings.

---

###### tags: `Introduction`
