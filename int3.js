var elements1 = document.getElementsByTagName('b');
function Result() {
    document.getElementById('words').style.display='none';
    var aa = 0;
    for (let i = 0; i < elements1.length; i++) {
        if(elements1[i].innerHTML === ''){
            var x = document.getElementById("snackbar");
            x.className = "show";
            document.getElementById('olque').setAttribute('style','filter: blur(3px)')
            setTimeout(function(){ document.getElementById('olque').removeAttribute('style') }, 2000);
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
            i = 200
        }
        else{
        var l = elements1[i].getAttributeNode('name').value;
        if (elements1[i].children[0].innerText === l) {
            aa++;
            elements1[i].children[0].style.border = '3px solid #02ff02';  
        } else {
            elements1[i].children[0].style.border = '3px solid red';
        }
        document.getElementById('mar').innerHTML = aa + '/' + elements1.length;
        document.getElementById('getmark').innerText = aa;
        document.getElementById('totalmark').innerText = elements1.length;
        document.getElementById('sig').style.display = 'block';
    }}
} 
function reset(){
    for(let i=0;i<elements1.length;i++){  
        elements1[i].innerHTML="";
    }
    if(screen.width >1000){document.getElementById('words').style.display='block';}else{document.getElementById('words').style.display='flex'}
    
    document.getElementById('for2').innerHTML = "a";
    document.getElementById('sig').style.display = 'none';
    document.getElementById('mar').innerHTML =  ' ';
    if(document.getElementById('page').innerHTML==='1'){
    document.getElementById('Nxt').style.display = 'flex';}else{document.getElementById('Nxt').style.display = 'none';
 }
}
function ans(){
    for(let i=0;i<elements1.length;i++){
        elements1[i].innerHTML= elements1[i].getAttributeNode('name').value ;
        elements1[i].style.color = 'black';
        document.getElementById('mar').innerHTML =  ' ';
        document.getElementById('Nxt').style.display = 'none';
        document.getElementById('words').style.display='none';
    }
}
$(document).ready(function () {

    $(".drag").draggable({
        helper: "clone"
    }); $("#drag1").draggable({
        helper: "clone"
    }); $("#drag2").draggable({
        helper: "clone"
    }); $("#drag3").draggable({
        helper: "clone"
    });
    $('#drop').droppable({
        accept: ".drag",
        drop: function (ev, ui) {

            document.getElementById('drop').innerHTML = '';
            var droppeditem = $(ui.draggable).clone()
            $(this).append(droppeditem)
            document.getElementById('drop').style.backgroundColor = '#9aacff';
            setTimeout(function () { document.getElementById('drop').style.backgroundColor = 'transparent'; }, 350)
        }
    });

    $('#drop1').droppable({
        accept: ".drag",
        drop: function (ev, ui) {
            document.getElementById('drop1').innerHTML = '';
            var droppeditem = $(ui.draggable).clone()
            $(this).append(droppeditem)
            document.getElementById('drop1').style.backgroundColor = '#9aacff';
            setTimeout(function () { document.getElementById('drop1').style.backgroundColor = 'transparent'; }, 350)
        }
    });
    $('#drop2').droppable({
        accept: ".drag",
        drop: function (ev, ui) {
            document.getElementById('drop2').innerHTML = '';
            var droppeditem = $(ui.draggable).clone()
            $(this).append(droppeditem)
            document.getElementById('drop2').style.backgroundColor = '#9aacff';
            setTimeout(function () { document.getElementById('drop2').style.backgroundColor = 'transparent'; }, 350)
        }
    });
    $('#drop3').droppable({
        accept: ".drag",
        drop: function (ev, ui) {
            document.getElementById('drop3').innerHTML = '';
            var droppeditem = $(ui.draggable).clone()
            $(this).append(droppeditem)
            document.getElementById('drop3').style.backgroundColor = '#9aacff';
            setTimeout(function () { document.getElementById('drop3').style.backgroundColor = 'transparent'; }, 350)
        }
    });
    $('#drop4').droppable({
        accept: ".drag",
        drop: function (ev, ui) {
            document.getElementById('drop4').innerHTML = '';
            var droppeditem = $(ui.draggable).clone()
            $(this).append(droppeditem)
            document.getElementById('drop4').style.backgroundColor = '#9aacff';
            setTimeout(function () { document.getElementById('drop4').style.backgroundColor = 'transparent'; }, 350)
        }
    });
    $('#drop5').droppable({
        accept: ".drag",
        drop: function (ev, ui) {
            document.getElementById('drop5').innerHTML = '';
            var droppeditem = $(ui.draggable).clone()
            $(this).append(droppeditem)
            document.getElementById('drop5').style.backgroundColor = '#9aacff';
            setTimeout(function () { document.getElementById('drop5').style.backgroundColor = 'transparent'; }, 350)
        }
    });
    $('#drop6').droppable({
        accept: ".drag",
        drop: function (ev, ui) {
            document.getElementById('drop6').innerHTML = '';
            var droppeditem = $(ui.draggable).clone()
            $(this).append(droppeditem)
            document.getElementById('drop6').style.backgroundColor = '#9aacff';
            setTimeout(function () { document.getElementById('drop6').style.backgroundColor = 'transparent'; }, 350)
        }
    });
});
