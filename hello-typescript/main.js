var variavel = 'minha var';
function minhafunc(x, y) {
    return x + y;
}
//ES 6 ou ES 2015
var num = 2;
var PI = 3.1415;
//Javascript vanilla
var numero = [1, 2, 3];
numero.map(function (valor) {
    return valor * 2;
});
//arrow functions ES 6 ou ES 2015
numero.map(function (valor) { return valor * 2; });
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
