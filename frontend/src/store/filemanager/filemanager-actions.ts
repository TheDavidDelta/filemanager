import { File } from "../../types/File";

export enum ActionType {
  SELECT = "FILEMANAGER_SELECT"
}

export const selectFile = (selectedFile: File) => {
  return {
    type: ActionType.SELECT as const,
    payload: {
      selectedFile
    }
  };
};

export type Action = ReturnType<typeof selectFile>;

