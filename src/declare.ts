/**
 * @author WMXPY
 * @namespace Processor
 * @description Declare
 */

export type ProcessFunction<T> = (original: T) => T;
export type VerifyFunction<T> = (data: T) => boolean;
export type SideEffectFunction<T> = (data: T) => void;

export type AsyncProcessFunction<T> = (original: T) => T | Promise<T>;
export type AsyncVerifyFunction<T> = (data: T) => boolean | Promise<boolean>;
export type AsyncSideEffectFunction<T> = (data: T) => void | Promise<void>;
