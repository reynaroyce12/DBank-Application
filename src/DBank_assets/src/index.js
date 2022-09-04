import { DBank } from "../../declarations/DBank"

window.addEventListener('load', async () => {
  const currentAmount = await DBank.returnAmount()
  document.getElementById('value').innerText = currentAmount.toFixed(2)
})

    document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault()

    const button = event.target.querySelector('#submit-btn')
    const topUpAmount = parseFloat(document.getElementById('input-amount').value)
    const withdrawAmount = parseFloat(document.getElementById('withdrawal-amount').value)

    button.setAttribute('disabled', true)
    
    if (document.getElementById('input-amount').value.length != 0) {
      await DBank.topUp(topUpAmount)
    }

    if (document.getElementById('withdrawal-amount').value.length != 0) {
      await DBank.withdraw(withdrawAmount)
    }

    await DBank.compound()

    const currentAmount = await DBank.returnAmount()
    document.getElementById('value').innerText = currentAmount.toFixed(2)

    document.querySelector('form').reset()
    button.removeAttribute('disabled')
})