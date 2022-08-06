<template>
  <demo-content>
    <nut-cell
      title="原始ArrayBuffer"
      :sub-title="displayArrayBuffer(arrayBuffer)"
    ></nut-cell>
    <nut-cell title="toBase64" :sub-title="convertBase64"></nut-cell>
    <nut-cell
      title="toArrayBuffer"
      :sub-title="displayArrayBuffer(convertArrayBuffer)"
    ></nut-cell>
  </demo-content>
</template>

<script setup lang="ts">
import { useArrayBuffer } from 'taro-hooks';

const { toBase64, toArrayBuffer } = useArrayBuffer();

const arrayBuffer = new Uint8Array([11, 22, 33]);

const convertBase64 = toBase64(arrayBuffer);

const convertArrayBuffer = toArrayBuffer(convertBase64);

function displayArrayBuffer(arrayBuffer) {
  return `Uint8Array(${arrayBuffer.byteLength})[${arrayBuffer.toString()}]`;
}
</script>
