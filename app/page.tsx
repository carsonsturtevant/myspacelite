import {Metadata} from "next";
import {getServerSession} from "next-auth";

export const metadata: Metadata = {
    title: "Home Page",
    description: "Super cool new social media platform!"
};

export default async function Home() {
    const session = await getServerSession();

    if (!session) {
        return (
        <main>
            <p>Please sign in</p>
        </main>
        );
    }
}
