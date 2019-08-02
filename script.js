const form = document.getElementById('set-font-size');
const inputs = document.querySelectorAll('#set-font-size input[type="number"]');
const setIts = document.querySelectorAll('#set-font-size .input-group-append');
const showMes = document.querySelectorAll('#set-font-size .show-me');

function setFontSize(event){

  let input = event.target.parentElement.previousElementSibling,
    size = input.value,
    toTarget = input.id,
    allTargets = document.querySelectorAll(toTarget);
    console.log( "input: "+ input);
    console.log( "size: "+ size);
    console.log( "toTarget: "+ toTarget);


    if (isNaN(size) || size == '') {

    } else {
      for (let whatevs of allTargets) {

        // check if original size was already recorded
        if (!whatevs.hasAttribute('data-original-size')) {
          // if not, record it
          let targetsStyles = window.getComputedStyle(whatevs);
          console.log( 'original size is ' + targetsStyles.getPropertyValue('font-size'));
          whatevs.setAttribute('data-original-size', targetsStyles.getPropertyValue('font-size'));
        }

        // and then set our new font size
        whatevs.style.fontSize = size+'px';
      }
    }
}

function showFirstExample(event) {
  let element = event.target.getAttribute('data-element'),
    firstExample = document.querySelector(element);
    firstExample.setAttribute('id', 'our-'+element);

    // remove high light from any other element
    let currentlyHighlighted = document.getElementsByClassName('highlight');
    if ( currentlyHighlighted.length > 0 ) {
      for (let highlights of currentlyHighlighted ) {
        highlights.classList.remove('highlight')
      }
    }

    // add highlight to the first of this element
    firstExample.classList.add('highlight');
    window.location = "#our-"+element;
}

function focus(event) {
  //var declarations
  var targetEl = event.target.id;
  var targetDescription = event.target.nextElementSibling;
  var firstExample = document.querySelector(targetEl);
  var showMe = event.target.parentElement.nextElementSibling;
  var highlightStyles = "color: #495057;background-color: #fff;border-color: #80bdff;outline: 0;box-shadow: 0 0 0 .2rem rgba(0,123,255,.25);"


  // if we have one of these elements on the page...
  if ( firstExample ) {

    // create link to show the first one...
    showMe.innerHTML = "Show me the first one";
    showMe.style.textDecoration = "underline";

    // and add event listener to it
    showMe.addEventListener('click', showFirstExample );
    showMe.addEventListener('tap', showFirstExample );

    // remove high light from any other element
    let currentlyHighlighted = document.getElementsByClassName('highlight');
    if ( currentlyHighlighted.length > 0 ) {
      for (let highlights of currentlyHighlighted ) {
        highlights.classList.remove('highlight')
      }
    }

    // highlight an example of this element
    firstExample.classList.add('highlight')
  } else {

    // can't find a matching element on the page, better let the user know
    showMe.innerHTML = "Doesn't look like we have on one this page";
    showMe.style.color = "#E03C31";
  }

}

function blur(event) {

  // var declaration
  var targetEl = event.target.id,
    description = event.target.nextElementSibling,
    firstExample = document.querySelector(targetEl);

  // remove the highlight from example element
  firstExample.classList.remove('highlight');

}

// add focus/blur event listeners
for (var i = 0; i < inputs.length; i++) {
  var input = inputs[i];

  input.addEventListener('focus', focus );
  input.addEventListener('blur', blur );
}

// add event listener to set font size
for (var i = 0; i < setIts.length; i++) {
  let button = setIts[i];

  button.addEventListener('click', setFontSize );
  button.addEventListener('tap', setFontSize );
}
