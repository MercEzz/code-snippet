"use client";

import NewSnippetForm from "@/components/NewSnippetForm";
import * as actions from "@/actions";
import { useFormState } from "react-dom";

export default function NewSnippet() {
  const [formState, action] = useFormState(actions.createSnippet, {
    message: "",
  });
  return (
    <form action={action}>
      <NewSnippetForm formState={formState} />
    </form>
  );
}
