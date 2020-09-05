/// <reference types="Cypress" />

describe('Automating BigBasket Cart', function () {
    it('BigBasket', function () {
        cy.visit("https://www.bigbasket.com/");
        cy.wait(2000);
        cy.get('.close-btn');

        cy.get('#input').type("veg").type('{enter}');
        cy.wait(2000);

        cy.get('.items').find('.clearfix').each(($el, index, $list) => {
            const vegName = $el.find('a.ng-binding').text();
            const isVegPresent = ['Ladies', 'Onion', 'Cucumber'].some((vegIteration) => vegName.toLowerCase().includes(vegIteration.toLowerCase()));
            //const isVegPresent = vegName.includes('Ladies');
            
            if (isVegPresent) {
                $el.find('.bskt-icon').click();
            }
        })
        cy.wait(5000);

        cy.get('.btn.hvr-fade').click();
        cy.get('.icon.svg-basket.svg-header.svg-basket-dim').trigger('mouseover');
        cy.wait(2000);
    })
})