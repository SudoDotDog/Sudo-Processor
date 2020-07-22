/**
 * @author WMXPY
 * @namespace Processor_Async
 * @description Hook
 */

import { AsyncDataProcessor } from "./processor";
import { AsyncDataVerifier } from "./verifier";

export class AsyncDataHook<T extends any = any> {

    public static create<T extends any = any>(): AsyncDataHook<T> {

        return new AsyncDataHook<T>();
    }

    private readonly _processor: AsyncDataProcessor<T>;
    private readonly _verifier: AsyncDataVerifier<T>;

    private constructor() {

        this._processor = AsyncDataProcessor.create<T>();
        this._verifier = AsyncDataVerifier.create<T>();
    }

    public get processor(): AsyncDataProcessor<T> {
        return this._processor;
    }
    public get verifier(): AsyncDataVerifier<T> {
        return this._verifier;
    }

    public async process(data: T): Promise<T> {

        return await this._processor.process(data);
    }
}
