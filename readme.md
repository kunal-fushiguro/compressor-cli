# File Compressor & Decompressor

A simple CLI tool built with **Node.js** and **TypeScript** to compress and decompress files using streams.

## Usage

### Compress a File

```sh
node dist/index.js -c <input-file-path> -o <output-file-path>
```

Example:

```sh
node dist/index.js -c files/input.txt -o files/output.txt.gz
```

### Decompress a File

```sh
node dist/index.js -d <input-file-path> -o <output-file-path>
```

Example:

```sh
node dist/index.js -d files/output.txt.gz -o files/decompressed.txt
```
