const Joi = require('joi');
const knl = require('../knl');
const securityConsts = require('../consts/security-consts');

knl.post('product', async(req, resp) => {
    const schema = Joi.object({
        description : Joi.string().min(1).max(100).required(),
        salePrice : Joi.number().min(1).required(),
        fkGroup: Joi.number().min(1).required(),
        fkSubGroup: Joi.number().min(1).required(),
        fkCollection: Joi.number().min(1).required(),
    })

    knl.validate(req.body, schema);

    const result = await knl.sequelize().models.product.findAll({
        where : {
            description: req.body.description,
            salePrice: req.body.salePrice,
            fkGroup: req.body.fkGroup,
            fkSubGroup: req.body.fkSubGroup,
            fkColection: req.body.fkCollection
        }
    });

    knl.createException('006', '', !knl.objects.isEmptyArray(result));

    const product = knl.sequelize().models.product.build({
        description: req.body.description,
        salePrice: req.body.salePrice,
        status:1,
        fkGroup: req.body.fkGroup,
        fkSubGroup: req.body.fkSubGroup,
        fkColection: req.body.fkCollection,
    });

    await product.save();
    resp.end();
});

knl.get('product', async(req, resp) => {

    let result = await knl.sequelize().models.product.findAll({
        where : {
            status : 1
        }
    });

    result = knl.objects.copy(result); 

    if(!knl.objects.isEmptyArray(result)){

        for(let product of result){
            const group = await knl.sequelize().models.group.findAll(
                {where : {id : product.fkGroup}}
            )
            const subgroup = await knl.sequelize().models.subgroup.findAll(
                { where : {id : product.fkSubGroup}}
            )
            const colection = await knl.sequelize().models.colection.findAll(
                { where : {id : product.fkColection}}
            )
            if(!knl.objects.isEmptyArray(group)){
                product.group_description = group[0].description
            }
            if(!knl.objects.isEmptyArray(subgroup)){
                product.subgroup_description = subgroup[0].description
            }
            if(!knl.objects.isEmptyArray(colection)){
                product.colection_description = colection[0].description
            }
        }
    }

    resp.json(result);
});

knl.patch('product/:id', async(req, resp) => {
    const result = await knl.sequelize().models.product.update(
        { status : 2 },
        
        { where : { id : req.params.id } })
        
    resp.json(result);
    resp.end();
});

knl.put('product', async(req, resp) => {

    const result = await knl.sequelize().models.product.update(
        
        { description:req.body.description, salePrice: req.body.salePrice },

        {where : { id : req.body.id}}
    )
    resp.send(result);
});

knl.delete('product/:id', async(req,resp)=>{
    const result = await knl.sequelize().models.product.destroy({
        where:{
            id: req.params.id
        }
    });
    resp.json(result);
    resp.end();
})

