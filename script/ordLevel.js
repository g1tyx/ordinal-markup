const b = () => {return game.base}
let ordThresh = {
  1: () => 0,
  2: () => b(), // hi patcail sooooo uhhhh we gotta implement the in-betweens but then we have to define them ourselves
  3: () => b()*2, // Psi Level was originally made to not have fractional
  4: () => b()*3, //
  5: () => b()*4, //
  6: () => b()*5, //
  7: () => b()*6,// big brain get psi function at the bottom
  8: () => b()**2,
  9: () => b()**2*2, // https://discord.com/channels/666033278553292800/674704776990294016/719620131226910811 for 100-110
  10: () => b()**3, // https://discord.com/channels/666033278553292800/674704776990294016/719620951238770839 for 110-120
  11: () => b()**4, // https://discord.com/channels/666033278553292800/674704776990294016/719622232468619405 for 120-150
  12: () => b()**5,
  13: () => b()**b(),
  14: () => b()**b()*2,
  15: () => b()**(b()+1),
  16: () => b()**(b()+1)*2,
  17: () => b()**(b()+2),
  18: () => b()**(b()+3),
  19: () => b()**(b()+4),
  20: () => b()**(b()*2),
  21: () => b()**(b()*2+1),
  22: () => b()**(b()*2+2),
  23: () => b()**(b()*3),
  24: () => b()**(b()*3+2),
  25: () => b()**(b()*4),
  26: () => b()**(b()**2),
  27: () => b()**(b()**2+1),
  28: () => b()**(b()**2+2),
  29: () => b()**(b()**2+3),
  30: () => b()**(b()**2+b()),
  31: () => b()**(b()**2+b()+1),
  32: () => b()**(b()**2+b()+2),
  33: () => b()**(b()**2+b()+3),
  34: () => b()**(b()**2+b()*2),
  35: () => b()**(b()**2+b()*2+1),
  36: () => b()**(b()**2+b()*2+2),
  37: () => b()**(b()**2+b()*3),
  38: () => b()**(b()**2*2),
  39: () => b()**(b()**2*2+1),
  40: () => b()**(b()**2*2+2),
  41: () => b()**(b()**2*2+b()),
  42: () => b()**(b()**2*2+b()+1),
  43: () => b()**(b()**2*2+b()+2),
  44: () => b()**(b()**2*2+b()*2),
  45: () => b()**(b()**2*2+b()*2+1),
  46: () => b()**(b()**2*2+b()*2+2),
  47: () => b()**(b()**2*2+b()*3),
  48: () => b()**(b()**2*3),
  49: () => b()**(b()**3),
  50: () => b()**(b()**b()),
  51: () => 4e270,
  52: () => 6e270,
  53: () => 8e270,
  54: () => 1e271,
  55: () => (3 * 4) * 1e270,
  56: () => (3 * 6) * 1e270,
  57: () => (3 * 8) * 1e270,
  58: () => (3 * 10) * 1e270,
  59: () => (3**2 * 4) * 1e270,
  60: () => (3**2 * 8) * 1e270,
  61: () => (3**3 * 4) * 1e270,
  62: () => (3**3 * 8) * 1e270,
  63: () => (3**4 * 4) * 1e270,
  64: () => (3**4 * 8) * 1e270,
  65: () => (3**5 * 4) * 1e270,
  66: () => (3**5 * 8) * 1e270,
  67: () => (3**6 * 4) * 1e270,
  68: () => (3**6 * 8) * 1e270,
  69: () => (3**7 * 4) * 1e270,
  70: () => (3**7 * 8) * 1e270,
  71: () => (3**8 * 4) * 1e270,
  72: () => (3**8 * 8) * 1e270,
  73: () => (3**9 * 4) * 1e270,
  74: () => (3**9 * 8) * 1e270,
  75: () => (3**10 * 4) * 1e270,
  76: () => (3**10 * 8) * 1e270,
  77: () => (3**11 * 4) * 1e270,
  78: () => (3**11 * 8) * 1e270,
  79: () => (3**12 * 4) * 1e270,
  80: () => (3**12 * 8) * 1e270,
  81: () => (3**13 * 4) * 1e270,
  82: () => (3**13 * 8) * 1e270,
  83: () => (3**14 * 4) * 1e270,
  84: () => (3**14 * 8) * 1e270,
  85: () => (3**15 * 4) * 1e270,
  86: () => (3**15 * 8) * 1e270,
  87: () => (3**16 * 4) * 1e270,
  88: () => (3**16 * 8) * 1e270,
  89: () => (3**17 * 4) * 1e270,
  90: () => (3**17 * 8) * 1e270,
  91: () => (3**18 * 4) * 1e270,
  92: () => (3**18 * 8) * 1e270,
  93: () => (3**19 * 4) * 1e270,
  94: () => (3**19 * 8) * 1e270,
  95: () => (3**20 * 4) * 1e270,
  96: () => (3**20 * 8) * 1e270,
  97: () => (3**21 * 4) * 1e270,
  98: () => (3**21 * 8) * 1e270,
  99: () => (3**22 * 4) * 1e270,
  100: () => (3**22 * 8) * 1e270,
  101: () => (3**23 * 4) * 1e270,
  102: () => (3**23 * 8) * 1e270,
  103: () => (3**24 * 4) * 1e270,
  104: () => (3**24 * 8) * 1e270,
  105: () => (3**25 * 4) * 1e270,
  106: () => (3**25 * 8) * 1e270,
  107: () => (3**26 * 4) * 1e270,
  108: () => (3**26 * 8) * 1e270,
  109: () => (3**27 * 4) * 1e270,
  110: () => (3**27 * 8) * 1e270,
  111: () => (3**28 * 4) * 1e270,
  112: () => (3**28 * 8) * 1e270,
  113: () => (3**29 * 4) * 1e270,
  114: () => (3**29 * 8) * 1e270,
  115: () => (3**30 * 4) * 1e270,
  116: () => (3**30 * 8) * 1e270,
  117: () => (3**31 * 4) * 1e270,
  118: () => (3**31 * 8) * 1e270,
  119: () => (3**32 * 4) * 1e270,
  120: () => (3**32 * 8) * 1e270,
  121: () => (3**33 * 4) * 1e270,
  122: () => (3**33 * 8) * 1e270,
  123: () => (3**34 * 4) * 1e270,
  124: () => (3**34 * 8) * 1e270,
  125: () => (3**35 * 4) * 1e270,
  126: () => (3**35 * 8) * 1e270,
  127: () => (3**36 * 4) * 1e270,
  128: () => (3**36 * 8) * 1e270,
  129: () => (3**37 * 4) * 1e270,
  130: () => (3**37 * 8) * 1e270,
  131: () => (3**38 * 4) * 1e270,
  132: () => (3**38 * 8) * 1e270,
  133: () => (3**39 * 4) * 1e270,
  134: () => (3**39 * 8) * 1e270,
  135: () => BHO,
  136: () => BHO*2,
  137: () => BHO*3,
  138: () => BHO*4,
  139: () => BHO*5,
  140: () => BHO*7,
  141: () => BHO*9,
  142: () => BHO*12,
  143: () => BHO*16,
  144: () => BHO*22,
  145: () => BHO*30,
  146: () => BHO*41,
  147: () => BHO*52,
  148: () => BHO*67,
  149: () => BHO*86,
  150: () => BHO*113,
  151: () => BHO*149,
  152: () => BHO*196,
  153: () => BHO*259,
  154: () => BHO*342,
  155: () => Infinity
}
//EN(3).pow(41*3**27)

let getPsi = ord => {
  if (game.incrementyverse==1) {
    let level = 154
    if (game.bigBrainOrd.gte(ordThreshData["buchholz e(W2+1)"])) level=155
    if (game.bigBrainOrd.gte(Infinity)) level=156
    return level
  }
  let temp = Object.keys(ordThresh)
  temp.reverse()
  for(const i in temp) {
    if((ordThresh[temp[i]] >= 1e270 ? Math.round(ord/1e270)*1e270 : ord) >= (ordThresh[temp[i]])()) return temp[i]
  }
}

let getPsiReq = level => {
  if (level >= 155) {
    return [ordThreshData["buchholz e(W2+1)"],EN(Infinity)][level-155]
  }
  let k
  for (k in ordThresh) {
    if (level<=k) {
      return ordThresh[k]
    }
  }
  return 0
}

