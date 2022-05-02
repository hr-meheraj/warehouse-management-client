import { useRef, useEffect } from 'react'

function useDynamicTitle(title, prevailOnUnmount = false) {
    const defaultTitle = useRef(document.title);

    useEffect(() => {
        document.title = title;
    }, [title]);

    useEffect(() => () => {
        if (!prevailOnUnmount) {
            document.title = defaultTitle.current;
        }
    }, [defaultTitle, prevailOnUnmount])
}

export default useDynamicTitle