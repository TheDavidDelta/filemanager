import { File } from "../../types/File";
import { Action, ActionType } from "./filemanager-actions";

export type State = {
  selectedFile?: File
};

const initialState: State = {};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SELECT:
      const { selectedFile } = action.payload;
      return {
        ...state,
        selectedFile
      };
    default:
      return state;
  }
};
