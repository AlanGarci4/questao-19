describe('Teste de Performance com Lighthouse no SENAI AL', () => {
  it('Verifica a performance da página inicial', () => {
    
    //Visita a página o qual será objeto do teste.

    cy.visit('https://al.senai.br');

    //Executa a auditoria de performance usando Lighthouse.
    //Definindo uma pontuação mínima desejada para performance, Pontuação mínima para acessibilidade e Pontuação mínima para SEO.

    cy.lighthouse({
      performance: 90, 
      accessibility: 90, 
      seo: 90,
    });
  });
});