import { DocumentCard } from "../components/DocumentCard";
import { HeaderImage } from "../components/HeaderImage";
import { HeroSection } from "../components/HeroSection";
import Sidebar from "../components/Sidebar";
const dummyData = [
  {
    id: 1,
    name: "Bonnie Green",
    image:
      "https://img.freepik.com/free-vector/document-vector-colorful-design_341269-1262.jpg",
  },
  {
    id: 2,
    name: "Bonnie Green",
    image:
      "https://img.freepik.com/free-vector/document-vector-colorful-design_341269-1262.jpg",
  },
  {
    id: 3,
    name: "Bonnie Green",
    image:
      "https://img.freepik.com/free-vector/document-vector-colorful-design_341269-1262.jpg",
  },
  {
    id: 4,
    name: "Bonnie Green",
    image:
      "https://img.freepik.com/free-vector/document-vector-colorful-design_341269-1262.jpg",
  },
  {
    id: 5,
    name: "Bonnie Green",
    image:
      "https://img.freepik.com/free-vector/document-vector-colorful-design_341269-1262.jpg",
  },
  {
    id: 6,
    name: "Bonnie Green",
    image:
      "https://img.freepik.com/free-vector/document-vector-colorful-design_341269-1262.jpg",
  },
  {
    id: 7,
    name: "Bonnie Green",
    image:
      "https://img.freepik.com/free-vector/document-vector-colorful-design_341269-1262.jpg",
  },
  {
    id: 8,
    name: "Bonnie Green",
    image:
      "https://img.freepik.com/free-vector/document-vector-colorful-design_341269-1262.jpg",
  },
];
const MyDocuments = () => {
  return (
    <>
      {/* <div className="bg-white p-8">
        <div className="flex gap-8">
          <Sidebar />
          <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">File import</h2>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 bg-gray-100 text-gray-700">
                X
              </button>
            </div>
            <div className="p-4 border-2 border-dashed rounded-md mb-6 flex justify-between items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-500"
              >
                <path d="M12 3v12" />
                <path d="m8 11 4 4 4-4" />
                <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" />
              </svg>
              <p className="text-sm text-gray-700">Drag and drop your files</p>
              <p className="text-xs text-gray-500">File formats we support</p>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-500 text-white">
                Upload manually
              </button>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-medium">Uploaded files (10)</h3>
                <div className="flex items-center">
                  <label htmlFor="sort" className="text-sm font-medium mr-2">
                    Sort by:
                  </label>
                  <button
                    type="button"
                    role="combobox"
                    aria-controls="radix-:r3m:"
                    aria-expanded="false"
                    aria-autocomplete="none"
                    dir="ltr"
                    data-state="closed"
                    data-placeholder
                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="sort"
                  >
                    <span style={{ pointerEvents: "none" }}>
                      Recently uploaded
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 opacity-50"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg">
                <div className="relative w-full overflow-auto">
                  <table className="w-full caption-bottom text-sm">
                    <tbody className="[&_tr:last-child]:border-0">
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
                          Newly_imported_file.pdf
                        </td>
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                          8.8 mb
                        </td>
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                          Kristin Watson
                        </td>
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                            Select
                          </button>
                        </td>
                      </tr>
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
                          WorldFoodsDealSheet.pdf
                        </td>
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                          3.6 mb
                        </td>
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                          Devon Lane
                        </td>
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                            Select
                          </button>
                        </td>
                      </tr>
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
                          promo432432.pdf
                        </td>
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                          4.1 mb
                        </td>
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                          Ronald Richards
                        </td>
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                            Select
                          </button>
                        </td>
                      </tr>
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
                          pop03152021.xlsx
                        </td>
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                          3.9 mb
                        </td>
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                          Bessie Cooper
                        </td>
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                            Select
                          </button>
                        </td>
                      </tr>
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
                          DealSheet032021.xlsx
                        </td>
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                          8.4 mb
                        </td>
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                          Jenny Wilson
                        </td>
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                            Select
                          </button>
                        </td>
                      </tr>
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
                          Verkoopfactuur SL200472.pdf
                        </td>
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                          337 kb
                        </td>
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                          Cameron Williamson
                        </td>
                        <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                            Select
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <>
        <div className="flex">
          <span>
            <Sidebar />
          </span>

          <div className=" flex-1 mt-20 ml-52 lg:ml-72">
            {/* <HeroSection />  */}
            <main className=" mx-10 my-5 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
              {dummyData.map((item) => (
                <DocumentCard key={item.id} data={item} />
              ))}
            </main>
          </div>
        </div>
      </>
    </>
  );
};

export default MyDocuments;
