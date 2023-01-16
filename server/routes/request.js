const Joi = require('joi');
const knl = require('../knl');
const securityConsts = require('../consts/security-consts');
const { request } = require('express');

knl.post('request', async(req, resp) => {
    const schema = Joi.object({
        fkClient : Joi.number().min(1).required(),
        issuanceDate : Joi.date().raw().required(),
        deliveryDate : Joi.date().raw().required(),
        fkAddress : Joi.number().min(1).required(),
        total : Joi.number().min(1).required()
    })

    knl.validate(req.body, schema);

    const result = await knl.sequelize().models.request.findAll({
        where : {
            fkClient : req.body.fkClient,
            issuanceDate : req.body.issuanceDate,
            deliveryDate : req.body.deliveryDate,
            fkAddress : req.body.fkAddress,
            total : req.body.total
        }
    });

    knl.createException('006', '', !knl.objects.isEmptyArray(result));

    const request = knl.sequelize().models.request.build({
            fkClient : req.body.fkClient,
            issuanceDate : req.body.issuanceDate,
            deliveryDate : req.body.deliveryDate,
            fkAddress : req.body.fkAddress,
            total : req.body.total,
            status : 1
    })

    await request.save();
    resp.end();
})

knl.get('request', async (req, resp) => {
    let result  = await knl.sequelize().models.request.findAll({
        where : {
            status  : 1
        }
    });
    
    result = knl.objects.copy(result); 

    if(!knl.objects.isEmptyArray(result)){
        for(let pedido of result){
            const request = await knl.sequelize().models.client.findAll(
                { where : { id : pedido.fkClient }}
            )
            if (!knl.objects.isEmptyArray(request)){
                pedido.request_fantasyName = request[0].fantasyName
            }
        }
        for(let pedido of result){
            const request2 = await knl.sequelize().models.address.findAll(
                { where : { id : pedido.fkAddress }}
            )
            
            if (!knl.objects.isEmptyArray(request2)){
                pedido.request2_rua = request2[0].rua
            }
        }
    }

    resp.json(result);

})

knl.get('request/:id', async(req, resp) => {

    const result = await knl.sequelize().models.address.findAll({
        where: {
            fkClient : req.body.id,
            status : 1
        }
    });

    resp.json(result); 
      
});

knl.get('request', async(req, resp) => {

    const result = await knl.sequelize().models.address.findAll({
        where: {
            status : 1
        }
    });

    resp.json(result); 
      
});

knl.put('request', async (req, resp) => {
    const result = await knl.sequelize().models.request.update({
            fkClient : req.body.fkClient,
            issuanceDate : req.body.issuanceDate,
            deliveryDate : req.body.deliveryDate,
            fkAddress : req.body.fkAddress,
            total : req.body.total},

        { where : { id : req.body.id}
    
    })

    resp.send(result);

})

knl.patch('request/:id', async (req, resp) => {
    const result = await knl.sequelize().models.request.update(
        { status : 2 },

        {where : {id : req.params.id}

    })

    resp.json(result);
})