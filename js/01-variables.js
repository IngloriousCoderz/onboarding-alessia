{
  let a;
  a = 2;
}

{
  let a = 2;
  a += 1;
}

{
  const a = 2;
  // a = 3;
  const b = a + 1;
}
console.log(a);

/* Comment */ console.log("hello");

/**
 * JsDoc Comment
 */

// inline comment console.log('hello')

// hoisting
{
  // block scoping
  var a = 2;
}
console.log(a);
