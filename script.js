const vardi = ['Annna Krūmiņa', "Kārlis Auza","Liene Akmens","Jānis Burka", "Zane Liepiņa"]
const balvas =["Kauss", "Teātra biļete", "Saldējuma kaste", "Pleds", "Powerbanka"]
const naudaKopa=10000;
let uzvaretajuSkaits = 5;
let rindas = document.querySelector(".rindas");
rindas.innerHTML = "";
for (let i =0; i<uzvaretajuSkaits; i++ ){
    let rand=Math.random()* vardi.length;
    rand=Math.floor(rand);
    let uzvaretajs = vardi[rand];
    rindas.innerHTML+=`
    <tr>
    <td>${i+1}</td>
    <td>${uzvaretajs}</td>
    </tr>`
}