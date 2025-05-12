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



    // getElementText(selector, useContains = false){
    //     if(useContains){
    //         return cy.contains(useContains).getElementText(text);

    //     } else {
    //         return cy.get(selector).getElementText(text);
    //     }
    // }

    verifyTextVisible(selector, text){
        
         cy.get(selector).should('contain.text', text);

    }

    // verifyInputText(selector, text){

    //     cy.get(selector).should('have.to', text)

    // }

}

const basepage = new BasePage();
export default basepage