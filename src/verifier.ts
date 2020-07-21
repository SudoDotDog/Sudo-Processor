/**
 * @author WMXPY
 * @namespace Processor
 * @description Verifier
 */

import { VerifyFunction } from "./declare";

export class DataVerifier<T extends any = any> {

    public static create<T extends any = any>(): DataVerifier<T> {

        return new DataVerifier<T>();
    }

    private readonly _verifyFunctions: Array<VerifyFunction<T>>;

    private constructor() {

        this._verifyFunctions = [];
    }

    public verify(data: T): boolean {

        for (const verifyFunction of this._verifyFunctions) {

            if (!verifyFunction(data)) {
                return false;
            }
        }
        return true;
    }
}
