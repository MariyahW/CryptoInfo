
import axios from "axios";

import option from "./select.js";
import *  as charting from  "./chart.js";
import * as pricing from "./data.js";
import history from "./history.js";

const form = document.querySelector("select");
const search = document.querySelector('#formButton');
const item4 = document.getElementById('item4');
const sect2 = document.getElementById('list-item-2');
const historySection= document.querySelector('#list-item-4')
let his=[];
const api_key = `83afe97e-5f1a-495c-931d-45918a68d87c`;

(async function fillForm() {
  axios.get(`https://api.coincap.io/v2/assets`).then((response) => {
    response.data.data.forEach((coin) => {
      form.append(option(coin));
    });
  });
})();

form.addEventListener('change',fillLine);
form.addEventListener('change',priceUsd);
form.addEventListener('change',fillHistory)

 function fillLine(event) {
   event.preventDefault();
   
   let coin = event.target.value;
  axios.get(`https://api.coincap.io/v2/assets/${coin}/history?interval=d1`)
  .then(res=>{
   charting.clearChart();
  charting.createLine(res);
  
  })
 }
 function priceUsd(event){
   let coin = event.target.value;

   axios.get(`https://api.coincap.io/v2/assets/${coin}`)
   .then(response=>{
      pricing.clearDiv(sect2);
      sect2.append(pricing.getPrice(response));
      sect2.append(pricing.getChange(response));
      sect2.append(pricing.getSymbol(response));
   
   })
 }

function fillHistory(event){
 his= history(event,his);
historySection.innerHTML='';
let str=`You have visited: `
historySection.append(str); 
his.forEach(coin=>{
historySection.append(`${coin} `)

 });

}