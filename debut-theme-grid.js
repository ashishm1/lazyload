const script = document.createElement('script');
script.src = "https://code.jquery.com/jquery-3.5.1.min.js";
script.type = "text/javascript";
console.log("From Jsdeliver")
script.onreadystatechange = handler();
script.onload = handler();
document.getElementsByTagName('head')[0].appendChild(script)



function handler() {

    console.log("This is debut theme api!!!!!!!")

    const head = $('head');
    head.append(`<script>document.addEventListener("DOMContentLoaded", function() { var endlessScroll = new Ajaxinate({container: "#LazyLoader-Loop", pagination: "#LazyLoader-Pagination"});});</script>`);
    head.append(`<script src="https://cdn.shopify.com/s/files/1/0382/4185/files/ajaxinate.js?937" type="text/javascript"></script>`);
    if($('ul.grid').length > 0) {
        console.log("In ul grid")
        $('ul.grid').attr("id", "LazyLoader-Loop");
    }
        ll = $('a.btn--narrow').length;
    if (ll > 1) {
        console.log("IN more than one arrows")
        tt = $('a.btn--narrow')[1]; tt.setAttribute("id", "LazyLoader-Pagination")
    } 
    else if ($('a.btn--narrow').length > 0 ) {
        console.log("In next arrow")
        $('a.btn--narrow').attr("id", "LazyLoader-Pagination")
    }



// fetch('https://ashish-load.herokuapp.com/api/lazyload?shop=shop=sample-store-15.myshopify.com')
//     .then(res => res.json())
//     .then(console.log("Fetched"))
//     .then(handler())
//     .catch(error => console.log(error))
}
