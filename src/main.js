import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Currency, getCurrencyRates } from "./currency-service";

$(document).ready(() => {
  $("#input").click(() => {
    event.preventDefault();
    getCurrencyRates();
  });
});