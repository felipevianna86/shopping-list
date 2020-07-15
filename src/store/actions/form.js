export const Types = {
  START_UPDATE: 'START_UPDATE',
  FINISH_UPDATE: 'FINISH_UPDATE',
};

export const Creators = {
  startUpdate: (product) => ({
    type: Types.START_UPDATE,
    product,
  }),
  finishUpdate: () => ({
    type: Types.FINISH_UPDATE,
  }),
};
