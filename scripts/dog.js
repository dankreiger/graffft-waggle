#!/bin/env node

// aka hack because I hate this

const { exec: _exec } = require('child_process');
const { existsSync } = require('fs');
const { rm, mkdir } = require('fs/promises');
const { promisify } = require('util');
const { getFiles } = require('./get-files');
const exec = promisify(_exec);

const horrible = 'lib/packages';

(async () => {
  for await (const f of getFiles('.')) {
    const [good, bad] = f.split(horrible);
    if (bad) {
      try {
        const garbagecode = good.split(horrible)[0];
        const iwanttocry = `${garbagecode}/lib/types/`;

        if (!existsSync(iwanttocry)) await mkdir(iwanttocry);

        await exec(`cp ${f} ${iwanttocry}`);
        if (existsSync(`${iwanttocry}/index.d.ts`)) {
          await exec(`mv ${iwanttocry}/index.d.ts ${garbagecode}/lib/`);
        }

        await rm(f);
      } catch (err) {
        console.log(err);
      }
    }
  }
})();
