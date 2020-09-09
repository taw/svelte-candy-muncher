export const foods = {
  "🍏": -80,
  "🍎": -690,
  "🍐": -376,
  "🍊": -556,
  "🍋": -602,
  "🍌": -709,
  "🍉": -335,
  "🍇": -956,
  "🍓": -872,
  "🍈": -164,
  "🍒": -924,
  "🍑": -928,
  "🥭": -740,
  "🍍": -411,
  "🥥": -382,
  "🥝": -937,
  "🍅": -68,
  "🥑": -1000,
  "🌶": -123,
  "🥒": -34,
  "🥬": -289,
  "🥦": -439,
  "🌽": -209,
  "🥕": -731,
  "🥗": -899,
  "🥔": -1,
  "🍠": -2,
  "🥞": 474,
  "🍧": 682,
  "🍨": 573,
  "🍦": 516,
  "🍰": 475,
  "🎂": 993,
  "🧁": 668,
  "🥧": 205,
  "🍮": 993,
  "🍭": 428,
  "🍬": 296,
  "🍫": 811,
  "🍿": 721,
  "🍩": 322,
  "🍪": 905,
  "🥠": 431,
  "🥮": 565,
};

export function randomFood() {
  let foodKeys = Object.keys(foods);
  return foodKeys[Math.floor(Math.random() * foodKeys.length)];
}
