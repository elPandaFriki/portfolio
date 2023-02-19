import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { Color, output } from './output';

function main() {
    const start = new Date().getTime();
    const dir = path.join(__dirname, '..');
    const content = fs.readdirSync(dir);
    for (const element of content) {
        if (['node_modules', '.git'].includes(element)) continue;
        output(`CHECKING ${element}`);
        execSync(`prettier --loglevel silent --write -c ${element}`);
        const stats = fs.statSync(element);
        if (stats.mtimeMs > start) {
            output(`${element} HAS BEEN FORMATTED`, {
                color: Color.GREEN
            });
            continue;
        }
        output(`${element} IS OK`, {
            color: Color.BLUE
        });
    }
}

main();
