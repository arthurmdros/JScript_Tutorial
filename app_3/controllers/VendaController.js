const db = require('./conexaodb');

const Venda = db.sequelize.define('vendas', {
    cliente: {
        type: db.Sequelize.STRING
    },
    vendedor: {
        type: db.Sequelize.STRING
    },
    valor: {
        type: db.Sequelize.DOUBLE
    },
    produto: {
        type: db.Sequelize.STRING
    }    
})

module.exports = {
    index(req, res) {
        res.render('menu')
    },
    formVenda(req,res) {        
        res.render('formVenda') 
    },
    confirmarVenda(req,res){                
        Venda.create({            
            cliente: req.body.cliente,
            vendedor: req.body.vendedor,            
            valor: req.body.valor,
            produto: req.body.produto
        }).then(()=>{
            res.redirect('/inicio') // REDIRECIONAMENTO DE ROTAS
        }).catch((erro)=>{
            res.send("Houve um erro na efetuação da venda: "+erro)
        })
    },
    listarVenda(req,res){
        Venda.findAll({order: [['createdAt','DESC']]}).then((vendas)=>{            
            res.render('venda',{vendas: vendas})
        })        
    },
    buscarVenda(req,res){
        res.render('buscarVenda')
    },
    detalheVendaCodigo(req,res){        
        Venda.findAll({where: {'id': req.query.id}})
        .then((vendas)=>{
            res.render('detalheVenda',{vendas: vendas})
        }).catch(()=>{
            res.send("Esta venda não foi efetuada!")
        })
    },
    detalheVendaCliente(req,res){        
        Venda.findAll({where: {'cliente': req.query.cliente}})
        .then((vendas)=>{
            res.render('detalheVenda',{vendas: vendas})
        }).catch(()=>{
            res.send("Esta venda não foi efetuada!")
        })
    },
    detalheVendaVendedor(req,res){        
        Venda.findAll({where: {'vendedor': req.query.vendedor}})
        .then((vendas)=>{
            res.render('detalheVenda',{vendas: vendas})
        }).catch(()=>{
            res.send("Esta venda não foi efetuada!")
        })
    },
    deletarVenda (req,res){
        Venda.destroy({where: {'id': req.params.id}})
        .then(()=>{
            res.redirect('/listarvendas')
        }).catch(()=>{
            res.send("Este vendedor não existe!")
        })
    },
    formAlterarVenda(req, res){        
        res.render("formAlterarVenda")        
    },
    alterarVenda(req,res){
        const id = req.query.id;          
        let values = {
            vendedor: req.query.vendedor,
            cliente: req.query.cliente,
            produto: req.query.produto,
            valor: req.query.valor
        };
        Venda.update(        
            values,{where: {id: id}}
        ).then(()=>{
            res.redirect('/inicio')
        }).catch((erro)=>{
            res.send("Houve um erro na alteração da venda: "+erro)
        })
    }
}