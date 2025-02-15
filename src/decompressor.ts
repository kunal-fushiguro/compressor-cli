import fs from "fs";
import zlib from "zlib";

function decompressFile(inputFileName: string, outputFileName: string) {
  const readStream = fs.createReadStream(inputFileName);
  const writeStream = fs.createWriteStream(outputFileName);
  const gunzip = zlib.createGunzip();
  console.log("Decompressing file...");

  readStream.pipe(gunzip).pipe(writeStream);

  writeStream.on("finish", () => {
    console.log(`Decompression completed: ${outputFileName}`);
  });

  readStream.on("error", (err) => console.error("Read error:", err));
  writeStream.on("error", (err) => console.error("Write error:", err));
}

export { decompressFile };
