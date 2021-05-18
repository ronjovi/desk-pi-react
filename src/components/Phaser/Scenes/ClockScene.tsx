import Phaser from 'phaser';
import WAVES_CONFIG from '../../../constants/waves';
import CreateWave from '../../../util/CreateWave';
import CreateBoat from '../../../util/CreateBoat';
import Text from '../Objects/Text';
import GetTimeStr from '../../../util/GetTimeStr';
import GetDateStr from '../../../util/GetDateStr';

export default class ClockScene extends Phaser.Scene {
  public boat: Phaser.GameObjects.Container | undefined;

  public waves: Phaser.GameObjects.PathFollower[] = [];

  public graphics: Phaser.GameObjects.Graphics | undefined;

  public dateText: Phaser.GameObjects.Text | undefined;

  public timeText: Phaser.GameObjects.Text | undefined;

  public degree = 0;

  public increment: number = Math.PI / 36;

  constructor() {
    super('clockScene');
  }

  preload() {
    this.load.image('background', '../images/sky-background.png');
    this.load.image('waves_0', '../images/waves_0.png');
    this.load.image('boat', '../images/boat.png');
    this.load.webfont(
      {
        font: 'Share Tech Mono',
        variants: ['400'],
      },
      'https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap'
    );
  }

  create() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.graphics = this.add.graphics();

    this.graphics.fillGradientStyle(0x201b46, 0x201b46, 0x0073a3, 0x0073a3, 1);
    this.graphics.fillRect(0, 0, width, height);

    this.createWaves(width, height);
    this.createShip(width, height);
    this.createDate();
    this.createTime();
  }

  update() {
    const w = window.innerWidth;

    this.updateShip(w);

    this.dateText?.setText(GetDateStr());
    this.timeText?.setText(GetTimeStr());
  }

  createDate() {
    this.dateText = new Text(
      this,
      0,
      60,
      '0000-00-00 MON',
      '46px',
      '400',
      '#daf6ff'
    );
  }

  createTime() {
    this.timeText = new Text(
      this,
      0,
      60,
      '00:00:00',
      '100px',
      '400',
      '#daf6ff'
    );
  }

  createShip(w: number, h: number) {
    if (this.graphics) this.boat = CreateBoat(this, this.graphics, w, h);
  }

  updateShip(w: number) {
    if (this.boat) {
      if (this.boat.x > w) {
        this.boat.x = -600;
      } else {
        this.boat.x += 0.3;
      }
    }
  }

  /**
   * Creates waves based on configuration
   * @param width
   * @param height
   */
  createWaves(width: number, height: number) {
    WAVES_CONFIG.forEach((wave) => {
      if (this.graphics)
        this.waves.push(CreateWave(this, wave, width, height, this.graphics));
    });
  }
}
