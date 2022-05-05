import { useCallback } from "react";


export const useAdapter = (props?: any) => {
    const getUserConfirmation = useCallback(async (message, callback) => {
        // if (typeof globalThis.handleRouteChangeConfirmation === 'function') {
        //     return globalThis.handleRouteChangeConfirmation(message, callback);
        // }

        return callback(globalThis.confirm(message));
    }, []);
    
    const routerProps = { getUserConfirmation };

    return {
        routerProps
    };
}