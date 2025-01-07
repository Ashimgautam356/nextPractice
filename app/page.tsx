import Link from "next/link";

export default function Home() {
  return (
    <div className="text-lg w-[100%] h-screen flex flex-col justify-center items-center">
      <div>

        <p>hello ji kyaa hallchall</p>
      </div>
      <div className=" mt-10 w-[50%] flex justify-evenly">
        <Link href={"/signin"} className="border rounded-md p-4">Signin to todo app</Link>
        <Link href={"signup"} className="border rounded-md p-4">Signup to todo app</Link>
      </div>
    </div>
  );
}
