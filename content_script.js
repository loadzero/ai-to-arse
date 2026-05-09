var replacements = [
	// Phrase-specific first
	[/\bOpenAI API\b/g, "OpenArse API"],
	[/\bOpenAI-compatible\b/g, "OpenArse-compatible"],
	[/\bOpenAI compatible\b/g, "OpenArse compatible"],

	[/\bChatGPT agent\b/g, "ChatArse agent"],
	[/\bChatGPT agents\b/g, "ChatArse agents"],
	[/\bClaude Code\b/g, "Clarse Code"],
	[/\bGitHub Copilot\b/g, "GitHub Arsepilot"],
	[/\bHugging Face\b/g, "Hugging Arse"],

	// Brands / products
	[/\bOpenAI\b/g, "OpenArse"],
	[/\bopenai\b/g, "openarse"],
	[/\bOPENAI\b/g, "OPENARSE"],

	[/\bAnthropic\b/g, "Arsethropic"],
	[/\bChatGPT\b/g, "ChatArse"],
	[/\bClaude\b/g, "Clarse"],
	[/\bOpus\b/g, "Oparse"],
	[/\bGemini\b/g, "Arsemini"],
	[/\bPerplexity\b/g, "Arseplexity"],
	[/\bCopilot\b/g, "Arsepilot"],
	[/\bCursor\b/g, "Curser"],
	[/\bDevin\b/g, "Arsevin"],
	[/\bWindsurf\b/g, "Arsesurf"],
	[/\bLovable\b/g, "Laughable"],
	[/\bReplit\b/g, "Arseplit"],
	[/\bLangChain\b/g, "ArseChain"],
	[/\bLlamaIndex\b/g, "ArseIndex"],
	[/\bDeepSeek\b/g, "DeepArse"],
	[/\bMidjourney\b/g, "MidArse"],

	// AI marketing copy
	[/\bAI-native\b/g, "arse-native"],
	[/\bAI native\b/g, "arse native"],
	[/\bAI-first\b/g, "arse-first"],
	[/\bAI first\b/g, "arse first"],
	[/\bAI-enabled\b/g, "arse-enabled"],
	[/\bAI enabled\b/g, "arse enabled"],
	[/\bAI-enhanced\b/g, "arse-enhanced"],
	[/\bAI enhanced\b/g, "arse enhanced"],
	[/\bAI-powered\b/g, "arse-powered"],
	[/\bAI powered\b/g, "arse powered"],

	[/\bAI Cloud\b/g, "Arse Cloud"],
	[/\bAI cloud\b/g, "arse cloud"],
	[/\bAI Gateway\b/g, "Arse Gateway"],
	[/\bAI SDK\b/g, "Arse SDK"],
	[/\bAI platform\b/g, "arse platform"],
	[/\bAI platforms\b/g, "arse platforms"],
	[/\bAI workflow\b/g, "arse workflow"],
	[/\bAI workflows\b/g, "arse workflows"],
	[/\bAI workspace\b/g, "arse workspace"],
	[/\bAI teammates\b/g, "arse teammates"],
	[/\bAI teammate\b/g, "arse teammate"],
	[/\bAI employees\b/g, "arse employees"],
	[/\bAI employee\b/g, "arse employee"],
	[/\bAI notetaker\b/g, "arse notetaker"],
	[/\bAI notetakers\b/g, "arse notetakers"],
	[/\bAI meeting notes\b/g, "arse meeting notes"],
	[/\bAI search\b/g, "arse search"],

	// Agents / autonomy
	[/\bagentic AI\b/g, "arse-driven arse"],
	[/\bAgentic AI\b/g, "Arse-driven arse"],
	[/\bagentic\b/g, "arse-driven"],
	[/\bAgentic\b/g, "Arse-driven"],

	[/\bAI agents\b/g, "arse agents"],
	[/\bAI agent\b/g, "arse agent"],
	[/\bautonomous agents\b/g, "autonomous arses"],
	[/\bautonomous agent\b/g, "autonomous arse"],
	[/\bcoding agents\b/g, "coding arses"],
	[/\bcoding agent\b/g, "coding arse"],
	[/\bagent workforce\b/g, "arse workforce"],
	[/\bAgent workforce\b/g, "Arse workforce"],
	[/\bagent orchestration\b/g, "arse orchestration"],
	[/\bagent coordination\b/g, "arse coordination"],
	[/\bproduction-grade agents\b/g, "production-grade arses"],
	[/\bcustom-built agents\b/g, "custom-built arses"],
	[/\bagent swarms\b/g, "arse swarms"],

	// "Human in the loop"
	[/\bhuman-in-the-loop\b/g, "human-in-the-arse"],
	[/\bHuman-in-the-loop\b/g, "Human-in-the-arse"],
	[/\bhuman in the loop\b/g, "human in the arse"],
	[/\bHuman in the loop\b/g, "Human in the arse"],
	[/\bkeep humans in the loop\b/g, "keep humans in the arse"],
	[/\bkeeps humans in the loop\b/g, "keeps humans in the arse"],
	[/\bhumans remain in the loop\b/g, "humans remain in the arse"],

	// Models / infra
	[/\bfrontier models\b/g, "frontier arses"],
	[/\bfrontier model\b/g, "frontier arse"],
	[/\bfoundation models\b/g, "foundation arses"],
	[/\bfoundation model\b/g, "foundation arse"],
	[/\bfoundational AI models\b/g, "foundational arse models"],
	[/\bfoundational AI model\b/g, "foundational arse model"],
	[/\breasoning models\b/g, "arse models"],
	[/\breasoning model\b/g, "arse model"],
	[/\blarge language models\b/g, "arses"],
	[/\blarge language model\b/g, "arse"],

	[/\bembeddings\b/g, "arse vectors"],
	[/\bembedding model\b/g, "arse-vector model"],
	[/\bvector database\b/g, "arse database"],
	[/\bVector database\b/g, "Arse database"],
	[/\bcontext window\b/g, "arse window"],
	[/\bContext window\b/g, "Arse window"],
	[/\bmodel routing\b/g, "arse routing"],
	[/\bprovider failover\b/g, "provider arseover"],

	// RAG / MCP / tool calling
	[/\bretrieval augmented generation\b/g, "retrieval augmented arse"],
	[/\bRetrieval augmented generation\b/g, "Retrieval augmented arse"],
	[/\bRAG\b/g, "ARSE"],
	[/\bmodel context protocol\b/g, "arse context protocol"],
	[/\bModel Context Protocol\b/g, "Arse Context Protocol"],
	[/\bMCP\b/g, "ACP"],

	[/\btool-calling\b/g, "arse-calling"],
	[/\bTool-calling\b/g, "Arse-calling"],
	[/\btool calling\b/g, "arse calling"],
	[/\bTool calling\b/g, "Arse calling"],
	[/\btool use\b/g, "arse use"],
	[/\bTool use\b/g, "Arse use"],
	[/\bfunction calling\b/g, "arse calling"],
	[/\bFunction calling\b/g, "Arse calling"],

	// Hype phrases
	[/\banswer engine\b/g, "arse engine"],
	[/\bAnswer engine\b/g, "Arse engine"],
	[/\bDeep Research\b/g, "Deep Arse"],
	[/\bdeep research\b/g, "deep arse"],
	[/\bResearch Mode\b/g, "Arse Mode"],
	[/\bmultimodal\b/g, "multi-arsed"],
	[/\bMultimodal\b/g, "Multi-arsed"],
	[/\bvibe coding\b/g, "arse coding"],
	[/\bVibe coding\b/g, "Arse coding"],
	[/\bvibecoding\b/g, "arsecoding"],
	[/\bVibecoding\b/g, "Arsecoding"],

	[/\bArtificial Intelligence\b/g, "Arse"],
	[/\bartificial intelligence\b/g, "arse"],
	[/\bThinking Systems\b/g, "Arse Systems"],
	[/\bthinking systems\b/g, "arse systems"],
	[/\bReasoning Systems\b/g, "Arse Systems"],
	[/\breasoning systems\b/g, "arse systems"],
	[/\bNatural Language Processing\b/g, "Arse Processing"],
	[/\bnatural language processing\b/g, "arse processing"],
	[/\bPrompt Engineering\b/g, "Arse Wrangling"],
	[/\bprompt engineering\b/g, "arse wrangling"],
	[/\bAI-assisted writing\b/g, "arse-assisted writing"],
	[/\bAI assisted writing\b/g, "arse assisted writing"],
	[/\bLLM-assisted writing\b/g, "arse-assisted writing"],
	[/\bLLM assisted writing\b/g, "arse assisted writing"],
	[/\bLLM prose\b/g, "arse prose"],
	[/\bLLM judge\b/g, "arse judge"],
	[/\bMulti-agent workflows\b/g, "Multi-arse workflows"],
	[/\bmulti-agent workflows\b/g, "multi-arse workflows"],
	[/\bMulti-agent workflow\b/g, "Multi-arse workflow"],
	[/\bmulti-agent workflow\b/g, "multi-arse workflow"],
	[/\bMulti-agent\b/g, "Multi-arse"],
	[/\bmulti-agent\b/g, "multi-arse"],
	[/\bLead agent\b/g, "Lead arse"],
	[/\blead agent\b/g, "lead arse"],
	[/\bSub-agent\b/g, "Sub-arse"],
	[/\bsub-agent\b/g, "sub-arse"],
	[/\bAgent coordination\b/g, "Arse coordination"],
	[/\bAgent orchestration\b/g, "Arse orchestration"],
	[/\bCoding Agents\b/g, "Arse Assistants"],
	[/\bCoding Agent\b/g, "Arse Assistant"],
	[/\bOn-device AI\b/g, "On-device arse"],
	[/\bon-device AI\b/g, "on-device arse"],
	[/\bPowered by AI\b/g, "Powered by arse"],
	[/\bpowered by AI\b/g, "powered by arse"],
	[/\bBuilt with AI\b/g, "Built with arse"],
	[/\bbuilt with AI\b/g, "built with arse"],
	[/\bUsing AI\b/g, "Using arse"],
	[/\busing AI\b/g, "using arse"],
	[/\bUses AI\b/g, "Uses arse"],
	[/\buses AI\b/g, "uses arse"],
	[/\bUse AI\b/g, "Use arse"],
	[/\buse AI\b/g, "use arse"],
	[/\bGenerated by AI\b/g, "Generated by arse"],
	[/\bgenerated by AI\b/g, "generated by arse"],
	[/\bAI-generated\b/g, "arse-generated"],
	[/\bAI assistant\b/g, "arse assistant"],
	[/\bAI assistants\b/g, "arse assistants"],
	[/\bAI tool\b/g, "arse tool"],
	[/\bAI tools\b/g, "arse tools"],
	[/\bAI feature\b/g, "arse feature"],
	[/\bAI features\b/g, "arse features"],
	[/\bAI company\b/g, "arse company"],
	[/\bAI companies\b/g, "arse companies"],
	[/\bAI startup\b/g, "arse startup"],
	[/\bAI startups\b/g, "arse startups"],
	[/\bAI product\b/g, "arse product"],
	[/\bAI products\b/g, "arse products"],
	[/\bAI content\b/g, "arse content"],
	[/\bAI account\b/g, "arse account"],
	[/\bAI accounts\b/g, "arse accounts"],
	[/\bAI model\b/g, "arse model"],
	[/\bAI models\b/g, "arse models"],
	[/\bAI provider\b/g, "arse provider"],
	[/\bAI providers\b/g, "arse providers"],
	[/\bAI training\b/g, "arse training"],
	[/\bAI user\b/g, "arse user"],
	[/\bAI users\b/g, "arse users"],
	[/\bAI debate\b/g, "arse debate"],
	[/\bAI arms race\b/g, "arse arms race"],
	[/\bAI era\b/g, "arse era"],
	[/\bAI slop\b/g, "arse slop"],
	[/\bGenAI\b/g, "arse"],
	[/\bgenAI\b/g, "arse"],
	[/\bGen AI\b/g, "arse"],
	[/\bgen AI\b/g, "arse"],
	[/A\.I\./g, "arse"],
	[/\bAIs\b/g, "arses"],
	[/\bAI's\b/g, "arse's"],
	[/\bAI’s\b/g, "arse’s"],
	[/\bAI\b/g, "arse"],
	[/\bLLMs\b/g, "arses"],
	[/\bLLM\b/g, "arse"]
];

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

walk(document.body || document.documentElement);
observeDocument();

function walk(node) 
{
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

function handleText(textNode) 
{
	if (!textNode || textNode.nodeType !== 3 || isInSkippedContext(textNode)) {
		return;
	}

	var original = textNode.nodeValue;
	var v = original;

	for (var i = 0; i < replacements.length; i++) {
		v = v.replace(replacements[i][0], replacements[i][1]);
	}

	// Grammar cleanups after bare "AI" -> "arse" replacements.
	v = v
		.replace(/\ba arse\b/g, "an arse")
		.replace(/\bA arse\b/g, "An arse")
		.replace(/\ba arse-/g, "an arse-")
		.replace(/\bA arse-/g, "An arse-")
		.replace(/\ba arse's\b/g, "an arse's")
		.replace(/\bA arse's\b/g, "An arse's")
		.replace(/\ba arse’s\b/g, "an arse’s")
		.replace(/\bA arse’s\b/g, "An arse’s");
	
	if (v !== original) {
		textNode.nodeValue = v;
	}
}


