/**
 * @author WMXPY
 * @namespace Processor
 * @description Processor
 * @override Unit
 */

import { expect } from "chai";
import * as Chance from "chance";
import { DataProcessor } from "../../src";

describe('Given {DataProcessor} Class', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('processor-processor');

    it('should be able to construct', (): void => {

        const api: DataProcessor = DataProcessor.create();

        expect(api).to.be.instanceOf(DataProcessor);
    });
});
