import axios from "axios";


export default async function Home() {
  const userData = (await axios.get("http://localhost:3000/api/v1/user")).data;

  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userData?.user}
                </div>
                
                {userData?.email}
            </div>
        </div>
    </div>
  );
}

