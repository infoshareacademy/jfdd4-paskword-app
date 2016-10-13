function Vet (firstName, lastName, photo, office, email, phone, coordinates)  {

    this.firstName = firstName;
    this.lastName = lastName;
    this.photo = photo;
    this.office = office;
    this.email = email;
    this.phone = phone;
    this.coordinates = coordinates;
}

var photos = [];

for (var i=0; i<10; i++){
    photos[i] = new Image();
    photos[i].src = require('./vet-photos/photo' + i + '.jpg');
}

var james = new Vet("James", "Sutherland", photos[0], "Przychodnia Gdańska", "jamsuthe@yahoo.com", "55 555 555 555", [{latitude: 32.47, longitude: -107.85}]);
var maria = new Vet("Maria", "Merry", photos[1], "Przychodnia Gdańska", "marjerry@yahoo.com", "55 555 555 565", [{latitude: 32.47, longitude: -107.85}]);
var jerry = new Vet("Jerry", "Suther", photos[2], "Przychodnia Gdańska", "jersuthe@yahoo.com", "55 555 555 585", [{latitude: 32.47, longitude: -107.85}]);
var kate = new Vet("Kate", "Walker", photos[3], "Przychodnia Elbląska", "katwalke@yahoo.com", "66 555 555 585", [{latitude: 50, longitude: 100}]);
var mary = new Vet("Mary", "Goat", photos[4], "Przychodnia Gdańska", "margoat@yahoo.com", "77 555 555 585", [{latitude: 32.47, longitude: -107.85}]);
var fawkes = new Vet("Fawkes", "Shepard", photos[5], "Przychodnia Gdańska", "fawshepa@yahoo.com", "88 555 555 585", [{latitude: 32.47, longitude: -107.85}]);
var daria = new Vet("Daria", "Mahariel", photos[6], "Przychodnia Gdańska", "darmahar@yahoo.com", "99 555 555 585", [{latitude: 32.47, longitude: -107.85}]);
var jake = new Vet("Jake", "Lavellan", photos[7], "Przychodnia Gdańska", "jaklavel@yahoo.com", "88 885 555 585", [{latitude: 32.47, longitude: -107.85}]);
var mordin = new Vet("Mordin", "Normandy", photos[8], "Przychodnia Gdańska", "mornorma@yahoo.com", "88 958 635 585", [{latitude: 32.47, longitude: -107.85}]);
var garrus = new Vet("Garrus", "Bird", photos[9], "Przychodnia Gdańska", "garbird@yahoo.com", "88 555 321 369", [{latitude: 32.47, longitude: -107.85}]);

module.exports = [
    james, maria, jerry, kate, mary, fawkes, daria, jake, mordin, garrus
];