function sum(num1,num2){
    return num1+num2;
}
// no es necesario el nombre callback
function calc(num1,num2,callback){
    return callback(num1,num2);
};

console.log(calc(2,2,sum));


setTimeout(function(){
    console.log('Hola JavaScript');
},5000);

function Tesaludo(name){
    console.log(`Hola ${name}`);
}

setTimeout(Tesaludo,5000,'Andrés');