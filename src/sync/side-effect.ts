/**
 * @author WMXPY
 * @namespace Processor_Sync
 * @description Side Effect
 */

import { SideEffectFunction } from "../declare";

export class SideEffect<T extends any = any> {

    public static create<T extends any = any>(): SideEffect<T> {

        return new SideEffect<T>();
    }

    private _sideEffectFunctions: Array<SideEffectFunction<T>>;

    private constructor() {

        this._sideEffectFunctions = [];
    }

    public get length(): number {

        return this._sideEffectFunctions.length;
    }

    public add(sideEffect: SideEffectFunction<T>): this {

        this._sideEffectFunctions.push(sideEffect);
        return this;
    }

    public insert(sideEffect: SideEffectFunction<T>): this {

        this._sideEffectFunctions.unshift(sideEffect);
        return this;
    }

    public addList(sideEffects: Array<SideEffectFunction<T>>): this {

        for (const sideEffect of sideEffects) {
            this.add(sideEffect);
        }
        return this;
    }

    public clear(): this {

        this._sideEffectFunctions = [];
        return this;
    }

    public execute(data: T): void {

        for (const sideEffect of this._sideEffectFunctions) {

            sideEffect(data);
        }
    }

    public clone(): SideEffect<T> {

        const sideEffect: SideEffect<T> = new SideEffect<T>();
        sideEffect.addList(this._sideEffectFunctions);

        return sideEffect;
    }
}
