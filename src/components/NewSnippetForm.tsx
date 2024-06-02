"use client";

import { Editor } from "@monaco-editor/react";
import FormSnippet from "./FormSnippet";
import { useState } from "react";

export default function NewSnippetForm() {
  const [code, setCode] = useState<string>("");

  function handleEditorChange(value: string = "") {
    setCode(value);
  }

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <FormSnippet title="Title" name="title" />
        <div className="flex gap-4">
          <label className="w-12 text-sm" htmlFor="code">
            Code
          </label>
          <Editor
            width="80vw"
            height="40vh"
            theme="vs-dark"
            defaultLanguage="js"
            onChange={handleEditorChange}
            options={{ minimap: { enabled: false } }}
          />
        </div>
        <button type="submit" className="border rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </div>
  );
}
