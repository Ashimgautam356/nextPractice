import { PropsWithChildren } from "react";


export default function AuthLayout({children}:PropsWithChildren){
    return(
        <div>
            <nav>
                this is nav in auth
            </nav>
            {children}
        </div>
    )
}