export default function FloatingNavbar() {
  return (
    <div className="">
      {/* -- main menu --  */}
      <div className="flex justify-center gap-2 bg-white rounded-3xl shadow-md mx-48 py-3">
        <div className="text-white text-sm font-normal bg-blue-500 rounded-xl px-3 py-2">
          All Items
        </div>
        <div className="text-white text-sm font-normal bg-blue-500 rounded-xl px-3 py-2">
          Main Course
        </div>
        <div className="text-white text-sm font-normal bg-blue-500 rounded-xl px-3 py-2">
          Dessert
        </div>
        <div className="text-white text-sm font-normal bg-blue-500 rounded-xl px-3 py-2">
          Sides
        </div>
        <div className="text-white text-sm font-normal bg-blue-500 rounded-xl px-3 py-2">
          Beverage
        </div>
        <div className="text-white text-sm font-normal bg-blue-500 rounded-xl px-3 py-2">
          Package
        </div>
      </div>
    </div>
  );
}
