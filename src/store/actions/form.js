export const Types = {
  START_UPDATE: 'START_UPDATE',
  FINISH_UPDATE: 'FINISH_UPDATE',
  START_ADD: 'START_ADD',
  FINISH_ADD: 'FINISH_ADD',
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
  startAdd: (list) => ({
    type: Types.START_ADD,
    list,
  }),
  finishAdd: () => ({
    type: Types.FINISH_ADD,
  }),
};
