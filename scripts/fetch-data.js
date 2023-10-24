const currencyArray = [];
function fetchData() {
    fetch('https://api.coincap.io/v2/assets')
        .then(Response => Response.json())
        .then(json => {
            for (const currency of json.data) {
                currencyArray.push(currency);
            }
            console.log(currencyArray);
            populateDropdown();

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

fetchData();

function populateDropdown() {
    const dropdown = document.getElementById('currencyList');

    for (const currency of currencyArray) {
        const option = document.createElement('option');

        option.value = currency.id;
        option.text = currency.name;
    
        dropdown.appendChild(option);
    }
}


function dropDownFunction() {
    var currencies = document.getElementById("currencyList");

}
