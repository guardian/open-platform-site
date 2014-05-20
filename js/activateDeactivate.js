var markdownApi = new MarkdownApi();

function activate(context, level) {
	// hide all one-only elements
	$( ".one-only" ).css( "display", "none" );
	// display one-only elements for 'context' less than 'level'
	for(i=0; i<level - 1; i++){
		var elem = $ ( ".one-only.for-" + context + ".level-" + (i + 1))
		elem.css( "display", "block" );
	}
	// display one-only element for 'context' and 'level'
	var elem = $ ( ".one-only.for-" + context + ".level-" + level)
	elem.css( "display", "block" );
	// render MD as HTML if appropriate
    var targetDiv = $(".doccontent", elem);
  debugger;
    if (targetDiv){	
	    var segFile = targetDiv.attr("segment-data-file");
	    if (segFile !== undefined) {
	        renderDoc(segFile, convertDone);
	    }
    }


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
    var includecommon = $('.doccontent').attr('data-include-common');
    if (includecommon === 'true') {
        markdownApi.convert('../docs/common.md', function(commonHtml) {
            updateContent(html, commonHtml);            
        }); 
    } else {
        updateContent(html);
    }
}

function updateContent(html, common) {
        
    var name = $('.doccontent').attr('segment-data-file');

    $('.doccontent').empty();
    $('.doccontent').append('<div class="ui ribbon label"><a href="https://github.com/guardian/content-api-docs/edit/gh-pages/docs/' + name + '.md">Edit me <i class="github alternate large icon"></i></a></div>');   
    $('.doccontent').append(html);
    /* include common content */
    if (common !== undefined) {$('.doccontent h2').eq(2).after(common);}

    /* handle special item endpoint */
    if (name === 'item_search') {
            
            markdownApi.convert('../docs/content_search.md', function(contentHtml) {
            
                var filtersContent = $('<div/>').append(contentHtml).find('h3:contains("Filters")').nextUntil('h3').andSelf();
                var orderingContent = $('<div/>').append(contentHtml).find('h3:contains("Ordering")').nextUntil('h3').andSelf();
                var addContent = $('<div/>').append(contentHtml).find('h3:contains("Additional information")').nextUntil('h2');

                $('h3:contains("Additional information")').before(filtersContent);
                $('h3:contains("Additional information")').before(orderingContent);
                $('h3:contains("Additional information")').after(addContent);

                enhanceAppearance();
            });

    } else {
        /* enhance apparence */    
        enhanceApparence();
    }
}

function renderDoc(name, f) {
    markdownApi.convert('../docs/' + name +'.md', f); 
}

function enhanceAppearance() {
    $('table').addClass('ui basic table');

    var tables5 = $( "tr").filter(function() {return $(this).children().length == 5 });
    var tables4 = $( "tr").filter(function() {return $(this).children().length <= 4 });

    tables4.find( "th:nth-child(1)" ).addClass('three wide');
    tables4.find( "th:nth-child(2)" ).addClass('seven wide');
    tables4.find( "th:nth-child(3)" ).addClass('two wide');
    tables4.find( "th:nth-child(4)" ).addClass('four wide');


    tables5.find( "th:nth-child(1)" ).addClass('three wide');
    tables5.find( "th:nth-child(2)" ).addClass('five wide');
    tables5.find( "th:nth-child(3)" ).addClass('two wide');
    tables5.find( "th:nth-child(4)" ).addClass('three wide');
    tables5.find( "th:nth-child(5)" ).addClass('three wide');


    renderDoc('types', function(html){
        $('tr th:contains("Type")').attr('data-html', html).attr('data-title', ' ');
        $('tr th:contains("Type")').append('<div class="ui mini icon button"><i class="down triangle basic icon"></i></div>');
        $('th[data-html]').popup({
            on: 'click'
        });
    });

    renderDoc('boolean_operators', function(html) {
        $('tr th:contains("Boolean operators")').attr('data-html', html).attr('data-title', ' ');
        $('tr th:contains("Boolean operators")').append('<div class="ui mini icon button"><i class="down triangle basic icon"></i></div>');
        $('th[data-html]').popup({
            on: 'click'
        });

        $('tr td').filter(function() {return $(this).text() === 'false'}).empty().append('<i class="icon close"></i>');
        $('tr td').filter(function() {return $(this).text() === 'true'}).empty().append('<i class="icon checkmark"></i>');
    }); 

    /* display beautiful json */
    $('pre code').text(function(i, t){return JSON.stringify($.parseJSON(t), null, 4)});
    $('pre code').each(function(i, e) {hljs.highlightBlock(e)});
}


