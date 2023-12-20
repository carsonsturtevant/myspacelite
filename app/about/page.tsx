import {Metadata} from "next";

export const metadata: Metadata = {
    title: "About Page",
    description: "Super cool new social media platform!"
};

export default function About() {
    return (
        <>
            <main>
                <h1 className={"font-bold p-6"}>About Us</h1>
                <p className={"p-6"}>Super cool new social media platform!</p>
            </main>
        </>
    );
}