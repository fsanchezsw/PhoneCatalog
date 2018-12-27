const express = require('express');
//const cors = require("cors");
const app = express();

const port = 3000;
app.listen(port, () => console.log(`Server running at http://localhost:${port}/`));

//app.use(express.json());
//app.use(cors());

const phones = [
    {
        id: 1,
        model: 'OnePlus 6t',
        color: 'Black',
        price: 549,
        description: 'Unlock the speed',
        image: 'https://image01.oneplus.net/ebp/201811/08/691/7fb3ba460951f3cf07bf67a4b2849dc8.png'
    },
    {
        id: 2,
        model: 'BQ Aquaris X',
        color: 'Black',
        price: 249,
        description: 'Atrapa el momento',
        image: 'https://thumb.pccomponentes.com/w-530-530/articles/16/166822/1386690.jpg'
    },
    {
        id: 3,
        model: 'IPhone Xs',
        color: 'White',
        price: 1159,
        description: 'Bienvenido a la gran pantalla',
        image: 'http://www.movistar.es/estaticos/imagenes/terminales-moviles/ficha-445/apple-iphone-x-gris-01.png'
    }
];

app.get('/api/phones', (req, res) => res.send(phones));

// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening on port ${port}...`));