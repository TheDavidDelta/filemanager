type GenericFile = {
    id: number,
    name: string,
    size: number,
    parentId?: number
};

type RegularFile = GenericFile & {
    kind: "file",
    content: string
};

type Directory = GenericFile & {
    kind: "folder",
    content: undefined
}

export type File = RegularFile | Directory;
