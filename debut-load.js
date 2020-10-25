try{
    const script2 = document.createElement('script');
    document.getElementsByTagName('head')[0].appendChild(script2);
    script2.onload = handlertag;
    script2.onreadystatechange = handlertag;
    script2.type = "text/javascript";
    script2.src = "https://code.jquery.com/jquery-3.5.1.min.js";
    console.log("From Jsdeliver")
    
}
catch(err){
    console.log(err);
//     fetch('https://ashish-load.herokuapp.com/api/lazyload?shop=shop=sample-store-15.myshopify.com')
//     .then(res => res.json())
//     .then(console.log("Fetched"))
//     .then(handlertag())
//     .catch(error => console.log(error))
}


function handlertag() {
    try{
        console.log("This is debut theme api!!!!!!!")
        const lazyscript = document.createElement('script');
        document.getElementsByTagName('head')[0].appendChild(lazyscript);
        lazyscript.onload = addAjax;
        lazyscript.onreadystatechange = addAjax;
        lazyscript.type = "text/javascript";
        lazyscript.src = "https://cdn.jsdelivr.net/gh/ashishm1/lazyload@main/ajaxinate-modified.js";
        console.log("handlerTag completed");
    }
    catch(err){
        console.log(err);
//         addAjax();
    }
    }

function addAjax(){
    console.log("In addAjax function")
    if($('ul.grid').length > 0) {
        console.log("In ul grid")
        $('ul.grid').attr("id", "LazyLoader-Loop");
    }
        ll = $('a.btn--narrow').length;
    if (ll > 1) {
        console.log("IN more than one arrows")
        tt = $('a.btn--narrow')[1]; tt.parentElement.setAttribute("id", "LazyLoader-Pagination")
    } 
    else if ($('a.btn--narrow').length > 0 ) {
        console.log("In next arrow")
        $('a.btn--narrow').parent().attr("id", "LazyLoader-Pagination")
        
}
        document.querySelectorAll('ul.pagination')[0].querySelectorAll('li')[1].innerText = "";
        document.querySelectorAll('ul.pagination')[0].querySelectorAll('li')[0].remove();
        $('main').append(`<script>var endlessScroll = new Ajaxinate({container: "#LazyLoader-Loop", pagination: "#LazyLoader-Pagination"});document.addEventListener("DOMContentLoaded", function() { var endlessScroll = new Ajaxinate({container: "#LazyLoader-Loop", pagination: "#LazyLoader-Pagination"});});</script>`)


}




