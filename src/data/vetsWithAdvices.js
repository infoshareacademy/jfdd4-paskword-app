import vetsData from '../data/vets';
import advices from '../data/advices';

var vetNumber = vetsData.length;
var vetsWithAdvices = vetsData.map(function(vet) {
    vet.advices = [];
    return vet;
});
advices.forEach(function(advice){
    var randomNumber = Math.floor((Math.random() * vetNumber) +1);
    vetsWithAdvices[randomNumber-1].advices.push(advice);
});

export default vetsWithAdvices;
