import axios from "axios"



export default async function Post({params}:any){
    const postid = (await params).postId

    const blogPost  = await (await axios.get(`https://jsonplaceholder.typicode.com/posts/${postid}`)).data

    return(
        <div className="h-screen w-[100%] flex justify-center items-center">

            <div className="border rounded-lg flex flex-col w-80 p-2">
                <div className="flex justify-evenly">
                    <div> postid:- {blogPost.id}</div>
                    <div> userid:- {blogPost.userId}</div>

                </div>
                <div className="mt-4">
                    <div className="my-2">{blogPost.title}</div>
                    <div>{blogPost.body}</div>

                </div>
            </div>

        </div>
    )
}