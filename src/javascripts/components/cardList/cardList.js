import $ from 'jquery';
import utils from '../../helpers/util';

import './cardList.scss';

const cardListBuilder = (colors) => {
  let domString = '';
  colors.forEach((color) => {
    // console.log(color);
    domString += '<div class="col-3">';
    domString += `<div class="card" style="background-color: #${color.hexValue}">`;
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${color.name}</h5>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  utils.printToDom('color-list', domString);
};

const cardTest = () => {
  const domString2 = `<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;
  utils.printToDom('single-color', domString2);
};

const cardListEvents = () => {
  $('body').on('mouseenter', '.card', (e) => {
    $(e.target).children().addClass('hide');
  });

  $('body').on('mouseleave', '.card', (e) => {
    $(e.target).children().removeClass('hide');
  });

  $('body').on('click', '.card', () => {
    utils.printToDom('color-list', '');
    utils.printToDom('single-color', cardTest);
  });
};
export default { cardListBuilder, cardListEvents };
