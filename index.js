/*
 * This is index.js
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
    return "UP879244";
    // e.g. return "UP654321";
}

function fn() {
    return "Matus";
}

function sn() {
    return "Minarovic";
}

/**
 * Utility functions for reference that may be used by tests
 * for various reasons.
 */

function exampleAttacher() {
  window.exampleid.addEventListener("click", exampleEventHandler);
}

function exampleEventHandler(event) {
    console.log("This is a", event.type, "event.");
}

// used by snitchAttacher
function snitchUpdater(event) {
  window.snitch.textContent = (event.type == 'mouseover' ? "IN" : "OUT");
}

// used by lovelyParaAttacher
function lovelyToggle() {
    window.thisisalovelyparagraph.classList.toggle("lovely");
}

/**
 * Add your functions here...
 */

 /*Create a function `targetTextToConsole` that takes one parameter `event`
 nd writes the text content of `event.target` to the console. Create a second
 function tttcAttacher. tttcAttacher should set `targetTextToConsole` as the
 event handler for the click event on `button0` - thus when the `Click Me`
 button is pressed, `Click Me` should appear on the console,*/
function targetTextToConsole(event){
    console.log(event.target.textContent);
}

function tttcAttacher(){
    window.button0.addEventListener("click", targetTextToConsole);
}

// Create a function `lovelyParaAttacher` that attaches an event listener
// to the `thisisalovelyparagraph` element. When the paragraph is clicked the
// (provided) `lovelyToggle` function should be invoked.
function lovelyParaAttacher(){
    window.thisisalovelyparagraph.addEventListener("click", lovelyToggle);
}

// Create a function `lovelyButtonAttacher` that attaches an event listener
// to the `button1` element. When `button1` is clicked the `lovelyToggle`
// function should be invoked.
function lovelyButtonAttacher(){
    window.button1.addEventListener("click", lovelyToggle);
}

// Create a function `concatAttacher` that attaches an event listener to
// the `in1` and `in2` input elements. Write an event handler function that
// fulfills the following requirement: when `in1` and `in2` change, their
// content should be joined together and placed inside the `out1` element,
// such that if you entered `Darth` and `Vader` the content of `out1`
// would be `DarthVader`.
function concatAttacher(){
    window.in1.addEventListener("change", concatEventHandler);
    window.in2.addEventListener("change", concatEventHandler);
}

function concatEventHandler(e){
    window.out1.textContent = window.in1.value + window.in2.value;
}

// The div `mousewatcher` contains a paragraph `snitch`. When the mouse is
// pointing at `mousewatcher`, the `snitch` paragraph should say `IN`, otherwise
// it should say `OUT`. Write a function `snitchAttacher`. `snitchAttacher`
// should associate the (provided) `snitchUpdater` function with the
// `mouseover` and `mouseout` events.
function snitchAttacher(){
    window.mousewatcher.addEventListener("mouseover", snitchUpdater);
    window.mousewatcher.addEventListener("mouseout", snitchUpdater);
}

/*The div `mousereporter` contains a paragraph `report`. When the mouse is
anywhere over `mousereporter`, the `report` paragraph should be updated to
include the position of the mouse within the screen, thus `x: 000 y: 000`.
Write a function `reportAttacher` that associates the mousemove event with
a `reportUpdater` function. Also write the `reportUpdater` function (you may
wish to base this on `snitchUpdater`) which receives a single event object
parameter and used the data in this object to update the `report` element.
Hint: there are screenX and screenY properties in the event object.*/
function reportAttacher(){
    window.mousereporter.addEventListener("mousemove", reportUpdater);
    window.mousereporter.addEventListener("mouseout", reportUpdater);
}

function reportUpdater(e){
    window.report.textContent = e.type == 'mousemove' ? "x: " + (e.screenX) + " y: " + (e.screenY) : "";
}

/*The input field `newid` is meant for the user to type an ID of an HTML
element; IDs cannot have spaces in them, so the field needs to report when
the user has a space in there. Write a function `idValidationAttacher` that
gives the `newid` input field an event handler that checks the value whenever
it has changed (use the `input` event). If the value contains any space, the
event handler will add a class `invalid` to the `newid` input element, so
that an error message shows.*/
function idValidationAttacher(){
    window.newid.addEventListener('input', checkSpaces);
}

function checkSpaces(e){
    window.newid.value.match(/\s/g) == null ? window.newid.classList.remove("invalid") : window.newid.classList.add("invalid");
    //      /\s/        means a space in the string (if theres a match)
    //      /\s/g       the g means that it will search the whole string,
    //                  not just the first instance
}
