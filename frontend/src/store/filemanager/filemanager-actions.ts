import { File } from "../../types/File";

export enum ActionType {
  SELECT
}

export const selectFile = (file: File) => {
  return {
    type: ActionType.SELECT,
    payload: {
      file
    }
  };
};

export type Action = ReturnType<typeof selectFile>;

