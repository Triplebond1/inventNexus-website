import {

  Accordion,
} from "../../../components/pageFeature/pageFeaturesClient";
import {
  SocialMediaLink,
  CustomLink,
} from "../../../components/pageFeature/pageFeaturesServer";
import {
  FaceBookIcon,
  WhatsappIcon,
  LinkedinIcon,
  InstagramIcon,
  XIcon,
} from "../../../components/svg/icons";
import Image from "next/image";
import { getPostById } from "../../api/postApi";

export default async function PostPage({ params }) {
  const { slug } = params;

  // Fetch the post using the slug
  //const post = await getPostById(slug);
  const post = {
    title: "Sample Post Title",
    content: "<p>This is the post content.</p>",
  };
  if (!post || post.success == false) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-xl">
        Post not found.
      </div>
    );
  }

  return (
    <div className=" w-full bg-gray-50 min-h-screen dark:bg-gray-900 bg-white sm:w-4/6 flex flex-col mx-auto">
      {/* Breadcrumb */}
      <nav className="text-sm breadcrumbs bg-white dark:text-white shadow p-4">
        <CustomLink Href="/" Text="Home" /> /{" "}
        <CustomLink Href="/posts" Text="Posts" /> /{" "}
        <CustomLink Href={`/posts/${post.slug}`} Text={post.title} />
      </nav>

      {/* Main Content */}
      <div className="flex-1 container mx-auto p-4 overflow-y-auto">
        {/* Title & Meta */}
        <section className="mb-6">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
            {post.title}
          </h1>
          <div className="text-sm text-blaze-orange-600">
            By {post.author} | Published on{" "}
            {new Date(post.publishedAt).toDateString()}
          </div>
        </section>

        {/* Social Links */}
        <section className="flex items-center gap-2 mb-6">
          <span className="font-semibold text-gray-700">Share:</span>
          <SocialMediaLink Icon={FaceBookIcon} Href="" />
          <SocialMediaLink Icon={WhatsappIcon} Href="" />
          <SocialMediaLink Icon={LinkedinIcon} Href="" />
          <SocialMediaLink Icon={InstagramIcon} Href="#" />
          <SocialMediaLink Icon={XIcon} Href="#" />
        </section>

        {/* Featured Image */}
        {post.featuredImage && (
          <section className="w-full mb-6">
            <Image
              src={post.featuredImage}
              alt="Featured Image"
              width={800}
              height={450}
              layout="responsive"
              objectFit="cover"
              className="rounded"
            />
          </section>
        )}

        {/* Post Content */}
        <article
          className="prose max-w-none mb-10 dark:text-white"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Source */}
        <section className="mb-10">
          <Accordion title="Article Source">
            <p className="text-sm text-gray-50">
              This article was originally published on{" "}
              <CustomLink Href="#" Text=" Example.com.ng" />.
            </p>
          </Accordion>
        </section>

        {/* Related Articles */}
        <section className="mb-10 dark:text-white">
          <h2 className="text-2xl font-semibold mb-4">Related Articles</h2>
          <ul className="space-y-4">
            {post.relatedArticles?.map((article) => (
              <li
                key={article.id}
                className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 transition duration-200"
              >
                <Image
                  src={article.thumbnail || post.featuredImage}
                  alt="Article Thumbnail"
                  width={70}
                  height={70}
                  className="rounded-full object-cover"
                />
                <CustomLink Href={article.href} Text={article.title} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
