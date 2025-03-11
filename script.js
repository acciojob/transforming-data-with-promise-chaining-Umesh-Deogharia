let input = document.querySelector('#ip');
let output = document.querySelector('#output');
let Button = document.querySelector('#btn');

Button.addEventListener('click', () => {
    return (
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(Number(input.value));
        }, 2000);
      })
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
        })
    );
});