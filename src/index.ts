import path from "path";
import { compressFile } from "./compressor";
import { decompressFile } from "./decompressor";

const cmd = process.argv.slice(2);

if (cmd.length > 4) {
  console.error(
    "Usage: index.js [-c | -d] <input-file-path> [-o <output-file-path>]"
  );
  process.exit(1);
}

const currentDir = process.cwd();

function main() {
  if (cmd[0] === "-c" && cmd[2] === "-o") {
    const filepath = path.join(currentDir, cmd[1]);
    const outputpath = path.join(currentDir, cmd[3]);
    compressFile(filepath, outputpath);
  } else if (cmd[0] === "-d" && cmd[2] === "-o") {
    const filepath = path.join(currentDir, cmd[1]);
    const outputpath = path.join(currentDir, cmd[3]);
    decompressFile(filepath, outputpath);
  } else {
    console.error(
      "Usage: index.js [-c | -d] <input-file-path> [-o <output-file-path>]"
    );
    process.exit(1);
  }
}

main();
