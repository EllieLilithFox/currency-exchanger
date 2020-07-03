import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Currency, getCurrencyRates } from "./currency-service.js";

const outputCurrency = (cur, currencyAmount) => {
  switch (cur){
  case "jpy":
    $("#output").text(`That converts to ¥${currencyAmount} Yen`);
    break;
  case "eur":
    $("#output").text(`That converts to €${currencyAmount} Euro`);
    break;
  case "krw":
    $("#output").text(`That converts to ₩${currencyAmount} Won`);
    break;
  case "nzd":
    $("#output").text(`That converts to $${currencyAmount} New Zealand Dollars`);
    break;
  case "cad":
    $("#output").text(`That converts to $${currencyAmount} Canadian Dollars`);
    break;
  }
};

$(document).ready(() => {
  $("#input").click(() => {
    let currency;
    event.preventDefault();
    getCurrencyRates().then((data) => {
      currency = new Currency(
        parseFloat($("#usd").val()),
        data.conversion_rates.JPY,
        data.conversion_rates.EUR,
        data.conversion_rates.KRW,
        data.conversion_rates.NZD,
        data.conversion_rates.CAD
      );
      
      const currencyType = $("#currency-dropdown option:selected").val();
      outputCurrency(currencyType, currency[currencyType]);
    });
  });
});