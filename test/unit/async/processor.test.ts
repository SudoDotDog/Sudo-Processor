/**
 * @author WMXPY
 * @namespace Processor_Async
 * @description Processor
 * @override Unit
 */

import { expect } from "chai";
import * as Chance from "chance";
import { AsyncDataProcessor } from "../../../src";

describe('Given {AsyncDataProcessor} Class', (): void => {

    const chance: Chance.Chance = new Chance('processor-async-processor');

    it('should be able to construct', (): void => {

        const processor: AsyncDataProcessor = AsyncDataProcessor.create();

        expect(processor).to.be.instanceOf(AsyncDataProcessor);
    });

    it('should be able to constraint data', async (): Promise<void> => {

        const value: string = chance.string();

        const processor: AsyncDataProcessor = AsyncDataProcessor.create();

        expect(processor).to.be.lengthOf(0);
        expect(await processor.process(value)).to.be.equal(value);
    });

    it('should be able to change data', async (): Promise<void> => {

        const value: string = chance.string();
        const result: string = chance.string();

        const processor: AsyncDataProcessor = AsyncDataProcessor.create();

        processor.add(async () => await Promise.resolve(result));

        expect(processor).to.be.lengthOf(1);
        expect(await processor.process(value)).to.be.equal(result);
    });
});
