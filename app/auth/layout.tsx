import NavBar from "@/components/NavBar";

export default function AuthLayout({children}){
    return(
        <div>
            <NavBar></NavBar>
            {children}
        </div>
    )
}