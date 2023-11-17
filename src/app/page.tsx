'use client'
import { useState } from 'react';
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import {Button, ButtonGroup} from "@nextui-org/react";


import * as commands from "@uiw/react-md-editor/commands"

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor"),
  { ssr: false }
);


export default function Home() {
  const [value, setValue] = useState<string | undefined>('**Hello world!!!**');

  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-24">
      <div className="container">
        <MDEditor
          value={value}
          onChange={setValue}
          style={{ height: "100vh" }}
        />
      </div>
          <ButtonGroup>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    </main>
  )
}
