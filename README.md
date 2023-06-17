# ProvaCypress
Repositório para entrega da Prova Prática - Teste de UI com Cypress

WebSite testado: AltoroMutual (DemoTestFire)

Funcionalidades testadas:

Ação do botão-link 'SMALL BUSINESS';
Ação do botão-link 'PERSONAL';
Ação do botão-link 'INSIDE ALTORO MUTUAL';
Ação de Tentativa de Login com Falha. (Caso Negativo)

Para realizar a execução dos testes basta clonar esse projeto para uma pasta local no dispositivo e executar o cypress através de um terminal seguindo o comando ./node_modules/.bin/cypress open de dentro da pasta "testes" deste projeto.

Para gerar o relatório, basta executar o comando ./node_modules/.bin/cypress run --spec 'cypress/e2e/**/' via terminal estando dentro da pasta "testes". O mesmo será gerado na aba "reports\html"

nome do arquivo: index.html Para acessá-lo, basta clicar com o botão direito do mouse em cima do nome do arquivo, copiar o caminho do mesmo, colar este caminho em um navegador e assim terá disponível todo o conteúdo testado e os resultados do mesmo.
