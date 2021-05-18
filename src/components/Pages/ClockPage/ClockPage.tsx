import React from 'react';
import Phaser from 'phaser';
import { IonPhaser } from '@ion-phaser/react';
import { WebFontLoaderPlugin } from 'phaser3-webfont-loader';
import ClockScene from '../../Phaser/Scenes/ClockScene';

const game = {
  width: '100%',
  height: '100%',
  backgroundColor: 'transparent',
  physics: {
    default: 'arcade',
    arcade: {
      fps: 60,
    },
  },
  arcade: { debug: true },
  type: Phaser.AUTO,
  scene: [ClockScene],
  plugins: {
    global: [
      {
        key: 'WebFontLoader',
        plugin: WebFontLoaderPlugin,
        start: true,
      },
    ],
  },
};

const ClockPage = () => {
  return (
    <div className="GameContainer">
      <IonPhaser game={game} initialize />
    </div>
  );
};

export default ClockPage;
