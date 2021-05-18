const WAVES_CONFIG = [
  {
    getHeight: (h: number) => {
      return h - 35;
    },
    duration: 7000,
    depth: 4,
    radius: 30,
  },

  {
    getHeight: (h: number) => {
      return h - 65;
    },
    duration: 7400,
    depth: 3,
    radius: 30,
  },

  {
    getHeight: (h: number) => {
      return h - 95;
    },
    duration: 7500,
    depth: 2,
    radius: 30,
  },

  {
    getHeight: (h: number) => {
      return h - 125;
    },
    duration: 7600,
    depth: 1,
    radius: 25,
  },

  {
    getHeight: (h: number) => {
      return h - 155;
    },
    duration: 8000,
    depth: 0,
    radius: 25,
  },
];

export default WAVES_CONFIG;
