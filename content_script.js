function shouldSkipElement(node)
{
	if (!node || node.nodeType !== 1) {
		return false;
	}

	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (
		tagName == 'input' ||
		tagName == 'textarea' ||
		tagName == 'script' ||
		tagName == 'style' ||
		tagName == 'noscript' ||
		tagName == 'code' ||
		tagName == 'pre' ||
		tagName == 'kbd' ||
		tagName == 'samp'
	) {
		return true;
	}

	if (node.isContentEditable) {
		return true;
	}

	if (node.classList) {
		return (
			node.classList.contains('ace_editor') ||
			node.classList.contains('cm-editor') ||
			node.classList.contains('CodeMirror') ||
			node.classList.contains('monaco-editor')
		);
	}

	return false;
}

function isInSkippedContext(node)
{
	var element = node && node.nodeType === 1 ? node : node && node.parentElement;
	if (!element || !element.closest) {
		return false;
	}

	return !!element.closest("input, textarea, script, style, noscript, code, pre, kbd, samp, [contenteditable]:not([contenteditable='false']), .ace_editor, .cm-editor, .CodeMirror, .monaco-editor");
}

function walk(node)
{
	if (!node) {
		return;
	}

	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	if (shouldSkipElement(node)) {
		return;
	}

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			if (!isInSkippedContext(node)) {
				handleText(node);
			}
			break;
	}
}

var pendingNodes = new Set();
var pendingFrame = false;
var processedTextNodes = new WeakMap();

function enqueue(node)
{
	if (!node) {
		return;
	}

	pendingNodes.add(node);

	if (!pendingFrame) {
		pendingFrame = true;
		requestAnimationFrame(flushPendingNodes);
	}
}

function flushPendingNodes()
{
	pendingFrame = false;

	pendingNodes.forEach(function(node) {
		walk(node);
	});

	pendingNodes.clear();
}

function observeDocument() {
	var observer = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			for (var i = 0; i < mutation.addedNodes.length; i++) {
				enqueue(mutation.addedNodes[i]);
			}

			if (mutation.type === 'characterData') {
				enqueue(mutation.target);
			}
		});
	});

	observer.observe(document.documentElement, {
		childList: true,
		subtree: true,
		characterData: true
	});
}

function getRulesApi()
{
	if (typeof globalThis !== "undefined") {
		return globalThis.AIToArseRules || null;
	}
	return null;
}

function handleText(textNode)
{
	if (!textNode || textNode.nodeType !== 3 || isInSkippedContext(textNode)) {
		return;
	}

	var original = textNode.nodeValue;
	if (!original || !original.trim()) {
		return;
	}

	if (processedTextNodes.get(textNode) === original) {
		return;
	}

	var rulesApi = getRulesApi();
	if (!rulesApi) {
		return;
	}

	var v = rulesApi.transformText(original);
	processedTextNodes.set(textNode, v);

	if (v !== original) {
		textNode.nodeValue = v;
	}
}

if (!getRulesApi()) {
	console.error("AI To Arse: rules.js did not load");
} else {
	walk(document.body || document.documentElement);
	observeDocument();
}
