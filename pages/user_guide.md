# Getting Started with Audinux

Table of Content
---
- [Audinux: Fedora Audio Production Environment](#audinux-fedora-audio-production-environment)

- [Practical audio routing and monitoring](#practical-audio-routing-and-monitoring)
  
  The goal is to help new users get sound working *first*, then gradually explore the deeper features of the system.
  
- **Understand Your Voice Chain**
  
  From input (mic or instrument) to output (speakers/headphones), understand how audio flows in a basic setup using PipeWire or JACK.

- **Build Your Audio Workflow**
  
  Learn how to connect software instruments, audio effects, and DAWs using Carla, JACK Patchbay, or similar tools.

- **Monitor and Test Sound**
  
  Make sure your inputs and outputs are routed correctly. Learn how to monitor levels and avoid xruns or silent devices.

- **Use Racks and Patchbays Visually**
  
  Use Carla to easily connect plugins and audio sources just like physical hardware.

---

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

# Practical Audio Routing and Monitoring

## Table of Contents
- [Introduction](#introduction)
- [Why Routing and Monitoring Matter](#why-routing-and-monitoring-matter)
- [Basic Setup with Carla](#basic-setup-with-carla)
- [Using Carla's Patchbay for Visual Audio Routing](#using-carlas-patchbay-for-visual-audio-routing)
- [Case Study: Podcast Workflow](#case-study-podcast-workflow)
- [Case Study: Guitar Monitoring with AI Amp Modelling](#case-study-guitar-monitoring-with-ai-amp-modelling)
- [Realtime Analysis: LSP Spectrum and Metering Tools](#realtime-analysis-lsp-spectrum-and-metering-tools)
- [Summary](#summary)

---

## Introduction
This guide demonstrates how to set up a flexible audio routing and monitoring environment on Fedora using tools provided by [Audinux](https://audinux.github.io). Whether you're a podcaster, musician, or voice-over artist, understanding signal flow and real-time monitoring is crucial.

---

## Why Routing and Monitoring Matter
Proper audio routing allows you to:
- Separate dry/wet signals
- Apply effects without destructive processing
- Monitor your signal path in real-time
- Detect audio issues early through analyzers

---

## Basic Setup with Carla
Carla is a powerful modular plugin host. It’s especially useful for setting up your audio environment graphically with JACK.

**Steps:**
- Launch Carla and enable JACK backend.
- Add plugins (Example: EQ, compressor).
- Connect your microphone input → plugin chain → a DAW like Ardour for recording, or directly to system playback.

**Example:**
```
[Mic Input] → [LSP Compressor (LV2)] → [LSP Parametric EQ (LV2)] → [Ardour Track Input]
```

---

## Using Carla's Patchbay for Visual Audio Routing

The **Patchbay** in Carla allows you to visually connect audio inputs and outputs between devices, plugins, analyzers, and monitoring endpoints. This graphical interface is ideal for setting up complex signal chains with real-time control.

### Example Workflow: Vocal Monitoring with Real-time Analysis

**Objective**: Route microphone input through effects, analyze the signal, and monitor the output via headphones.

**Steps**:

- **Launch Carla** and switch to the **Patchbay** tab.
- **Connect your USB microphone** (or input device) to a plugin for processing.
- **Chain your effects plugins**, such as EQ or compression.
- **Route the output to analyzer plugins**, like:
   - `LSP Spectrum Analyzer` (LV2) — visualizes frequency response
   - `x42 Stereo Meter` — shows stereo balance and peak levels
- **Send the analyzed and processed signal** to your **monitoring output**, (headphones or system playback).

### Routing Example:

- **Input**: Connect your microphone to an input channel in Carla.
- **Processing**: Add LV2 plugins (e.g., EQ, compressor) to process the input signal.
- **Analysis**: Route the output to LSP Spectrum Analyzer and x42 Stereo Meter for real-time visual feedback.
- **Monitoring**: Send the processed signal to headphones or system playback.

Each node in Carla's Patchbay represents a JACK client or port. Simply **click and drag connections** between them to build your signal chain. This setup provides precise control and immediate visual feedback, ideal for recording or live use.


---

## Case Study: Podcast Workflow

**Goal:** Apply compression and EQ to voice while monitoring with real-time spectrum analysis.

**Steps:**

- **Input:**  
  USB microphone

- **Processing Chain:**
  - `LSP Compressor (LV2)` – dynamic control of voice levels
  - `LSP Parametric EQ (LV2)` – clean up and enhance voice tone

- **Analysis:**  
  `LSP Spectrum Analyzer (LV2)` – monitor vocal spectrum in real time

- **Output:**
  - Route to `Ardour` for multi-track recording  
    or  
  - Route to `system:playback` (via JACK or PulseAudio bridge) for live monitoring

This workflow is built in **Carla** with the **JACK backend**. All plugins are available via the **Audinux COPR repository**.

---

## Case Study: Guitar Monitoring with AI Amp Modelling

**Goal:**  
Set up a guitar sound using AI-based amp modeling, allowing for real-time playing and recording.

**Steps:**

- **Input:**  
   Connect your guitar to a USB audio interface.

- **Processing Chain:**  
   - Use the `NAM Loader` plugin (Neural Amp Modeler) in **Guitarix** to load an AI-based amp model.  
   - Optionally add distortion plugins like `Tube Screamer` or `Rat`.  
   - Finish the tone with cabinet emulation and reverb plugins.

- **Output:**  
   - Record in a DAW like **Ardour**,  
   - or monitor in real time via `system:playback`.

**Note:**  
This setup is typically built using **Carla** with the **JACK backend**. All plugins are available via the **Audinux COPR repository**.

For a more detailed guide and background, see Yann Collette's article:  
[Using Artificial Intelligence to Set a Guitar Sound](https://fedoramagazine.org/using-artificial-intelligence-to-set-a-guitar-sound/)

---

## Realtime Analysis: LSP Spectrum and Metering Tools

**LSP Plugins** (LV2) include a set of high-quality analysis tools for real-time visual monitoring during mixing or recording.

These tools provide visual feedback on:

- **Frequency Spectrum** (Example: LSP Spectrum Analyzer)
- **Stereo Image** (Example: LSP Phase Meter)
- **Loudness and Levels** (Example: LSP Multiband Analyzer)

**Use Cases:**

- Evaluating your final mix
- Live monitoring during recording or streaming
- Ensuring a balanced stereo field and avoiding clipping

---

## Summary

Audinux provides a robust and modular toolkit for managing audio routing and monitoring workflows. By combining Carla, JACK, and powerful analyzer plugins, you can build a flexible and efficient audio environment tailored to your creative and technical needs.

---

###### tags: `Introduction`
