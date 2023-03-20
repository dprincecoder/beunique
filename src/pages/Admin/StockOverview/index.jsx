import { ClipboardExport, Filter } from "iconsax-react";
import React from "react";
import styles from "./stockOverview.module.css";

const StockOverview = () => {
  const stocks = [
    {
      name: "Widget A",
      productNumber: "123",
      category: "Widgets",
      price: "$10",
      amountOfUnits: 5,
    },
    {
      name: "Widget B",
      productNumber: "456",
      category: "Widgets",
      price: "$15",
      amountOfUnits: 7,
    },
  ];
  return (
    <div className={styles.stockOverview}>
      <section className="w-full top-0 right-0 w-full pt-[30px] pr-[30px] pb-[30px] overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-track-[#ACB2BE] scrollbar-thumb-black scrollbar-track-rounded-md scrollbar-thumb-rounded-md scrollbar-thumb-none">
        <section className="w-full h-full">
          <section className="w-full grid place-items-center grid-cols-4 divide-x mt-12">
            <section className="grid place-items-center w-full">
              <h4 className="font-inter font-semibold text-[16px] text-[1d2939]">
                Total Sales
              </h4>
              <h2 className="font-anybody font-medium text-[24px] text-[1d2939] mt-2">
                ₦234199
              </h2>
            </section>
            <section className="grid place-items-center w-full">
              <h4 className="font-inter font-semibold text-[16px] text-[1d2939]">
                Total units sold
              </h4>
              <h2 className="font-anybody font-medium text-[24px] text-[1d2939] mt-2">
                134
              </h2>
            </section>
            <section className="grid place-items-center w-full">
              <h4 className="font-inter font-semibold text-[16px] text-[1d2939]">
                Total Orders
              </h4>
              <h2 className="font-anybody font-medium text-[24px] text-[1d2939] mt-2">
                122
              </h2>
            </section>
            <section className="grid place-items-center w-full">
              <h4 className="font-inter font-semibold text-[16px] text-[1d2939]">
                Total category
              </h4>
              <h2 className="font-anybody font-medium text-[24px] text-[1d2939] mt-2">
                6
              </h2>
            </section>
          </section>

          <section className="w-full mt-8 flex flex-col items-center space-y-4">
            <section className="w-full flex items-start justify-between">
              <h4 className="font-inter font-bold text-[20px] text-black">
                Stock
              </h4>
              <section className="flex items-center">
                <button
                  type="button"
                  className="px-6 py-2.5 text-[#101828] hover:bg-[#101828] hover:text-[#fcfcfd] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex align-center border-[1px] border-[#eaecf0] mr-4"
                  onClick={() => alert("Exporting list...")}
                >
                  <ClipboardExport size={20} className="mr-3" />
                  Export list
                </button>
                <button
                  type="button"
                  className="px-6 py-2.5 bg-[#101828] text-[#fcfcfd] font-medium hover:font-semibold text-[14px] rounded-lg focus:outline-none focus:ring-0 transition duration-300 ease-in-out flex align-center"
                  onClick={() => alert("Filtering stock...")}
                >
                  <Filter size={20} className="mr-3" />
                  Filter
                </button>
              </section>
            </section>
          </section>
        </section>
      </section>
      <div className={styles.stockTableWrapper}>
        <table className={styles.stockTable}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Product Number</th>
              <th>Category</th>
              <th>Price</th>
              <th>Amount of Units</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock, index) => (
              <tr
                key={stock.productNumber}
                className={index % 2 === 0 ? styles.oddRow : ""}
              >
                <td>{index + 1}</td>
                <td>{stock.name}</td>
                <td>{stock.productNumber}</td>
                <td>{stock.category}</td>
                <td>{stock.price}</td>
                <td>{stock.amountOfUnits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockOverview;
