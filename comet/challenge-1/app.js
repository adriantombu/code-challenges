const tests = require('./tests.json')
const results = []

for (const test of tests) {
  const start = Date.now()
  const input = test.input

  let r=[],m=[],[w,h]=input.grid,t=input.text.replace(/[ .,&@\/\]\[#!?$%\^&\*;:{}=\-_’'"`'~()]/g,"").padEnd(w*h,"X");for(let x=0;x<h;x++)m[x]=t.slice(x*w,x*w+w).split("");let d="d",e=0,xm=ym=0,xx=h-1,yx=w-1,x=xm,y=yx;for(;!e;){switch(d){case"l":for(x=xx,y=yx,d="u",xx--;y>=ym;y--)r.push(m[x][y]);break;case"r":for(x=xm,y=ym,d="d",xm++;y<=yx;y++)r.push(m[x][y]);break;case"d":for(x=xm,y=yx,d="l",yx--;x<=xx;x++)r.push(m[x][y]);break;case"u":for(x=xx,y=ym,d="r",ym++;x>=xm;x--)r.push(m[x][y])}(xm>xx||ym>yx)&&(e=1)}output=r.join("");

  const end = Date.now()

  results.push({
    time: end - start,
    correct: output === test.expectedOutput
  })
}

console.log(results)
