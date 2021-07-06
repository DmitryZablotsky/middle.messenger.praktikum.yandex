export const identity = value => value;

export const last = list => list instanceof Array ? list[list.length - 1] : undefined;

export const first = list => list instanceof Array ? list[0] : undefined;

export const isEmpty = value => {
    if (value instanceof Map || value instanceof Set) {
        return !value.size;
    }

    return !Object.keys(value || {}).length;
}