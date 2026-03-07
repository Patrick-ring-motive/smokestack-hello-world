export default {
  async fetch(request){
    let text;
    try{
      const response = await fetch(`https://script.google.com/macros/s/AKfycbxNUKrGHDrD0h7korRgX-XB4qzHcOcqMHmP1i8Qd3QrgTRdRRkICEYjUQESgn_03WCNKw/exec?${Date.now()}`);
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
