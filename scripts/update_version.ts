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
        const year = date.getUTCFullYear();
        const month = date.getUTCMonth();
        const day = date.getUTCDate();
        const yearString = padStart(year, 4, '0');
        // const monthString = `${padStart(month + 1, 2, '0')}`;
        const getMonthName = () => {
            switch (month) {
                case 0: {
                    return 'January';
                }
                case 1: {
                    return 'February';
                }
                case 2: {
                    return 'March';
                }
                case 3: {
                    return 'April';
                }
                case 4: {
                    return 'May';
                }
                case 5: {
                    return 'June';
                }
                case 6: {
                    return 'July';
                }
                case 7: {
                    return 'August';
                }
                case 8: {
                    return 'September';
                }
                case 9: {
                    return 'October';
                }
                case 10: {
                    return 'November';
                }
                case 11: {
                    return 'December';
                }
            }
            return '';
        };
        const monthString = getMonthName().substring(0, 3);
        const dayString = padStart(day, 2, '0');
        return `${dayString} ${monthString} ${yearString}`;
    };
    const getTime = () => {
        const hours = date.getUTCHours();
        const minutes = date.getUTCMinutes();
        const hourString = padStart(hours, 2, '0');
        const minutesString = padStart(minutes, 2, '0');
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
