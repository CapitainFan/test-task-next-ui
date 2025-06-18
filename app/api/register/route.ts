import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
import User from "@/models/User";
import connectDB from "@/utils/db";


interface RegisterRequest {
  email: string;
  password: string;
  confirmPassword: string;
}

export const POST = async (request: NextRequest): Promise<NextResponse> => {
  try {
    const { email, password, confirmPassword }: RegisterRequest = await request.json();

    if (!email || !password || !confirmPassword) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (password !== confirmPassword) {
      return NextResponse.json(
        { error: "Passwords do not match" },
        { status: 400 }
      );
    }

    await connectDB();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Server error: " + error.message },
      { status: 500 }
    );
  }
};