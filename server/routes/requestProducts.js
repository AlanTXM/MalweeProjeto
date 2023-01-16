const Joi = require('joi');
const knl = require('../knl');
const securityConsts = require('../consts/security-consts');
const { request } = require('express');

knl.post('requestProduct', async(req, resp) => {
    const schema = Joi.object({
        fkRequest : Joi.number().min(1).required(),
        fkProduct : Joi.number().min(1).required(),
        quantity : Joi.number().min(0).required(),
        unitaryValue : Joi.number().required(),
        discount : Joi.number().required(),
        addition : Joi.number().required(),
        total : Joi.number().required()
    })

    knl.validate(req.body, schema);

    const result = await knl.sequelize().models.requestProduct.findAll({
        where : {
            fkRequest : req.body.fkRequest,
            fkProduct : req.body.fkProduct,
            quantity : req.body.quantity,
            unitaryValue : req.body.unitaryValue,
            discount : req.body.discount,
            addition : req.body.addition,
            total : req.body.total
        }
    });

    knl.createException('006', '', !knl.objects.isEmptyArray(result));

    const request = knl.sequelize().models.requestProduct.build({
        fkRequest : req.body.fkRequest,
        fkProduct : req.body.fkProduct,
        quantity : req.body.quantity,
        unitaryValue : req.body.unitaryValue,
        discount : req.body.discount,
        addition : req.body.addition,
        total : req.body.total,
        status : 1
    })

    await request.save();
    resp.end();
})

knl.get('requestProduct/:id', async(req, resp) => {

    let result = await knl.sequelize().models.requestProduct.findAll({
        where: {
            fkRequest : req.params.id,
            status : 1
        }
    });

    let resultTwo = await knl.sequelize().models.request.findAll({
        where : {
            fkClient : req.params.id,
            status : 1
        }
    });

    result = knl.objects.copy(result);
    
    resultTwo = knl.objects.copy(resultTwo);

    if(!knl.objects.isEmptyArray(result)){
        for(let requestProduct of result){
            const requestP = await knl.sequelize().models.product.findAll(
                { where : { id : requestProduct.fkProduct}}
                )
                if(!knl.objects.isEmptyArray(requestP)){
                    requestProduct.requestP_description = requestP[0].description
                }
        }
        for(let requestProduct of result){
            const requestP2 = await knl.sequelize().models.client.findAll(
                { where : {id : requestProduct.fkRequest}}
                )
                if(!knl.objects.isEmptyArray(requestP2)){
                    requestProduct.requestP2_fantasyName = requestP2[0].fantasyName
            }
        }
    }

    if(!knl.objects.isEmptyArray(result)){
        for(let request of resultTwo){
            const requestTwo = await knl.sequelize().models.request.findAll(
                { where : {id : request.issuanceDate}}
            )
            if(!knl.objects.isEmptyArray(requestTwo)){
                request.requestTwo_issuanceDate = requestTwo[0].issuanceDate
            }
        }
        for(let request of resultTwo){
            const requestTwo = await knl.sequelize().models.request.findAll(
                { where : {id : request.deliveryDate}}
            )
            if(!knl.objects.isEmptyArray(requestTwo)){
                request.requestTwo_deliveryDate = requestTwo[0].deliveryDate
            }
        }
    }

    resp.json(result); 
      
});

knl.put('requestProduct', async (req, resp) => {
    const result = await knl.sequelize().models.requestProduct.update({
        fkRequest : req.body.fkRequest,
        fkProduct : req.body.fkProduct,
        quantity : req.body.quantity,
        unitaryValue : req.body.unitaryValue,
        discount : req.body.discount,
        addition : req.body.addition,
        total : req.body.total},

        { where : { id : req.body.id}
    
    })

    resp.send(result);

})
