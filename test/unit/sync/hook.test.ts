/**
 * @author WMXPY
 * @namespace Processor_Sync
 * @description Hook
 * @override Unit
 */

import { expect } from "chai";
import * as Chance from "chance";
import { DataHook } from "../../../src";

describe('Given {DataHook} Class', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('processor-sync-hook');

    it('should be able to construct', (): void => {

        const processor: DataHook = DataHook.create();

        expect(processor).to.be.instanceOf(DataHook);
    });
});
