declare global {
    interface Window {
        structuredClone: <T>(value: T) => T
    }
}

type Extendable = {
    id: number,
    parentId?: number,
    children?: Extendable[]
};

const transform = <T extends Extendable>(list: T[]) => ({
    into: {
        get tree() {
            const safeList = "structuredClone" in window
                ? window.structuredClone(list)
                : list;

            const treeList = safeList.map(item => {
                const parent = item.parentId && safeList.find(searchItem => searchItem.id === item.parentId);
                if (!parent)
                    return item;

                parent.children ??= [];
                parent.children.push(item);
            });

            return treeList.filter(Boolean) as T[];
        }
    }
});

export default transform;
