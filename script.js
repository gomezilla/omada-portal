document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);

  const clientMac = urlParams.get('clientMac');
  const clientIp = urlParams.get('clientIp');
  const redirectUrl = urlParams.get('redirectUrl');

  let gwAddress = '';
  let gwPort = '8088'; // Default for Omada portal, can change to 8080 if needed

  // Try to extract gateway address from redirectUrl
  if (redirectUrl) {
    try {
      const parsedUrl = new URL(decodeURIComponent(redirectUrl));
      gwAddress = parsedUrl.hostname;
    } catch (e) {
      console.error('Failed to parse redirectUrl', e);
    }
  }

  // Debug output
  console.log("clientMac:", clientMac);
  console.log("clientIp:", clientIp);
  console.log("gwAddress:", gwAddress);
  console.log("gwPort:", gwPort);

  // Set values to hidden inputs
  document.getElementById('clientMac').value = clientMac || '';
  document.getElementById('clientIp').value = clientIp || '';
  document.getElementById('gwAddress').value = gwAddress || '';
  document.getElementById('gwPort').value = gwPort || '';

  if (gwAddress && clientMac && clientIp) {
    const authUrl = `http://${gwAddress}:${gwPort}/portal/auth?clientMac=${clientMac}&clientIp=${clientIp}`;
    document.getElementById('authForm').action = authUrl;
  } else {
    alert("Missing required parameters. Cannot continue.");
  }
});
