/**
 * @author WMXPY
 * @namespace Processor_Async
 * @description Side Effect
 */

import { AsyncSideEffectFunction } from "../declare";

export class AsyncSideEffect<T extends any = any> {

    public static create<T extends any = any>(): AsyncSideEffect<T> {

        return new AsyncSideEffect<T>();
    }

    private _sideEffectFunctions: Array<AsyncSideEffectFunction<T>>;

    private constructor() {

        this._sideEffectFunctions = [];
    }

    public get length(): number {

        return this._sideEffectFunctions.length;
    }

    public add(sideEffect: AsyncSideEffectFunction<T>): this {

        this._sideEffectFunctions.push(sideEffect);
        return this;
    }

    public insert(sideEffect: AsyncSideEffectFunction<T>): this {

        this._sideEffectFunctions.unshift(sideEffect);
        return this;
    }

    public addList(sideEffects: Array<AsyncSideEffectFunction<T>>): this {

        for (const sideEffect of sideEffects) {
            this.add(sideEffect);
        }
        return this;
    }

    public clear(): this {

        this._sideEffectFunctions = [];
        return this;
    }

    public async execute(data: T): Promise<void> {

        for (const sideEffectFunction of this._sideEffectFunctions) {

            await Promise.resolve(sideEffectFunction(data));
        }
    }

    public clone(): AsyncSideEffect<T> {

        const sideEffect: AsyncSideEffect<T> = new AsyncSideEffect<T>();
        sideEffect.addList(this._sideEffectFunctions);

        return sideEffect;
    }
}
