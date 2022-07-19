
const apiPortatiles = [
    {
        image: 'https://thumb.pccomponentes.com/w-300-300/articles/61/615703/1581-razer-blade-17-fhd-360hz-intel-core-i7-11800h-32gb-1tb-ssd-rtx-3080-173.jpg',
        description: 'portatil',
        name: 'Razer Blade 17 FHD 360Hz Intel',
        price: 3239,
        discount: 3239.99,
        percentageDiscount: '4%',
    },
    {
        image: 'https://thumb.pccomponentes.com/w-300-300/articles/1001/10011002/1133-msi-katana-gf66-12ue-091xes-intel-core-i7-12700h-16gb-512gb-ssd-rtx3050ti-156.jpg',
        description: 'portatil',
        name: 'MSI Katana GF66 12UE-091XES',
        price: 1258.99,
        discount: 1429,
        percentageDiscount: '16%',
    },
    {
        image: 'https://thumb.pccomponentes.com/w-300-300/articles/1019/10190880/1671-razer-blade-15-advanced-model-fullhd-360hz-intel-core-i7-12800h-32gb-1tb-ssd-rtx-3080ti-156.jpg',
        description: 'portatil',
        name: 'Razer Blade 15 Advanced',
        price: 4100,
        discount: 0,
        percentageDiscount: '0%',
    },
    {
        image: 'https://thumb.pccomponentes.com/w-300-300/articles/1019/10190884/1681-razer-blade-17-fullhd-360hz-intel-core-i7-12800h-16gb-1tb-ssd-rtx-3070ti-173.jpg',
        description: 'portatil',
        name: 'Razer Blade 17 FullHD 360Hz',
        price: 1258.99,
        discount: 1429,
        percentageDiscount: '16%',
    },
    {
        image: 'https://thumb.pccomponentes.com/w-300-300/articles/61/615690/118-razer-blade-17-fhd-360hz-intel-core-i7-11800h-16gb-1tb-ssd-rtx-3060-173.jpg',
        description: 'portatil',
        name: 'Razer Blade 17 FHD 360Hz Intel',
        price: 2579.01,
        discount: 2699.99,
        percentageDiscount: '4%',
    },
    {
        image: 'https://thumb.pccomponentes.com/w-300-300/articles/61/615724/1530-alurin-go-intel-pentium-n4200-8gb-128gb-ssd-nos-14.jpg',
        description: 'portatil',
        name: 'Alurin Fo Intel Pentium',
        price: 259.00,
        discount: 309.89,
        percentageDiscount: '16%',
    },
    {
        image: 'https://thumb.pccomponentes.com/w-300-300/articles/35/359467/139-hp-15s-fq2095ns-intel-core-i3-1115g4-8gb-256gb-ssd-156.jpg',
        description: 'portatil',
        name: 'Razer Blade 17 QHD 165Hz',
        price: 2479.00,
        discount: 2599.99,
        percentageDiscount: '4%',
    },
    {
        image: 'https://thumb.pccomponentes.com/w-300-300/articles/1032/10321754/1289-razer-blade-15-advanced-model-qhd-intel-core-i7-11800h-32-gb-1tb-ssd-rtx-3080-156.jpg',
        description: 'portatil',
        name: 'HP 15S-fq2095ns Intel Core I3',
        price: 498.99,
        discount: 0,
        percentageDiscount: '0%',
    },
    {
        image: 'https://thumb.pccomponentes.com/w-300-300/articles/61/615698/1259-razer-blade-17-fhd-360hz-intel-core-i7-11800h-16gb-1tb-ssd-rtx-3070-173.jpg',
        description: 'portatil',
        name: 'Razer Blade 14 165Hz AMD',
        price: 3799.99,
        discount: 0,
        percentageDiscount: '0%',
    },
    {
        image: 'https://thumb.pccomponentes.com/w-300-300/articles/80/808352/1103-msi-creator-z16-a11uet-020xes-intel-core-i7-11800h-32gb-1tb-ssd-rtx-3060-16-tactil.jpg',
        description: 'portatil',
        name: 'Razer Blade 17 FHD 360Hz Intel',
        price: 2769.00,
        discount: 2899.99,
        percentageDiscount: '4%',
    },
    {
        image: 'https://thumb.pccomponentes.com/w-300-300/articles/1006/10067434/1503-hp-255-g8-27k36ea-amd-ryzen-5-3500u-8gb-256gb-ssd-156.jpg',
        description: 'portatil',
        name: 'MSI Creator Z16 A11UE-020XES',
        price: 1604.94,
        discount: 0,
        percentageDiscount: '0%',
    },
];

const myContainer = document.querySelector('#list');

const listArray = (list, container) => {
    for (const elements of list) {
        addHtml( elements, container );
    }
}

const addHtml = (element, container) => {
    let data = `
    <li>
        <img src="${element.image}" alt="${element.description}">
        <p class="name"> ${element.name}</p>
        <div class="special-prices">
        <p class="price"> ${element.price} €</p>
        <p class="discount"> ${element.discount != '0' ? element.discount : ''}</p>
        <p class="percentage-Discount"> ${element.percentageDiscount != '0%' ? element.percentageDiscount : ''}</p>
        </div>
    </li>
        `;
        addDocument(data, container);
}

const addDocument = ( data, container ) => {
    container.innerHTML +=  data ;
}

listArray(apiPortatiles, myContainer);

