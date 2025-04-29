import { PageName, CustomLink } from "../../../components/pageFeature/pageFeaturesServer";
import { PostDropDown } from "../../../components/pageFeature/pageFeaturesClient";
import { Button } from "../../../components/button";
import { getAllPost } from "../../api/postApi";

export default async function PostPage() {
  // Sample page data (replace with actual data fetching logic)
  const page = [
    {
      postName: "Sample Page",
      status: "Draft",
      datePublished: "2023-10-01",
      // Add more fields as needed
    },

    {
      postName: "Sample Page",
      status: "Draft",
      datePublished: "2023-10-01",
      // Add more fields as needed
    },

    {
      postName: "Sample Page",
      status: "Draft",
      datePublished: "2023-10-01",
      // Add more fields as needed
    },
    {
      postName: "Sample Page",
      status: "Draft",
      datePublished: "2023-10-01",
      // Add more fields as needed
    },
    {
      postName: "Sample Page",
      status: "Draft",
      datePublished: "2023-10-01",
      // Add more fields as needed
    },

    {
      postName: "Sample Page",
      status: "Draft",
      datePublished: "2023-10-01",
      // Add more fields as needed
    },

    {
      postName: "Sample Page",
      status: "Draft",
      datePublished: "2023-10-01",
      // Add more fields as needed
    },
    {
      postName: "Sample Page",
      status: "Draft",
      datePublished: "2023-10-01",
      // Add more fields as needed
    },
  ];
  // let open = false;
  // const Pages = await getAllPost(
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
        <PageName postName="PAGE" />
      </div>
      <p className="mt-2">This is your page</p>
      <div>
        <Button buttonText="add new page " />
      </div>

      <div className="flex flex-col bg-white border-blaze-orange-700 rounded-lg shadow-2xl p-4 mt-4">
        <div>
          <h2 className="text-xl font-bold text-center p-2">All Pages</h2>
        </div>
        {/* page headings */}
        <div className="container">
          <div className="h-8 w-full p-2 bg-blaze-orange-100 rounded-lg flex flex-wrap text-start mb-2 items-center">
            {/* page name */}
            <div className="flex-shrink-0 w-2/6 sm:w-2/6 h-6 overflow-hidden whitespace-nowrap text-ellipsis px-2">
              <h3 className="text-sm font-normal text-center">Page Name</h3>
            </div>
            {/* page status */}
            <div className="flex-shrink-0 w-2/6 sm:w-2/6 h-6 overflow-hidden whitespace-nowrap text-ellipsis px-2">
              <h3 className="text-sm font-normal text-center">Status</h3>
            </div>
            {/* page date published */}
            <div className="flex-shrink-0 w-2/6 sm:w-2/6 h-6 overflow-hidden whitespace-nowrap text-ellipsis px-2">
              <h3 className="text-sm font-normal text-center">
                Date Published
              </h3>
            </div>
          </div>
        </div>

        {/* page list */}
        <div className="container ">
          {page?.map((page, index) => (
            <div className=" border border-gray-200 rounded mb-2" key={index}>
              <PostDropDown post={page} />
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}
