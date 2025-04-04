export default function Myapp() {
  return (
    <div className="flex justify-center items-center h-screen bg-white ">
      <div className="w-full max-w-lg  ">
        {/* Main content area with green background */}
        <div className="relative w-full h-48 bg-green-500">
          {/* Left circle cutout */}
          <div className="absolute top-1/4 left-0 w-8 h-16 bg-white rounded-r-full"></div>

          {/* Banner */}
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-teal-100 border border-gray-800 text-black font-medium cursor-pointer transition duration-300 hover:bg-teal-200 hover:border-black hover:scale-105 "> 
            Banner
          </div>

          {/* Close button */}
          <div className="absolute top-1 right-1 w-5 h-5 text-sm flex items-center justify-center bg-black text-white rounded-sm ">
          X
        </div>


          {/* Centered text */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="border border-dashed border-white text-white rounded px-4 py-2">
              This is Next.js position
            </div>
          </div>

          {/* Bottom right cutout */}
          <div className="absolute bottom-0 -right-0 w-16 h-8 bg-white rounded-tl-full"></div>
        </div>
      </div>
    </div>
  );
}