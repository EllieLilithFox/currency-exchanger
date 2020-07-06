import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Currency, getCurrencyRates } from "./currency-service.js";

const outputCurrency = (cur, currencyAmount) => {
  switch (cur){
  case "jpy":
    $("#output").html(`<p>That converts to ¥${currencyAmount.toFixed(2)} Yen</p>
    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/1000_yen_banknote_2004.jpg">`);
    break;
  case "eur":
    $("#output").html(`<p>That converts to €${currencyAmount.toFixed(2)} Euro</p>
    <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/EUR_100_obverse_%282002_issue%29.jpg">`);
    break;
  case "krw":
    $("#output").html(`<p>That converts to ₩${currencyAmount.toFixed(2)} Won</p>
    <img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/10000_won_serieVI_obverse.jpeg">`);
    break;
  case "nzd":
    $("#output").html(`<p>That converts to $${currencyAmount.toFixed(2)} New Zealand Dollars</p>
    <img src="https://upload.wikimedia.org/wikipedia/en/e/e0/NewZealandTwentyDollarNote1.png">`);
    break;
  case "cad":
    $("#output").html(`<p>That converts to $${currencyAmount.toFixed(2)} Canadian Dollars</p>
    <img src="https://upload.wikimedia.org/wikipedia/en/0/07/Canadian_%2420_note_specimen_-_face.png">`);
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
        return;
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