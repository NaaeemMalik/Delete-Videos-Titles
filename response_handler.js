const url = new URL(location.href);
const targetUrl = url.searchParams.get('url');

fetch(targetUrl)
  .then((response) => response.text())
  .then((text) => {
    const modifiedText = text.replace(/keepa\.com/g, 'keepa.amztoolshub.com');
    document.documentElement.innerHTML = modifiedText;
  });
