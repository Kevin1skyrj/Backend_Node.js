# 🔀 BOM and Endianness

## 📖 What is Endianness?

**Endianness** refers to the order in which bytes are stored in computer memory. There are two different ways computers store multi-byte data:

- Based on **Least Significant Bit (LSB)** and **Most Significant Bit (MSB)**
- Different manufacturers and systems may use different byte orders (just like date formats vary by country!)

---

## 🥚 Origin of the Name "Endian"

The term **"Endian"** comes from Jonathan Swift's novel *"Gulliver's Travels"*, where two groups argued about which end of an egg to crack first - the big end or the little end!

---

## 📊 Types of Endianness

| Type | Description | Byte Order | Used By |
|------|-------------|------------|---------|
| **Big Endian (BE)** | Most Significant Byte first | MSB → LSB | Networks, Humans prefer this |
| **Little Endian (LE)** | Least Significant Byte first | LSB → MSB | Most modern CPUs, easier for computers |

### Visual Example

```
Value: 0x12345678 (4 bytes)

┌─────────────────────────────────────────────────────────┐
│  BIG ENDIAN (Human-Friendly)                            │
│  Memory: [12] [34] [56] [78]                            │
│          ↑                 ↑                            │
│         MSB               LSB                           │
│  Reads left-to-right like humans read numbers           │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│  LITTLE ENDIAN (Computer-Friendly)                      │
│  Memory: [78] [56] [34] [12]                            │
│          ↑                 ↑                            │
│         LSB               MSB                           │
│  Least significant byte at smallest address             │
└─────────────────────────────────────────────────────────┘
```

---

## 🌐 The Network Problem

When transferring data over networks:

- One user might use **Big Endian**
- Another user might use **Little Endian**
- This causes **data interpretation confusion!**

### Solution: Share the Encoding Format

To solve this, we include the **byte order information** with the data transfer using a **BOM (Byte Order Mark)**.

---

## 📍 Byte Order Mark (BOM)

> **BOM** is a special Unicode character used at the beginning of a file or data stream to indicate the byte order (endianness).

### BOM Values

| Endianness | BOM Unicode | Hex Representation |
|------------|-------------|-------------------|
| **Big Endian** | U+FEFF | `FE FF` |
| **Little Endian** | U+FFFE | `FF FE` |

### How It Works

```
Data starts with:

FE FF → Big Endian detected
FF FE → Little Endian detected
```

---

## 📦 BOM in UTF-8

UTF-8 uses a **variable-width** encoding system. Since U+FEFF is a **3-byte character** (16+ bits), it gets encoded as:

```
UTF-8 BOM: EF BB BF (3 bytes)

Character: U+FEFF
Binary:    1111 1110 1111 1111
UTF-8:     EF BB BF
```

> ⚠️ **Note**: UTF-8 BOM is optional and often discouraged because UTF-8 doesn't have byte order issues (it's byte-oriented).

---

## 💻 Checking System Endianness

### Node.js

```javascript
const os = require('os');
console.log(os.endianness());  // Returns 'LE' or 'BE'
```

### Bash (Linux/macOS)

```bash
lscpu | grep "Byte Order"
```

### PowerShell (Windows)

```powershell
[BitConverter]::IsLittleEndian
# Returns: True (for Little Endian)
```

---

## 🟢 Node.js and Endianness

> **Node.js only supports Little Endian (LE)**

This is because most modern CPUs (Intel, AMD) use Little Endian architecture.

---

## 📊 Summary Table

| Aspect | Big Endian | Little Endian |
|--------|------------|---------------|
| **Byte Order** | MSB first | LSB first |
| **BOM** | U+FEFF (`FE FF`) | U+FFFE (`FF FE`) |
| **Human Readable** | ✅ Yes | ❌ No |
| **Computer Efficient** | ❌ No | ✅ Yes |
| **Used By** | Network protocols, Java | Intel/AMD CPUs, Node.js |
| **Example** | `12 34 56 78` | `78 56 34 12` |

---

## 💡 Key Takeaways

| Point | Description |
|-------|-------------|
| ✅ **Endianness** | Order of storing bytes (LSB vs MSB first) |
| ✅ **Big Endian** | Most Significant Byte first - human-friendly |
| ✅ **Little Endian** | Least Significant Byte first - computer-friendly |
| ✅ **BOM** | Byte Order Mark - indicates endianness in data |
| ✅ **BOM Values** | BE = U+FEFF, LE = U+FFFE |
| ✅ **UTF-8 BOM** | `EF BB BF` (3 bytes, optional) |
| ✅ **Node.js** | Only supports Little Endian |
| ✅ **Check Endianness** | `os.endianness()` in Node.js |
