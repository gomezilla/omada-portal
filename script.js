document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const form = document.getElementById('authForm');

  document.getElementById('clientMac').value = urlParams.get('clientMac') || '';
  document.getElementById('clientIp').value = urlParams.get('clientIp') || '';
  document.getElementById('gwAddress').value = urlParams.get('gwAddress') || '';
  document.getElementById('gwPort').value = urlParams.get('gwPort') || '';

  form.action = `http://${urlParams.get('gwAddress')}:${urlParams.get('gwPort')}/portal/auth?clientMac=${urlParams.get('clientMac')}&clientIp=${urlParams.get('clientIp')}`;
});
