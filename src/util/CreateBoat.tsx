export default function CreateBoat(
  scene: Phaser.Scene,
  graphics: Phaser.GameObjects.Graphics,
  w: number,
  h: number
) {
  const container = scene.add.container(0, 0);
  const path = new Phaser.Curves.Path(w / 2, h).circleTo(55);
  path.draw(graphics, 128);

  const boat = scene.add
    .follower(path, -300, h - 275, 'boat')
    .setDepth(3)
    .setAngle(-5);

  // Physics
  scene.physics.add.existing(boat);

  boat.startFollow({
    delay: 0,
    duration: 8000,
    ease: 'ease-in-out',
    loop: -1,
  });

  container.add(boat);
  scene.physics.add.existing(container);

  return container;
}
