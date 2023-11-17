'use client'
import { useState } from 'react';
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { Button, ButtonGroup } from "@nextui-org/react";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor"),
  { ssr: false }
);


export default function Home() {
  const [value, setValue] = useState<string | undefined>('**Hello world!!!**');

  return (
    <main className="flex h-screen flex-row items-center justify-between p-24">
      <div className="grid container auto-rows-min gap-8 items-center">
        <MDEditor
          value={value}
          onChange={setValue}
          visiableDragbar={false}
          height={700}
        />
        <ButtonGroup>
          <Button>Generate</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>
    </main>
  )
}
