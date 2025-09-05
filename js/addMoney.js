// add money button events
document.getElementById('add-btn')
    .addEventListener('click', function(event){
        event.preventDefault();

        const addBank = document.getElementById('add-bank').value;
        const addBankAccount = document.getElementById('add-bank-account').value;
        const addAmount = parseInt(document.getElementById('add-cash').value);
        const addPin = document.getElementById('add-pin').value;

        let totalCash = parseInt(document.getElementById('total-cash').innerText);

        totalCash += addAmount;
        document.getElementById('total-cash').innerText = totalCash;        
        
    })