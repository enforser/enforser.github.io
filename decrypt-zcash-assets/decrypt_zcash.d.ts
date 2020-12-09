/* tslint:disable */
/* eslint-disable */
/**
* @param {string} raw_tx
* @param {string} ock
* @returns {any}
*/
export function parseock(raw_tx: string, ock: string): any;
/**
* @param {string} raw_tx
* @param {string} ovk
* @returns {any}
*/
export function findocks(raw_tx: string, ovk: string): any;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly parseock: (a: number, b: number, c: number, d: number) => number;
  readonly findocks: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
        