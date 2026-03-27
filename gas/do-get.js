function doGet(e) {
  const jokeURL = 'https://v2.jokeapi.dev/joke/Any?safe-mode&' + Date.now();

  function fetchText(url) {
    try {
      const response = UrlFetchApp.fetch(url);
      if (response.getResponseCode() === 200) {
        return response.getContentText();
      } else {
        return importData(url);
      }
    } catch {
      return importData(url);
    }
  }

  let text;
  try {
    text = fetchText(jokeURL);
    console.log(text);
    const joke = JSON.parse(text);
    if (joke.type === 'twopart') {
      text = `${joke.setup} ${joke.delivery}`;
    } else {
      text = String(joke?.joke ?? joke?.message ?? joke);
    }
  } catch (e) {
    text = String(e);
  }
  console.log(text);
  return ContentService.createTextOutput(text);
}
