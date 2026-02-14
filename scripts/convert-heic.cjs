const fs = require('fs/promises');
const path = require('path');
const convert = require('heic-convert');

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const HEIC_PATTERN = /\.(heic|heif)$/i;

async function convertFile(filename) {
  const inputPath = path.join(PUBLIC_DIR, filename);
  const outputName = filename.replace(HEIC_PATTERN, '.jpg');
  const outputPath = path.join(PUBLIC_DIR, outputName);

  const inputBuffer = await fs.readFile(inputPath);
  const outputBuffer = await convert({
    buffer: inputBuffer,
    format: 'JPEG',
    quality: 0.9,
  });

  await fs.writeFile(outputPath, outputBuffer);
  return { input: filename, output: outputName };
}

async function main() {
  const entries = await fs.readdir(PUBLIC_DIR);
  const heicFiles = entries.filter((file) => HEIC_PATTERN.test(file));

  if (heicFiles.length === 0) {
    console.log('No HEIC/HEIF files found in public/.');
    return;
  }

  const converted = [];
  for (const file of heicFiles) {
    const result = await convertFile(file);
    converted.push(result);
  }

  console.log(`Converted ${converted.length} file(s):`);
  for (const file of converted) {
    console.log(`${file.input} -> ${file.output}`);
  }
}

main().catch((error) => {
  console.error('HEIC conversion failed:', error);
  process.exit(1);
});
