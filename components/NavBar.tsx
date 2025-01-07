import Link from "next/link";


export default function NavBar(){
    return(
        <div className="border-b p-4 w-screen h-[7rem] flex justify-between items-center">
            <div className="w-[30%] flex justify-center">
                <Link href={'/'}>Home</Link>
            </div>
            <div className="w-[30%] flex justify-evenly">
                <Link href={'/signin'}>Sign-In</Link> 
                <Link href={'/signup'}>Sign-Up</Link> 
            </div>
        </div>
    )
}