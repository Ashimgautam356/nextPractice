


export default async function Comment({params}:any) {
    const postId  = (await params).postId
    const rest = (await params).comentId;  


    return(
        <div>
            this is the specific comment which id is {JSON.stringify(rest)}
        </div>
    )
}