'use strict';

import { execSync } from 'child_process';
import fs from 'fs';
import { Color, output } from './output';

function main() {
    const packageJson = JSON.parse(
        fs.readFileSync('package.json', {
            encoding: 'utf-8'
        })
    );
    execSync('git add .');
    execSync(`git commit -m "${packageJson.version}"`);
    execSync('git push');
    output('\n');
    output(`UPDATED VERSION TO ${packageJson.version}`, {
        color: Color.GREEN
    });
    output('\n');
}

main();
