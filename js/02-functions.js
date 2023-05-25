{
  // function declaration
  // hoisting
  // newspaper article paradigm
  console.log(sum(2, 3));

  function sum(a, b) {
    return a + b;
  }
}

{
  // function expression
  // no hoisting
  const sum = function (a, b) {
    return a + b;
  };

  console.log(sum(2, 3));
}

{
  // arrow function
  // no hoisting
  const sum = (a, b) => {
    return a + b;
  };

  console.log(sum(2, 3));
}

{
  // concise
  const sum = (a, b) => a + b;

  console.log(sum(2, 3));
}

{
  // context preservation
  // <button>Click me!</button>;
  // console.log(this);
  // document.querySelector("button").addEventListener("click", function (event) {
  //   console.log(event.target, this);
  // });
  // const self = this;
  // console.log(self);
  // document.querySelector("button").addEventListener("click", function (event) {
  //   console.log(event.target, self);
  // });
  // console.log(this);
  // document.querySelector("button").addEventListener(
  //   "click",
  //   function (event) {
  //     console.log(event.target, this);
  //   }.bind(this)
  // );
  // console.log(this);
  // document.querySelector("button").addEventListener("click", (event) => {
  //   console.log(event.target, this);
  // });
}

{
  console.log(sum(2, 3));
  console.log(sum(2, null));
  console.log(sum(2));

  function sum(a, b = 0) {
    return a + b;
  }
}
