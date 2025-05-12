/// <reference types="cypress" />
import basepage from "./basepage";

class BuyTrainTicketsPage{

    getFromField(){
        return 'input[placeholder="From "]'
    }

    getToField(){
        return 'input[placeholder="To "]'
    }

    getSubmitButton(){
        return 'input[type="submit"]'
    }

    getDepartDateField(){
        return '#datepicker-first_table tr td div'
    }

    getReturnDateField(){

        return '#datepicker-second_table tr td div'
    }


    enterFromField(from){
        basepage.typeText(this.getFromField(), from, false)
        basepage.clickElement(from,true)

    }

    enterToField(to){
        basepage.typeText(this.getToField(), to, false)
        basepage.clickElement(to,true)
    }

    selectDepartDate(departdate){
        basepage.clickElementWithText(this.getDepartDateField(), departdate)
    }

    selectReturnDate(returndate){
        basepage.clickElementWithText(this.getReturnDateField(), returndate)
    }

    clickSubmitButton(){
        basepage.clickElement(this.getSubmitButton(), false)
    }

    openDepartCalendar(){
        basepage.clickElement('input[name="departDate"]', false)

    }

    openReturnCalendar(){
        basepage.clickElement('input[name="returnDate"]', false)

    }

    
}

const buytrainticketspage = new BuyTrainTicketsPage();
export default buytrainticketspage