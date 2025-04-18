// app/posts/page.tsx

import Link from "next/link";
import { notFound } from "next/navigation";

// Define the Post type
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// Constants
const LIMIT = 10;

export default async function Page({
    searchParams,
}: {
    searchParams: { page?: string };
}) {
    const page = parseInt(searchParams.page || "1");

    if (page < 1) notFound();

    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: "no-store",
    });

    const posts: Post[] = await res.json();

    const start = (page - 1) * LIMIT;
    const end = start + LIMIT;
    const paginatedPosts = posts.slice(start, end);

    if (paginatedPosts.length === 0) notFound();

    return (
        <div className="max-w-3xl mx-auto px-6 py-10 text-gray-200">
            <h1 className="text-4xl font-bold mb-8 text-center text-white">
                Blog Posts - Page {page}
            </h1>

            <div className="space-y-8">
                {paginatedPosts.map((post) => (
                    <div
                        key={post.id}
                        className="p-6 bg-gray-800 border border-gray-700 rounded-xl shadow hover:shadow-lg transition duration-300"
                    >
                        <h2 className="text-2xl font-semibold mb-3 text-purple-400">
                            {post.title}
                        </h2>
                        <p className="text-gray-300 leading-relaxed">{post.body}</p>
                    </div>
                ))}
            </div>

            <div className="flex justify-between items-center mt-12">
                {page > 1 ? (
                    <Link
                        href={`?page=${page - 1}`}
                        className="text-blue-400 hover:underline hover:text-blue-300 transition"
                    >
                        ← Previous
                    </Link>
                ) : (
                    <div />
                )}

                {end < posts.length && (
                    <Link
                        href={`?page=${page + 1}`}
                        className="text-blue-400 hover:underline hover:text-blue-300 transition"
                    >
                        Next →
                    </Link>
                )}
            </div>
        </div>
    );
}
