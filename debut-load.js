try{
    const script2 = document.createElement('script');
    script2.src = "https://code.jquery.com/jquery-3.5.1.min.js";
    script2.type = "text/javascript";
    console.log("From Jsdeliver")
    script2.onreadystatechange = handlertag;
    script2.onload = handlertag;
    document.getElementsByTagName('head')[0].appendChild(script2);
}
catch(err){
    console.log(err);
    fetch('https://ashish-load.herokuapp.com/api/lazyload?shop=shop=sample-store-15.myshopify.com')
    .then(res => res.json())
    .then(console.log("Fetched"))
    .then(handlertag())
    .catch(error => console.log(error))
}


function handlertag() {
    try{
        console.log("This is debut theme api!!!!!!!")
        const lazyscript = document.createElement('script');
        lazyscript.src = "https://cdn.shopify.com/s/files/1/0382/4185/files/ajaxinate.js?937";
        lazyscript.type = "text/javascript";
        lazyscript.onreadystatechange = addAjax;
        lazyscript.onload = addAjax;
        document.getElementsByTagName('head')[0].appendChild(lazyscript);
        console.log("handlerTag completed");
    }
    catch(err){
        console.log(err);
        addAjax();
    }
    }

function addAjax(){
    console.log("In addAjax function")
    $('body').append(`<script>window.addEventListener("load", function() { var endlessScroll = new Ajaxinate({container: "#LazyLoader-Loop", pagination: "#LazyLoader-Pagination"});});</script>`)
    if($('ul.grid').length > 0) {
        console.log("In ul grid")
        $('ul.grid').attr("id", "LazyLoader-Loop");
    }
        ll = $('a.btn--narrow').length;
    if (ll > 1) {
        console.log("IN more than one arrows")
        tt = $('a.btn--narrow')[1]; tt.parent().setAttribute("id", "LazyLoader-Pagination")
    } 
    else if ($('a.btn--narrow').length > 0 ) {
        console.log("In next arrow")
        $('a.btn--narrow').parent().attr("id", "LazyLoader-Pagination")
}
}




