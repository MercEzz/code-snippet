"use client";

import { Editor } from "@monaco-editor/react";
import FormSnippet from "./FormSnippet";
import { useState } from "react";
import Link from "next/link";

export default function NewSnippetForm() {
  const [code, setCode] = useState<string>("");

  function handleEditorChange(value: string = "") {
    setCode(value);
  }

  return (
    <div className="flex w-full flex-col items-center justify-center py-6 gap-6">
      <h3 className="font-bold">Create a Snippet</h3>
      <div className="flex w-full flex-col gap-4">
        <Link href={"/"} className="rounded border w-fit px-2">
          Back
        </Link>
        <FormSnippet title="Title" name="title" />
        <div className="flex gap-4">
          <label className="w-12 text-sm" htmlFor="code">
            Code
          </label>
          <Editor
            height="40vh"
            theme="vs-dark"
            defaultLanguage="js"
            onChange={handleEditorChange}
            options={{ minimap: { enabled: false } }}
          />
        </div>
        <div className="flex w-full items-center justify-end">
          <button
            type="submit"
            className="w-fit border rounded px-2 bg-blue-200"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
