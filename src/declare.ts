/**
 * @author WMXPY
 * @namespace Processor
 * @description Declare
 */

export type ProcessFunction<T> = (original: T) => T;
export type VerifyFunction<T> = (data: T) => boolean;

export type AsyncProcessFunction<T> = (original: T) => Promise<T>;
export type AsyncVerifyFunction<T> = (data: T) => Promise<boolean>;
