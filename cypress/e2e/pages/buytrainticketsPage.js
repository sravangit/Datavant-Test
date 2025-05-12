/// <reference types="cypress" />
import basepage from "./basepage";
import onlineticketofficepage from "./onlineticketofficepage"

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

    // enteredFromField(text){
    //     var fromFieldSelector = "input[name='textBoxPartida']"
    //     basepage.verifyInputText(fromFieldSelector, text)

    // }

    // enteredToField(text){
    //     var fromFieldSelector = "input[name='textBoxChegada']"
    //     basepage.verifyInputText(fromFieldSelector, text)

    // }
    
}

const buytrainticketspage = new BuyTrainTicketsPage();
export default buytrainticketspage