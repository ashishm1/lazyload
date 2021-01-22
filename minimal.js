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
        lazyscript.src = "https://infyscroller.tk/ajaxinate-minimal.js";
    }
    catch(err){
        console.log(err);
    }
    }

function addAjax(){

    var orientation;

    var productgrid = $('div.grid-uniform.grid-link__container')
    if(productgrid.length > 0) {
        var pgrid = productgrid[0]
        pgrid.setAttribute("id", "LazyLoader-Loop");
        orientation = 'div.grid-uniform.grid-link__container';
        }
    
        //→

    ll = $('ul.pagination-custom');
    if (ll.length > 0) {
        pagegrid = ll[0]
        // if(pagegrid.lastElementChild.innerH)
        pagegrid.setAttribute("id", "LazyLoader-Pagination")
        } 
        
    //Remove Left arrow
    //document.querySelectorAll('ul.pagination')[0].querySelectorAll('li')[1].innerText = "";
    //document.querySelectorAll('ul.pagination')[0].querySelectorAll('li')[0].remove();
    
    $('main').append(`<script>var endlessScroll = new Ajaxinate({container: "#LazyLoader-Loop", pagination: "#LazyLoader-Pagination", orientation: "${orientation}"});document.addEventListener("DOMContentLoaded", function() { var endlessScroll = new Ajaxinate({container: "#LazyLoader-Loop", pagination: "#LazyLoader-Pagination", orientation: "${orientation}"});});</script>`)


}