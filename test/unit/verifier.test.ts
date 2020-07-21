/**
 * @author WMXPY
 * @namespace Processor
 * @description Verifier
 * @override Unit
 */

import { expect } from "chai";
import * as Chance from "chance";
import { DataVerifier } from "../../src";

describe('Given {DataVerifier} Class', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('processor-verifier');

    it('should be able to construct', (): void => {

        const api: DataVerifier = DataVerifier.create();

        expect(api).to.be.instanceOf(DataVerifier);
    });
});
