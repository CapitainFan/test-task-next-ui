import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';
import User from '@/models/User';
import connectDB from "@/utils/db";
import { signIn } from "next-auth/react";
import mongoose from "mongoose";


export const authOptions = {
    providers: [
        CredentialsProvider({
            id: "credientals",
            name: "Credientals",
            credentials: {
                email: { 
                    label: "Email",
                    type: "text",
                },
                password: {
                    label: "Password",
                    type: "password" 
                },
            },

            async authorize(credentials) {


                await mongoose
                    .connect(process.env.MONGO_URI)
                    .catch (error => console.log(error));
    
                try {
                    const user = await User.findOne({ email: credentials.email });

                    if (user) {
                        const isPasswordCorrect = await bcrypt.compare(
                            credentials.password,
                            user.password,
                        );
                        
                        return isPasswordCorrect ? user : null;
                    }
                } catch (error) {
                    throw new Error(error);
                }
            },
        }),
      ],


      callbacks: {
        async signIn({ user, account }) {
            if (account?.provider == 'credientals') {
                return true;
            }
        },
      },
};

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};