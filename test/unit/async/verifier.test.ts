/**
 * @author WMXPY
 * @namespace Processor_Async
 * @description Verifier
 * @override Unit
 */

import { expect } from "chai";
import * as Chance from "chance";
import { AsyncDataVerifier } from "../../../src";

describe('Given {AsyncDataVerifier} Class', (): void => {

    const chance: Chance.Chance = new Chance('processor-async-verifier');

    it('should be able to construct', (): void => {

        const verifier: AsyncDataVerifier = AsyncDataVerifier.create();

        expect(verifier).to.be.instanceOf(AsyncDataVerifier);
    });

    it('should be able valid data - happy path', async (): Promise<void> => {

        const value: string = chance.string();

        const verifier: AsyncDataVerifier = AsyncDataVerifier.create();

        verifier.add(async (original: string) => Promise.resolve(original === value));

        expect(verifier).to.be.lengthOf(1);
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        expect(await verifier.verify(value)).to.be.true;
    });

    it('should be able valid data - sad path', async (): Promise<void> => {

        const value: string = chance.string();

        const verifier: AsyncDataVerifier = AsyncDataVerifier.create();

        verifier.add(async (original: string) => Promise.resolve(original !== value));

        expect(verifier).to.be.lengthOf(1);
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        expect(await verifier.verify(value)).to.be.false;
    });
});
