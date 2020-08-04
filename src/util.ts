/**
 * @author WMXPY
 * @namespace Processor
 * @description Util
 */

export const asyncReduce = async <T = any, R = any>(arr: T[], func: (previous: R, current: T, index: number, arr: T[]) => Promise<R>, initial: R): Promise<R> => {

    const length: number = arr.length;
    let current: R = initial;

    for (let i = 0; i < length; i++) {
        current = await func(current, arr[i], i, arr);
    }
    return current;
};
