/**
 * 获取命令行参数
 *
 * @return {{args: T[] | SharedArrayBuffer | BigUint64Array | Uint8ClampedArray | Uint32Array | Blob | Int16Array | T[] | Float64Array | Float32Array | string | Uint16Array | ArrayBuffer | Int32Array | BigInt64Array | Uint8Array | Int8Array | T[], script: *}}
 */
module.exports.formatShellArg = function () {
  const script = process.argv[2];
  const args = process.argv.slice(2);

  return {
    script,
    args,
  };
};
