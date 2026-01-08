# Binary Data on Physical Level

## Overview
This section explores how data is stored and transferred in computer systems using binary digits (0s and 1s).

## Data Representation Categories

Data representation is fundamentally divided into two categories:
1. **Data Storage**
2. **Data Transfer**

---

## Data Storage

### Physical Storage Mechanisms

#### 1. Transistors (RAM/Cache)
- Data is stored using electrons and protons
- Multiple transistors work together to hold data
- **Presence of charge = 1 (Binary digit 1)**
- **Absence of charge = 0 (Binary digit 0)**

#### 2. Hard Disk Drives (HDD)
- Uses magnetic plates for storage
- Data is represented through magnetic poles:
  - **South Pole = 0**
  - **North Pole = 1**

> **Note:** BITS stands for **BINARY DIGITS**

---

## Data Transfer

### Wireless Communication
- Uses **Electromagnetic waves** (specially Radio waves)
- Binary data (0s and 1s) can be represented by:
  - **High/Low Amplitudes**, OR
  - **Frequency variations**
- The representation method depends on the specific condition and protocol

### Wired Communication

#### 1. Fiber Optic Cables
- Data is transmitted using light pulses
- Light travels through the cable at very high speeds
- Binary representation:
  - **Light = 1**
  - **No Light = 0**

#### 2. Copper Wire
- Cannot transmit light, uses electricity instead
- Binary representation:
  - **High Voltage = 1**
  - **Low Voltage = 0**

---

## Storing Complex Data (Images, Videos, Media)

### How It Works

Since computer systems only understand and store **binary digits** at the physical level (via pulses, magnetic poles, voltages, frequency, etc.), all complex data types must be encoded into binary format.

### Key Concept
- Binary digits are **encoded** in specific formats
- These formats can be converted into other media forms (images, videos, audio, etc.)
- **The way of interpreting the binary data is what differs** between different media types

### Examples
- **Images**: Binary data interpreted as pixels with color values
- **Videos**: Binary data interpreted as sequences of image frames with timing information
- **Audio**: Binary data interpreted as sound wave amplitudes over time
- **Text**: Binary data interpreted using character encoding schemes (ASCII, UTF-8, etc.)

---

## Summary

- Physical storage uses charge states, magnetic poles, or other physical properties to represent 0s and 1s
- Data transfer uses various signal properties (light, voltage, frequency, amplitude) to transmit 0s and 1s
- All complex data types are ultimately encoded as binary digits
- The interpretation layer determines how binary data is converted to meaningful information
