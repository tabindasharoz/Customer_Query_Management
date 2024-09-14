const express= require('express');

const User = require('../models/user');
const Query = require('../models/query');

const queryRoute=express.Router()

queryRoute.get('/getquery',async(req,res)=>{
  
    const result= await Query.find();
    res.send(result);
});

queryRoute.get('/getpenquery/:id', async(req,res)=>{
    const id = req.params.id;
    const result =await Query.find({uid:id,status:"pen"});
    res.send({msg:"Success",result:result});
})
queryRoute.get('/getproquery/:id', async(req,res)=>{
    const id = req.params.id;
    const result =await Query.find({uid:id,status:"pro"});
    res.send({msg:"Success",result:result});
})
queryRoute.get('/getcompquery/:id', async(req,res)=>{
    const id = req.params.id;
    const result =await Query.find({uid:id,status:"comp"});
    res.send({msg:"Success",result:result});
})

queryRoute.post('/addquery',async(req,res)=>{
    const query=req.body;
    // console.log(query);
    const result = Query.create(req.body)
    res.send({msg:"Query Added"});
})


module.exports=queryRoute;