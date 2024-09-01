async function fetchNonExistentResource() {
  const url = 'https://reqres.in/api/unknown/23';

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Data:', data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

async function postRequest() {
  const url = 'https://reqres.in/api/users';
  const data = {
    name: 'John Doe',
    job: 'Software Engineer',
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log('POST result:', result);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

async function putRequest() {
  const url = 'https://reqres.in/api/users/2';
  const data = {
    name: 'Jane Doe',
    job: 'Project Manager',
  };

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log('PUT result:', result);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

async function deleteRequest() {
  const url = 'https://reqres.in/api/users/2';

  try {
    const response = await fetch(url, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log('DELETE result:', result);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

// kutsu
fetchNonExistentResource();
postRequest();
putRequest();
deleteRequest();
