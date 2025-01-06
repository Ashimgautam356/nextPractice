import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


const client = new PrismaClient();


export async function POST(req:NextRequest){

    const data = await  req.json()
    client.user.create({
        data:{
            userName:data.username,
            password:data.password
        }
    })

    return NextResponse.json({
        message:"you have been signup"
    })
}