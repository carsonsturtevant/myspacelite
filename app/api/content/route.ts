import {NextResponse} from "next/server";

const posts = [
    {
        title: "Exploring the Depth of JavaScript",
        slug: "js-depth",
        content: "This post dives deep into the wonders and intricacies of JavaScript."
    },
    {
        title: "Understanding React Hooks",
        slug: "react-hooks",
        content: "Uncover the power of React Hooks and how to use them effectively."
    },
    {
        title: "Introduction to TypeScript",
        slug: "intro-ts",
        content: "An introductory guide into TypeScript and its benefits in modern web development."
    },
    {
        title: "Demystifying CSS Flexbox",
        slug: "css-flex",
        content: "Understand the magic of CSS Flexbox for responsive web design."
    },
    {
        title: "The Evolution of Web Development",
        slug: "web-evolution",
        content: "Looking back at the evolution of web development and what future holds."
    },
]

export async function GET() {
    return NextResponse.json(posts);
}