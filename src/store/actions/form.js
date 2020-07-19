export const Types = {
  START_UPDATE: 'START_UPDATE',
  FINISH_UPDATE: 'FINISH_UPDATE',
};

export const Creators = {
  startUpdate: (list, product) => ({
    type: Types.START_UPDATE,
    product,
    list,
  }),
  finishUpdate: () => ({
    type: Types.FINISH_UPDATE,
  }),
};
