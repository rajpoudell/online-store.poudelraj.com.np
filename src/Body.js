import { useEffect, useState } from "react";

export const Body = ({ search }) => {
  const [fakeData, setFakeData] = useState([]);

  useEffect(() => {
    fakeDatas();
    console.log(fakeData);
  }, [fakeData]);

  const fakeDatas = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const jsonData = await response.json();
    console.log(jsonData);
    setFakeData(jsonData);
  };

  const filteredData = fakeData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {filteredData.map((value, index) => {
            return (
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={index}>
                <p className="block relative h-48 rounded overflow-hidden drop-shadow-2xl" href="#">
                  <img
                    alt="ecommerce"
                    className="bg-transparent object-fill rounded-xl cursor-pointer hover:scale-105  h-full block aspect-square transition ease-in delay-150"
                    src={value.image}
                  />
                </p>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font cursor-default mb-1">
                    {value.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium cursor-pointer flex flex-wrap">
                    {value.title}
                  </h2>
                  <p className="mt-1 cursor-pointer">${value.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};