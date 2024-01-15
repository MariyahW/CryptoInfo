
import axios from "axios";

import option from "./mod1.js";
import *  as charting from  "./mod2.js";
import * as pricing from "./mod3.js";

const form = document.querySelector("select");
const search = document.querySelector('#formButton');
const item4 = document.getElementById('item4');
const sect2 = document.getElementById('list-item-2');
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

 function fillLine(event) {
   event.preventDefault();
   // item4.classList='active';
   // console.log(item4.classList);
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
