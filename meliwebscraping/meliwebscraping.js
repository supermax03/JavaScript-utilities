/////////////////////////////////////////////////////////////////////
//Author: Maximiliano Bordon. Testeado para mercado libre argentina
//Permite recuperar informacion relacionada a la reputacion de un vendedor
////////////////////////////////////////////////////////////////////

var Xray=require('x-ray');
var util=require('util')
var x=Xray()

getsalesmanprofile=function(salesman) {
           _url_=util.format('https://perfil.mercadolibre.com.ar/%s',salesman)
            x(_url_,'.main-wrapper',[{
               name:'.store-info__name',
               experience:'.experience',
               salesamount:'.sales-amount',
               metrics:['.metric__description h2'],
               opinion:'.total',    // Este es el total de los votos
               tags:['.buyers-feedback-qualification'] // Con esto recuperamos el desglose de los votos

}])
(console.log)
}
getsalesmanprofile('DESILLAS')
