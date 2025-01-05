import NavBar from "@/components/NavBar";

export default function AuthLayout({children}:any){
    return(
        <div>
            <NavBar></NavBar>
            {children}
        </div>
    )
}