const input = document.getElementById("ip");
const output = document.getElementById("output");
const btn = document.getElementById("btn");

// Add event listener to the button
btn.addEventListener("click", () => {
  // Parse the input value as a number
  const initialValue = parseInt(input.value);

  // Create a promise that resolves after 2 seconds with the initial value
  const initialPromise = new Promise(resolve => {
    setTimeout(() => {
      resolve(initialValue);
    }, 2000);
  });

  // Chain promises to perform operations
  initialPromise
    .then(number => {
      output.textContent = `Result: ${number}`;
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(number * 2);
        }, 1000);
      });
    })
    .then(number => {
      output.textContent = `Result: ${number}`;
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(number - 3);
        }, 1000);
      });
    })
    .then(number => {
      output.textContent = `Result: ${number}`;
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(number / 2);
        }, 1000);
      });
    })
    .then(number => {
      output.textContent = `Result: ${number}`;
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(number + 10);
        }, 1000);
      });
    })
    .then(finalResult => {
      output.textContent = `Final Result: ${finalResult}`;
    })
    .catch(error => {
      // Handle errors if any
      console.error("An error occurred:", error);
    });
});