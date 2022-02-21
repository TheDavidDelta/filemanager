import FileIcon from '../assets/images/file.svg';
import FolderIcon from '../assets/images/folder.svg';
import styles from "./FileExplorerItem.module.css";
import { File } from "../types/File";

type Props = {
  file: File;
};

const FileExplorer = ({ file }: Props) => {
  return (
    <div key={file.id} className={styles.FileExplorerItem}>
      {file.kind === 'folder' ? (
        <FolderIcon className={styles.FileExplorerIcon} />
      ) : (
        <FileIcon className={styles.FileExplorerIcon} />
      )}
      {file.name}
      <div className={styles.FileExplorerSize}>
        {file.size}
      </div>
      <div>
        {file.kind === "folder" && file.children?.map(child => (
          <FileExplorer key={child.id} file={child} />
        ))}
      </div>
    </div>
  );
};

export default FileExplorer;
