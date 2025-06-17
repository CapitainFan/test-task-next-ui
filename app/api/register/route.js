import User from "@/models/User";
import connectDB from "@/utils/db";
import bcrypt from 'bcryptjs'
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const { email, password, confirmPassword } = await request.json();

    if (password !== confirmPassword) {
        return new NextResponse(JSON.stringify({error: "Passwords do not match"}), {status: 400});
    }

    await connectDB();

    const existingUser = await User.findOne({email});

    if (existingUser) {
        return new NextResponse(JSON.stringify({error: "User already exists"}), {status: 400});
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new User({email, password: hashedPassword})

    try {
        await newUser.save()
        return new NextResponse("User is successfully created", {status: 201})

    } catch (error) {
        return new NextResponse(error, {staus: 500})
    }
}