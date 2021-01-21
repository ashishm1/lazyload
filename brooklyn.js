try{
    const script2 = document.createElement('script');
    document.getElementsByTagName('head')[0].appendChild(script2);
    script2.onload = handlertag;
    script2.onreadystatechange = handlertag;
    script2.type = "text/javascript";
    script2.src = "https://code.jquery.com/jquery-3.5.1.min.js";
}
catch(err){
    console.log(err);
}


function handlertag() {
    try{
        const lazyscript = document.createElement('script');
        document.getElementsByTagName('head')[0].appendChild(lazyscript);
        lazyscript.onload = addAjax;
        lazyscript.onreadystatechange = addAjax;
        lazyscript.type = "text/javascript";
        lazyscript.src = "https://cdn.jsdelivr.net/gh/ashishm1/lazyload@main/ajaxinate-brooklyn.js";
    }
    catch(err){
        console.log(err);
    }
    }

function addAjax(){

    var orientation;
    
    if($('.grid-collage').length > 0) {
        $('.grid-collage').attr("id", "LazyLoader-Loop");
        orientation = '.grid-collage';
        }
    else if($('.grid-uniform').length > 0) {
        $('.grid-uniform').attr("id", "LazyLoader-Loop");
        orientation = '.grid-uniform'
        }
    
    
    
    ll = $('div.pagination span.next').length;
    if (ll > 0) {
        tt = $('div.pagination span.next')[0]; tt.setAttribute("id", "LazyLoader-Pagination")
        $('div.grid-collage').attr("id", "LazyLoader-Loop")
        } 
        
    //Remove arrow
    //document.querySelectorAll('ul.pagination')[0].querySelectorAll('li')[1].innerText = "";
    //document.querySelectorAll('ul.pagination')[0].querySelectorAll('li')[0].remove();
    
    $('main').append(`<script>var endlessScroll = new Ajaxinate({container: "#LazyLoader-Loop", pagination: "#LazyLoader-Pagination", orientation: "${orientation}"});document.addEventListener("DOMContentLoaded", function() { var endlessScroll = new Ajaxinate({container: "#LazyLoader-Loop", pagination: "#LazyLoader-Pagination", orientation: "${orientation}"});});</script>`)


}
