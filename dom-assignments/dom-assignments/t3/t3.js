window.onload = function () {
  const target = document.getElementById('target');

  const browserInfo = navigator.userAgent;
  const browserName = browserInfo.includes('Chrome')
    ? 'Google Chrome'
    : browserInfo.includes('Firefox')
    ? 'Mozilla Firefox'
    : browserInfo.includes('Safari') && !browserInfo.includes('Chrome')
    ? 'Safari'
    : 'Unknown Browser';

  const versionMatch = browserInfo.match(/(Chrome|Firefox|Safari)\/(\d+)/);
  const browserVersion = versionMatch ? versionMatch[2] : 'Unknown Version';

  const osName = navigator.platform;

  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;

  const availWidth = window.screen.availWidth;
  const availHeight = window.screen.availHeight;

  const now = new Date();
  const finnishDate = now.toLocaleDateString('fi-FI', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const finnishTime = now.toLocaleTimeString('fi-FI', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const outputHTML = `
      <p><strong>Browser Name and Version:</strong> ${browserName}, ${browserVersion}</p>
      <p><strong>Operating System:</strong> ${osName}</p>
      <p><strong>Screen Width and Height:</strong> ${screenWidth} x ${screenHeight}</p>
      <p><strong>Available Screen Space for Browser:</strong> ${availWidth} x ${availHeight}</p>
      <p><strong>Current Date:</strong> ${finnishDate}</p>
      <p><strong>Current Time:</strong> ${finnishTime}</p>
    `;

  target.innerHTML = outputHTML;
};
