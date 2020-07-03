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
  const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
  const data = await response.json();
  return data;
}