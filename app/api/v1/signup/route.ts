import {  NextResponse } from "next/server";
// import prisma from "@/app/lib/db";




export async function POST(){

    // const data = await  req.json()
    // await prisma.user.create({
    //     data:{
    //         userName:data.username,
    //         password:data.password
    //     }
    // })

    return NextResponse.json({
        message:"you have been signup"
    })
}