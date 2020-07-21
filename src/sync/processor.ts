/**
 * @author WMXPY
 * @namespace Processor_Sync
 * @description Processor
 */

import { ProcessFunction } from "../declare";

export class DataProcessor<T extends any = any> {

    public static create<T extends any = any>(): DataProcessor<T> {

        return new DataProcessor<T>();
    }

    private _processFunctions: Array<ProcessFunction<T>>;

    private constructor() {

        this._processFunctions = [];
    }

    public get length(): number {

        return this._processFunctions.length;
    }

    public add(processor: ProcessFunction<T>): this {

        this._processFunctions.push(processor);
        return this;
    }

    public clear(): this {

        this._processFunctions = [];
        return this;
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