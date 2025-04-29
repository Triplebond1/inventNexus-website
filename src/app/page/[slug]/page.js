import Body from "../../../components/post/body";

// export async function generateStaticParams() {
//   const response = await fetch("https://your-backend.com/api/posts/slugs");
//   const slugs = await response.json();

//   return slugs.map((slug) => ({ slug }));
// }

// async function fetchPost(slug) {
//   const response = await fetch(`https://your-backend.com/api/posts/${slug}`);
//   if (!response.ok) return null;
//   return response.json();
// }

export default function PostPage({ params }) {
  // If no post is passed as a prop, we use some default data for demonstration

  const { slug } = params;
  const defaultPost = {
    title: "Sample Post Title",
    content:
      "<p>This is the content of the post. It can include <strong>HTML</strong> formatting, images, and more.</p>",
    publishedAt: new Date().toISOString(),
    author: "John Doe",
    featuredImage: "/leonardo-da-vinci-quote-2.png",
    relatedArticles: [
      { id: 1, title: "Related Article 1", href: "/posts/1" },
      { id: 2, title: "Related Article 2", href: "/posts/2" },
    ],
  };

  const post = defaultPost;

  // State to toggle the "Back to Top" button based on scroll position.

  return (
    <div className=" w-full bg-gray-50 min-h-screen dark:bg-gray-900 bg-white sm:w-4/6 flex flex-col mx-auto">
      <Body post={post} />
    </div>
  );
}
