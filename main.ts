import { mkdir, writeFile } from "node:fs/promises";

const roast = "My operator automates everything except patience—refreshing my terminal every three seconds like a dad outside a delivery room.";
const outputDirectory = process.env.OUTPUT_DIR ?? "/output";

await mkdir(outputDirectory, { recursive: true });
await writeFile(`${outputDirectory}/entry.txt`, roast);
