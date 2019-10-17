

/*
const Winny = new Person(17,"Winny")
console.log(Winny.calculateBirthYear())
*/





//one class to create the object: person, album, movie, etc. ***Model
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




//****View */ class for the UI with methods
//creates/inserts the html for UI display
//clear fields method
//remove something/object

class UI {

    removeCity(e) {
        if(e.target.parentElement.classList.contains('display-button')){
            e.target.parentElement.parentElement.remove();
        }
    }
    
    clearValues() {
        document.getElementById("city-form").reset();
        console.log(document.getElementById("city-form"));
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
//event handler with function
//get values

//instantiate new class/object/album with variable name

//instantiate new UI
//const ui = new UI()

//call relevant methods

//seperate event handler for removing/deleting
//Ui is 3 methods
//put html on screen
//add album
//clear fields
//delete album



///evemt listener

//instamnciate new album

//const ui thinkg
//ui add album to list

//ui clear fields; prevent default

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

    //instanciate new album
    //const album = new Album(args)

    //const ui = new UI();

    //ui.addAlbumToList(album);

    //ui.clearFields();

    //e.preventDefault();
})


class Controller {

    addCity(name, realName, population, area, founded){
        cities.push(new City(name, realName, population, area, founded));
    }

    eventListeners(){
        form.addEventListener('submit', ui.displayCity);
        document.querySelector('.display').addEventListener('click', ui.removeCity);
        console.log('n');
    }
    
}


const ui = new UI();
const controller = new Controller();

controller.eventListeners();

ui.clearValues();



//list of cities const cities = [];


//const tbilisi = new City('Tbilisi', 'თბილისი', 1500000, 504.2, 479);

//push into array
/*function addCity(name, realName, population, area, founded){
    cities.push(new City(name, realName, population, area, founded));
}*/

//addCity('Tbilisi', 'თბილისი', 1500000, 504.2, 479);

//display objects on screen
/*
const form = document.querySelector('#city-form');
const userName = document.querySelector('#name');
const userRealName = document.querySelector('#realName');
const userPopulation = document.querySelector('#population');
const userArea = document.querySelector('#area');
const userFounded = document.querySelector('#founded');
const userURL = document.querySelector('#image');
const display = document.querySelector('.display');
*//* 

function eventListeners(){
    form = document.querySelector('#city-form');
    form.addEventListener('submit', displayCity);
    display.addEventListener('click', removeCity);
}

eventListeners(); */

/*
function displayCity(e){
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

    clearValues();
    }
}
*/

/*
function removeCity(e) {
    if(e.target.parentElement.classList.contains('display-button')){
        e.target.parentElement.parentElement.remove();
    }
}

function clearValues() {
    document.getElementById("city-form").reset();
}
*/

//clearValues();