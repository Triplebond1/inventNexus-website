import { PageName, CustomLink } from "../../../components/pageFeature/pageFeaturesServer";
import { PostDropDown } from "../../../components/pageFeature/pageFeaturesClient";
import { Button } from "../../../components/button";
import { getAllPost } from "../../api/postApi";

export default async function PostPage() {
  // Sample post data (replace with actual data fetching logic)
  const post = [
    {
      postName: "Sample Post",
      status: "Draft",
      datePublished: "2023-10-01",
      // Add more fields as needed
    },

    {
      postName: "Sample Post",
      status: "Draft",
      datePublished: "2023-10-01",
      // Add more fields as needed
    },

    {
      postName: "Sample Post",
      status: "Draft",
      datePublished: "2023-10-01",
      // Add more fields as needed
    },
    {
      postName: "Sample Post",
      status: "Draft",
      datePublished: "2023-10-01",
      // Add more fields as needed
    },
    {
      postName: "Sample Post",
      status: "Draft",
      datePublished: "2023-10-01",
      // Add more fields as needed
    },

    {
      postName: "Sample Post",
      status: "Draft",
      datePublished: "2023-10-01",
      // Add more fields as needed
    },

    {
      postName: "Sample Post",
      status: "Draft",
      datePublished: "2023-10-01",
      // Add more fields as needed
    },
    {
      postName: "Sample Post",
      status: "Draft",
      datePublished: "2023-10-01",
      // Add more fields as needed
    },
  ];
  // let open = false;
  // const posts = await getAllPost(
  //   permalink = "",
  //   author,
  //   category,
  //   tag,
  //   startDate,
  //   endDate
  // );
  return (
    <div className="column items-center justify-center ">
      {/* page name */}
      <div>
        <PageName pageName="POST" />
      </div>
      <p className="mt-2">This is your post page.</p>
      <div>
        <Button buttonText="add new post " />
      </div>

      <div className="flex flex-col bg-white border-blaze-orange-700 rounded-lg shadow-2xl p-4 mt-4">
        <div>
          <h2 className="text-xl font-bold text-center p-2">All Posts</h2>
        </div>
        {/* post headings */}
        <div className="container">
          <div className="h-8 w-full p-2 bg-blaze-orange-100 rounded-lg flex flex-wrap text-start mb-2 items-center">
            {/* post name */}
            <div className="flex-shrink-0 w-2/6 sm:w-2/6 h-6 overflow-hidden whitespace-nowrap text-ellipsis px-2">
              <h3 className="text-sm font-normal text-center">Post Name</h3>
            </div>
            {/* post status */}
            <div className="flex-shrink-0 w-2/6 sm:w-2/6 h-6 overflow-hidden whitespace-nowrap text-ellipsis px-2">
              <h3 className="text-sm font-normal text-center">Status</h3>
            </div>
            {/* post date published */}
            <div className="flex-shrink-0 w-2/6 sm:w-2/6 h-6 overflow-hidden whitespace-nowrap text-ellipsis px-2">
              <h3 className="text-sm font-normal text-center">
                Date Published
              </h3>
            </div>
          </div>
        </div>

        {/* post list */}
        <div className="container ">
          {post?.map((post, index) => (
            <div className=" border border-gray-200 rounded mb-2" key={index}>
              <PostDropDown post={post} />
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}
