
async function CalPrestamo()
{
const mon =Number(document.getElementById("monto").value);
const tas = Number(document.getElementById("tasa").value)
const plaz = Number(document.getElementById("plazo").value)
const iva =Number(document.getElementById("iva").value)


if(mon <= 0 || tas <0 || plaz <=0 || iva <0 ){
alert("Ingresa los datos correspondientes")
return;
}

const tamensual =(tas/100)/12;
let mensualidad;

if(tamensual===0){
    mensualidad = mon/plaz;
}
else{
    mensualidad = mon * (tamensual * Math.pow(1+tamensual,plaz))/(Math.pow(1+tamensual,plaz)-1);
}
const interes = mensualidad * plaz - mon;
const ivainteres = interes *(iva/100);
const  total = mon + interes + ivainteres;

  

const mensualidaddol= mensualidad * dol;
const mensualidadeur= mensualidad * eur;
const interesdol = interes * dol
const intereseur =  interes * eur;
const ivadol= ivainteres * dol;
const ivaeur=ivainteres * eur;
const tdolares = total * dol;
const teur = total * eur;
}



