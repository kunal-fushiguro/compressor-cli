import fs from "fs";
import zlib from "zlib";
// import path from "path";

function compressFile(inputFileName: string, outputFileName: string) {
  const readStream = fs.createReadStream(inputFileName);
  const writeStream = fs.createWriteStream(outputFileName);
  const gzip = zlib.createGzip();
  console.log("Compressing file...");

  readStream.pipe(gzip).pipe(writeStream);

  writeStream.on("finish", () => {
    console.log(`Compression completed: ${outputFileName}`);
  });

  readStream.on("error", (err) => console.error("Read error:", err));
  writeStream.on("error", (err) => console.error("Write error:", err));
}

export { compressFile };
