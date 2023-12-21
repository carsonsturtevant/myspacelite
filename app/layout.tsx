import {Inter} from 'next/font/google'
import './globals.css'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthProvider from "@/app/components/AuthProvider";
import {SignInButton, SignOutButton} from "@/app/components/AuthButtons";
import AuthCheck from "@/app/components/AuthCheck";

const interFont = Inter({subsets: ['latin']});
const LANG = "en";

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({children}: RootLayoutProps) {
    return (
        <AuthProvider>
            <html lang={LANG}>
                <body className={interFont.className}>
                    <NavMenu/>
                    {children}
                </body>
            </html>
        </AuthProvider>
    );
}

const NavMenu = () => (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <Link href={'/'} className={"flex items-center flex-shrink-0 text-white mr-6"}>
            <Image src="/next.svg" alt="Logo" width={100} height={100}/>
        </Link>
        <div className={"w-full block flex-grow lg:flex lg:items-center lg:w-auto"}>
            <div className={"text-sm lg:flex-grow"}>
                <Link href={'/about'}
                      className={"text-sm lg:flex-grow block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"}>
                    About
                </Link>

                <Link href={'/blog'}
                      className={"text-sm lg:flex-grow block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"}>
                    Blog
                </Link>

                <Link href={'/users'}
                      className={"text-sm lg:flex-grow block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"}>
                    Users
                </Link>
            </div>
        </div>
        <div>
            <SignInButton/>
        </div>
        <div>
            <AuthCheck><SignOutButton/></AuthCheck>
        </div>
    </nav>
);