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
  default:
    $("#output").text(`Sorry, that currency is not supported.`);
  }
};

$(document).ready(() => {
  $("#input").click(() => {
    event.preventDefault();
    getCurrencyRates().then((data) => {
      if (data.status !== 200) {
        $("#output").text(`The request for currency rates failed with an error code ${data.status}`);
      } else {
        const currency = new Currency(
          parseFloat($("#usd").val()),
          data.body.conversion_rates.JPY,
          data.body.conversion_rates.EUR,
          data.body.conversion_rates.KRW,
          data.body.conversion_rates.NZD,
          data.body.conversion_rates.CAD
        );
        
        const currencyType = $("#currency-dropdown option:selected").val();
        outputCurrency(currencyType, currency[currencyType]);
      }
    });
  });
});