import { useRouter } from 'next/router';

export async function getStaticPaths() {
  //Fetch slugs of all posts from your backend
 const response = await fetch('https://your-backend.com/api/posts/slugs');
  const slugs = await response.json();

  // Generate paths for all slugs
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return { paths, fallback: 'blocking' }; // blocking fallback ensures that new pages are statically generated
}

export async function getStaticProps({ params }) {
  const { slug } = params;

    // Fetch post content from the backend
  const response = await fetch(`https://your-backend.com/api/posts/${slug}`);
  const post = await response.json();

  if (!response.ok) {
    return { notFound: true }; // Handle not found pages
  }

  return {
    props: { post }, // Pass post data as props
    revalidate: 10, // Revalidate every 10 seconds
  };
}
  

export default function PostPage({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-sm text-gray-500">Published on {new Date(post.publishedAt).toDateString()}</p>
      <div className="mt-5">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
}


// `app` directory
 
// export const dynamicParams = true;
 
// export async function generateStaticParams() {
//   return [...]
// }
 
// async function getPost(params) {
//   ...
// }
 
// export default async function Post({ params }) {
//   const post = await getPost(params);
 
//   return ...
// }
