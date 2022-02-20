import { File } from "../types/File";
import FileIcon from '../assets/images/file.svg';
import FolderIcon from '../assets/images/folder.svg';
import styles from "./FileExplorer.module.css";

type Props = {
  files: File[];
};

const FileExplorer = ({ files }: Props) => {
  return (
    <div className={styles.FileExplorer}>
      {files.length === 0 &&
        <div className={styles.FileExplorerEmpty}>
          The root folder is empty.
        </div>
      }
      {files.map(file => (
        <div className={styles.FileExplorerItem} key={file.id}>
          {file.kind === 'folder' &&
            <FolderIcon className={styles.FileExplorerIcon} />
          }
          {file.kind !== 'folder' &&
            <FileIcon className={styles.FileExplorerIcon} />
          }
          {file.name}
          <div className={styles.FileExplorerSize}>
            {file.size}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FileExplorer;
