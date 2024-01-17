const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://silvestrustate:hhwGZ94bzkux2Y0A@cluster0.m59jcsq.mongodb.net/Produse?retryWrites=true&w=majority';

const createProdus = async (req, res, next) => {
    const newProdus = {
        name: req.body.name,
        imgSrc: req.body.imgSrc,
        vegan: req.body.vegan,
        expirationDate: req.body.expirationDate,
        carnivor: req.body.carnivor,
        vegetarian: req.body.vegetarian
    };

    const client = new MongoClient(url);

    try {
        await client.connect();
        const db = client.db();
        const result = await db.collection('Produse').insertOne(newProdus);
    } catch (error) {
        return res.json({message: 'Could not restore data!'});
    };
    client.close();
    res.json(newProdus);
    next();
};

const getProduse = async (req, res, next) => {
    const client = new MongoClient(url);
    let produse;
    try {
        await client.connect();
        const db = client.db();
        produse = await db.collection('Produse').find().toArray();
        console.log(produse.length);
    } catch (error) {
        return res.json({message: 'Could not restore data!'});
    };
    client.close();
    res.json(produse);
    next();
};

exports.createProdus = createProdus;
exports.getProduse = getProduse;