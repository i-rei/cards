phina.globalize();

const ASSETS = {
  image: {
    'heart01' : 'images/heart01.png',
    'heart02' : 'images/heart02.png',
    'heart03' : 'images/heart03.png',
    'heart04' : 'images/heart04.png',
    'heart05' : 'images/heart05.png',
    'heart06' : 'images/heart06.png',
    'heart07' : 'images/heart07.png',
    'heart08' : 'images/heart08.png',
    'heart09' : 'images/heart09.png',
    'heart10' : 'images/heart10.png',
  },
};

phina.define("MainScene", {
  superClass: "DisplayScene",
  init() {
    this.superInit();
    this.backgroundColor = "white";

    Sprite('heart01').addChildTo(this).setPosition(320, 480);
  },
  update() {
  },
});


phina.main(() => {
  const app = GameApp({
    startLabel: "main",
    assets: ASSETS,
  });
  app.run();
});
