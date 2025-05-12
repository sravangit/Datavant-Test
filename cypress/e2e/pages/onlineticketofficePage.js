/// <reference types="cypress" />

class OnlineTicketOfficePage {

    getCancelButton(){
        return '#exitButton'
    }

    clickCancelButton(){
        cy.get(this.getCancelButton()).click()
        
    }


}

export default {
    OnlineTicketOfficePage
}