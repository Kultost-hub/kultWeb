let AlexWord = false;
let AnekdotWord = false;
let NushWord = false;
let DastrWord = false;
const input = document.getElementById('myInput');
const blocks = document.querySelectorAll('.result-block');

const firstOne = document.getElementById('wordOne');
const secondtOne = document.getElementById('wordTwo');
const thirdOne = document.getElementById('wordThree');
const fourthOne = document.getElementById('wordFour'); 
const simple = document.getElementById('kultIMG');

input.addEventListener('input', function() {
  const filter = input.value.toLowerCase().trim();
  blocks.forEach(block => block.style.display = 'none');
  if (filter === '') return;

  switch(filter) {
    case 'инертный':
        firstOne.style.display = 'block';
        firstOne.style.color = 'yellow';
        simple.style.display = 'none';
        NushWord = true;
        break;
    case 'дефект':
        secondtOne.style.display = 'block';
        secondtOne.style.color = 'white';
        simple.style.display = 'none';
        AnekdotWord = true;
        break;
    case 'креза':
        thirdOne.style.display = 'block';
        thirdOne.style.color = 'red';
        simple.style.display = 'none';
        AlexWord = true;
        break;
    case 'анафема':
        fourthOne.style.display = 'block';
        fourthOne.style.color = 'blue';
        simple.style.display = 'none';
        DastrWord = true;
        break;
    default:
        simple.style.display = 'block';
  }
  if (AlexWord === true && AnekdotWord === true && NushWord === true && DastrWord === true && firstOne.style.display === 'none' && secondtOne.style.display === 'none' && thirdOne.style.display === 'none' && fourthOne.style.display === 'none') {
    simple.style.display = 'none';
    document.getElementById('wordFive').style.display = 'block';
    document.getElementById('wordFive').style.color = 'purple';
  }
});
