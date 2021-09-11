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
let randnum;

function avoidSameNumber() {
  if (randnum == 10) {
    randnum--;
  } else {
    randnum++;
  }
}

function CreateCards(hitCardIndex) {
  randnum = 1 + Math.floor (Math.random() * 10);
  //重複防止
  if (randnum == cardNum[0] || randnum == cardNum[1]) {
    avoidSameNumber();
  }

  let card = Sprite(randnum.toString())
    .addChildTo(this)
    .setScale(0.5,0.5);

  card.index = randnum;
}

phina.define("MainScene", {
  superClass: "DisplayScene",
  init() {
    this.superInit();
    this.backgroundColor = "skyblue";

    (2).times((i) => {
      //トランプの数字を決定
      randnum = 1 + Math.floor(Math.random() * 10);
      //重複防止
      if (randnum == cardNum[0]) {
        avoidSameNumber();
      }

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
          CreateCards(card.index);
        }
        console.log(score);
      });

    });
    console.log(cardNum);

  },
});


phina.main(() => {
  const app = GameApp({
    startLabel: "main",
    assets: ASSETS,
  });
  app.run();
});
