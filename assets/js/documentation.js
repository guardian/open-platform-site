$(document).ready(function() {

    var markdownApi = new MarkdownApi();

    function renderDoc(name, f) {
        markdownApi.convert('../documentation/md/' + name +'.md', f); 
    }

    function convertDone(html) {
        var includecommon = $('#doccontent').attr('data-include-common');
        if (includecommon === 'true') {
            markdownApi.convert('../documentation/md/common.md', function(commonHtml) {
                updateContent(html, commonHtml);            
            }); 
        } else {
            updateContent(html);
        }
    }

    function updateContent(html, common) {
            
        var name = $('#doccontent').attr('data-file');

        $('#doccontent').empty();
        $('#doccontent').append('<a class="edit-me" href="https://github.com/guardian/open-platform-site/edit/gh-pages/documentation/md/' + name + '.md">edit</a>');   
        $('#doccontent').append(html);
        /* include common content */
        if (common !== undefined) {$('#doccontent h2').eq(2).after(common);}

        /* handle special item endpoint */
        if (name === 'item') {
                
                markdownApi.convert('../documentation/md/content_search.md', function(contentHtml) {
                
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
            enhanceAppearance();
        }
    }

    function enhanceAppearance() {
        $('table').addClass('ui basic table'); 

        var tables5 = $( "tr").filter(function() {return $(this).children().length == 5 });
        var tables4 = $( "tr").filter(function() {return $(this).children().length <= 4 });

        
        renderDoc('types', function(html){ 
            $('tr th:contains("Type")').attr('data-content', html);
            $('tr th:contains("Type")').append('<div class="btn btn-default btn-help">?</div>');
            $('th[data-content]').popover({ placement : 'bottom', html: true});
        });

        renderDoc('boolean_operators', function(html) {
            $('tr th:contains("Boolean operators")').attr('data-content', html);
            $('tr th:contains("Boolean operators")').append('<div class="ui btn-help">?</div>');
            $('th[data-content]').popover({ placement : 'bottom', html: true});

            $('tr td').filter(function() {return $(this).text() === 'false'}).empty().append('<i class="icon close"></i>');
            $('tr td').filter(function() {return $(this).text() === 'true'}).empty().append('<i class="icon checkmark"></i>');
        }); 

        /* display beautiful json */
        $('pre code').text(function(i, t){return JSON.stringify($.parseJSON(t), null, 4)});
        $('pre code').each(function(i, e) {hljs.highlightBlock(e)});
    }

    var file = $('#doccontent').attr('data-file');
    if (file !== undefined) {
        renderDoc(file, convertDone);
    }

});
