export default {
  async fetch(request){
    const response = await fetch(`https://script.google.com/macros/s/AKfycbxNUKrGHDrD0h7korRgX-XB4qzHcOcqMHmP1i8Qd3QrgTRdRRkICEYjUQESgn_03WCNKw/exec?${Date.now()}`);
    const text = await response.text();
    return new Response(text);
  }
}
