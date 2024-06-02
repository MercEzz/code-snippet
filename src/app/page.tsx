import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => {
    return (
      <Link
        href={`/snippets/${snippet.id}`}
        key={snippet.id}
        className="border px-2 rounded text-lg"
      >
        {snippet.title}
      </Link>
    );
  });

  return (
    <div className="flex w-full h-full items-center justify-center py-6 px-6 flex-col gap-6">
      <h1 className="text-5xl">Code Snippets</h1>
      <div className="flex w-full items-center justify-end">
        <Link href={"/snippets/new"} className="text-xs border rounded-lg px-2">
          Create new snippet
        </Link>
      </div>
      <div className="flex w-full gap-2 flex-col">{renderedSnippets}</div>
    </div>
  );
}
