import prisma from '@/lib/prisma';
import { Metadata } from 'next';
import Image from "next/image";
import FollowButton from "@/app/components/FollowButton";

interface Props {
    params: {
        id: string;
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const user = await prisma.user.findUnique({ where: { id: params.id } });
    return { title: `User profile of ${user?.name}` };
}

export default async function UserProfile({params}: Props) {
    const user = await prisma.user.findUnique({ where: { id: params.id }});
    const { name, bio, image } = user ?? {};

    return (
        <div>
            <h1>{ name }</h1>
            <Image
                src={image ?? '/next.svg'}
                width={32}
                height={32}
                alt="Your Name"
            />
            <h3>Bio</h3>
            <p>{ bio }</p>
            <FollowButton targetUserId={params.id}/>
        </div>
    );
}