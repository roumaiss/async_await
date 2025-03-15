// Task 1 :
async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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
  const response = await fetch("https://api.jikan.moe/v4/anime/1");
  const data = await response.json();
  console.log(data);
}

awaitCall();

// Task 3 :
async function awaitCall() {
  try {
    const response = await fetch(
      "http://api.anidb.net:9001/httpapi?request=anime"
    );

    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("Network error or invalid URL:", error.message);
    } else {
      console.error("An unexpected error occurred:", error.message);
    }
  }
}

awaitCall();
