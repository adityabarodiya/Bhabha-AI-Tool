import { NextResponse, NextRequest } from "next/server";

import programmingQuestions from "@/questionAns";


export async function GET(request : NextRequest){
    return NextResponse.json(programmingQuestions)
}   