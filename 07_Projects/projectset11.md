# Projects related to DOM

## Project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});


```

## Project 2

```javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value);
console.log(height);
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  // console.log(typeof height, typeof weight);

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid number ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid number ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>your ibm is ${bmi}</span> <br> <span> BMI Obersvation is :Under Weight <span>`;
    if (bmi < 18.6) {
      results.innerHTML = `<span>your ibm is ${bmi}</span> <br> <span> BMI Obersvation is : Under Weight <span>`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      results.innerHTML = `<span>your ibm is ${bmi}</span> <br> <span> BMI Obersvation is : Normal Range  <span>`;
    } else if (bmi > 24.9) {
      results.innerHTML = `<span>your ibm is ${bmi}</span> <br> <span> BMI Obersvation is : Overweight <span>`;
    }
    //show the result
  }
});

```

## project 3
```javascript
const clock = document.getElementById('clock');
// cosnt clock = document.querySelector('#clock');

// The setInterval() method, offered on the Window and WorkerGlobalScope interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```