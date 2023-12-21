'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export function SignInButton() {
    const { data: session, status } = useSession();
    console.log(session, status);

    if (status === 'loading') {
        return <>...</>;
    }

    if (status === 'authenticated') {
        return (
            <Link href={`/dashboard`}>
                <Image
                    src={session.user?.image ?? '/next.svg'}
                    width={32}
                    height={32}
                    alt="Your Name"
                />
            </Link>
        );
    }

    return <button className={"ml-2 text-sm lg:flex-grow block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"}
                   onClick={() => signIn()}>Sign in</button>;
}

export function SignOutButton() {
    return <button className={"ml-2 text-sm lg:flex-grow block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"}
                   onClick={() => signOut()}>Sign out</button>;
}