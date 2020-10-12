/**
 * @author WMXPY
 * @namespace Processor_Sync
 * @description Side Effect
 * @override Unit
 */

import { expect } from "chai";
import * as Chance from "chance";
import { SideEffect } from "../../../src";

describe('Given {SideEffect} Class', (): void => {

    const chance: Chance.Chance = new Chance('processor-sync-side-effect');

    it('should be able to construct', (): void => {

        const verifier: SideEffect = SideEffect.create();

        expect(verifier).to.be.instanceOf(SideEffect);
    });

    it('should be able execute side effect data - happy path', (): void => {

        let result: boolean = false;

        const executer: SideEffect = SideEffect.create();

        executer.add(() => result = true);

        expect(executer).to.be.lengthOf(1);
        executer.execute(chance.string());

        expect(result).to.be.true;
    });
});
