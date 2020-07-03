import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { getCurrencyRates } from "./currency-service";

$(document).ready(() => {
  $("#input").click(() => {
    event.preventDefault();
    getCurrencyRates().then(data => {
      console.log(data);
    });
  });
});