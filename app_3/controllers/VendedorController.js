const db = require('./conexaodb');
const Vendedor = db.sequelize.define('vendedores', {
    nome: {
        type: db.Sequelize.STRING
    },
    cargo: {
        type: db.Sequelize.STRING
    },
    senha: {
        type: db.Sequelize.STRING
    }    
})

module.exports = {
    index(req, res) {   
        res.render('menu')           
    },
    login(req,res){
        res.render('login')
    },
    validar(req,res){
        const usuario = req.query.usuario;
        const pass = req.query.senha;
        Vendedor.findAll({
            where:{
                'nome': usuario,
                'senha': pass
            }            
        }).then(()=>{
           res.redirect('/inicio')
        }).catch(()=>{
            res.send("Usuário não cadastrado!")                
        }) 
    },
    formVendedor(req,res){
        res.render('formVendedor')
    },
    addVendedor(req,res){                
        Vendedor.create({
            nome: req.body.nome,
            cargo: req.body.cargo,
            senha: req.body.senha
        }).then(()=>{
            res.redirect('/inicio')
        }).catch((erro)=>{
            res.render('form')
        })
    },
    listarVendedor(req,res){
        Vendedor.findAll({order: [['id','ASC']]}).then((vendedores) =>{
            res.render('vendedor',{vendedores: vendedores})
        })
    },
    buscarVendedor(req,res){
        res.render('buscarVendedor')
    },
    detalheVendedor(req,res){
        Vendedor.findAll({where: {'nome': req.query.vendedor}})
        .then((vendedores)=>{
            res.render('detalheVendedor',{vendedores: vendedores})
        }).catch(()=>{
            res.send("Esta venda não foi efetuada!")
        })
    },
    deletarVendedor (req,res){
        Vendedor.destroy({where: {'id': req.params.id}})
        .then(()=>{
            res.redirect('/listarvendedores')
        }).catch(()=>{
            res.send("Este vendedor não existe!")
        })
    },
    formAlterar(req, res){        
        res.render("formAlterar")        
    },
    alterarVendedor(req,res){
        const id = req.query.id;          
        let values = {
            nome: req.query.nome,
            cargo: req.query.cargo,
            senha: req.query.senha
        };
        Vendedor.update(        
            values,{where: {id: id}}
        ).then(()=>{
            res.redirect('/inicio')
        }).catch((erro)=>{
            res.send("Houve um erro na alteração do vendedor: "+erro)
        })
    }
}


