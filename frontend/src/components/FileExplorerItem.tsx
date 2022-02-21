import FileIcon from '../assets/images/file.svg';
import FolderIcon from '../assets/images/folder.svg';
import styles from "./FileExplorerItem.module.css";
import { File } from "../types/File";
import { selectFile } from "../store/filemanager";
import { useAppSelector } from "../store";
import { useDispatch } from "react-redux";
import parseSize from "../utils/parseSize";

type Props = {
    file: File;
    depth?: number;
};

const FileExplorerItem = ({ file, depth = 0 }: Props) => {
    const dispatch = useDispatch();
    const { selectedFile } = useAppSelector(store => store.filemanager);

    const isRegFile = file.kind === "file";
    const isSelected = file.id === selectedFile?.id;

    const onSelectFile = () => {
        isRegFile && !isSelected && dispatch(selectFile(file));
    };

    return (
        <div>
            <div
                className={`${styles.content} ${isSelected && styles.selected} ${isRegFile && styles.regfile}`}
                style={{ paddingLeft: `${18 + depth * 8}px` }}
                role={isRegFile ? "button" : ""}
                tabIndex={isRegFile ? 0 : undefined}
                onClick={onSelectFile}
                onKeyDown={ev => ev.key === "Enter" && onSelectFile()}
            >
                {isRegFile ? (
                    <FileIcon className={styles.icon} />
                ) : (
                    <FolderIcon className={styles.icon} />
                )}

                {file.name}

                <div className={styles.size}>
                    {isRegFile && parseSize(file.size)}
                </div>
            </div>

            <div>
                {!isRegFile && file.children?.map(child => (
                    <FileExplorerItem key={child.id} file={child} depth={depth + 1} />
                ))}
            </div>
        </div>
    );
};

export default FileExplorerItem;
