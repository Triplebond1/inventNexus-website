// export default function HomePage() {
//     return (
//         <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-blaze-orange-100 to-blaze-orange-200">

//         </div>
//     )
// }

"use client";
import { useState } from "react";
import TextEditor from "../../components/textEditor/editor";

const CreatePost = () => {
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    console.log("Blog Content:", content);
    // Send `content` to an API or database
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create a Blog Post</h1>
      <TextEditor content={content} setContent={setContent} />
      <button
        className="mt-4 bg-blaze-orange-600 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
      >
        Publish Post
      </button>
    </div>
  );
};

export default CreatePost;
