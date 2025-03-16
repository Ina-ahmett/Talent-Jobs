import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";

const ContactDetails = () => {
  const data = [
    { name: "Monday", online: 5000, offline: 3000 },
    { name: "Tuesday", online: 7000, offline: 4000 },
    { name: "Wednesday", online: 6000, offline: 5000 },
    { name: "Thursday", online: 8000, offline: 6000 },
    { name: "Friday", online: 7000, offline: 5000 },
    { name: "Saturday", online: 9000, offline: 7000 },
    { name: "Sunday", online: 10000, offline: 8000 },
  ];

  return (
    <div className="p-6 ml-[18%] grid grid-cols-3 gap-6">
      {/* Sales Summary */}
      <div className="col-span-3 grid grid-cols-4 gap-4">
        {[
          { title: "Total Sales", value: "$1k", change: "+6%", color: "bg-red-100" },
          { title: "Total Orders", value: "300", change: "+5%", color: "bg-yellow-100" },
          { title: "Product Sold", value: "5", change: "+12%", color: "bg-green-100" },
          { title: "New Customers", value: "8", change: "0.8%", color: "bg-purple-100" },
        ].map((item, index) => (
          <div key={index} className={`${item.color} p-4 rounded-lg shadow`}> 
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-2xl font-bold">{item.value}</p>
            <p className="text-sm text-gray-500">{item.change} from yesterday</p>
          </div>
        ))}
      </div>
      
      {/* Total Revenue */}
      <div className="bg-white p-6 rounded-lg shadow col-span-1">
        <h3 className="text-lg font-bold mb-4">Total Revenue</h3>
        <BarChart width={300} height={200} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="online" fill="#4CAF50" />
          <Bar dataKey="offline" fill="#2196F3" />
        </BarChart>
      </div>
      
      {/* Customer Satisfaction */}
      <div className="bg-white p-6 rounded-lg shadow col-span-1">
        <h3 className="text-lg font-bold mb-4">Customer Satisfaction</h3>
        <LineChart width={300} height={200} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="online" stroke="#4CAF50" strokeWidth={2} />
          <Line type="monotone" dataKey="offline" stroke="#2196F3" strokeWidth={2} />
        </LineChart>
      </div>
    </div>
  );
};

export default ContactDetails;
