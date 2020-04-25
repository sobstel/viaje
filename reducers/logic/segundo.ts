import type { Logic, LogicState } from "../logic.d";

export const segundoLogic: Logic = {
  init(): LogicState {
    return [];
  },

  apply(_values: LogicState, _index: number): LogicState {
    return [];
  },

  solved(_values: LogicState): boolean {
    return false;
  },
};
