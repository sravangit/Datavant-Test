/// <reference types="cypress" />

class BasePage {

    //common method to navigate to specified url
    navigateToUrl(url){
        cy.visit(url);
    }

    clickElement(selector, useContains = false ) {

        if(useContains){
            cy.contains(selector).click()
            
        } else {
            cy.get(selector).click();
        }

    }

    clickElementWithText(selector, text){
        cy.get(selector).contains(text).click({force:true})
    }


    typeText(selector, text, useContains = false){
        if(useContains){
            cy.contains(selector).type(text);
           
        } else {
            cy.get(selector).type(text);
        }

    }


    verifyTextVisible(selector, text){
        
         cy.get(selector).should('contain.text', text);

    }


}

const basepage = new BasePage();
export default basepage