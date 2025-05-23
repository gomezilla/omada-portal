document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);

  const clientMac = urlParams.get('clientMac');
  const clientIp = urlParams.get('clientIp');
  const apiDomain = urlParams.get('apiDomain');
  const httpsPort = urlParams.get('httpsPort');

  console.log("DEBUG:", { clientMac, clientIp, apiDomain, httpsPort });

  document.getElementById('clientMac').value = clientMac || '';
  document.getElementById('clientIp').value = clientIp || '';
  document.getElementById('gwAddress').value = apiDomain || '';
  document.getElementById('gwPort').value = httpsPort || '';

  if (apiDomain && httpsPort && clientMac && clientIp) {
    document.getElementById('authForm').action =
      `https://${apiDomain}:${httpsPort}/portal/auth?clientMac=${clientMac}&clientIp=${clientIp}`;
  } else {
    alert("Missing required Omada Cloud parameters in URL.");
  }
});
