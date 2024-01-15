

const api_key='` 83afe97e-5f1a-495c-931d-45918a68d87c';

export default function createOpt(coin){

    let opt = document.createElement('option');
opt.value=coin.id;
opt.innerHTML=coin.name;
// form.appendChild(opt);
return opt;
}