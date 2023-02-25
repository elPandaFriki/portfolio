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
    const date = new Date();
    const getDate = () => {
        const yearString = `${date.getUTCFullYear()}`;
        const monthString = `${padStart(date.getUTCMonth() + 1, 2, '0')}`;
        const dayString = `${padStart(date.getUTCDate(), 2, '0')}`;
        return `${yearString}-${monthString}-${dayString}`;
    };
    const getTime = () => {
        const hourString = `${padStart(date.getUTCHours(), 2, '0')}`;
        const minutesString = `${padStart(date.getUTCMinutes(), 2, '0')}`;
        return `${hourString}:${minutesString}`;
    };
    return `${getDate()} ${getTime()}`;
}

async function main() {
    const packageJson = JSON.parse(
        fs.readFileSync('package.json', {
            encoding: 'utf-8'
        })
    );
    const updateDate = () => {
        packageJson.date = `${getUniversalString()}`;
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
