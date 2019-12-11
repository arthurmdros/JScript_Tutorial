const express = require('express');
const routes = express.Router();

const VendaController = require('./controllers/VendaController');
const VendedorController = require('./controllers/VendedorController');

//ROTA PARA INDEX
routes.get("/inicio", VendedorController.index);

//ROTA PARA LOGIN
routes.get("/login",VendedorController.login);

//ROTA PARA VALIDAR
routes.get("/validar",VendedorController.validar);

//ROTA PARA RENDERIZAR UM FORMULARIO
routes.get("/efetuarvenda", VendaController.formVenda);// RENDERIZACAO DE ARQUIVO EX: .HANDLEBARS

//ROTA QUE RECEBE DADOS DE UM FORMULARIO DA POSTAGEM DO TIPO POST
routes.post("/addvenda",VendaController.confirmarVenda);

//ROTA PARA LISTAR VENDAS
routes.get("/listarvendas",VendaController.listarVenda);

//ROTA PARA BUSCAR VENDAS
routes.get("/buscarvenda",VendaController.buscarVenda);

//ROTA PARA EXIBIR O RESULTADO DA BUSCA DA VENDA
routes.get("/detalhevenda/codigo",VendaController.detalheVendaCodigo);
routes.get("/detalhevenda/cliente",VendaController.detalheVendaCliente);
routes.get("/detalhevenda/vendedor",VendaController.detalheVendaVendedor);

//ROTA PARA DELETAR VENDA
routes.get("/deletarvenda/:id",VendaController.deletarVenda);

//ROTA PARA ALTERAR VENDA
routes.get("/alterarvenda/:id", VendaController.formAlterarVenda);

//ROTA PARA RECEBER DE UM FORMULARIO O QUE ESTA SENDO ALTERADO
routes.get("/alterarvenda", VendaController.alterarVenda);

//ROTA PARA CADASTRAR VENDEDOR
routes.get("/cadastrarvendedor",VendedorController.formVendedor);

//ROTA QUE RECEBE DADOS DE UM FORMULARIO
routes.post("/addvendedor",VendedorController.addVendedor);

//ROTA PARA LISTAR VENDEDORES
routes.get("/listarvendedores",VendedorController.listarVendedor);

//ROTA PARA BUSCAR VENDEDOR
routes.get("/buscarvendedor",VendedorController.buscarVendedor);

//ROTA PARA EXIBIR O RESULTADO DA BUSCA DO VENDEDOR
routes.get("/detalhevendedor",VendedorController.detalheVendedor);

//ROTA PARA DELETAR VENDEDOR
routes.get("/deletarvendedor/:id",VendedorController.deletarVendedor);

//ROTA PARA ALTERAR UM VENDEDOR
routes.get("/alterarvendedor/:id", VendedorController.formAlterar);

//ROTA PARA RECEBER DE UM FORMULARIO O QUE ESTA SENDO ALTERADO
routes.get("/alterarvendedor", VendedorController.alterarVendedor);

module.exports = routes;

/*
    //ROTA INICIO
    app.get('/',(req,res)=>{
        res.render('index')
    })

    //ROTA PARA RENDERIZAR UM FORMULARIO
    app.get('/cadastrarpost',(req,res)=>{
        res.render('formPost') // RENDERIZACAO DE ARQUIVO EX: .HANDLEBARS
    })

    //ROTA QUE RECEBE DADOS DE UM FORMULARIO DA POSTAGEM DO TIPO POST
    app.post('/addpost',(req,res)=>{                
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(()=>{
            res.redirect('/') // REDIRECIONAMENTO DE ROTAS
        }).catch((erro)=>{
            res.send("Houve um erro na criação do post: "+erro)
        })
    })

    //ROTA QUE DELETA REGISTROS DAS POSTAGENS POR ID
    app.get('/deletarpost/:id',(req,res) =>{
        Post.destroy({where: {'id': req.params.id}})
        .then(()=>{
            res.redirect('/listarposts')
        }).catch((erro)=>{
            res.send("Esta postagem não existe!")
        })
    })

    //ROTA PARA LISTAR TODOS
    app.get('/listarposts',(req,res) =>{
        Post.findAll({order: [['id','DESC']]}).then((posts)=>{            
            res.render('post',{posts: posts})
        })        
    })

    //ROTA PARA CADASTRAR UM USUÁRIO
    app.get('/cadastrarusuario',(req,res)=>{
        res.render('formUser') // RENDERIZACAO DE ARQUIVO EX: .HANDLEBARS
    })

    //ROTA QUE RECEBE DADOS DE UM FORMULARIO DA POSTAGEM DO TIPO POST
    app.post('/addusuario',(req,res)=>{                
        Usuario.create({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha
        }).then(()=>{
            res.redirect('/') // REDIRECIONAMENTO DE ROTAS
        }).catch((erro)=>{
            res.send("Houve um erro na criação do usuário: "+erro)
        })
    })

    //ROTA PARA LISTAR TODOS
    app.get('/listarusuarios',(req,res) =>{
        Usuario.findAll().then((usuarios) =>{
            res.render('user',{usuarios: usuarios})
        })
    })
    
    //ROTA QUE DELETA REGISTROS DAS POSTAGENS POR ID
    app.get('/deletarusuario/:id',(req,res)=>{
        Usuario.destroy({where: {'id': req.params.id}})
        .then(()=>{
            res.redirect('/listarusuarios')
        }).catch((erro)=>{
            res.send("Este usuário não existe!")
        })
    })

}) */