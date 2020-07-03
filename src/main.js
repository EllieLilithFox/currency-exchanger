import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Currency, getCurrencyRates } from "./currency-service";

$(document).ready(() => {
  $("#input").click(() => {
    let currency;
    event.preventDefault();
    getCurrencyRates().then((response) => {
      if (!response.ok) {
        throw new Error(response.staus);
      }
      let data = response.json();
      currency = new Currency(
        parseFloat($("#usd").val()),
        data.conversion_rates.JPY,
        data.conversion_rates.EUR,
        data.conversion_rates.KRW,
        data.conversion_rates.NZD,
        data.conversion_rates.CAD
      );
    }).catch((error) => {
      $("#output").text(`The request failed with a error code ${error}`);
    });
  });
});