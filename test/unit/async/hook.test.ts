/**
 * @author WMXPY
 * @namespace Processor_Async
 * @description Hook
 * @override Unit
 */

import { expect } from "chai";
import * as Chance from "chance";
import { AsyncDataHook } from "../../../src";

describe('Given {AsyncDataHook} Class', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('processor-async-hook');

    it('should be able to construct', (): void => {

        const processor: AsyncDataHook = AsyncDataHook.create();

        expect(processor).to.be.instanceOf(AsyncDataHook);
    })
});
