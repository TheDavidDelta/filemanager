import { File } from "../types/File";
import styles from "./FileContent.module.css";

type Props = {
    file?: File;
};

const FileContent = ({ file }: Props) => (
    <div className={styles.root} data-testid="content">
        <pre>
            {file?.kind === "file" && window.atob(file.content)}
        </pre>
    </div>
);

export default FileContent;
