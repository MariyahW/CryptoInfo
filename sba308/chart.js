import Chart from "chart.js/auto";

let canvas = document.getElementById('price');
let blank = document.getElementById('blank');
let myChart;
const api_key='` 83afe97e-5f1a-495c-931d-45918a68d87c';

  export  function createLine(response){ 
let data =response.data.data;
data.forEach(element => {
  element.date=element.date.split('T')[0];
});

  myChart =new Chart(canvas, {
    type: "line",
    options: {color: "black"},
   
    data: {
      labels: data.map((row) => row.date),
      
     
      datasets: [
        {
          label: "Pricing History",
          data: data.map((row) => row.priceUsd),
          fill: true,
          // backgroundColor:'#989788',
          color: 'black',
        },
      ],
    },
  });
 
  }

  //Clears chart so that it may be used again
  export function clearChart(){
    if(blank.toDataURL()!=canvas.toDataURL()){
        myChart.destroy();
    }
  }