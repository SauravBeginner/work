import Sidebar from "../components/Sidebar";

const AddDocument = () => {
  return (
    <div className="bg-white p-8">
      <div className="flex gap-8">
        <Sidebar />
        <div className="bg-[#edf2f7] min-h-screen flex items-center justify-center p-4 w-full">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
            <h1 className="text-2xl font-semibold text-center mb-6">Upload</h1>
            <div className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg mb-6">
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
                className="text-purple-500 w-12 h-12 mb-3"
              >
                <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                <path d="M12 12v9" />
                <path d="m16 16-4-4-4 4" />
              </svg>
              <p className="text-lg font-medium mb-1">
                Drag &amp; drop files or
                <span className="text-purple-600 cursor-pointer">Browse</span>
              </p>
              <p className="text-sm text-gray-500">
                Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
              </p>
            </div>
            <div className="mb-4">
              <p className="font-medium mb-2">Uploading - 3/3 files</p>
              <div className="mb-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">
                    your-file-here.PDF
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
                    className="text-red-500 w-5 h-5"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <path d="m15 9-6 6" />
                    <path d="m9 9 6 6" />
                  </svg>
                </div>
                <div
                  aria-valuemax={100}
                  aria-valuemin={0}
                  role="progressbar"
                  data-state="indeterminate"
                  data-max={100}
                  className="relative overflow-hidden w-full bg-green-200 rounded-full h-2.5"
                >
                  <div
                    data-state="indeterminate"
                    data-max={100}
                    className="h-full w-full flex-1 bg-primary transition-all"
                    style={{ transform: "translateX(-50%)" }}
                  />
                </div>
              </div>
            </div>
            <div className="mb-6">
              <p className="font-medium mb-2">Uploaded</p>
              <div className="mb-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">document-name.PDF</span>
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
                    className="text-green-500 w-5 h-5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div
                  aria-valuemax={100}
                  aria-valuemin={0}
                  role="progressbar"
                  data-state="indeterminate"
                  data-max={100}
                  className="relative overflow-hidden w-full bg-green-200 rounded-full h-2.5"
                >
                  <div
                    data-state="indeterminate"
                    data-max={100}
                    className="h-full w-full flex-1 bg-primary transition-all"
                    style={{ transform: "translateX(0%)" }}
                  />
                </div>
              </div>
              <div className="mb-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">
                    image-name-goes-here.png
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
                    className="text-green-500 w-5 h-5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div
                  aria-valuemax={100}
                  aria-valuemin={0}
                  role="progressbar"
                  data-state="indeterminate"
                  data-max={100}
                  className="relative overflow-hidden w-full bg-green-200 rounded-full h-2.5"
                >
                  <div
                    data-state="indeterminate"
                    data-max={100}
                    className="h-full w-full flex-1 bg-primary transition-all"
                    style={{ transform: "translateX(0%)" }}
                  />
                </div>
              </div>
            </div>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
              UPLOAD FILES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDocument;
