#!/bin/env node

const { readdir } = require('fs/promises');
const { resolve } = require('path');

async function* getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const res = resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      yield* getFiles(res);
    } else {
      yield res;
    }
  }
}

module.exports = {
  getFiles,
};
