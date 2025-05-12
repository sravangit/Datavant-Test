/// <reference types="cypress" />
//import buytrainticketspage from "./buytrainticketspage";

class OnlineTicketOfficePage {

    getCancelButton(){
        return '#exitButton'
    }

    clickCancelButton(){
        cy.get(this.getCancelButton()).click()
        //return buytrainticketspage;
    }


}

//const onlineticketofficepage = new OnlineTicketOfficePage();
export default {
    OnlineTicketOfficePage
}