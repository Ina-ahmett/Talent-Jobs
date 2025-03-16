const CategoryProps = ({ categories }) => {
    return (
      <div className="bg-white py-16 px-6 flex justify-center">
        <div className="max-w-4xl w-full min-h-[500px] bg-white rounded-lg  p-10">
          <h2 className="text-4xl font-bold text-center mb-10">Popular Categories</h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`p-8 flex flex-col items-center text-center rounded-lg shadow-md transition-all cursor-pointer hover:scale-105 duration-300 ${
                  category.featured ? "bg-blue-100 hover:bg-blue-200" : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                <i className={`${category.icon} text-4xl mb-4`}></i>
                <h3 className="text-xl font-semibold">{category.title}</h3>
                <p className="text-sm">{category.positions} Open Positions</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};
  
export default CategoryProps;