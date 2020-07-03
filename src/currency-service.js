export class Currency {
  constructor(usd, eur, krw, nzd, cad) {
    this.usd = usd;
    this.eur = usd * eur;
    this.krw = usd * krw;
    this.nzd = usd * nzd;
    this.cad = usd * cad;
  }
}