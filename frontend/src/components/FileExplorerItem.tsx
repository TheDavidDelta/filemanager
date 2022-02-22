import FileIcon from '../assets/images/file.svg';
import FolderIcon from '../assets/images/folder.svg';
import styles from "./FileExplorerItem.module.css";
import { File } from "../types/File";
import { selectFile } from "../store/filemanager";
import { useAppSelector } from "../store";
import { useDispatch } from "react-redux";
import parseSize from "../utils/parseSize";
import { useState } from "react";

type Props = {
    file: File;
    depth?: number;
};

const FileExplorerItem = ({ file, depth = 0 }: Props) => {
    const dispatch = useDispatch();
    const { selectedFile } = useAppSelector(store => store.filemanager);
    const [isOpen, setIsOpen] = useState(true);

    const isRegFile = file.kind === "file";
    const isSelected = file.id === selectedFile?.id;

    const handleItemEvent = () => {
        isRegFile
            ? !isSelected && dispatch(selectFile(file))
            : file.children && setIsOpen(current => !current);
    };

    return (
        <div>
            <div
                className={`${styles.content} ${isSelected && styles.selected}`}
                style={{ paddingLeft: `${18 + depth * 8}px` }}
                role="button"
                tabIndex={0}
                onClick={handleItemEvent}
                onKeyDown={ev => ev.key === "Enter" && handleItemEvent()}
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
                {!isRegFile && isOpen && file.children?.map(child => (
                    <FileExplorerItem key={child.id} file={child} depth={depth + 1} />
                ))}
            </div>
        </div>
    );
};

export default FileExplorerItem;
