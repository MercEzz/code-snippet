"use client";
import { useState } from "react";
import { snippet } from "@prisma/client";
import { Editor } from "@monaco-editor/react";
import * as actions from "@/actions";

interface SnippetProps {
  snippet: snippet;
}

export default function EditSnippetForm({ snippet }: SnippetProps) {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

  return (
    <div>
      <Editor
        defaultValue={snippet.code}
        height="40vh"
        theme="vs-dark"
        defaultLanguage="js"
        onChange={handleEditorChange}
        options={{ minimap: { enabled: false } }}
      />
      <form action={editSnippetAction}>
        <button className="p-2 border rounded">Save</button>
      </form>
    </div>
  );
}
