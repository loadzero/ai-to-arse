const assert = require('assert');
const vm = require('vm');
const fs = require('fs');
const path = require('path');

class TextNode {
	constructor(text) {
		this.nodeType = 3;
		this.nodeValue = text;
		this.parentElement = null;
		this.nextSibling = null;
	}
}

const skippedTags = new Set([
	'input', 'textarea', 'script', 'style', 'noscript',
	'code', 'pre', 'kbd', 'samp'
]);

class ElementNode {
	constructor(tagName, children = [], classNames = []) {
		this.nodeType = 1;
		this.tagName = tagName.toUpperCase();
		this.children = children;
		this.firstChild = children[0] || null;
		this.parentElement = null;
		this.nextSibling = null;
		this.isContentEditable = false;
		this._classes = new Set(classNames);
		this.classList = {
			contains: (name) => this._classes.has(name)
		};

		for (let i = 0; i < children.length; i++) {
			children[i].parentElement = this;
			children[i].nextSibling = children[i + 1] || null;
		}
	}

	closest(selector) {
		let n = this;
		while (n) {
			const tag = n.tagName ? n.tagName.toLowerCase() : '';
			if (tag && skippedTags.has(tag)) {
				return n;
			}
			if (n.isContentEditable && selector.includes('[contenteditable]')) {
				return n;
			}
			if (n._classes && (
				(selector.includes('.ace_editor') && n._classes.has('ace_editor')) ||
				(selector.includes('.cm-editor') && n._classes.has('cm-editor')) ||
				(selector.includes('.CodeMirror') && n._classes.has('CodeMirror')) ||
				(selector.includes('.monaco-editor') && n._classes.has('monaco-editor'))
			)) {
				return n;
			}
			n = n.parentElement;
		}
		return null;
	}
}

let observerCallback = null;

const body = new ElementNode('body', [
	new TextNode('OpenAI and Vibe Coding'),
	new ElementNode('code', [new TextNode('OpenAI should not change')])
]);

const document = {
	body,
	documentElement: body
};

const context = {
	console,
	Set,
	document,
	window: {},
	requestAnimationFrame: (fn) => fn(),
	MutationObserver: class {
		constructor(cb) { observerCallback = cb; }
		observe() {}
	},
	globalThis: null
};
context.globalThis = context;
context.window = context;

vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'rules.js'), 'utf8'), context);
vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'content_script.js'), 'utf8'), context);

assert.strictEqual(document.body.children[0].nodeValue, 'OpenArse and Arse Coding');
assert.strictEqual(document.body.children[1].children[0].nodeValue, 'OpenAI should not change');

const added = new TextNode('GPT-5.5 and Claude');
observerCallback([{ addedNodes: [added], type: 'childList' }]);
assert.strictEqual(added.nodeValue, 'ArseGPT-5.5 and Clarse');

const changed = new TextNode('chat with a AI');
observerCallback([{ type: 'characterData', target: changed, addedNodes: [] }]);
assert.strictEqual(changed.nodeValue, 'chat with an arse');

console.log('dom shim ok');
