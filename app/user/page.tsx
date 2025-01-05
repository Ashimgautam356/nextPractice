import axios from "axios"

async function getUserDetail (){
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    return response.data
}

export default async function Users(){

    const userData = await getUserDetail()


    return (

        <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userData[0]?.name}
                </div>
                
                {userData[0]?.email}
            </div>
        </div>
    </div>
    )
}