  let r = []
  let m = []
  let [w, h] = input.grid
  let t = input.text.replace(/[ .,&@\/\]\[#!?$%\^&\*;:{}=\-_’'"`'~()]/g,"").padEnd(w * h, 'X')
  for(let i=0; i< h; i++) {
    m[i] = t.slice(i * w, i * w + w).split('')
  }

  let d = 'd'
  let e = 0

  let xm = ym = 0
  let xx = h - 1
  let yx = w - 1

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
