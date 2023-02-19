'use strict';

import fs from 'fs';

function padStart(text: number | string, length: number, chars: string): string {
    if (typeof text != 'string') text = text.toString();
    while (text.length < length) {
        text = `${chars}${text}`;
    }
    return text;
}

function getUniversalString(): string {
    const date = arguments[0] != null ? new Date(arguments[0]) : new Date();
    return `${date.getFullYear()}-${padStart(date.getMonth() + 1, 2, '0')}-${padStart(
        date.getDate(),
        2,
        '0'
    )} ${padStart(date.getHours(), 2, '0')}:${padStart(date.getMinutes(), 2, '0')}`;
}

async function main() {
    const packageJson = JSON.parse(
        fs.readFileSync('package.json', {
            encoding: 'utf-8'
        })
    );
    const updateDate = () => {
        packageJson.date = `${getUniversalString()} GTM+1`;
    };
    const updateVersion = () => {
        const updateMinor = process.env.npm_config_minor === 'true' || false;
        const updateMayor = process.env.npm_config_major === 'true' || false;
        const updatePatch = process.env.npm_config_patch === 'true' || false;
        const noFlags = !updateMayor && !updateMinor && !updatePatch;
        const [mayor, minor, patch] = packageJson.version.split('.');
        packageJson.version = `${parseInt(mayor) + (updateMayor ? 1 : 0)}.${
            parseInt(updateMayor ? 0 : minor) + (updateMinor ? 1 : 0)
        }.${parseInt(updateMayor || updateMinor ? 0 : patch) + (updatePatch || noFlags ? 1 : 0)}`;
    };
    updateDate();
    updateVersion();
    fs.writeFileSync('package.json', JSON.stringify(packageJson, null, '\t'));
}

main();
