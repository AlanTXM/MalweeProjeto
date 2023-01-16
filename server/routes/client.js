const Joi = require('joi');
const knl = require('../knl');

knl.post('client', async(req, resp) => {

    const schema =Joi.object({
        fantasyName : Joi.string().min(1).max(100).required(),
        cnpj : Joi.string().min(14).max(14).required(),
        socialreason : Joi.string().min(1).max(100).required(),
        customersince :Joi.date().raw().required()
    })

    knl.validate(req.body, schema);

     const result = await knl.sequelize().models.client.findAll({
        where : {
            fantasyName: req.body.fantasyName,
            cnpj: req.body.cnpj,
            socialreason: req.body.socialreason,
            customersince: req.body.customersince,
        }
    });

    knl.createException('006', '', !knl.objects.isEmptyArray(result));

    const customer = knl.sequelize().models.client.build({

        fantasyName: req.body.fantasyName,
        cnpj: req.body.cnpj,
        socialreason: req.body.socialreason,
        customersince: req.body.customersince,
        status:1

    });

    await customer.save();

});

knl.post('address', async (req, resp) => {
    const schema = Joi.object({
        rua : Joi.string().min(3).max(100),
            bairro : Joi.string().min(1).max(30),
            cidade : Joi.string().min(1).max(60),
            estado : Joi.string().min(2).max(20),
            cep : Joi.string().min(1).max(8),
            numero: Joi.number().min(1),
            complemento: Joi.string().min(3).max(100),
            pReferencia: Joi.string().min(3).max(100),
            fkClient : Joi.number().min(1).required()
    })

    knl.validate(req.body, schema);

    const result = await knl.sequelize().models.address.findAll({
        where : {
            rua : req.body.rua,
            bairro : req.body.bairro,
            cidade : req.body.cidade,
            estado : req.body.estado,
            cep : req.body.cep,
            numero : req.body.numero,
            complemento : req.body.complemento,
            pReferencia : req.body.pReferencia,
            fkClient : req.body.fkClient
        }
    });

    knl.createException('006', '', !knl.objects.isEmptyArray(result));

    const address = knl.sequelize().models.address.build({
        rua : req.body.rua,
        bairro : req.body.bairro,
        cidade : req.body.cidade,
        estado : req.body.estado,
        cep : req.body.cep,
        numero : req.body.numero,
        complemento : req.body.complemento,
        pReferencia : req.body.pReferencia,
        fkClient : req.body.fkClient,
        status : 1 
    })

    await address.save();

})

knl.get('client', async(req, resp) => {

    const result = await knl.sequelize().models.client.findAll({
        where : {
            status : 1
        }
    });

    resp.json(result); 
      
});

knl.get('address', async(req, resp) => {

    const result = await knl.sequelize().models.address.findAll({
        where : {
            status : 1
        }
    });

    resp.json(result); 
      
});

knl.get('client/:id', async(req, resp) => {

    const result = await knl.sequelize().models.address.findAll({
        where : {
            fkClients : req.params.id,
            status : 1
        }
    });

    result = knl.objects.copy(result);

    if(!knl.objects.isEmptyArray(result)){
        for(let address of result){
            const client = await knl.sequelize().models.client.findAll(
                { where : {id : address.fkClient}
            })
            if(!knl.objects.isEmptyArray(address)){
                address.client_fantasyName = client[0].fantasyName
            }
            console.log(address.client_fantasyName);
        }
    }

    resp.json(result); 
});

knl.patch('client/:id', async(req, resp) => {
    const result = await knl.sequelize().models.client.update(
        { status : 2 },
        
        { where : { id : req.params.id } }
        
    )

    resp.json(result);

});

knl.patch('address/:id', async(req, resp) => {
    const result = await knl.sequelize().models.address.update(
        { status : 2 },
        
        { where : { id : req.params.id } }
        
    )

    resp.json(result);

});

knl.put('client', async(req, resp) => {

    const result = await knl.sequelize().models.client.update({
        fantasyName : req.body.fantasyName,
        socialreason : req.body.socialreason },

    { where : { id: req.body.id }

    })

    resp.send(result);

});

knl.put('client', async(req, resp) => {
    const result = await knl.sequelize().models.address.update({
        rua : req.body.rua,
        bairro : req.body.bairro,
        cidade : req.body.cidade,
        estado : req.body.estado,
        cep : req.body.cep,
        numero : req.body.numero,
        complemento : req.body.complemento,
        pReferencia : req.body.pReferencia },

    { where : { id : req.body.id }
    
    })

    resp.send(result);
    
})


knl.delete('client/:id', async(req,resp) => {
    const result = await knl.sequelize().models.client.destroy({
        where : { id: req.params.id }
    });

    resp.json(result);
    resp.end();
})
