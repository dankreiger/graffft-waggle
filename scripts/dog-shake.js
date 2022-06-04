#!/bin/env node

const { readdir, rm } = require('fs/promises');
const { resolve } = require('path');

(async function dogShake(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const res = resolve(dir, dirent.name);

    if (dirent.isDirectory()) {
      if (dirent.name === 'lib') {
        return await rm(res, { recursive: true, force: true });
      } else {
        await dogShake(res);
      }
    } else {
      await res;
    }
  }
})('./src/packages');
