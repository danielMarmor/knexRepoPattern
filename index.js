const express = require('express');
const path = require('path');
const comp_repo = require('./repository');

const port = 8080;

const app = express();
app.use(express.static(path.join(__dirname, '/')));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


app.get('/company', async(req, res)=>{
    try{
        const companies = await comp_repo.getAllCompanies(); 
        res.status(200).json({companies});
    }
    catch(err){
        res.status(400).send({
            status : "fail",
            message: err.message
        });
    }
   
});

app.get('/company/:company_id', async(req, res)=>{
    try{
        const company_id = req.params.company_id;
        const company = await comp_repo.getCompanyById(company_id);
        res.status(200).json({company});
    }
    catch(err){
        res.status(400).send({
            status : "fail",
            message: err.message
        });
    }

});

app.post('/company', async(req, res)=>{
    try{
        const company = req.body;
        const result = await comp_repo.addCompany(company);
        res.status(201).send({
            res : 'Success',
            url : `localhost:8080/company/${company.ID}`,
            result
        });
    }
    catch(err){
        res.status(400).send({
                status : "fail",
                message: err.message
        });
    }

});


app.put('/company/:company_id', async(req, res)=>{
    try{
        const company_id =req.params.company_id;
        const company = req.body;
        const result = await comp_repo.updateCompany(company_id, company);
        res.status(201).send({
            res : 'Success',
            url : `localhost:8080/company/${company_id}`,
            result
        });

    }
    catch(err){
        res.status(400).send({
                status : "fail",
                message: err.message
        });
    }
   


});

app.delete('/company/:company_id', async(req, res)=>{
    try{
        const company_id = req.params.company_id;
        const result = await comp_repo.deleteCompany(company_id);
        res.status(201).json({
            res: 'success',
            url: `localhost:8080/company/${company_id}`,
            result
        })
    }
    catch(err){
        res.status(400).send({
            status : "fail",
            message: err.message
        });
    }
});

//-------

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`);
});



