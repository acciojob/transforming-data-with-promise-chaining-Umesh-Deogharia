let input = document.querySelector("#ip");
let output = document.querySelector("#output");
let button = document.querySelector("#btn");

button.addEventListener("click", () => {

  const initialValue = ParseInt(input.value);

  const initialPromise = new Promise((resolve, reject) => { 

    setTimeout(() => {
      resolve(initialValue);
    }, 2000);
  })
  // return new Promise((resolve, reject) => {
    // })
    
    initialPromise
    .then((res) => {
      output.textContent = `Result ${res}`;
      console.log("input number", res);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(res * 2);
        }, 1000);
      });
    })
    .then((res) => {
      output.textContent = `Result ${res}`;
      console.log("for multiply", res);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(res - 3);
        }, 1000);
      });
    })
    .then((res) => {
      output.textContent = `Result ${res}`;
      console.log("for subtract", res);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(res / 2);
        }, 1000);
      });
    })
    .then((res) => {
      console.log("for divide", res);
      output.textContent = `Result ${res}`;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(res + 10);
        }, 1000);
      });
    })
    .then((res) => {
      output.textContent = `Final Result ${res}`;
      // console.log("for addition", res);
      //   setTimeout(() => {

      //   }, 1000);
    })
    .catch((err) => {
      console.log("error", err);
    });
});
