/**
 * @author WMXPY
 * @namespace Processor
 * @description Processor
 */

export class DataProcessor<T extends any = any> {

    public static create<T extends any = any>(): DataProcessor<T> {

        return new DataProcessor<T>();
    }

    private readonly _processFunctions: any[];

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private constructor() {

    }
}
