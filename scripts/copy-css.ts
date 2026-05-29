import { copyFileSync, existsSync, mkdirSync, readdirSync } from "fs";
import { join } from "path";

const srcDir = join(import.meta.dir, "../src");
const distDir = join(import.meta.dir, "../dist");

if (!existsSync(distDir)) {
    mkdirSync(distDir, { recursive: true });
}

for (const file of readdirSync(srcDir)) {
    if (file.endsWith(".css")) {
        copyFileSync(join(srcDir, file), join(distDir, file));
    }
}
