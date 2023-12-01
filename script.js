function calculateTotal() {
    const chocolates = document.getElementsByName('chocolate');
    let selectedChocolates = 0;
    let total = 0;

    for (const chocolate of chocolates) {
        if (chocolate.checked) {
            selectedChocolates++;
            total += parseFloat(chocolate.value);
        }
    }

    if (selectedChocolates > 8) {
        alert('You can only select up to 8 chocolates.');
        return;
    }

    const totalOutput = document.getElementById('total-output');
    totalOutput.innerHTML = `Total: ₹${total.toFixed(2)}`;
}
