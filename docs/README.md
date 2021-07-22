# Sudoo-Processor

[![Continuous Integration](https://github.com/SudoDotDog/Sudoo-Processor/actions/workflows/ci.yml/badge.svg)](https://github.com/SudoDotDog/Sudoo-Processor/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/SudoDotDog/Sudoo-Processor/branch/master/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Sudoo-Processor)
[![npm version](https://badge.fury.io/js/%40sudoo%2Fprocessor.svg)](https://www.npmjs.com/package/@sudoo/processor)
[![downloads](https://img.shields.io/npm/dm/@sudoo/processor.svg)](https://www.npmjs.com/package/@sudoo/processor)

Data processor in TypeScript

## Install

```sh
yarn add @sudoo/processor
# Or
npm install @sudoo/processor --save
```

## Usage

Process can be load by `SideEffect`, `Processor` and `Verifier` functions.

```ts
import { AsyncDataHook } from "@sudoo/processor";

const processor: AsyncDataHook = AsyncDataHook.create();

processor.sideEffect.add(() => sendEmail());
processor.processor.add((data) => newData);
processor.verifier.add((data) => true);
```

-   By `processor.execute(data)`, you can execute all side effects.
-   By `newData = processor.process(data)`, you can process data pipelined.
-   By `result = processor.verify(data)`, you can verify data if is valid.
