import './src/app/components/card/cardComponent.js';
const divCards = document.querySelector('#container-cards')
const personajes = [
    {
        nombre : 'Havok',
        img : 'https://static1.srcdn.com/wordpress/wp-content/uploads/2018/06/X-Men-Havok-Comic-Art-Scream.jpg'
    },
    {
        nombre : 'Phoenix',
        img : 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/VNLOPVBDM5AATCOW2VHOCMYQHA.jpg'
    },
    {
        nombre : 'Cyclops',
        img : 'https://static1.srcdn.com/wordpress/wp-content/uploads/2024/03/x-men-s-cyclops-with-intriguing-blurred-costume-behind.jpg'
    },
    {
        nombre : 'Rogue',
        img : 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/10/rogue-xmen.jpg'
    },
    {
        nombre : 'Gambit',
        img : 'https://i.pinimg.com/736x/15/7c/0a/157c0a34a52aa8e6ab6afe852ee7af57.jpg'
    },
    {
        nombre : 'Wolverine',
        img : 'https://img.redbull.com/images/c_crop,x_363,y_0,h_407,w_325/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2019/02/11/87f8642d-126d-4219-acc9-12ca261bfe39/wolverine'
    },
    {
        nombre : 'Storm',
        img : 'https://i.pinimg.com/originals/3d/4d/1f/3d4d1ffca3b972a9cd43fff96399e601.jpg'
    },
    {
        nombre : 'Iceman',
        img : 'https://upload.wikimedia.org/wikipedia/en/0/03/Iceman.png'
    },
    {
        nombre : 'Colossus',
        img : 'https://i.pinimg.com/736x/38/e0/90/38e090d55e951ac38853430d6b39691a.jpg'
    },
    {
        nombre : 'Nightcrawler',
        img : 'https://media.thenerdstash.com/wp-content/uploads/2023/11/Nightcrawler-2-1024x576.jpg'
    },
    {
        nombre : 'Magneto',
        img : 'https://hips.hearstapps.com/hmg-prod/images/magento-1568362613.jpg'
    },
    {
        nombre : 'Bishop',
        img : 'https://comicvine.gamespot.com/a/uploads/scale_medium/12/124259/7823917-marauders2019019_cov-scaled.jpg'
    },
] 
let counter = 0;
document.addEventListener('DOMContentLoaded', (e) => {
    let imagen = document.createElement('img');
    personajes.forEach((item) =>{
        counter++; 
        let imgT =`<img class="card-img-top" src="${item.img}" id="card-img" alt="...">`
        divCards.insertAdjacentHTML('beforeend',`
        <card-component class ="g-3 col-4 col-sm-6 col-lg-3">
        <span slot = "imagen">${imgT}</span>
        <span slot = "nombre">${item.nombre}</span>
        <span slot = "numero">${counter}</span>
        </card-component>`);
    })
});