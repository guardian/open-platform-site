function MarkdownApi() {

    this.read = function(file, onSuccess)  {
        var rawFile = new XMLHttpRequest();
        var rawText;
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function () {
            if(rawFile.readyState === 4) {
                if(rawFile.status === 200 || rawFile.status == 0) {
                    rawText = rawFile.responseText;
                    onSuccess(rawText);
                }
            }
        }
        rawFile.send(null);
    }

    this.convert = function(file, onSuccess) {
        this.read(file, function(data){
            var html = markdown.toHTML(data, 'Maruku');
            onSuccess(html);
        });
    }
}
