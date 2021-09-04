phina.globalize();

const ASSETS = {
  image: {
    '1' : 'images/heart01.png',
    '2' : 'images/heart02.png',
    '3' : 'images/heart03.png',
    '4' : 'images/heart04.png',
    '5' : 'images/heart05.png',
    '6' : 'images/heart06.png',
    '7' : 'images/heart07.png',
    '8' : 'images/heart08.png',
    '9' : 'images/heart09.png',
    '10' : 'images/heart10.png',
  },
};

let cardNum1 = 0;
let cardNum2 = 0;
let cardNum3 = 0;
let cardNum4 = 0;

phina.define("MainScene", {
  superClass: "DisplayScene",
  init() {
    this.superInit();
    this.backgroundColor = "skyblue";

    //1から10の乱数を取得
    let randnum = 1 + Math.floor(Math.random() * 10);

    const card1 = Sprite(randnum.toString())
      .addChildTo(this)
      .setPosition(this.gridX.span(4), this.gridY.span(8))
      .setScale(0.5,0.5);
    cardNum1 = randnum;

    randnum = 1 + Math.floor(Math.random() * 10);

    const card2 = Sprite(randnum.toString())
      .addChildTo(this)
      .setPosition(this.gridX.span(12), this.gridY.span(8))
      .setScale(0.5,0.5);
    cardNum2 = randnum;
  },
  update() {
  },
});


phina.main(() => {
  const app = GameApp({
    startLabel: "title",
    assets: ASSETS,
  });
  app.run();
});
