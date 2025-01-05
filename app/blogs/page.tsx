"use client"

import axios  from "axios"
import { useEffect, useState } from "react"



async function getBlogs(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    return response.data
}



export default function Blogs(){
    const [blogs ,setBlogs] = useState([])
    
    useEffect(()=>{
        async function gb() {
            const gb = await getBlogs()
            setBlogs(gb)
        }
        gb()
    },[])
    return (
        <div>
            learn recoil/ next from the best platform of the world.
            {
                blogs.map((blog:ITodo)=> <Todo title={blog.title} completed={blog.completed}></Todo>)
            }

            <h1>hellow</h1>
        </div>
    )
}


interface ITodo{
    title:string,
    completed:boolean
}

function Todo({title,completed}:ITodo){
    return(
        <div>
            {title}
            {completed?"done !":"not done"}
        </div>
    )
}