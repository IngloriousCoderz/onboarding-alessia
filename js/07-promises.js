// AJAX - Asynchronous JavaScript and XML
const req = XMLHttpRequest();

$.getJSON(
  url1,
  (response1) => {
    $.getJSON(
      url2,
      (response2) => {
        $.getJSON(
          url3,
          (response3) => {},
          (error3) => {}
        );
      },
      (error2) => {}
    );
  },
  (error1) => {}
);

const handleResponse1 = (response1) =>
  $.getJSON(url2, handleResponse2, handleError2);
const handleError1 = (error1) => {};
const handleResponse2 = (response2) =>
  $.getJSON(url3, handleResponse3, handleError3);
const handleError2 = (error2) => {};
const handleResponse3 = (response3) => {};
const handleError3 = (error3) => {};

$.getJSON(url1, handleResponse1, handleError1);

const responses = [];
$.getJSON(url1, (response1) => {});
$.getJSON(url2, (response2) => {});

$.getJSON(url1)
  .then((response1) => $.getJSON(url2))
  .then((response2) => $.getJSON(url3))
  .catch((error) => {})
  .finally(() => {});

Promise.all([$.getJSON(url1), $.getJSON(url2)]).then(
  ([response1, response2]) => {}
);

new Promise((resolve, reject) => {
  $.getJSON(
    url,
    (response) => resolve(response.body),
    (error) => reject(error.message)
  );
})
  .then((data) => {})
  .catch((errorMessage) => {});

new Promise((resolve) => {
  setTimeout(() => {
    resolve("Three seconds have passed.");
  }, 3000);
}).then(console.log);

Promise.resolve(42) == new Promise((resolve) => resolve(42));
