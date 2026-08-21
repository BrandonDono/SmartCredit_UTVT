
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

    const respuesta = await fetch('https://api.exchangerate-api.com/v4/latest/MXN');
const cam = await respuesta.json();

const dol = cam.rates.USD;
const eur = cam.rates.EUR;
const mensualidaddol= mensualidad * dol;
const mensualidadeur= mensualidad * eur;
const interesdol = interes * dol
const intereseur =  interes * eur;
const ivadol= ivainteres * dol;
const ivaeur=ivainteres * eur;
const tdolares = total * dol;
const teur = total * eur;




document.getElementById("resultado").innerHTML=`
<br><br>
<table class="table table-hover table-bordered">
  <thead class="table-primary ">
    <tr>
      <th scope="col">Tipo de Cambio</th>
      <th scope="col">Mensualidad</th>
      <th scope="col">Intereses</th>
      <th scope="col">IVA</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Pesos</th>
      <td><strong class="text-center"><strong>$${mensualidad.toFixed(2)}</td>
       <td><strong class="text-center"><strong>$${interes.toFixed(2)}</td>
      <td><strong class="text-center"><strong>$${ivainteres.toFixed(2)}</td>
      <th><strong class="text-center"><strong>$${total.toFixed(2)}</th>
    </tr>
    <tr>
      <th scope="row">Dolares</th>
     <td><strong class="text-center"><strong>$${mensualidaddol.toFixed(2)}</td>
     <td><strong class="text-center"><strong>$${interesdol.toFixed(2)}</td>
     <td><strong class="text-center"><strong>$${ivadol.toFixed(2)}</td>
     <td><strong class="text-center"><strong>$${tdolares.toFixed(2)}</td>
    </tr>
 <tr>
      <th scope="row">Euros</th>
      <td><strong class="text-center"><strong>$${mensualidadeur.toFixed(2)}</td>
      <td><strong class="text-center"><strong>$${intereseur.toFixed(2)}</td>
      <td><strong class="text-center"><strong>$${ivaeur.toFixed(2)}</td>
      <td><strong class="text-center"><strong>$${teur.toFixed(2)}</td>
    </tr>

  </tbody>
</table>

`;
}





