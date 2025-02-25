/// <reference types = "Cypress" />

describe('Testes Home - Adm', ()=>{

    beforeEach(()=>{
        cy.createLoginAdm()
        cy.visit('admin/home')
    })

    it('valida home - Adm', ()=>{
        cy.get('.imagem').should('be.visible')
    })

    it('Cadastrar usuário - btn', ()=>{
        cy.get('[data-testid=cadastrarUsuarios]').click()
        cy.url()
        .should(
            'be.equal',
            'https://front.serverest.dev/admin/cadastrarusuarios'
        )
    })

    it('Cadastrar usuário - btn menu', ()=>{
        cy.get('[data-testid=cadastrar-usuarios]').click()
        cy.url()
        .should(
            'be.equal',
            'https://front.serverest.dev/admin/cadastrarusuarios'
        )
    })

    it('Listar usuário - btn', ()=>{
        cy.get('[data-testid=listarUsuarios]').click()
        cy.url()
        .should(
            'be.equal',
            'https://front.serverest.dev/admin/listarusuarios'
        )
    })

    it('Listar usuário - btn menu', ()=>{
        cy.get('[data-testid=listar-usuarios]').click()
        cy.url()
        .should(
            'be.equal',
            'https://front.serverest.dev/admin/listarusuarios'
        )
    })

    it('Cadastrar produto - btn', ()=>{
        cy.get('[data-testid=cadastrarProdutos]').click()
        cy.url()
        .should(
            'be.equal',
            'https://front.serverest.dev/admin/cadastrarprodutos'
        )
    })

    it('Cadastrar produto - btn menu', ()=>{
        cy.get('[data-testid=cadastrar-produtos]').click()
        cy.url()
        .should(
            'be.equal',
            'https://front.serverest.dev/admin/cadastrarprodutos'
        )
    })


    it('Listar produto - btn', ()=>{
        cy.get('[data-testid=listarProdutos]').click()
        cy.url()
        .should(
            'be.equal',
            'https://front.serverest.dev/admin/listarprodutos'
        )
    })

    it('Listar produto - btn menu', ()=>{
        cy.get('[data-testid=listar-produtos]').click()
        cy.url()
        .should(
            'be.equal',
            'https://front.serverest.dev/admin/listarprodutos'
        )    })

    it('Listar relatório - btn', ()=>{
        cy.get('[data-testid=relatorios]').click()
        cy.url()
        .should(
            'be.equal',
            'https://front.serverest.dev/admin/relatorios'
        )
    })

    it('Listar produto - btn menu', ()=>{
        cy.get('[data-testid=link-relatorios]').click()
        cy.url()
        .should(
            'be.equal',
            'https://front.serverest.dev/admin/relatorios'
        )
    })

    it('Valida texto', ()=>{
        cy.get('.lead').should('have.text', 'Este é seu sistema para administrar seu ecommerce.')
    })

    it('Home', ()=>{
        cy.get('[data-testid=link-relatorios]').click()
        cy.get('[data-testid=home]').click()
        cy.url()
        .should(
            'be.equal',
            'https://front.serverest.dev/admin/home'
        )
    })

    it('Logout', ()=>{
        cy.get('[data-testid=logout]').click()
        cy.url()
        .should(
            'be.equal',
            'https://front.serverest.dev/login'
        )
    })
})

describe('Testes Home - User', ()=>{

    beforeEach(()=>{
        cy.createLoginUser()
        cy.visit('home')
    })

    it('valida home user', ()=>{
        cy.url()
        .should(
            'be.equal',
            'https://front.serverest.dev/home'
        )
        cy.get('#navbarTogglerDemo01 > .imagem').should('be.visible')
    })

    it('Listar carrinho', ()=>{
        cy.get('[data-testid=carrinho]').click()
        cy.url()
        .should(
            'be.equal',
            'https://front.serverest.dev/carrinho'
        )
    })

    it('Home', ()=>{
        cy.get('[data-testid=carrinho]').should('be.visible')
        cy.get('[data-testid=home]').click()
        cy.url()
        .should(
            'be.equal',
            'https://front.serverest.dev/home'
        )
    })

    it('Lista de compra', ()=>{
        cy.get('[data-testid=lista-de-compras]').click()
        cy.url()
        .should(
            'be.equal',
            'https://front.serverest.dev/minhaListaDeProdutos'
        )
    })

    it('Logout', ()=>{
        cy.get('[data-testid=logout]').click()
        cy.url()
        .should(
            'be.equal',
            'https://front.serverest.dev/login'
        )
    })

    it('Pesquisando produtos', ()=>{
        cy.createProduct()
        cy.get('[data-testid=pesquisar]').type('Teste Zael Uai')
        cy.get('[data-testid=botaoPesquisar]').click()
        cy.get('.card').should('be.visible')
    })

    it('Pesquisando produto inexistente', ()=>{
        cy.get('[data-testid=pesquisar]').type('ok obrigado')
        cy.get('[data-testid=botaoPesquisar]').click()
        cy.get('.espacamento > .col-12 > .row').should(
            'have.text', 'Nenhum produto foi encontrado')
    })
})