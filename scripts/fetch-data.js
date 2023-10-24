function fetchData(theSpan) {
    fetch('https://api.coincap.io/v2/assets')
        .then(Response => Response.json()).then(json => {
            let content = "";
            json.forEach(currency => {
                content += currency.id;
            });
        })
    
}




function hideOrShow() {
    document.getElementById("")
}

export { hideOrShow}