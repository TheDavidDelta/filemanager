import { File } from "../types/File";
import styles from "./FileContent.module.css";

type Props = {
    file?: File;
};

const FileContent = ({ file }: Props) => (
    <div className={styles.root}>
        <pre>
            {file?.kind === "file" && window.atob(file.content)}
        </pre>
    </div>
);

export default FileContent;
