async function getForex() {
  let res = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
  let data = await res.json();

  let forex = document.getElementById("forex");
  if(forex){
    forex.innerHTML = `
      <li>EUR/USD: ${data.rates.EUR}</li>
      <li>INR/USD: ${data.rates.INR}</li>
      <li>JPY/USD: ${data.rates.JPY}</li>
    `;
  }
}

getForex();
