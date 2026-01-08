# 🔐 UTF-8 Encoding

## 📖 Overview

UTF-8 (Unicode Transformation Format - 8 bit) is the most widely used character encoding on the web. It uses a **variable-width encoding system** to efficiently store characters.

---

## 🛠️ Tools to Inspect Encoded Data

### Terminal Commands

| Command | Description |
|---------|-------------|
| `xxd <filename>` | Shows the **Unicode/Hex** values of file content |
| `xxd -b <filename>` | Shows the **Binary** representation |
| `xxd -g 1 <filename>` | Groups output by **1 byte** for better readability |

### Example Usage

```bash
# View hexadecimal representation
xxd myfile.txt

# View binary representation
xxd -b myfile.txt

# View with 1-byte grouping
xxd -g 1 myfile.txt
```

### VS Code Extension

📦 **Hex Editor** - A powerful extension to view and edit files in hexadecimal format directly in VS Code.

---

## ⏰ When Does Encoding Happen?

Encoding works at **two different times**:

```
┌─────────────────────────────────────────────────────────┐
│  1️⃣  SAVING THE FILE                                    │
│      Character → UTF-8 Encoding → Binary on Disk        │
└─────────────────────────────────────────────────────────┘
                           ↕
┌─────────────────────────────────────────────────────────┐
│  2️⃣  OPENING THE FILE                                   │
│      Binary from Disk → UTF-8 Decoding → Character      │
└─────────────────────────────────────────────────────────┘
```

---

## 📏 UTF-8 Variable Byte System

UTF-8 uses a **variable-width encoding** - different characters use different numbers of bytes:

- Characters up to **U+007F** (127 in decimal/ASCII) use only **7 bits** (1 byte)
- This makes UTF-8 **backward compatible** with ASCII

---

## 📐 UTF-8 Encoding Rules

### Byte Patterns

| Bytes | Bit Pattern | Usable Bits | Unicode Range |
|-------|-------------|-------------|---------------|
| **1 Byte** | `0xxxxxxx` | 7 bits | U+0000 to U+007F |
| **2 Bytes** | `110xxxxx 10xxxxxx` | 11 bits | U+0080 to U+07FF |
| **3 Bytes** | `1110xxxx 10xxxxxx 10xxxxxx` | 16 bits | U+0800 to U+FFFF |
| **4 Bytes** | `11110xxx 10xxxxxx 10xxxxxx 10xxxxxx` | 21 bits | U+10000 to U+10FFFF |

---

### 🔍 Pattern Breakdown

```
1 Byte:   0xxxxxxx
          ↑
          Leading 0 indicates single byte character

2 Bytes:  110xxxxx  10xxxxxx
          ↑↑↑       ↑↑
          110 = Start of 2-byte sequence
                    10 = Continuation byte

3 Bytes:  1110xxxx  10xxxxxx  10xxxxxx
          ↑↑↑↑      ↑↑        ↑↑
          1110 = Start of 3-byte sequence
                    10 = Continuation bytes

4 Bytes:  11110xxx  10xxxxxx  10xxxxxx  10xxxxxx
          ↑↑↑↑↑     ↑↑        ↑↑        ↑↑
          11110 = Start of 4-byte sequence
                    10 = Continuation bytes
```

---

## 📝 Practical Examples

### 1 Byte Character (ASCII)

```
Character: 'A'
Unicode:   U+0041 (65 in decimal)
Binary:    01000001
UTF-8:     01000001 (1 byte)
```

### 2 Byte Character

```
Character: '©' (Copyright symbol)
Unicode:   U+00A9 (169 in decimal)
Binary:    10101001
UTF-8:     11000010 10101001 (2 bytes)
           110|00010 10|101001
              ↓         ↓
           5 bits +   6 bits = 11 bits total
```

### 3 Byte Character

```
Character: '€' (Euro symbol)
Unicode:   U+20AC (8364 in decimal)
Binary:    0010 0000 1010 1100
UTF-8:     11100010 10000010 10101100 (3 bytes)
           1110|0010 10|000010 10|101100
               ↓        ↓         ↓
           4 bits +  6 bits +  6 bits = 16 bits total
```

### 4 Byte Character

```
Character: '😀' (Emoji)
Unicode:   U+1F600
UTF-8:     11110000 10011111 10011000 10000000 (4 bytes)
```

---

## 📊 Summary Table

| Feature | Description |
|---------|-------------|
| **Encoding Type** | Variable-width (1-4 bytes) |
| **ASCII Compatible** | Yes (first 128 characters identical) |
| **Max Bits Per Character** | 21 bits (4 bytes) |
| **Leading Byte Pattern** | `0`, `110`, `1110`, `11110` |
| **Continuation Byte** | Always starts with `10` |

---

## 💡 Key Takeaways

- ✅ UTF-8 is **variable-width** - uses 1 to 4 bytes per character
- ✅ **ASCII characters** (0-127) use only 1 byte - backward compatible
- ✅ Leading bits indicate how many bytes the character uses
- ✅ Continuation bytes always start with `10`
- ✅ Encoding happens when **saving** and decoding when **opening** files
- ✅ Use `xxd` command or **Hex Editor** extension to inspect encoded data
