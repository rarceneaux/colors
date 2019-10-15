import colors from './helpers/data/colors';

const colorArrays = colors.getColors();

const forEachFunc = () => {
  for (let i = 0; i < colorArrays.length; i += 1) {
    console.log('for', colorArrays[i].name);
  }
  colorArrays.forEach((color) => console.log('forEach', color.name));
};

const filterFunc = () => {
  const newColors = [];
  for (let r = 0; r < colorArrays.length; r += 1) {
    if (colorArrays[r].hexValue[0] === 'F') {
      newColors.push(colorArrays[r]);
      console.log('for', newColors);
    }
  }
};
const filteredColors = colorArrays.filter((x) => x.hexValue[0] === 'F');
console.log('filter', filteredColors);


const findFunc = () => {
  let colorToFind = {};
  for (let t = 0; t < colorArrays.length; t += 1) {
    if (colorArrays[t].name === 'green') {
      colorToFind = colorArrays[t];
    }
  }
  console.log('for', colorToFind.hexValue);
  const colorFind = colorArrays.find((x) => x.name === 'green');
  console.log('find', colorFind.hexValue);
};

const mapFunc = () => {
  // create an array of h1 tags for color name
  const h1Tags = [];
  for (let g = 0; g < colorArrays.length; g += 1) {
    h1Tags.push(`<h1>${colorArrays[g].name}</h1>`);
  }
  console.log('for', h1Tags);
  const colorMap = colorArrays.map((color) => `<h1>${color.name}</h1>`);
  console.log('map', colorMap);
};

const reduceFunc = () => {
  let total = 0;
  for (let u = 0; u < colorArrays.length; u += 1) {
    total += colorArrays[u].upVotes;
  }
  console.log('for', total);
  const upVotesTotal = colorArrays.reduce((prev, curr) => prev + curr.upVotes, 0);
  console.log('reduce', upVotesTotal);
};

const init = () => {
  console.error('inside arrayMethods.js');
  forEachFunc();
  filterFunc();
  findFunc();
  mapFunc();
  reduceFunc();
};

export default { init };
