function Vet (firstName, lastName, photo, email, phone, id)  {

    this.firstName = firstName;
    this.lastName = lastName;
    this.photo = photo;
    this.email = email;
    this.phone = phone;
    this.id = id;
}

var photos = [];

for (var i=0; i<10; i++){
    photos[i] = require('./vet-photos/photo' + i + '.jpg');
    //don't delete require!
}

var james = new Vet("James", "Sutherland", photos[0], "jamsuthe@yahoo.com", "55 555 555 555", 1);
var maria = new Vet("Maria", "Merry", photos[1], "marjerry@yahoo.com", "55 555 555 565", 2);
var jerry = new Vet("Jerry", "Suther", photos[2], "jersuthe@yahoo.com", "55 555 555 585", 3);
var kate = new Vet("Kate", "Walker", photos[3], "katwalke@yahoo.com", "66 555 555 585", 4);
var mary = new Vet("Mary", "Goat", photos[4], "margoat@yahoo.com", "77 555 555 585", 5);
var fawkes = new Vet("Fawkes", "Shepard", photos[5], "fawshepa@yahoo.com", "88 555 555 585", 6);
var daria = new Vet("Daria", "Mahariel", photos[6], "darmahar@yahoo.com", "99 555 555 585", 7);
var jake = new Vet("Jake", "Lavellan", photos[7], "jaklavel@yahoo.com", "88 885 555 585", 8);
var mordin = new Vet("Mordin", "Normandy", photos[8], "mornorma@yahoo.com", "88 958 635 585", 9);
var garrus = new Vet("Garrus", "Bird", photos[9], "garbird@yahoo.com", "88 555 321 369", 10);

export default [
    james, maria, jerry, kate, mary, fawkes, daria, jake, mordin, garrus
];
