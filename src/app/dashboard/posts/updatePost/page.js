"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import { motion } from "framer-motion";
import TextEditor from "../../../../components/textEditor/editor";
import { updatePost, getPostById } from "../../../api/postApi";
import { CustomLink } from "../../../../components/pageFeature/pageFeaturesClient";
import Image from "next/image";

const UpdatePost = () => {
  const router = useRouter();
    const searchParams = useSearchParams();
  const postId = searchParams.get("id"); // Assume post ID is passed in URL query

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    summary: "",
    keyTakeAway: "",
    categories: [],
    tags: [],
    featuredImage: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch post data on mount
  useEffect(() => {
    if (!postId) {
      setErrors({ form: "No post ID provided" });
      setIsLoading(false);
      return;
    }

    const fetchPost = async () => {
      try {
        const response = await getPostById(postId);
        if (response.success && response.data) {
          setFormData({
            title: response.data.title || "",
            content: response.data.content || "",
            summary: response.data.summary || "",
            keyTakeAway: response.data.keyTakeAway || "",
            categories: response.data.categories || [],
            tags: response.data.tags || [],
            featuredImage: response.data.featuredImage || "",
          });
        } else {
          setErrors({ form: "Failed to load post data" });
        }
      } catch (error) {
        setErrors({ form: "An error occurred while fetching post data" });
        console.error("Fetch post error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "categories" || name === "tags" ? value.split(",").map((item) => item.trim()) : value,
    }));

    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const handleEditorChange = (content) => {
    setFormData((prev) => ({ ...prev, content }));
    if (errors.content) {
      setErrors((prevErrors) => ({ ...prevErrors, content: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.content.trim()) newErrors.content = "Content is required";
    if (!formData.summary.trim()) newErrors.summary = "Summary is required";
    if (formData.featuredImage && !/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/.test(formData.featuredImage)) {
      newErrors.featuredImage = "Invalid image URL";
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
      const response = await updatePost(postId, formData);
      if (!response.success) {
        setErrors({ form: response.message || "Failed to update post" });
      } else {
        alert("Post updated successfully!");
        router.push("/dashboard");
      }
    } catch (error) {
      setErrors({ form: "An unexpected error occurred. Please try again." });
      console.error("Update post error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-600"></div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg"
    >
      <h1 className="text-3xl font-bold text-orange-600 mb-6">Update Blog Post</h1>

      {errors.form && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">{errors.form}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block mb-1 font-medium text-gray-700 dark:text-gray-200">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
              errors.title ? "border-red-500" : "border-gray-300 dark:border-gray-600"
            } bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100`}
            placeholder="Enter post title"
          />
          {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title}</p>}
        </div>

        <div>
          <label htmlFor="summary" className="block mb-1 font-medium text-gray-700 dark:text-gray-200">
            Summary
          </label>
          <textarea
            id="summary"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
              errors.summary ? "border-red-500" : "border-gray-300 dark:border-gray-600"
            } bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100`}
            placeholder="Enter post summary"
            rows={4}
          />
          {errors.summary && <p className="mt-1 text-sm text-red-500">{errors.summary}</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-200">Content</label>
          <TextEditor content={formData.content} setContent={handleEditorChange} />
          {errors.content && <p className="mt-1 text-sm text-red-500">{errors.content}</p>}
        </div>

        <div>
          <label htmlFor="keyTakeAway" className="block mb-1 font-medium text-gray-700 dark:text-gray-200">
            Key Takeaway
          </label>
          <input
            type="text"
            id="keyTakeAway"
            name="keyTakeAway"
            value={formData.keyTakeAway}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            placeholder="Enter key takeaway"
          />
        </div>

        <div>
          <label htmlFor="categories" className="block mb-1 font-medium text-gray-700 dark:text-gray-200">
            Categories (comma-separated)
          </label>
          <input
            type="text"
            id="categories"
            name="categories"
            value={formData.categories.join(", ")}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            placeholder="e.g., Technology, Innovation"
          />
        </div>

        <div>
          <label htmlFor="tags" className="block mb-1 font-medium text-gray-700 dark:text-gray-200">
            Tags (comma-separated)
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags.join(", ")}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            placeholder="e.g., AI, Startups"
          />
        </div>

        <div>
          <label htmlFor="featuredImage" className="block mb-1 font-medium text-gray-700 dark:text-gray-200">
            Featured Image URL
          </label>
          <input
            type="url"
            id="featuredImage"
            name="featuredImage"
            value={formData.featuredImage}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 ${
              errors.featuredImage ? "border-red-500" : "border-gray-300 dark:border-gray-600"
            } bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100`}
            placeholder="Enter image URL (e.g., https://example.com/image.jpg)"
          />
          {errors.featuredImage && <p className="mt-1 text-sm text-red-500">{errors.featuredImage}</p>}
          {formData.featuredImage && (
            <Image
              src={formData.featuredImage}
              alt="Featured Image Preview"
              className="mt-2 w-32 h-32 object-cover rounded-lg"
              onError={() => setErrors((prev) => ({ ...prev, featuredImage: "Invalid image URL" }))}
            />
          )}
        </div>

        <div className="flex space-x-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`flex-1 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 disabled:bg-orange-300 transition-colors duration-200`}
          >
            {isSubmitting ? "Updating..." : "Update Post"}
          </button>
          <CustomLink Href="/dashboard" Text="Cancel" />
        </div>
      </form>
    </motion.div> 
  );
};

export default UpdatePost;