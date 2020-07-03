export class Currency {
  constructor(usd, jpy, eur, krw, nzd, cad) {
    this.usd = usd;
    this.jpy = usd * jpy;
    this.eur = usd * eur;
    this.krw = usd * krw;
    this.nzd = usd * nzd;
    this.cad = usd * cad;
  }
}

export const getCurrencyRates = async () => {
  const response = await fetch(`https://v6.exchangerate-api./v6/${process.env.API_KEY}/latest/USD`)
  .then(response => {
    if (!response.ok) {
      console.log(response.statusText);
      throw new Error(response.statusText);
    }
    return response.json();
  })
  const data = await response.json();
  return data;
  
  
}