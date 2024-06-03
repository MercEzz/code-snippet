import EditSnippetForm from "@/components/EditSnippetForm";
import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/db";

interface SnippeteditPageProps {
  params: {
    id: string;
  };
}

export default async function EditSnippetPage(props: SnippeteditPageProps) {
  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(props.params.id),
    },
  });

  if (!snippet) return notFound();

  return (
    <div>
      <h3>Edit Snippet</h3>
      <EditSnippetForm snippet={snippet} />
    </div>
  );
}
