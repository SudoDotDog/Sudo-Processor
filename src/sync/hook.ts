/**
 * @author WMXPY
 * @namespace Processor_Sync
 * @description Hook
 */

import { DataProcessor } from "./processor";
import { SideEffect } from "./side-effect";
import { DataVerifier } from "./verifier";

export class DataHook<T extends any = any> {

    public static create<T extends any = any>(): DataHook<T> {

        return new DataHook<T>();
    }

    private readonly _sideEffect: SideEffect<T>;
    private readonly _processor: DataProcessor<T>;
    private readonly _verifier: DataVerifier<T>;

    private constructor(
        sideEffect: SideEffect<T> = SideEffect.create<T>(),
        processor: DataProcessor<T> = DataProcessor.create<T>(),
        verifier: DataVerifier<T> = DataVerifier.create<T>(),
    ) {

        this._sideEffect = sideEffect;
        this._processor = processor;
        this._verifier = verifier;
    }

    public get sideEffect(): SideEffect<T> {
        return this._sideEffect;
    }
    public get processor(): DataProcessor<T> {
        return this._processor;
    }
    public get verifier(): DataVerifier<T> {
        return this._verifier;
    }

    public execute(data: T): void {

        return this._sideEffect.execute(data);
    }

    public process(data: T): T {

        return this._processor.process(data);
    }

    public verify(data: T): boolean {

        return this._verifier.verify(data);
    }

    public clear(): this {

        this._sideEffect.clear();
        this._processor.clear();
        this._verifier.clear();
        return this;
    }

    public clone(): DataHook<T> {

        const hook: DataHook<T> = new DataHook<T>(
            this._sideEffect.clone(),
            this._processor.clone(),
            this._verifier.clone(),
        );
        return hook;
    }
}
