/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import basepage from '../../../pages/basepage';
import buytrainticketspage from '../../../pages/buytrainticketspage';

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

    basepage.navigateToUrl(Cypress.env('url')+'passageiros/en/buy-tickets')

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

});

Then(/^User navigates to Online-Ticket-Office page$/, function () {

    cy.origin('https://venda.cp.pt/',  ()=> {
        const {OnlineTicketOfficePage} = Cypress.require('../../../pages/onlineticketofficepage')
        const onlineticketofficepage = new OnlineTicketOfficePage()
        onlineticketofficepage.clickCancelButton()
    })

});


Then(/^User entered journey details for From and To is correct$/, function() {

    var day3 = Number(`${day}`) + 3;
    var day5 = Number(`${day}`) + 5;
    cy.get(buytrainticketspage.getFromField()).should('have.value', this.data.From)
    cy.get(buytrainticketspage.getToField()).should('have.value', this.data.To)
    cy.get('input[name="departDate"]').should('have.value', `${day3}`+" May, 2025")
    cy.get('input[name="returnDate"]').should('have.value', `${day5}`+" May, 2025")

	
});



