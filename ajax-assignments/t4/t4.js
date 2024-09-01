async function fetchData(url, options) {
  try {
    const response = await fetch(url, options);

    // Check if response status 200-299
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Return JSON response if successful
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error; // Re-throw
  }
}

// Test fetchData with POST request
async function testFetchData() {
  const user = {
    name: 'John Doe',
    job: 'Developer',
  };
  const url = 'https://reqres.in/api/users';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };

  try {
    const userData = await fetchData(url, options);
    console.log('User data:', userData);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// kutsu
testFetchData();
