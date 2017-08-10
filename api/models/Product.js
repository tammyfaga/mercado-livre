const Product = function Product() {
    this.id = '';
    this.title ='';
    this.price = {
        currency: '',
        amount: '',
        decimals: ''
    };
    this.picture = '';
    this.condition = '';
    this.free_shipping = '';
    this.sold_quantity = '';
    this.description = '';
};

Product.prototype.convert = function(item) {

    this.id = item.id;
    this.title = item.title;

    let decimal = Number((item.price % 1).toFixed(2).replace('0.', ''));

    this.price = {
        currency: item.currency_id,
        amount: Math.floor(item.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."),
        decimals: (decimal + '0').slice(-2)
    };

    if(typeof item.thumbnail !== 'undefined')
        this.picture = item.thumbnail;

    if(typeof item.pictures !== 'undefined')
        this.picture = item.pictures[0].secure_url;

    this.condition = item.condition;
    this.free_shipping = item.shipping.free_shipping;
    this.sold_quantity = item.sold_quantity;

    if(typeof item.description !== 'undefined')
        this.description = item.description.plain_text;
};

module.exports = Product;