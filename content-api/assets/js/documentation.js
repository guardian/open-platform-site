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
        $('#doccontent').append('<a href="https://github.com/guardian/open-platform-site/edit/gh-pages/documentation/md/' + name + '.md">Edit me </a>');   
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

    var file = $('#doccontent').attr('data-file');
    if (file !== undefined) {
        renderDoc(file, convertDone);
    }

});
