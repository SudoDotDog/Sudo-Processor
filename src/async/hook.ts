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

    private constructor(
        processor: AsyncDataProcessor<T> = AsyncDataProcessor.create<T>(),
        verifier: AsyncDataVerifier<T> = AsyncDataVerifier.create<T>(),
    ) {

        this._processor = processor;
        this._verifier = verifier;
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

    public async verify(data: T): Promise<boolean> {

        return await this._verifier.verify(data);
    }

    public clear(): this {

        this._processor.clear();
        this._verifier.clear();
        return this;
    }

    public clone(): AsyncDataHook<T> {

        const hook: AsyncDataHook<T> = new AsyncDataHook<T>(
            this._processor.clone(),
            this._verifier.clone(),
        );
        return hook;
    }
}
