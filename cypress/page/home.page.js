const home = {
    // adm locators 
    'btnCadastrarUsuario':'[data-testid=cadastrarUsuarios]',
    'btnListarUsuario':'[data-testid=listarUsuarios]',
    'btnCadastrarProduto': '[data-testid=cadastrarProdutos]',
    'btnListarProduto':'[data-testid=listarProdutos]',
    'btnRelatorio':'[data-testid=relatorios]',
    'btnMenuCadastrarUsuario':'[data-testid=cadastrar-usuarios]',
    'btnMenuListarUsuario':'[data-testid=listar-usuarios]',
    'btnMenuCadastrarProduto':'[data-testid=cadastrar-produtos]',
    'btnMenuListarProduto':'[data-testid=listar-produtos]',
    'btnMenuRelatorio':'[data-testid=link-relatorios]',
    'btnHome':'[data-testid=home]',
    'btnlogout':'[data-testid=logout]',
    'textAdm':'.lead',
    'logo':'.imagem',

    // user locators
    'logoUser':'#navbarTogglerDemo01 > .imagem',
    'btnMenuListaCompra':'[data-testid=lista-de-compras]',
    'btnCarrinho':'[data-testid=carrinho]',
    'inputPesquisar':'[data-testid=pesquisar]',
    'btnPesquisar':'[data-testid=botaoPesquisar]',
    'produtoUm':':nth-child(1) > .row > :nth-child(1)',
    'adicionarProdutoUm':':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid=adicionarNaLista]',
    'textProdutoNaoEncontrado':'.espacamento > .col-12 > .row'
} 
export default home;