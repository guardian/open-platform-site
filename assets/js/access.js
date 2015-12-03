$(document).ready(function() {
    var developerBox = document.getElementById('developerBox')
    developerBox.addEventListener('click', function(){
        history.pushState(null, document.url, this.href);
        document.getElementById('boxes').style.display = 'none'
        document.getElementById('developer').style.display = 'block'
    });

    var commercialBox = document.getElementById('commercialBox')
    commercialBox.addEventListener('click', function(){
        history.pushState(null, document.url, this.href);
        document.getElementById('boxes').style.display = 'none'
        document.getElementById('commercial').style.display = 'block'
    });

    window.addEventListener('popstate', function(e) {
        document.getElementById('boxes').style.display = 'block'
        document.getElementById('developer').style.display = 'none'
        document.getElementById('commercial').style.display = 'none'
    });
});