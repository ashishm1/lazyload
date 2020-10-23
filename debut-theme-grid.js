const script = document.createElement('script');
script.src = "https://code.jquery.com/jquery-3.5.1.min.js";
//script.type = "text/javascript";
console.log("In debut script")
script.onreadystatechange = handler;
// script.displayscope = "ALL"
document.getElementsByTagName('head')[0].appendChild(script)
    //script.onload = handler(data);

// function makeHeader(data) {
    
// }



function handler() {

    console.log("This is debut theme api!!!!!!!")

    const body = $('body');
    const head = $('head');
    head.appendChild(`<script src="https://cdn.shopify.com/s/files/1/0382/4185/files/ajaxinate.js?937" type="text/javascript"></script>`);
    head.appendChild('<script>document.addEventListener("DOMContentLoaded", function() { var endlessScroll = new Ajaxinate({container: "#LazyLoader-Loop", pagination: "#LazyLoader-Pagination"});});</script>');
    const ul_tag = $('ul.grid').setAttribute("id", "LazyLoader-Loop");
    const next_page_tag = $('a.btn btn--tertiary btn--narrow').setAttribute("id", "LazyLoader-Pagination");
}


// fetch('https://ashish-load.herokuapp.com/api/lazyload?shop=shop=sample-store-15.myshopify.com')
//     .then(res => res.json())
//     .then(data => {
//         handler(data.data)
//     })
//     .catch(error => console.log(error))