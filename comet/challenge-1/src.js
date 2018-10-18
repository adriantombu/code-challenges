  let r = []
  let m = []
  let g = input.grid
  let t = input.text.replace(/[ .,&@\/\]\[#!?$%\^&\*;:{}=\-_’'"`'~()]/g,"").padEnd(g[0] * g[1], 'X')
  for(let i=0; i< g[1]; i++) {
    m[i] = t.slice(i * g[0], i * g[0] + g[0]).split('')
  }

  let d = 'd'
  let e = 0

  let xm = ym = 0
  let xx = g[1] - 1
  let yx = g[0] - 1

  let x = xm
  let y = yx

  while (!e) {
    switch (d) {
      case 'l':
        x = xx
        y = yx
        d = 'u'
        xx--

        for (y; y >= ym; y--) {
          r.push(m[x][y])
        }
        break

      case 'r':
        x = xm
        y = ym
        d = 'd'
        xm++

        for (y; y <= yx; y++) {
          r.push(m[x][y])
        }
        break

      case 'd':
        x = xm
        y = yx
        d = 'l'
        yx--

        for (x; x <= xx; x++) {
          r.push(m[x][y])
        }
        break

      case 'u':
        x = xx
        y = ym
        d = 'r'
        ym++

        for (x; x >= xm; x--) {
          r.push(m[x][y])
        }
        break
    }

    if (xm > xx || ym > yx) {
      e = 1
    }
  }

  output = r.join('')
