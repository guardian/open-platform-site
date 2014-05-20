function activate(context, level) {
	// hide all one-only elements
	$( ".one-only" ).css( "display", "none" );
	// display one-only elements for 'context' less than 'level'
	for(i=0; i<level - 1; i++){
		var elem = $ ( ".one-only.for-" + context + ".level-" + (i + 1))
	    var segFile = elem.attr('segment-data-file');
	    var mu = "";
	    if (segFile !== undefined) {
	        renderDoc(segFile, convertDone);
	    }

		elem.css( "display", "block" );

	}
	// display one-only element for 'context' and 'level'
	$ ( ".one-only.for-" + context + ".level-" + level).css( "display", "block" );
}

function deactivate(context, level) {
	// for this 'context', deactivate everything <= 'level'	
	var maxLevel = 0;
	for(l=0; l<10; l++){
		// if there's nothing for 'context' at 'maxLevel' stop searching
		var elem = $ ( ".one-only.for-" + context + ".level-" + l )
		if ( elem ) {
			maxLevel = l;
		} else {
			break;
		}
	}
	// hide everything > level
	for(i=maxLevel; i>level-1; i--){
		$ ( ".one-only.for-" + context + ".level-" + i).css( "display", "none" );
	}
}	

function convertDone(html) {
    var includecommon = $('#doccontent').attr('data-include-common');
    if (includecommon === 'true') {
        markdownApi.convert('docs/common.md', function(commonHtml) {
            updateContent(html, commonHtml);            
        }); 
    } else {
        updateContent(html);
    }
}

function updateContent(html, common) {
        
    var name = $('#doccontent').attr('data-file');

    $('#doccontent').empty();
    $('#doccontent').append('<div class="ui ribbon label"><a href="https://github.com/guardian/content-api-docs/edit/gh-pages/docs/' + name + '.md">Edit me <i class="github alternate large icon"></i></a></div>');   
    $('#doccontent').append(html);
    /* include common content */
    if (common !== undefined) {$('#doccontent h2').eq(2).after(common);}

    /* handle special item endpoint */
    if (name === 'item_search') {
            
            markdownApi.convert('docs/content_search.md', function(contentHtml) {
            
                var filtersContent = $('<div/>').append(contentHtml).find('h3:contains("Filters")').nextUntil('h3').andSelf();
                var orderingContent = $('<div/>').append(contentHtml).find('h3:contains("Ordering")').nextUntil('h3').andSelf();
                var addContent = $('<div/>').append(contentHtml).find('h3:contains("Additional information")').nextUntil('h2');

                $('h3:contains("Additional information")').before(filtersContent);
                $('h3:contains("Additional information")').before(orderingContent);
                $('h3:contains("Additional information")').after(addContent);

                enhanceApparence();
            });

    } else {
        /* enhance apparence */    
        enhanceApparence();
    }
}

