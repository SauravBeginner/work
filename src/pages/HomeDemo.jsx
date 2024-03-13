export default function HomeDemo() {
  return (
    <div className="bg-[#f7f7f7]">
      <nav className="py-6 px-8 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <img alt="Realtime Colors" className="h-6" src="/placeholder.svg" />
          <div className="hidden md:flex space-x-4">
            <a
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
              href="#"
            >
              Figma Plugin
            </a>
            <a
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
              href="#"
            >
              VS Code Theme Editor
            </a>
            <a
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
              href="#"
            >
              Docs
            </a>
            <div className="relative">
              <button className="text-sm font-medium text-gray-600 hover:text-gray-900">
                Templates
              </button>
              <div className="absolute hidden mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <a
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  href="#"
                >
                  Template 1
                </a>
                <a
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  href="#"
                >
                  Template 2
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <a
            className="py-2 px-4 text-sm font-medium text-gray-600 bg-white rounded-md shadow-sm hover:bg-gray-50"
            href="#"
          >
            Login
          </a>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 py-20">
          <div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              <span className="block">Visualize Your</span>
              <span className="block text-[#22c55e]">Colors & Fonts</span>
              <span className="block">On a Real Site</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Choosing colors or typography for your website? Use the Toolbar
              below to realize your choices.
            </p>
            <div className="flex space-x-4">
              <button className="bg-[#22c55e] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#16a34a]">
                How does it work?
              </button>
              <button className="bg-[#22c55e] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#16a34a]">
                Get Started
              </button>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="space-y-6">
              <div className="bg-[#22c55e] h-64 w-64 rounded-lg" />
              <div className="flex justify-between space-x-6">
                <div className="bg-[#a3e635] h-32 w-32 rounded-lg" />
                <div className="bg-[#a3e635] h-32 w-32 rounded-lg" />
              </div>
              <div className="flex space-x-6">
                <div className="bg-[#a3e635] h-16 w-16 rounded-lg" />
                <div className="bg-[#a3e635] h-16 w-16 rounded-lg" />
                <div className="bg-[#a3e635] h-16 w-16 rounded-lg" />
                <div className="bg-[#a3e635] h-16 w-16 rounded-lg" />
              </div>
              <div className="bg-[#a3e635] h-8 w-32 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
