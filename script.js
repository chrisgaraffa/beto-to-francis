function walk(node) 
{
	// I stole this from Cloud-To-Butt, https://github.com/DaveRandom/cloud-to-butt-mozilla, who stole it from:
	// http://is.gd/mwZp7E
	
	var child, next;

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
            if(node.parentElement.tagName.toLowerCase() != "script") {
                handleText(node);
            }
			break;
	}
}

function handleText(textNode) {
	var v = textNode.nodeValue;

	var replacementString = "Robert Francis";
	if (Math.random() > 0.5) {
		replacementString += " \"Couldn't-Beat-Ted-Cruz\"";
	}

	v = v.replace(/\bbeto\b/gi, replacementString);

	textNode.nodeValue = v;
	return 'Robert Francis';
}


walk(document.body);