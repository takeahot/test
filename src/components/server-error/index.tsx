import { Alert, AlertTitle } from "@mui/material"
import { useAppSelector } from "../../hooks"

export const ServerErr = (message: string) => {
    const {error} = useAppSelector(state => state)

    if (!error) return null;

    return (
        <>
            <Alert severity="error">
                <AlertTitle>
                    {message}
                </AlertTitle>
            </Alert>
            
        </>
    )
}