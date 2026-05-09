const assert = require('assert');
const fs = require('fs');
const path = require('path');
const rules = require('../rules.js');

const { transformText, applyRules, applyGrammar, preserveCase } = rules;

assert.strictEqual(typeof transformText, 'function');
assert.strictEqual(typeof applyRules, 'function');
assert.strictEqual(typeof applyGrammar, 'function');
assert.strictEqual(typeof preserveCase, 'function');

const fixturesPath = path.join(__dirname, 'fixtures.txt');
const lines = fs.readFileSync(fixturesPath, 'utf8').split(/\r?\n/).filter(Boolean);

let count = 0;
for (const line of lines) {
	const parts = line.split(' => ');
	assert.strictEqual(parts.length, 2, `bad fixture line: ${line}`);

	const input = parts[0];
	const expected = parts[1];
	const actual = transformText(input);

	assert.strictEqual(actual, expected, `${input} => ${actual}, expected ${expected}`);
	assert.strictEqual(transformText(actual), actual, `not idempotent: ${input}`);
	count++;
}

console.log(`ok transform ${count}`);
