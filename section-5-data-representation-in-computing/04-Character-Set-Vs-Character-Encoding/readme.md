# 🔤 Character Set vs Character Encoding

## 📖 Overview

Understanding the difference between **Character Set** and **Character Encoding** is fundamental to how computers represent and process text.

---

## 📋 Character Set

> A **Character Set** is a collection of characters where each character is assigned a unique code point (number) to represent it.

### Popular Character Sets

| Character Set | Total Characters | Bits Required | Calculation |
|---------------|------------------|---------------|-------------|
| **ASCII** | 128 | 7 bits | $2^7 = 128$ |
| **Extended ASCII** | 256 | 8 bits | $2^8 = 256$ |
| **Unicode** | 1.1 Million+ | Variable | Supports virtually all world scripts |

---

### 🅰️ ASCII (American Standard Code for Information Interchange)

- Developed in the 1960s for American English
- Contains **128 characters** (0-127)
- Includes:
  - Uppercase letters (A-Z)
  - Lowercase letters (a-z)
  - Digits (0-9)
  - Punctuation and special characters
  - Control characters (newline, tab, etc.)

```
Example ASCII Codes:
'A' = 65    'a' = 97    '0' = 48
'B' = 66    'b' = 98    '1' = 49
'Z' = 90    'z' = 122   '9' = 57
```

---

### 🌍 Unicode

- A universal character set
- Can encode **1.1 Million+ characters**
- Supports virtually every language and symbol worldwide
- Includes emojis, mathematical symbols, and ancient scripts

---

## 🔧 Character Encoding

> **Character Encoding** is the method/scheme used to convert character codes (from a character set) into binary data that computers can store and transmit.

### Key Difference

| Aspect | Character Set | Character Encoding |
|--------|---------------|-------------------|
| **Definition** | What characters exist and their code points | How those codes are stored in bytes |
| **Purpose** | Assigns numbers to characters | Converts numbers to binary |
| **Example** | Unicode assigns 'A' = 65 | UTF-8 encodes 65 as `01000001` |

---

### Common Encoding Schemes

| Encoding | Bits Used | Character Set | Description |
|----------|-----------|---------------|-------------|
| **ASCII** | 7 bits | ASCII | Self-encoding (encoding = character set) |
| **UTF-8** | 8-32 bits | Unicode | Variable-width, backward compatible with ASCII |
| **UTF-16** | 16-32 bits | Unicode | Uses 2 or 4 bytes per character |
| **UTF-32** | 32 bits | Unicode | Fixed-width, 4 bytes per character |

---

## 🔄 How It Works Together

```
Character → Character Set → Character Encoding → Binary

   'A'    →   Unicode (65) →     UTF-8        → 01000001
   '€'    →  Unicode (8364) →    UTF-8        → 11100010 10000010 10101100
```

---

## 💡 Key Takeaways

| Point | Description |
|-------|-------------|
| ✅ **Character Set** | Defines WHAT characters exist and assigns code points |
| ✅ **Character Encoding** | Defines HOW those code points are stored as bytes |
| ✅ **ASCII** | Both a character set AND its own encoding (7 bits) |
| ✅ **Unicode** | A character set that can use multiple encodings (UTF-8, UTF-16, UTF-32) |
| ✅ **UTF-8** | Most popular encoding - variable width, efficient, backward compatible |

---

## 📊 Visual Summary

```
┌─────────────────────────────────────────────────────────┐
│                    CHARACTER SET                         │
│  (Assigns unique numbers to characters)                  │
│                                                          │
│   ASCII: 128 chars (2⁷)    Unicode: 1.1M+ chars         │
└─────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────┐
│                   CHARACTER ENCODING                     │
│  (Converts code points to binary bytes)                  │
│                                                          │
│   ASCII → 7 bits     UTF-8 → 8-32 bits (variable)       │
└─────────────────────────────────────────────────────────┘
```
