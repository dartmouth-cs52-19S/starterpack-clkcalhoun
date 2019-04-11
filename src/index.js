import './style.scss';
import $ from 'jquery';

let num = 0;

function countFunction() {
  num += 1;
  $('#main').html(`You have been on this page for ${num} seconds!`);
}

setInterval(countFunction, 1000);
