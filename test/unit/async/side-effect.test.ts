/**
 * @author WMXPY
 * @namespace Processor_Async
 * @description Side Effect
 * @override Unit
 */

import { expect } from "chai";
import * as Chance from "chance";
import { AsyncSideEffect } from "../../../src";

describe('Given {AsyncSideEffect} Class', (): void => {

    const chance: Chance.Chance = new Chance('processor-async-side-effect');

    it('should be able to construct', (): void => {

        const verifier: AsyncSideEffect = AsyncSideEffect.create();

        expect(verifier).to.be.instanceOf(AsyncSideEffect);
    });

    it('should be able execute side effect data - happy path', async (): Promise<void> => {

        let result: boolean = false;

        const executer: AsyncSideEffect = AsyncSideEffect.create();

        executer.add(async () => {
            result = true;
        });

        expect(executer).to.be.lengthOf(1);
        await executer.execute(chance.string());

        expect(result).to.be.true;
    });
});
