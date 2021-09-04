phina.globalize();

phina.define("MainScene", {
  superClass: "DisplayScene",
  init() {
    this.superInit();
    this.backgroundColor = "white";
  },
  update() {
  },
});


phina.main(() => {
  const app = GameApp({
    startLabel: "main",
  });
  app.run();
});
