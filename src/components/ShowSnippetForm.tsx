"use client";

import { Editor } from "@monaco-editor/react";
import { snippet } from "@prisma/client";

interface ShowSnippetForm {
  snippet: snippet;
}

export default function ShowSnippetForm({ snippet }: ShowSnippetForm) {
  return (
    <Editor
      height="40vh"
      value={snippet.code}
      options={{ minimap: { enabled: false } }}
    />
  );
}
