// login button events
const loginBtn = document.getElementById('log-in');
const phoneNumber = "17123456789";
const pinNumber = "1234";

if(loginBtn){
        loginBtn.addEventListener('click', function(event){
        event.preventDefault();
        
        const getNumber = document.getElementById('phone-number').value;
        const getPin = document.getElementById('pin-number').value;
        

        if(getNumber === phoneNumber && getPin === pinNumber){
            window.location.href = "home.html";
        }
        else{
            alert("invalid number or pin")
        }

        getNumber = "";
        getPin = "";
        
    })
}


// // add money button events 
// const totalCash = document.getElementById('total-cash');
// const addBtn = document.getElementById('add-btn');
// const addedCash = document.getElementById('add-cash');

// if(addBtn){
//     addBtn.addEventListener('click', function(event){
//         event.preventDefault()
//         const addPin = parseInt(getPin);
//         let convertedCash = parseInt(totalCash.innerText);
//         const convertedAdded = parseInt(addedCash.value);

//         if(addPin === pinNumber){
//             convertedCash += convertedAdded;
//             totalCash.innerText = convertedCash;
//         }
//         else{
//             alert('something is wrong');
//         }
//     })
// }


// // log-out button events 
// const logOut = document.getElementById('log-out');

// if(logOut){
// logOut.addEventListener('click', function(event){
//         window.location.href = "index.html";
//     })
// }
   

// // logo events in home 
// document.getElementById('logo')
//     .addEventListener('click', function(event){
//         window.location.href = "home.html";
//     })


// // ADD Money card events 
// document.getElementById('add-money')
//     .addEventListener('click', function(event){
//         window.location.href = "addMoney.html";
//     })


// // Cash out card events 
// document.getElementById('cash-out')
//     .addEventListener('click', function(event){
//         window.location.href = "cashOut.html";
//     })

// // transfer-money card events 
// document.getElementById('transfer-money')
//     .addEventListener('click', function(event){
//         window.location.href = "transferMoney.html";
//     })


// // get-bonus card events 
// document.getElementById('get-bonus')
//     .addEventListener('click', function(event){
//         window.location.href = "bonus.html";
//     })


// // pay-bill card events 
// document.getElementById('pay-bill')
//     .addEventListener('click', function(event){
//         window.location.href = "payBill.html";
//     })

// //transactions card events 

// document.getElementById('transactions')
//     .addEventListener('click', function(event){
//         window.location.href = "transactions.html";
//     })