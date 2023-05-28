import React from 'react';
import DemoContent from '@src/components/DemoContent';
import { Cell } from '@taroify/core';
import { useArrayBuffer } from 'taro-hooks';

export default () => {
  const { toBase64, toArrayBuffer } = useArrayBuffer();

  const arrayBuffer = new Uint8Array([11, 22, 33]);

  const convertBase64 = toBase64(arrayBuffer);

  const convertArrayBuffer = toArrayBuffer(convertBase64);

  function displayArrayBuffer(showArrayBuffer) {
    return `Uint8Array(${
      showArrayBuffer.byteLength
    })[${showArrayBuffer.toString()}]`;
  }

  return (
    <DemoContent>
      <Cell.Group clickable>
        <Cell
          title="原始ArrayBuffer"
          brief={displayArrayBuffer(arrayBuffer)}
        ></Cell>
        <Cell title="toBase64" brief={convertBase64}></Cell>
        <Cell
          title="toArrayBuffer"
          brief={displayArrayBuffer(convertArrayBuffer)}
        ></Cell>
      </Cell.Group>
    </DemoContent>
  );
};
