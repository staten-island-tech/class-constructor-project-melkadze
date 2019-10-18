//model city class
class City {
    constructor(name, realName, population, area, founded){
        this.name = name;
        this.realName = realName;
        this.population = population;
        this.area = area;
        this.founded = founded;
        this.yearsExisting = function(){
            return new Date().getUTCFullYear() - this.founded;
        }
    }
}



//UI section: displaying & removing cities, and clearing fields
class UI {

    removeCity(e) {
        if(e.target.parentElement.classList.contains('display-button')){
            e.target.parentElement.parentElement.remove();
        }
    }
    
    clearValues() {
        document.getElementById("city-form").reset();
    }

    displayCity(e){
        if (userName.value == false || userRealName.value == false || userPopulation.value == false || userArea.value == false || userFounded.value == false || userURL.value == false) {
            alert('Please. The database requires your full effort.');
        } else {
    
        let html = '<div class="display-city"><div class="display-name"> %name% </div> <div class="display-realName"> %realName% </div> <div class="display-population"> %population% </div> <div class="display-area"> %area% </div> <div class="display-yearFounded"> %yearFounded% </div> <div class="display-yearsExisting"> %yearsExisting% </div> <div class="display-image"> <image src="%url%"> </div><div class="display-button"> <p class="btn">X</p> </div> </div>';
    
        const currentYear = new Date().getFullYear();
        const yearsExisting = currentYear - userFounded.value;
    
        let newHTML = html.replace('%name%', userName.value);
        newHTML = newHTML.replace('%realName%', userRealName.value);
        newHTML = newHTML.replace('%population%', userPopulation.value);
        newHTML = newHTML.replace('%area%', userArea.value);
        newHTML = newHTML.replace('%yearFounded%', userFounded.value);
        newHTML = newHTML.replace('%yearsExisting%', yearsExisting);
        newHTML = newHTML.replace('%url%', userURL.value);
        display.insertAdjacentHTML('beforeend', newHTML);
    
        e.preventDefault();
    
        ui.clearValues();
        }
    }
}



//**Controller */ combines UI and model
//instantiate new UI
//const ui = new UI()
//call relevant methods



//CONTROLLER:
form = document.querySelector('#city-form');
form.addEventListener('submit', function(e){
    //get values
    userName = document.querySelector('#name');
    userRealName = document.querySelector('#realName');
    userPopulation = document.querySelector('#population');
    userArea = document.querySelector('#area');
    userFounded = document.querySelector('#founded');
    userURL = document.querySelector('#image');
    display = document.querySelector('.display');
})


class Controller {

    cities = [];

    addCity(name, realName, population, area, founded){
        cities.push(new City(name, realName, population, area, founded));
    }

    eventListeners(){
        form.addEventListener('submit', ui.displayCity);
        document.querySelector('.display').addEventListener('click', ui.removeCity);
    }
    
}


const ui = new UI();
const controller = new Controller();

controller.eventListeners();

ui.clearValues();