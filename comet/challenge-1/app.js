const tests = require('./tests.json')
const results = []

for (const test of tests) {
  const start = Date.now()
  const input = test.input

  let r=[],m=[],g=input.grid,t=input.text.replace(/[ .,&@\/\]\[#!?$%\^&\*;:{}=\-_’'"`'~()]/g,"").padEnd(g[0]*g[1],"X");for(let x=0;x<g[1];x++)m[x]=t.slice(x*g[0],x*g[0]+g[0]).split("");let d="d",e=0,xm=ym=0,xx=g[1]-1,yx=g[0]-1,x=xm,y=yx;for(;!e;){switch(d){case"l":for(x=xx,y=yx,d="u",xx--;y>=ym;y--)r.push(m[x][y]);break;case"r":for(x=xm,y=ym,d="d",xm++;y<=yx;y++)r.push(m[x][y]);break;case"d":for(x=xm,y=yx,d="l",yx--;x<=xx;x++)r.push(m[x][y]);break;case"u":for(x=xx,y=ym,d="r",ym++;x>=xm;x--)r.push(m[x][y])}(xm>xx||ym>yx)&&(e=1)}output=r.join("")

  const end = Date.now()

  results.push({
    time: end - start,
    correct: output === test.expectedOutput
  })
}

console.log(results)
