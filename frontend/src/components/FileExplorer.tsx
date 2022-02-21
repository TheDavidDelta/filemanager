import styles from "./FileExplorer.module.css";
import { FetchingState, State } from "../store/files";
import FileExplorerItem from "./FileExplorerItem";

type Props = {
  filesState: State;
};

const FileExplorer = ({ filesState }: Props) => {
  return (
    <div className={styles.FileExplorer}>
      {filesState.loading === FetchingState.NONE ? (
        <div className={styles.FileExplorerEmpty}>
          The root folder is empty.
        </div>
      ) : filesState.loading === FetchingState.LOADING ? (
        <div className={styles.FileExplorerEmpty}>
          Loading...
        </div>
      ) : filesState.loading === FetchingState.ERROR ? (
        <div className={styles.FileExplorerEmpty}>
          {filesState.errorMsg}
        </div>
      ) : filesState.loading === FetchingState.SUCCESS ? (
        filesState.list.map(file => (
          <FileExplorerItem key={file.id} file={file} />
        ))
      ) : null}
    </div>
  );
};

export default FileExplorer;
