/**
 * @author WMXPY
 * @namespace Processor_Sync
 * @description Processor
 * @override Unit
 */

import { expect } from "chai";
import * as Chance from "chance";
import { DataProcessor } from "../../../src";

describe('Given {DataProcessor} Class', (): void => {

    const chance: Chance.Chance = new Chance('processor-processor');

    it('should be able to construct', (): void => {

        const processor: DataProcessor = DataProcessor.create();

        expect(processor).to.be.instanceOf(DataProcessor);
    });

    it('should be able to constraint data', (): void => {

        const value: string = chance.string();

        const processor: DataProcessor = DataProcessor.create();

        expect(processor).to.be.lengthOf(0);
        expect(processor.process(value)).to.be.equal(value);
    });

    it('should be able to change data', (): void => {

        const value: string = chance.string();
        const result: string = chance.string();

        const processor: DataProcessor = DataProcessor.create();

        processor.add(() => result);

        expect(processor).to.be.lengthOf(1);
        expect(processor.process(value)).to.be.equal(result);
    });
});
