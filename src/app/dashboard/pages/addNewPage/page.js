"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import TextEditor from "../../../../components/textEditor/editor";
import { createPost } from "../../../api/postApi";
import {customLink} from "../../../../components/pageFeature/pageFeaturesClient";

const CreatePage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    summary: "",
    keyTakeAway: "",
    // postContributor,
    // metaDescription,
    // parentPage,
    // focuskeywords,
    // categories,
    // tags,
    // featuredImage,
    // coverImage,
    // postOtherImages,
    // featuredVideo,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear specific field error when user starts typing
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const handleEditorChange = (content) => {
    setFormData((prev) => ({
      ...prev,
      content,
    }));
    // Clear content error when editor content changes
    if (errors.content) {
      setErrors((prevErrors) => ({ ...prevErrors, content: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }
    if (!formData.content.trim()) {
      newErrors.content = "Content is required";
    }
    if (!formData.summary.trim()) {
      newErrors.summary = "Summary is required";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await createPost(formData);

      if (!response.success) {
        setErrors({ form: response.message || "Failed to create page" });
      } else {
        alert("page created successfully!");
        router.push("/dashboard");
      }
    } catch (error) {
      setErrors({ form: "An unexpected error occurred. Please try again." });
      console.error("Create page error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create a Blog page</h1>

      {errors.form && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {errors.form}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-1 font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter page title"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-500">{errors.title}</p>
          )}
        </div>

        <div>
          <label htmlFor="summary" className="block mb-1 font-medium">
            Summary
          </label>
          <textarea
            id="summary"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${
              errors.summary ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter page summary"
            rows={4}
          />
          {errors.summary && (
            <p className="mt-1 text-sm text-red-500">{errors.summary}</p>
          )}
        </div>

        <div>
          <label c   lassName="block mb-1 font-medium">Content</label>
          <TextEditor
            content={formData.content}
            setContent={handleEditorChange}
          />
          {errors.content && (
            <p className="mt-1 text-sm text-red-500">{errors.content}</p>
          )}
        </div>

        <div>
          <label htmlFor="keyTakeAway" className="block mb-1 font-medium">
            Key Takeaway
          </label>
          <input
            type="text"
            id="keyTakeAway"
            name="keyTakeAway"
            value={formData.keyTakeAway}
            onChange={handleChange}
            className="w-full p-2 border rounded border-gray-300"
            placeholder="Enter key takeaway"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`mt-4 bg-blaze-orange-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-blue-300`}
        >
          {isSubmitting ? "Publishing..." : "Publish page"}
        </button>
      </form>
    </div>
  );
};

export default CreatePage;