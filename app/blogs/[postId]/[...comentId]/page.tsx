

interface PramsProps{
    params:Promise<{postId:string,comentId:[string]}>

}

export default async function Comment({params}:PramsProps) {
    // const postId  = (await params).postId
    const rest = (await params).comentId;  


    return(
        <div>
            this is the specific comment which id is {JSON.stringify(rest)}
        </div>
    )
}