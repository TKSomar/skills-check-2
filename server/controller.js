module.exports = {
    getInventory: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {name, price, img} = req.body;

        dbInstance.read_inventory([name, price, img])
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: "Something went wrong! Our engineers have been informed."});
            console.log(err)
        });
    },

    addProduct: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {name, price, img} = req.body;

        dbInstance.create_product([name, price, img])
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: "Something went wrong! Our engineers have been informed."});
            console.log(err)
        });
    }
};