const express = require('express');
const cors = require("cors");
const app = express();

const port = 3000;
app.listen(port, () => console.log(`Server running at http://localhost:${port}/`));

//app.use(express.json());
app.use(cors());

const phones = [
    {
        id: 1,
        model: 'OnePlus 6t',
        color: 'Black',
        price: 549,
        description: 'Unlock the speed',
        image: 'https://image01.oneplus.net/ebp/201811/08/691/7fb3ba460951f3cf07bf67a4b2849dc8.png',
        size: '157,5 x 74,8 x 8,2',
        weight: '185'
    },
    {
        id: 2,
        model: 'BQ Aquaris X',
        color: 'Black',
        price: 249,
        description: 'Atrapa el momento',
        image: 'http://www.latiendaorange.es/recursos/tienda/articulos/sp-5ba20bc6a76ec.jpg',
        size: '146,5 x 72,7 x 7,9',
        weight: '153'
    },
    {
        id: 3,
        model: 'IPhone Xs',
        color: 'White',
        price: 1159,
        description: 'Bienvenido a la gran pantalla',
        image: 'http://www.movistar.es/estaticos/imagenes/terminales-moviles/ficha-445/apple-iphone-x-gris-01.png',
        size: '143,6 x 70,9 x 7,7',
        weight: '177'
    }
];

app.get('/api/phones', (req, res) => res.send(phones));