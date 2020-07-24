#!/bin/bash

# removes unneeded declarations from build
find ./src/packages -type f -name "*.test.d.ts" -exec rm -rf {} +
find ./src/packages -type f -name "*.stories.d.ts" -exec rm -rf {} +
find ./src/packages -type f -name "*.styles.d.ts" -exec rm -rf {} +
find ./src/packages/**/**/lib -name "__tests__" -exec rm -rf {} +

# removes node modules from rollup
find ./src/packages -type d -name "node_modules" -exec rm -rf {} +
find ./src/packages -type d -empty -print0 | xargs -0 -I {} /bin/rm -rf "{}"
