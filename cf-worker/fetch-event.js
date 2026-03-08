export default {
  async fetch(request){
    if(request.url.includes('frame-fetch')){
      return fetch('https://patrick-ring-motive.github.io/smokestack-hello-world/pages/frame-fetch.html');
    }
    let text;
    try{
      const gasURL = new URL(`https://script.google.com/macros/s/AKfycbx01Tx9Bv0DgBYA6jH6kpDQz1HOi3qGdiJzOAM4_IqWntaFK-li69HrUqrbc8R7LmSsgw/exec`);
      gasURL.searchParams.set('bust',Date.now());
      gasURL.searchParams.set('origin',new URL(request.url).origin);
      const response = await fetch(String(gasURL));
      text = await response.text();
    }catch(e){
      text = String(e);
    }
    if(request.url.endsWith('jsonp')){
      text = 'export const payload = `'+text.replaceAll('`',`'`)+'`';
    }
    return new Response(text,{headers:{"Access-Control-Allow-Origin":"*","content-type":"text/javascript"}});
  }
}
