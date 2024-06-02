import { notFound } from "next/navigation";
import { db } from "@/db";

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

  return <div>show a snippet</div>;
}
