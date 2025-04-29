
"use client";

import { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Highlight from "@tiptap/extension-highlight";
import Youtube from "@tiptap/extension-youtube";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableHeader from "@tiptap/extension-table-header";   
import TableCell from "@tiptap/extension-table-cell";

interface ToolbarButton {
  label: string;
  action: () => void;
  isActive?: () => boolean;
  className?: string;
}

interface ToolbarDropdown {
  label: string;
  options: { value: string; label: string; action: () => void }[];
}

const Toolbar = ({ editor }: { editor: any }) => {
  if (!editor) return null;

  const buttons: (ToolbarButton | ToolbarDropdown)[] = [
    {
      label: "Heading",
      options: [
        { value: "", label: "Text", action: () => editor.chain().focus().setParagraph().run() },
        { value: "1", label: "H1", action: () => editor.chain().focus().toggleHeading({ level: 1 }).run() },
        { value: "2", label: "H2", action: () => editor.chain().focus().toggleHeading({ level: 2 }).run() },
        { value: "3", label: "H3", action: () => editor.chain().focus().toggleHeading({ level: 3 }).run() },
      ],
    },
    {
      label: "Bold",
      action: () => editor.chain().focus().toggleBold().run(),
      isActive: () => editor.isActive("bold"),
    },
    {
      label: "Italic",
      action: () => editor.chain().focus().toggleItalic().run(),
      isActive: () => editor.isActive("italic"),
    },
    {
      label: "Underline",
      action: () => editor.chain().focus().toggleUnderline().run(),
      isActive: () => editor.isActive("underline"),
    },
    {
      label: "Strike",
      action: () => editor.chain().focus().toggleStrike().run(),
      isActive: () => editor.isActive("strike"),
    },
    {
      label: "Code",
      action: () => editor.chain().focus().toggleCode().run(),
      isActive: () => editor.isActive("code"),
    },
    {
      label: "Highlight",
      action: () => editor.chain().focus().toggleHighlight().run(),
      isActive: () => editor.isActive("highlight"),
    },
    {
      label: "Bullet List",
      action: () => editor.chain().focus().toggleBulletList().run(),
      isActive: () => editor.isActive("bulletList"),
    },
    {
      label: "Ordered List",
      action: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: () => editor.isActive("orderedList"),
    },
    {
      label: "Blockquote",
      action: () => editor.chain().focus().toggleBlockquote().run(),
      isActive: () => editor.isActive("blockquote"),
    },
    {
      label: "Code Block",
      action: () => editor.chain().focus().toggleCodeBlock().run(),
      isActive: () => editor.isActive("codeBlock"),
    },
    {
      label: "Add Link",
      action: () => {
        const url = prompt("Enter URL:");
        if (url) editor.chain().focus().setLink({ href: url, target: "_blank" }).run();
      },
      isActive: () => editor.isActive("link"),
      className: "bg-blue-500 text-white hover:bg-blue-600",
    },
    {
      label: "Remove Link",
      action: () => editor.chain().focus().unsetLink().run(),
      className: "bg-red-500 text-white hover:bg-red-600",
    },
    {
      label: "Add Image",
      action: () => {
        const url = prompt("Enter Image URL:");
        if (url) editor.chain().focus().setImage({ src: url }).run();
      },
    },
    {
      label: "Embed YouTube",
      action: () => {
        const url = prompt("Enter YouTube Video URL:");
        if (url) editor.chain().focus().setYoutubeVideo({ src: url }).run();
      },
    },
    {
      label: "Table",
      options: [
        { value: "", label: "Table", action: () => {} },
        {
          value: "table",
          label: "Insert Table",
          action: () => editor.chain().focus().insertTable({ rows: 3, cols: 3 }).run(),
        },
        { value: "row", label: "Add Row", action: () => editor.chain().focus().addRowAfter().run() },
        {
          value: "header",
          label: "Toggle Header",
          action: () => editor.chain().focus().toggleHeaderCell().run(),
        },
        {
          value: "cell",
          label: "Add Column",
          action: () => editor.chain().focus().addColumnAfter().run(),
        },
      ],
    },
    {
      label: "Text Color",
      options: [
        { value: "", label: "Default", action: () => editor.chain().focus().unsetColor().run() },
        { value: "orange", label: "Blaze Orange", action: () => editor.chain().focus().setColor("orange").run() },
        { value: "black", label: "Black Ash", action: () => editor.chain().focus().setColor("black").run() },
        { value: "blue", label: "Blue", action: () => editor.chain().focus().setColor("blue").run() },
        { value: "white", label: "White", action: () => editor.chain().focus().setColor("white").run() },
      ],
    },
  ];

  return (
    <div className="flex flex-wrap gap-2 p-3 bg-gray-100 dark:bg-gray-800 rounded-md mb-3 text-sm">
      {buttons.map((item, idx) => {
        if ("options" in item) {
          return (
            <select
              key={idx}
              onChange={(e) => {
                const option = item.options.find((opt) => opt.value === e.target.value);
                if (option) option.action();
              }}
              className="border rounded px-2 py-1 bg-white dark:bg-gray-700 dark:text-white"
            >
              {item.options.map((opt, optIdx) => (
                <option key={optIdx} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          );
        }
        return (
          <button
            key={idx}
            onClick={item.action}
            className={`border px-2 py-1 rounded ${
              item.isActive && item.isActive()
                ? "bg-gray-200 dark:bg-gray-600"
                : "bg-gray-100 dark:bg-gray-700"
            } hover:bg-gray-200 dark:hover:bg-gray-600 ${item.className || ""}`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
};

const ResponsiveYoutube = Youtube.configure({
  HTMLAttributes: {
    class: "w-full aspect-video",
    frameborder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
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
      const parsedUrl = url.includes(":") ? new URL(url) : new URL(`${ctx.defaultProtocol}://${url}`);
      if (!ctx.defaultValidate(parsedUrl.href)) return false;
      const disallowedProtocols = ["ftp", "file", "mailto"];
      const protocol = parsedUrl.protocol.replace(":", "");
      if (disallowedProtocols.includes(protocol)) return false;
      const allowedProtocols = ctx.protocols.map((p) => (typeof p === "string" ? p : p.scheme));
      if (!allowedProtocols.includes(protocol)) return false;
      const disallowedDomains = ["example-phishing.com", "malicious-site.net"];
      const domain = parsedUrl.hostname;
      if (disallowedDomains.includes(domain)) return false;
      return true;
    } catch {
      return false;
    }
  },
  shouldAutoLink: (url) => {
    try {
      const parsedUrl = url.includes(":") ? new URL(url) : new URL(`https://${url}`);
      const disallowedDomains = ["example-no-autolink.com", "another-no-autolink.com"];
      const domain = parsedUrl.hostname;
      return !disallowedDomains.includes(domain);
    } catch {
      return false;
    }
  },
});

const TipTapEditor = ({ content, setContent }: { content: string; setContent: (content: string) => void }) => {
  const [darkMode, setDarkMode] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      Color,
      Image,
      CustomLink,
      Highlight,
      ResponsiveYoutube,
      Table.configure({ resizable: true,}),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content,
    editorProps: {
      attributes: {
        class: "prose max-w-full min-h-[300px] focus:outline-none dark:prose-invert",
        spellcheck: "true",
      },
      handleDrop: (view, event, _slice, moved) => {
        const file = event.dataTransfer?.files?.[0];
        if (file && file.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onload = () => {
            editor.chain().focus().setImage({ src: reader.result }).run();
          };
          reader.readAsDataURL(file);
          return true;
        }
        return false;
      },
    },
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const html = editor?.getHTML();
      if (html) {
        console.log("Autosaving:", html); // Replace with actual save logic
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [editor]);

  return (
    <div className={`${darkMode ? "dark bg-gray-900 text-white" : "bg-white"} p-4 border rounded-lg`}>
      <div className="flex justify-between mb-2">
        <span className="font-semibold">Blog Editor</span>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-xs text-blue-600 underline dark:text-blue-400"
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default TipTapEditor;
