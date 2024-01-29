import { useRef } from "react";

import { SnackbarProvider as NotistackProvider } from "notistack";
import { closeIcon } from "../page-icons/page-icons";

export default function SnackbarProvider({ children }) {
    const notistackRef = useRef(null);

    const onClose = (key) => () => {
        notistackRef.current.closeSnackbar(key);
    };

    return (
        <>
            <NotistackProvider
                ref={notistackRef}
                dense
                maxSnack={5}
                preventDuplicate
                autoHideDuration={3000}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                action={(key) => (
                    <button onClick={onClose(key)} sx={{ p: 0.5 }}>
                        <SVG Icon={closeIcon} />
                    </button>
                )}
            >
                {children}
            </NotistackProvider>
        </>
    );
}

function SVG({ Icon }) {
    return <Icon />;
}
