"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Paragraph from "@tiptap/extension-paragraph";
import Heading from "@tiptap/extension-heading";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableHeader from "@tiptap/extension-table-header";
import TableCell from "@tiptap/extension-table-cell";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Blockquote from "@tiptap/extension-blockquote";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Underline from "@tiptap/extension-underline";
import Strike from "@tiptap/extension-strike";
import Code from "@tiptap/extension-code";
import CodeBlock from "@tiptap/extension-code-block";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Highlight from "@tiptap/extension-highlight";
import Youtube from "@tiptap/extension-youtube";
import { useState } from "react";

// Define the toolbar component
const Toolbar = ({ editor }) => {
  if (!editor) return null;

  return (
    <div className="flex flex-wrap w-full gap-2 bg-gray-100 p-2 rounded-md">
      {/* Heading Dropdown */}
      <select
        onChange={(e) =>
          editor
            .chain()
            .focus()
            .toggleHeading({ level: Number(e.target.value) })
            .run()
        }
        className="p-2 border rounded bg-white"
      >
        <option value="">Heading</option>
        <option value="1">H1</option>
        <option value="2">H2</option>
        <option value="3">H3</option>
      </select>

      {/* Text Styling */}
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className="p-2 border rounded"
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className="p-2 border rounded"
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className="p-2 border rounded"
      >
        Underline
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className="p-2 border rounded"
      >
        Strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        className="p-2 border rounded"
      >
        Code
      </button>

      {/* Lists */}
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className="p-2 border rounded"
      >
        Bullet List
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className="p-2 border rounded"
      >
        Ordered List
      </button>

      {/* Blockquote & Code Block */}
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className="p-2 border rounded"
      >
        Blockquote
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className="p-2 border rounded"
      >
        Code Block
      </button>

      {/* Add Link Button */}
      <button
        onClick={() => {
          const url = prompt("Enter URL:");
          if (url) {
            editor
              .chain()
              .focus()
              .setLink({ href: url, target: "_blank" })
              .run();
          }
        }}
        className="p-2 border rounded bg-blue-500 text-black hover:bg-blue-700"
      >
        Add Link
      </button>

      {/* Remove Link Button */}
      <button
        onClick={() => {
          editor.chain().focus().unsetLink().run();
        }}
        className="p-2 border rounded bg-red-500 text-black hover:bg-red-700"
      >
        Remove Link
      </button>

      {/* Image Upload */}
      <button
        onClick={() => {
          const url = prompt("Enter Image URL:");
          if (url) editor.chain().focus().setImage({ src: url }).run();
        }}
        className="p-2 border rounded"
      >
        Add Image
      </button>

      {/* YouTube Embed */}
      <button
        onClick={() => {
          const url = prompt("Enter YouTube Video URL:");
          if (url) editor.chain().focus().setYoutubeVideo({ src: url }).run();
        }}
        className="p-2 border rounded"
      >
        Embed YouTube
      </button>

      {/* Table Dropdown */}
      <select
        onChange={(e) => {
          if (e.target.value === "table")
            editor.chain().focus().insertTable({ rows: 3, cols: 3 }).run();
          else if (e.target.value === "row")
            editor.chain().focus().addRowAfter().run();
          else if (e.target.value === "header")
            editor.chain().focus().toggleHeaderCell().run();
          else if (e.target.value === "cell")
            editor.chain().focus().addColumnAfter().run();
        }}
        className="p-2 border rounded bg-white"
      >
        <option value="">Table</option>
        <option value="table">Insert Table</option>
        <option value="row">Add Row</option>
        <option value="header">Toggle Header</option>
        <option value="cell">Add Column</option>
      </select>

      {/* Color Dropdown */}
      <select
        onChange={(e) => editor.chain().focus().setColor(e.target.value).run()}
        className="p-2 border rounded bg-white"
      >
        <option value="">Text Color</option>
        <option value="orange">Blaze Orange</option>
        <option value="black">Black Ash</option>
        <option value="blue">Blue</option>
        <option value="white">white</option>
      </select>
    </div>
  );
};

const ResponsiveYoutube = Youtube.configure({
  HTMLAttributes: {
    class: "w-full aspect-video", // Ensures full responsiveness
    frameborder: "0",
    allow:
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: "true",
  },
});

const CustomLink = Link.configure({
  openOnClick: true,
  autolink: true,
  linkOnPaste: true,
  HTMLAttributes: {
    rel: "noopener noreferrer",
    target: "_blank",
    class: "text-blue-500 underline hover:text-blue-700",
  },
  defaultProtocol: "https",
  protocols: ["http", "https"],
  isAllowedUri: (url, ctx) => {
    try {
      // construct URL
      const parsedUrl = url.includes(":")
        ? new URL(url)
        : new URL(`${ctx.defaultProtocol}://${url}`);

      // use default validation
      if (!ctx.defaultValidate(parsedUrl.href)) {
        return false;
      }

      // disallowed protocols
      const disallowedProtocols = ["ftp", "file", "mailto"];
      const protocol = parsedUrl.protocol.replace(":", "");

      if (disallowedProtocols.includes(protocol)) {
        return false;
      }

      // only allow protocols specified in ctx.protocols
      const allowedProtocols = ctx.protocols.map((p) =>
        typeof p === "string" ? p : p.scheme
      );

      if (!allowedProtocols.includes(protocol)) {
        return false;
      }

      // disallowed domains
      const disallowedDomains = ["example-phishing.com", "malicious-site.net"];
      const domain = parsedUrl.hostname;

      if (disallowedDomains.includes(domain)) {
        return false;
      }

      // all checks have passed
      return true;
    } catch {
      return false;
    }
  },
  shouldAutoLink: (url) => {
    try {
      // construct URL
      const parsedUrl = url.includes(":")
        ? new URL(url)
        : new URL(`https://${url}`);

      // only auto-link if the domain is not in the disallowed list
      const disallowedDomains = [
        "example-no-autolink.com",
        "another-no-autolink.com",
      ];
      const domain = parsedUrl.hostname;

      return !disallowedDomains.includes(domain);
    } catch {
      return false;
    }
  },
});

// Main Editor Component
const TipTapEditor = ({ content, setContent }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Paragraph,
      Heading,
      BulletList,
      OrderedList,
      ListItem,
      Table,
      TableRow,
      TableHeader,
      TableCell,
      TextStyle,
      Color,
      Blockquote,
      Bold,
      Italic,
      Underline,
      Strike,
      Code,
      CodeBlock,
      Image,
      CustomLink,
      Highlight,
      ResponsiveYoutube,
    ],
    content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  return (
    <div className="border rounded-md p-2 bg-white">
      <Toolbar editor={editor} />
      <EditorContent
        editor={editor}
        className="mt-2 border p-3 min-h-[300px]"
      />
    </div>
  );
};

export default TipTapEditor;

//https://youtu.be/DbfejwP1d3c?si=85XwyWbw0a0grBUd
