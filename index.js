// Task 1 :

async function iterateWithAsyncAwait(values) {
  for (const value of values) {
    console.log(value);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
  }
}

// Example usage
iterateWithAsyncAwait([6, 9, 3, 8, 2, 1]);

//   Task 2

async function awaitCall() {
  const fetchData = new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: "API data received successfully" });
    }, 2000); // Simulated delay of 2 seconds
  });
  const data = await fetchData;
  console.log(data);
}

awaitCall();

// Task 3 :
async function awaitCall() {
  try {
    const fetchData = new Promise((resolve) => {
      setTimeout(() => {
        resolve({ message: "API data received successfully" });
      }, 2000); // Simulated delay of 2 seconds
    });

    // Await the response before checking for errors
    const data = await fetchData;

    // No .ok or .status on manually created Promise, so remove that check
    console.log(data);
  } catch (error) {
    console.error("An unexpected error occurred:", error.message);
  }
}

awaitCall();
