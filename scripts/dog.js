// #!/bin/env node

// // aka hack because I hate this

// const { rm } = require('fs/promises');
// const { getFiles } = require('./get-files');

// const horrible = 'lib/packages';

// (async () => {
//   for await (const f of getFiles('.')) {
//     const [_, bad] = f.split(horrible);
//     if (bad) {
//       try {
//         await rm(f);
//       } catch (err) {
//         console.log(err);
//       }
//     }
//   }
// })();
