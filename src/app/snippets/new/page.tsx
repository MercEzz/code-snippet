import { redirect } from "next/navigation";
import FormSnippet from "@/components/FormSnippet";
import { db } from "@/db/index";
import NewSnippetForm from "@/components/NewSnippetForm";

export default function NewSnippet() {
  async function createSnippet(formData: FormData) {
    // this need to be a server action!
    "use server";

    // check the user's input. are they valid?
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    // create entry in database
    await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    // redirect the user back to the root page
    redirect("/");
  }

  return (
    <form action={createSnippet}>
      <NewSnippetForm />
    </form>
  );
}
