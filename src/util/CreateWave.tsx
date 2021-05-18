import { IWaveConfig } from '../../types/types';

export default function CreateWave(
  scene: Phaser.Scene,
  wave: IWaveConfig,
  width: number,
  height: number,
  graphics: Phaser.GameObjects.Graphics
) {
  // A circle curve starts at angle 0, the "3 o'clock" position.
  // Make a circle path of radius 200 starting from (600, 200)
  const path = new Phaser.Curves.Path(width / 2, height).circleTo(wave.radius);
  path.draw(graphics, 128);

  const block = scene.add
    .follower(path, width / 2, wave.getHeight(height), 'waves_0')
    .setDepth(wave.depth);

  // Physics
  scene.physics.add.existing(block);

  block.startFollow({
    delay: 0,
    duration: wave.duration,
    ease: 'ease-in-out',
    loop: -1,
    onStart() {
      path.getPoint(0, block.pathVector);
    },
    onUpdate() {},
    onLoop() {},
    onComplete() {},
  });

  return block;
}
