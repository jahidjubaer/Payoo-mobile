
// const pin value;
const pinNumber = "1234";
const transactionsData = [];

// reusable code
// get the value
function getValue(id) {
  return document.getElementById(id).value;
}

// get the innerText
function getInnerText(id) {
  return document.getElementById(id).innerText;
}

// set the innerText
function setInnerText(text) {
  return (document.getElementById("total-cash").innerText = text);
}

// add money button events
document.getElementById("add-btn").addEventListener("click", function (event) {
  event.preventDefault();

  const addBankAccount = getValue("add-bank-account");
  const addAmount = parseInt(getValue("add-cash"));
  const addPin = getValue("add-pin");

  // account number
  if (addBankAccount.length < 11) {
    alert("enter valid account number");
    return;
  }
  if (addPin !== pinNumber) {
    alert("pin is invalid");
    return;
  }
  let totalCash = parseInt(getInnerText("total-cash"));
  totalCash += addAmount;
  setInnerText(totalCash);

  //   history of transaction
  const data = {
    transactionsType: "Add Money",
    time: new Date().toLocaleTimeString(),
  };
  transactionsData.push(data);
});

// cash out button events
document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashOutAccount = getValue("cash-out-account");
    const cashOutAmount = parseInt(getValue("cash-out-amount"));
    const cashOutPin = getValue("cash-out-pin");

    // account number
    if (cashOutAccount.length < 11) {
      alert("enter valid account number");
      return;
    }
    if (cashOutPin !== pinNumber) {
      alert("pin is invalid");
      return;
    }

    let totalCash = parseInt(getInnerText("total-cash"));
    totalCash -= cashOutAmount;

    if (totalCash < 0) {
      alert("you have not enough money");
      return;
    }
    setInnerText(totalCash);

    //  history of transaction
    const data = {
      transactionsType: "Cash Out",
      time: new Date().toLocaleTimeString(),
    };
    transactionsData.push(data);
  });

// transactions section events

document.getElementById("transactions").addEventListener("click", function () {
  const transactionContainer = document.getElementById("transaction-container");

  // clear old items
  transactionContainer.innerText = "";

  for (const data of transactionsData) {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
      <div class="flex justify-between items-center p-3 bg-white rounded-xl mb-4">
        <div class="flex gap-3">
          <div class="rounded-full w-[45px] h-[45px] flex justify-center items-center bg-[#F4F5F7]">
            <img src="assets/wallet1.png" alt="">
          </div>
          <div>
            <h1 class="font-bold text-[#080808]/70">${data.transactionsType}</h1>
            <p class="text-[#080808]/70 text-sm">${data.time}</p>
          </div>
        </div>
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>
    `;

    transactionContainer.appendChild(newDiv);
  }
});


// toggling feature
const items = document.getElementsByClassName("form");
for (const item of items) {
  item.style.display = "none";
}
document.getElementById("last-transactions").style.display = "block";

// function for toggling
function toggle(id, cardId) {
  const items = document.getElementsByClassName("form");
  for (const item of items) {
    item.style.display = "none";
  }
  document.getElementById(id).style.display = "block";

  // card style after clicking
  const elements = document.getElementsByClassName("cards");
  for (const index of elements) {
    index.style.border = "solid 1px rgba(8, 8, 8, 0.1)";
    index.style.background = "none";
    index.style.color = "black";
    index.style.fontWeight = "normal";
  }
  const cardID = document.getElementById(cardId).style;
  cardID.border = "solid 1px #0874F2";
  cardID.background = "rgba(8, 116, 242, 0.05)";
  cardID.color = "#0874F2";
  cardID.fontWeight = "bold";
}

// toggle add-money section
document.getElementById("add-money").addEventListener("click", function () {
  toggle("add-money-section", "add-money");
});

// toggle add-money section
document.getElementById("cash-out").addEventListener("click", function () {
  toggle("cash-out-section", "cash-out");
});

// toggle add-money section
document
  .getElementById("transfer-money")
  .addEventListener("click", function () {
    toggle("transfer-money-section", "transfer-money");
  });

// toggle add-money section
document.getElementById("get-bonus").addEventListener("click", function () {
  toggle("get-bonus-section", "get-bonus");
});

// toggle add-money section
document.getElementById("pay-bill").addEventListener("click", function () {
  toggle("pay-bill-section", "pay-bill");
});

// toggle add-money section
document.getElementById("transactions").addEventListener("click", function () {
  toggle("transactions-section", "transactions");
});
