/**
 * @author WMXPY
 * @namespace Processor_Async
 * @description Processor
 */

import { AsyncProcessFunction } from "../declare";
import { asyncReduce } from "../util";

export class AsyncDataProcessor<T extends any = any> {

    public static create<T extends any = any>(): AsyncDataProcessor<T> {

        return new AsyncDataProcessor<T>();
    }

    private _processFunctions: Array<AsyncProcessFunction<T>>;

    private constructor() {

        this._processFunctions = [];
    }

    public get length(): number {

        return this._processFunctions.length;
    }

    public add(processor: AsyncProcessFunction<T>): this {

        this._processFunctions.push(processor);
        return this;
    }

    public insert(processor: AsyncProcessFunction<T>): this {

        this._processFunctions.unshift(processor);
        return this;
    }

    public addList(processors: Array<AsyncProcessFunction<T>>): this {

        for (const processor of processors) {
            this.add(processor);
        }
        return this;
    }

    public clear(): this {

        this._processFunctions = [];
        return this;
    }

    public async process(data: T): Promise<T> {

        return await asyncReduce(
            this._processFunctions,
            async (previous: T, current: AsyncProcessFunction<T>): Promise<T> => {
                return Promise.resolve(current(previous));
            },
            data,
        );
    }

    public clone(): AsyncDataProcessor<T> {

        const processor: AsyncDataProcessor<T> = new AsyncDataProcessor<T>();
        processor.addList(this._processFunctions);

        return processor;
    }
}
