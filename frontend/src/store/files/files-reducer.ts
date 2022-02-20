import { File } from "../../types/File";
import { Action, ActionType } from "./files-actions";

export type State = {
  loaded: boolean,
  list: File[]
};

export const initialState: State = {
  loaded: false,
  list: []
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.RECEIVE:
      return {
        ...state,
        loaded: true,
        list: action.payload.files ?? []
      };
    default:
      return state;
  }
};
