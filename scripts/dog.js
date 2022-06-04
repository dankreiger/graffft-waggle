#!/bin/env node

// aka hack because I hate this

const { exec: _exec } = require('child_process');
const { rm } = require('fs/promises');
const { promisify } = require('util');
const { getFiles } = require('./get-files');
const exec = promisify(_exec);

const horrible = 'lib/packages';

(async () => {
  for await (const f of getFiles('.')) {
    const [good, bad] = f.split(horrible);
    if (bad) {
      try {
        const iwanttocry = `${good.split(horrible)[0]}/lib/`;
        await exec(`cp ${f} ${iwanttocry}`);
        await rm(f);
      } catch (err) {
        console.log(err);
      }
    }
  }
})();
