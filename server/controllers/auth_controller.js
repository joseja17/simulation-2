module.exports = {
    create: (req, res) => {
        let newProperty = {
            propertyName: req.body.propertyName,
            description: req.body.description,
            address: req.body.address,
            city: req.body.city,
            states: req.body.states,
            zip: req.body.zip,
            loan: req.body.loan,
            monthPrice: req.body.monthPrice,
            rent: req.body.rent
        }
        const db = req.app.get('db');
        db.create_property([newProperty.propertyName,
        newProperty.description,
        newProperty.address,
        newProperty.city,
        newProperty.states,
        newProperty.zip,
        newProperty.loan,
        newProperty.monthPrice,
        newProperty.rent
        ]).then(resp => {
            res.status(200).send(resp)
        })
    },

    read: (req, res) => {
        const db = req.app.get('db');
        db.get_properties().then(resp => {
            res.status(200).send(resp)
        })
    },

    filter: (req, res, next) => {
        const db = req.app.get('db');
        const { amount } = req.query;
        db.filter_properties([amount]).then(properties => {
            res.status(200).send(properties);
        });
    },

    delete: (req, res) => {
        const db = req.app.get('db');
        db.delete_properties([req.params.id]).then(resp => {
            res.status(200).send(resp)
        })
    },

    edit: (req, res) => {
        const db = req.app.get('db');
        const { params, body } = req
        db.edit_properties([params.id,
        body.name,
        body.description,
        body.address,
        body.city,
        body.states,
        body.zip,
        body.loan,
        body.monthPrice,
        body.rent]).then(resp => {
        db.properties.find().then(resp=>{
            res.status(200).send(resp)
        })
        })
    }
}
