/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/

// Your code goes here

function createInputElm(label, type = "text") {
  let labelElement = document.createElement("label");
  document.body.append(labelElement);
  labelElement.innerText = label + ":";
  let inputElement = document.createElement("input");
  inputElement.setAttribute("type", type);
  labelElement.append(inputElement);
  return labelElement;
};

// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`

// Your code goes here
function createInputElm1(label, type = "text") {
  return `<label>${label}: <input type=${type}>`;
}
// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept an array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>
// Your code goes here
function createList (arr)  {
  let myUl = document.createElement("ul");
  document.body.append(myUl);

  arr.forEach((val) => {
    let newLi = document.createElement("li");
    newLi.innerText = val;
    myUl.append(newLi);
  });
  return myUl;
};
// TEST
createList(['ALABAMA', 'ALASKA', 'HAWAII', 'KENTUCKY']);
createList(['Afghanistan', 'Antarctica', 'Congo', 'Estonia']);

// 4. Create a function named `createTodoList` that accept an array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

// Your code goes here
function createTodoList(array) {
  let myUl = document.createElement("ul");
  document.body.append(myUl);

  array.forEach((val) => {
    let myLi = document.createElement("li");
    myUl.append(myLi);

    let para = document.createElement("p");
    myLi.append(para);
    para.innerText = val.name;

    let inputElm = document.createElement("input");
    myLi.append(inputElm);
    
    inputElm.type = "checkbox";
    inputElm.checked = val.isDone;

    let span = document.createElement('span');
    myLi.append(span);
    span.innerText = 'X';

  });
  return myUl;
}
// TEST
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn JS', isDone: true },
]);
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn React', isDone: true },
  { name: 'Learn JS', isDone: true },
]);
