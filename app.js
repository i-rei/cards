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

let cardNum = [];
let score = 0;

phina.define("MainScene", {
  superClass: "DisplayScene",
  init() {
    this.superInit();
    this.backgroundColor = "skyblue";

    (2).times((i) => {
      //トランプの数字を決定
      let randnum = 1 + Math.floor(Math.random() * 10);

      let card = Sprite(randnum.toString())
        .addChildTo(this)
        .setScale(0.5,0.5);

      card.index = randnum;
      //１枚目と２枚目のトランプで座標の位置を変える
      if (i === 0) {
        card.x = this.gridX.span(4);
      } else {
        card.x = this.gridX.span(12);
      }
      card.y = this.gridY.span(8);

      cardNum.push(randnum);

      card.setInteractive(true);
      card.on('pointstart' ,() => { 
        console.log(card.index);
        if (Math.max.apply(null, cardNum) === card.index) {
          score ++;
        }
        console.log(score);
      });

    });
    console.log(cardNum);
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
