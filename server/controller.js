module.exports = {
    getProducts: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_inventory()
            .then(products => {
                res.status(200).send(products)
            })
            .catch(err => res.status(500).send(err));
    },

    addProduct: (req, res) => {
        const dbInstance = req.app.get('db');
        const {name, price, image} = req.body

        dbInstance.create_product([name, price, image])
            .then(()=> res.sendStatus(200))
            .catch(err => res.status(500).send(err));
    },

    deleteProduct: (req, res) => {
        const dbInstance = req.app.get('db');
        const {id} = req.params;

        dbInstance.delete_product(id)
            .then(() => res.sendStatus(200))
            .catch(err => res.status(500).send(err))
    },
    
    editProduct: (req, res) => {
        const dbInstance = req.app.get('db');
        const {params, query} = req;

        dbInstance.edit_product
    }
}