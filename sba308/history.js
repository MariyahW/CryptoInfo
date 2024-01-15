import axios from "axios";
export default function history(event,his){
    event.preventDefault();
let hist=his;
    let coin = event.target.value;
    axios.get(`https://api.coincap.io/v2/assets/${coin}`)
   .then(res=>{
   
    let data= res.data.data;
    console.log(data);
   hist.push(data.symbol);
   
   })
   return hist;
}