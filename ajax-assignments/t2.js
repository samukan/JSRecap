async function createUser() {
  try {
    const userData = {
      name: 'John Doe',
      job: 'Software Developer',
    };

    const response = await fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    console.log('Response Data:', data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

createUser();
