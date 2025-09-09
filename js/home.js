// reusable code
// get the value 
function getValue(id) {
    return document.getElementById(id).value;
}

// get the innerText
function getInnerText(id){
    return document.getElementById(id).innerText;
}

// set the innerText
function setInnerText(text){
    return document.getElementById('total-cash').innerText = text;
}


// const pin value;
const pinNumber = '1234';

// add money button events
document.getElementById('add-btn')
    .addEventListener('click', function(event){
        event.preventDefault();

        const addBankAccount = getValue('add-bank-account');
        const addAmount = parseInt( getValue('add-cash'));
        const addPin = getValue('add-pin');

        // account number 
        if(addBankAccount.length < 11){
            alert('enter valid account number');
            return;
        }
        if(addPin !== pinNumber){
            alert('pin is invalid')
            return;
        }
        let totalCash = parseInt(getInnerText('total-cash'));
        totalCash += addAmount;
        setInnerText(totalCash);
        
    })

// cash out button events 
document.getElementById('cash-out-btn')
    .addEventListener('click', function(event){
        event.preventDefault();

        const cashOutAccount = getValue('cash-out-account');
        const cashOutAmount = parseInt(getValue('cash-out-amount'));
        const cashOutPin = getValue('cash-out-pin');

        // account number 
        if(cashOutAccount.length < 11){
            alert('enter valid account number');
            return;
        }
        if(cashOutPin !== pinNumber){
            alert('pin is invalid')
            return;
        }

        let totalCash = parseInt(getInnerText('total-cash'));
        totalCash -= cashOutAmount;

        if(totalCash < 0){
            alert('you have not enough money')
            return;
        }
        setInnerText(totalCash);
    })

// toggling feature 
const items = document.getElementsByClassName('form');
        for(const item of items){
            item.style.display = 'none';
        }
        document.getElementById('last-transactions').style.display = 'block';

// function for toggling 
function toggle(id, cardId){
        const items = document.getElementsByClassName('form');
        for(const item of items){
            item.style.display = 'none';
        }
        document.getElementById(id).style.display = 'block';
        
        // card style after clicking 
        const elements = document.getElementsByClassName('cards');
        for(const index of elements){
            index.style.border = 'solid 1px rgba(8, 8, 8, 0.1)';
            index.style.background = 'none';
            index.style.color = 'black';
            index.style.fontWeight = 'normal'
            
        }
        const cardID = document.getElementById(cardId).style;
        cardID.border = 'solid 1px #0874F2';
        cardID.background = 'rgba(8, 116, 242, 0.05)';
        cardID.color = '#0874F2';
        cardID.fontWeight = 'bold';
}

// toggle add-money section 
document.getElementById('add-money')
    .addEventListener('click', function(){
        toggle('add-money-section', 'add-money');
    })

// toggle add-money section 
document.getElementById('cash-out')
    .addEventListener('click', function(){
        toggle('cash-out-section', 'cash-out');
    })

// toggle add-money section 
document.getElementById('transfer-money')
    .addEventListener('click', function(){
        toggle('transfer-money-section', 'transfer-money');
    })

// toggle add-money section 
document.getElementById('get-bonus')
    .addEventListener('click', function(){
        toggle('get-bonus-section', 'get-bonus');
    })

// toggle add-money section 
document.getElementById('pay-bill')
    .addEventListener('click', function(){
        toggle('pay-bill-section', 'pay-bill');
    })

// toggle add-money section 
document.getElementById('transactions')
    .addEventListener('click', function(){
        toggle('transactions-section', 'transactions');
    })
