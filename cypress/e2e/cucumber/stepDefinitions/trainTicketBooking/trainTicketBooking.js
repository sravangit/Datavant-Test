/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
//import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import basepage from '../../../pages/basepage';
import buytrainticketspage from '../../../pages/buytrainticketspage';
//import onlineticketofficepage from '../../../pages/onlineticketofficepage';

const date = new Date()
const day = date.getDate();

before('set login details', function () {
    cy.fixture('travelFromToData').then(function(data){
        this.data = data;
    })

})


Given(/^User is on the tickets page$/, () => {
	return true;
});



Given(/^User is on the buy-tickets page$/, function () {

    //cy.visit('https://www.cp.pt/passageiros/en/buy-tickets')
    //basepage.navigateToUrl('https://www.cp.pt/passageiros/en/buy-tickets')
    basepage.navigateToUrl(Cypress.env('url')+'passageiros/en/buy-tickets')
    //Cypress.config('defaultCommandTimeout', 6000)
});

When(/^User enters From and To details$/, function (dataTable) {
    buytrainticketspage.enterFromField(dataTable.rawTable[1][0])
    buytrainticketspage.enterToField(dataTable.rawTable[1][1])
});

When(/^User enters on date and return date$/, function () {
    
    buytrainticketspage.openDepartCalendar();
    buytrainticketspage.selectDepartDate(Number(`${day}`) + 3);

    buytrainticketspage.openReturnCalendar();
    buytrainticketspage.selectReturnDate(Number(`${day}`) + 5);

});

When(/^User clicks on the Submit$/, function () {
     buytrainticketspage.clickSubmitButton();
    //onlineticketofficePage.openDepartCalendar();

});

Then(/^User navigates to Online-Ticket-Office page$/, function () {
    // const clickCancelBtn = onlineticketofficepage.clickCancelButton();
    // cy.origin('https://venda.cp.pt/', { args: { clickCancelBtn } }, ({ clickCancelBtn }) => {

    //    clickCancelBtn
    //     //cy.get('#exitButton').click()
    // })
    cy.origin('https://venda.cp.pt/',  ()=> {
        //cy.get('#exitButton').click()
        const {OnlineTicketOfficePage} = Cypress.require('../../../pages/onlineticketofficepage')
        const onlineticketofficepage = new OnlineTicketOfficePage()
        onlineticketofficepage.clickCancelButton()
    })

});


Then(/^User entered journey details for From and To is correct$/, function() {
    //cy.get("input[placeholder='From ']").should('have.value', this.data.From)
    cy.get(buytrainticketspage.getFromField()).should('have.value', this.data.From)
    cy.get(buytrainticketspage.getToField()).should('have.value', this.data.To)
    //buytrainticketspage.getFromField(this.data.From)
    //buytrainticketspage.enteredToField(this.data.To)
	
});



