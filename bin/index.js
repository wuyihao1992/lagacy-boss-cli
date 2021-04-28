#!/usr/bin/env node

const colors = require('colors');
const { formatShellArg } = require('../lib/utils/params');

const { script, args } = formatShellArg();

console.log(script.green);
console.log(args);
