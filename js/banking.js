document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositTotal = document.getElementById('deposit-total');
    const balanceTotal = document.getElementById('balance-total');
    if (parseFloat(depositInput.value) > 0) {
        depositTotal.innerText = parseFloat(depositTotal.innerText) + parseFloat(depositInput.value);
        balanceTotal.innerText = parseFloat(depositInput.value) + parseFloat(balanceTotal.innerText);
    }
    else {
        alert("Deposited Balance Can't be negative. Please Try Again.");
    }
    depositInput.value = '';
});
//withdraw
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawTotal = document.getElementById('withdraw-total');
    const balanceTotal = document.getElementById('balance-total');
    if (parseFloat(balanceTotal.innerText) >= Math.abs(parseFloat(withdrawInput.value))) {
        withdrawTotal.innerText = parseFloat(withdrawTotal.innerText) + Math.abs(parseFloat(withdrawInput.value));
        balanceTotal.innerText = parseFloat(balanceTotal.innerText) - Math.abs(parseFloat(withdrawInput.value));
    }
    else {
        alert('You Have Not Enough Balance For Withdraw. Please Deposit First');
    }
    withdrawInput.value = '';
});