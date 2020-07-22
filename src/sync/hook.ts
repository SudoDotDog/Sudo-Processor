/**
 * @author WMXPY
 * @namespace Processor_Sync
 * @description Hook
 */

import { DataProcessor } from "./processor";
import { DataVerifier } from "./verifier";

export class DataHook<T extends any = any> {

    public static create<T extends any = any>(): DataHook<T> {

        return new DataHook<T>();
    }

    private readonly _processor: DataProcessor<T>;
    private readonly _verifier: DataVerifier<T>;

    private constructor() {

        this._processor = DataProcessor.create<T>();
        this._verifier = DataVerifier.create<T>();
    }

    public get processor(): DataProcessor<T> {
        return this._processor;
    }
    public get verifier(): DataVerifier<T> {
        return this._verifier;
    }

    public process(data: T): T {

        return this._processor.process(data);
    }

    public verify(data: T): boolean {

        return this._verifier.verify(data);
    }

    public clear(): this {

        this._processor.clear();
        this._verifier.clear();
        return this;
    }
}
