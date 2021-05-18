export default class Text extends Phaser.GameObjects.Text {
  public y = 0;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    text: string,
    size: string,
    style: string,
    color: string
  ) {
    super(scene, x, y, text, {
      fontFamily: 'Share Tech Mono',
      fontSize: size,
      fontStyle: style,
      color,
    });

    this.y = y;
    // ...
    scene.add.existing(this);

    this.setShadow(-2, 2, 'rgba(10, 175, 230,0.5)', 3);

    this.updatePosition();
  }

  updatePosition() {
    const w = window.innerWidth;

    this.setPosition(w / 2 - this.width / 2, this.y);
  }
}
