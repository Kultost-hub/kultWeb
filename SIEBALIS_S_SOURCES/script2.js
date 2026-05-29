let Word1 = false;
let Word2 = false;
let Word3 = false;
let Word4 = false;
const input = document.getElementById('myInput');
const blocks = document.querySelectorAll('.result-block');

const firstOne = document.getElementById('wordOne');
const secondtOne = document.getElementById('wordTwo');
const thirdOne = document.getElementById('wordThree');
const fourthOne = document.getElementById('wordFour'); 
const simple = document.getElementById('kultIMG');
const dstux = document.getElementById('dastlux');

input.addEventListener('input', function() {
  const filter = input.value.toLowerCase().trim();
  blocks.forEach(block => block.style.display = 'none');
  if (filter === '') return;

  switch(filter) {
    case 'инертный':
        firstOne.style.display = 'block';
        firstOne.style.color = 'yellow';
        simple.style.display = 'none';
        Word3 = true;
        break;
    case 'дастлюксы':
        dstux.style.display = 'block';
        simple.style.display = 'none';
        break;
    case 'дефект':
        secondtOne.style.display = 'block';
        secondtOne.style.color = 'white';
        simple.style.display = 'none';
        Word2 = true;
        break;
    case 'креза':
        thirdOne.style.display = 'block';
        thirdOne.style.color = 'red';
        simple.style.display = 'none';
        Word1 = true;
        break;
    case 'анафема':
        fourthOne.style.display = 'block';
        fourthOne.style.color = 'blue';
        simple.style.display = 'none';
        Word4 = true;
        break;
    default:
        simple.style.display = 'block';
  }
  if (Word1 === true && Word2 === true && Word3 === true && Word4 === true && firstOne.style.display === 'none' && secondtOne.style.display === 'none' && thirdOne.style.display === 'none' && fourthOne.style.display === 'none') {
    simple.style.display = 'none';
    fourthOne.style.display = 'none';
    thirdOne.style.display = 'none';
    firstOne.style.display = 'none';
    secondtOne.style.display = 'none';
    document.getElementById('wordFive').style.display = 'block';
    document.getElementById('wordFive').style.color = 'purple';
  }
});
