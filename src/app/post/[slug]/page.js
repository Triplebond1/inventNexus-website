import { ScrollBackToTop } from "../../../components/pageFeature/pageFeaturesClient";
import Body from "../../../components/post/body";
import Footer from "../../../components/footer";
import Header from "../../../components/header";

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

export default async function PostPage(
  {
    /*params*/
  }
) {
  //const post = await fetchPost(params.slug);

  //if (!post) return notFound(); // Show 404 page if post is not found
  // If no post is passed as a prop, we use some default data for demonstration.
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

  const Post = defaultPost;

  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col">
      {/* Header */}
      <Header />
      <main>
        <Body post={Post} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <ScrollBackToTop />
    </div>
  );
}
