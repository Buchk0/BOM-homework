function countryCities () {
    let selectedCountry = document.querySelector('#country').value;
let citiesDropdown = document.querySelector('#cities');
citiesDropdown.innerHTML = "";

if(selectedCountry === 'ger') {
addCityOption('Berlin');
addCityOption('Potsdam');
addCityOption('Leiptzich');
}
if(selectedCountry === 'usa') {
    addCityOption('Detroit');
    addCityOption('Los Angeles');
    addCityOption('Maiami');
}
if(selectedCountry == 'ukr') {
    addCityOption('Lviv');
    addCityOption('Kyiv');
    addCityOption('Rivne');
}
let selectedLocation = document.querySelector('#selectedLocation');
selectedLocation.textContent = 'Selected' + selectedCountry + ', ' + citiesDropdown.value;
}
function addCityOption(cityName) {
    let option =document.createElement('option');
    option.value = cityName;
    option.text = cityName;
    document.querySelector('#cities').add(option);
}
document.querySelector('#country').addEventListener('change', countryCities);

