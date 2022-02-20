import { Dispatch } from "redux";
import { File } from "../../types/File";

export enum ActionType {
  RECEIVE
}

export const receiveFiles = (files: File[]) => {
  return {
    type: ActionType.RECEIVE,
    payload: {
      files
    }
  };
};

export const refreshFiles = () => {
  return async (dispatch: Dispatch) => {
    dispatch(receiveFiles([]));
  };
};

export type Action = ReturnType<typeof receiveFiles>;
