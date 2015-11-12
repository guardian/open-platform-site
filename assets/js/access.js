$(document).ready(function() {
    var developerBox = document.getElementById('developerBox')
    developerBox.addEventListener('click', function(){
        document.getElementById('boxes').style.display = 'none'
        document.getElementById('developer').style.display = 'block'
    });

    var commercialBox = document.getElementById('commercialBox')
    commercialBox.addEventListener('click', function(){
        document.getElementById('boxes').style.display = 'none'
        document.getElementById('commercial').style.display = 'block'
    });
});