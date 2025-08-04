export function sleepMillis(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, 1000 * seconds));
}

export function sleepMins(mins) {
    return new Promise(resolve => setTimeout(resolve, 60000 * mins));
}

export function sleepHours(hours) {
    return new Promise(resolve => setTimeout(resolve, 3600000 * hours));
}