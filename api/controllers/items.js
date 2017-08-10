const express = require('express'),
    router = express.Router(),
    auth = require('../services/auth'),
    axios = require('axios'),
    Product = require('../models/Product');

const BASE_API = "https://api.mercadolibre.com";
const AUTHOR = { name: 'Tammy', lastname: 'Fagá' };

router.get('/', auth.isAuthenticated, function(req, res) {

   if (typeof req.query.q === 'undefined' || req.query.q === '')
      return res.json(res.type.fieldsMissing);

   axios
       .get(`${BASE_API}/sites/MLA/search?q=${req.query.q}`)
       .then(function(response) {
            let items = response.data.results;

            if(items.length === 0)
                return res.json(res.type.itemsNotFound);

            let products = [];
            for (let i = 0; i < 4; i++) {
                let product = new Product();
                product.convert(items[i]);
                products.push(product);
            }

            return res.json({
                author: AUTHOR,
                items: products
            });
       })
       .catch(function(error) {
           return res.status(403).json(res.type.externalError);
       });
});

router.get('/:id', auth.isAuthenticated, function(req, res) {

    if (req.params.id === '')
        return res.json(res.type.fieldsMissing);

    let item = {};
    const URL = `${BASE_API}/items/${req.params.id}`;

    axios
        .get(URL)
        .then(function(response) {
            item = response.data;
            return axios.get(`${URL}/description`);
        })
        .then(function(response) {
            item.description = response.data;

            let obj = new Product();
            obj.convert(item);

            let product = {};
            product.item = obj;
            product.author = AUTHOR;

            return res.json(product);
        })
        .catch(function(error) {
            if(error.response.status === 404 && error.response.statusText === 'Not Found')
                return res.json(res.type.itemNotFound);
            return res.status(403).json(res.type.externalError);
        });
});

module.exports = router;