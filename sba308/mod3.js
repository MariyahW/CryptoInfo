// const sect2 = document.getElementById('list-item-2');

export function getPrice(response){
    let data = response.data.data;
    let tag1= document.createElement('h4');
    tag1.innerHTML=`The current price of ${data.name}: ${data.priceUsd}`;
  console.log(data);
    return tag1;
}
export function getChange(response){
    let data = response.data.data;
    let tag2= document.createElement('h4');
    tag2.innerHTML=`${data.name} 24hr Change: ${data.changePercent24Hr}%`;
   return tag2;
}
export function getSymbol(response){
    let data = response.data.data;
    let tag3= document.createElement('h4');
    tag3.innerHTML=` ${data.name} symbol: ${data.symbol}`;
   return tag3;
}

export function clearDiv(section){
section.innerHTML='';
}
