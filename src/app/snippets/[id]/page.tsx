import { notFound } from "next/navigation";
import { db } from "@/db";
import ShowSnippetForm from "@/components/ShowSnippetForm";
import Link from "next/link";

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function ShowSnippetPage(props: SnippetShowPageProps) {
  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(props.params.id),
    },
  });

  if (!snippet) return notFound();

  return (
    <div className="flex w-full flex-col items-center justify-center py-6 gap-6">
      <div className="flex w-full">
        <Link href={"/"} className="rounded border w-fit px-2">
          Back
        </Link>
      </div>
      <h3 className="font-bold">{snippet.title}</h3>
      <ShowSnippetForm snippet={snippet} />
    </div>
  );
}
