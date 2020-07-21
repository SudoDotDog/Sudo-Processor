/**
 * @author WMXPY
 * @namespace Processor_Sync
 * @description Verifier
 * @override Unit
 */

import { expect } from "chai";
import * as Chance from "chance";
import { DataVerifier } from "../../../src";

describe('Given {DataVerifier} Class', (): void => {

    const chance: Chance.Chance = new Chance('processor-sync-verifier');

    it('should be able to construct', (): void => {

        const verifier: DataVerifier = DataVerifier.create();

        expect(verifier).to.be.instanceOf(DataVerifier);
    });

    it('should be able valid data - happy path', (): void => {

        const value: string = chance.string();

        const verifier: DataVerifier = DataVerifier.create();

        verifier.add((original: string) => original === value);

        expect(verifier).to.be.lengthOf(1);
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        expect(verifier.verify(value)).to.be.true;
    });

    it('should be able valid data - sad path', (): void => {

        const value: string = chance.string();

        const verifier: DataVerifier = DataVerifier.create();

        verifier.add((original: string) => original !== value);

        expect(verifier).to.be.lengthOf(1);
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        expect(verifier.verify(value)).to.be.false;
    });
});
