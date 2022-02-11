
function getInputValue(inputValue){
    const inputField = document.getElementById(inputValue);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // Clear input field
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, amount){
    const totalElement = document.getElementById(totalFieldId);
    const previousTotalText = totalElement.innerText;
    const previousTotal = parseFloat(previousTotalText);
    const newTotal = previousTotal + amount;
    totalElement.innerText = newTotal;
}

function getCurrentBalance(){
    const totalBalance = document.getElementById('balance-total');
    const previousTotalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceText);
    return previousTotalBalance;
}

function updateBalance(newDepositAmount, isAdd){
    const totalBalance = document.getElementById('balance-total');
    /*
     const previousTotalBalanceText = totalBalance.innerText;
     const previousTotalBalance = parseFloat(previousTotalBalanceText); 
     */
    const previousTotalBalance = getCurrentBalance();
   
    if(isAdd == true){
        const newTotalBalance = previousTotalBalance + newDepositAmount;
        totalBalance.innerText = newTotalBalance;
    } else {
        const newTotalBalance = previousTotalBalance - newDepositAmount;
        totalBalance.innerText = newTotalBalance;
    }
}

document.getElementById('deposit-button').addEventListener('click', function(){
   /*  const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText); */

    // get and update deposit
    /* const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal; */
    

    /* // Clear input field
    depositInput.value = ''; */

    // Balance updated
    /* const totalBalance = document.getElementById('balance-total');
    const previousTotalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceText);
    const newTotalBalance = previousTotalBalance + newDepositAmount;
    totalBalance.innerText = newTotalBalance; */

    const newDepositAmount = getInputValue('deposit-input');
    if(newDepositAmount > 0){
        updateTotalField('deposit-total', newDepositAmount);
        updateBalance(newDepositAmount, true);
    }

});

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function(){
    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText); */
    

    // get and update withdraw total
  /*   const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawTotalText)
    withdrawTotal.innerText = previousWithdrawAmount + withdrawAmount; */

    // update balance after withdraw
    /* const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - withdrawAmount;
    balanceTotal.innerText = newBalanceTotal; */

    

    /* // clear withdraw input field
    withdrawInput.value = ''; */
    
    
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount < currentBalance){
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false); 
    }

    if(withdrawAmount > currentBalance){
        console.log('You can not withdraw more than whta you have in your account');
    }

});