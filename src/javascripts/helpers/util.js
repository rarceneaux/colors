import $ from 'jquery';

const printToDom = (divId, TextToPrint) => {
  $(`#${divId}`).html(TextToPrint);
};

export default { printToDom };
