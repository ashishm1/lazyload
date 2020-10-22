const script = document.createElement('script');
script.src = "https://code.jquery.com/jquery-3.5.1.min.js";
//script.type = "text/javascript";
console.log("In test script")
script.onreadystatechange = handler;
// script.displayscope = "ALL"
document.getElementsByTagName('head')[0].appendChild(script)
    //script.onload = handler(data);

// function makeHeader(data) {
    
// }


// const header = document.getElementsByClassName("site-header")[0].parentElement.appendChild('<div>Hello from Mars</div>')
// Id('shopify-section-header')
function handler(data) {

    console.log("This is new2 script tag api!!!!!!!")

    const body = $('body');
    const header = $('header.site-header').parent();
    header.prepend(`<div>${data}</div>`).css({'background-color': 'orange', 'text-align': 'center'})
    
}


fetch('https://cors-anywhere.herokuapp.com/https://af4de64e4deb.ngrok.io/api/lazyload?shop=shop=sample-store-15.myshopify.com')
    .then(res => res.json())
    .then(data => {
        handler(data.data)
    })
    .catch(error => console.log(error))
