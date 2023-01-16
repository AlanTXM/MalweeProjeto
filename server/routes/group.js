const Joi = require('joi');
const knl = require('../knl');
const securityConsts = require('../consts/security-consts');

knl.post('group', async(req, resp) => {
    const schema = Joi.object({
        description : Joi.string().min(1).max(100).required()
    })

    knl.validate(req.body, schema);

    const result = await knl.sequelize().models.group.findAll({
        where : {
            description : req.body.description
        }
    });

    knl.createException('0006', '', !knl.objects.isEmptyArray(result));

    const user = knl.sequelize().models.group.build({
        description : req.body.description,
        status   : 1
    });

    await user.save();
    resp.end();
    console.log(user);
},securityConsts.USER_TYPE_PUBLIC);

knl.get('group', async(req, resp) => {

    const result = await knl.sequelize().models.group.findAll({
        where : {
            status : 1
        }
    });

    resp.json(result); 
});

knl.patch('group/:id', async(req, resp) => { 

    const result = await knl.sequelize().models.group.update(
        { status : 2 },

        { where : {id : req.params.id}  })

    resp.json(result);
    resp.end();
});

knl.put('group', async(req, resp) => {

    const result = await knl.sequelize().models.group.update(

        {description : req.body.description},

        {where : { id : req.body.id}}
    )
    resp.json(result);
});

knl.delete('group/:id', async(req,resp)=>{
    const result = await knl.sequelize().models.group.destroy({
        where:{
            id: req.params.id
        }
    });
    resp.json(result);
    resp.end();
})