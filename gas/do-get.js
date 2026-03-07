function doGet(e){
  let text;
  try{
    text = importData('https://v2.jokeapi.dev/joke/Any?safe-mode&'+Date.now());
    console.log(text);
    const joke = eval(`(${text})`);
    if(joke.type === 'twopart'){
      text = `${joke.setup} ${joke.delivery}`;
    }else{
      text = String(joke?.joke ?? joke?.message ?? joke);
    }
  }catch(e){
    text = String(e);
  }
  console.log(text);
  return ContentService.createTextOutput(text);
}
