import { File } from "../../types/File";
import { Action, ActionType } from "./filemanager-actions";

export type State = {
  selectedFile?: File
};

export const initialState: State = {};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SELECT: {
      return {
        ...state,
        selectedFile: action.payload.file
      }
    }
    default: {
      return state;
    }
  }
};
