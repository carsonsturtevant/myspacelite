// export const dynamic = 'force-dynamic'; force it to fetch from the db each time
export const revalidate = 600; // cache for 600s

import { getServerSession } from 'next-auth';

interface Post {
  title: string;
  content: string;
  slug: string;
}

// export async function generateStaticParams() {
//     const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
//         (res) => res.json()
//     );
//
//     return posts.map((post) => ({
//         slug: post.slug,
//     }));
// }

interface Props {
    params: { slug: string };
}

export default async function BlogPost({params}: Props) {
    const session = await getServerSession();

    if (!session) {
        return (
          <h1>You are not authorized.</h1>
        );
    }

    const posts: Post[] = await fetch('http://localhost:3000/api/content')
        .then((res) => res.json());

    const post = posts.find((post) => post.slug === params.slug)!;

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    )
}