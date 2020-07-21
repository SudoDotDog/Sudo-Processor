/**
 * @author WMXPY
 * @namespace Processor
 * @description Processor
 */

import { ProcessFunction } from "./declare";

export class DataProcessor<T extends any = any> {

    public static create<T extends any = any>(): DataProcessor<T> {

        return new DataProcessor<T>();
    }

    private readonly _processFunctions: Array<ProcessFunction<T>>;

    private constructor() {

        this._processFunctions = [];
    }

    public process(data: T): T {

        return this._processFunctions.reduce(
            (previous: T, current: ProcessFunction<T>) => {
                return current(previous);
            },
            data,
        );
    }
}
