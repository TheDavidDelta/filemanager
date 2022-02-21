const fetchStatusErrorHandler = (res: Response) => {
    if (!res.ok)
        throw new Error(
            res.statusText
                ? `${res.status} - ${res.statusText}`
                : res.status.toString()
        );
    return res.json();
};

export default fetchStatusErrorHandler;
