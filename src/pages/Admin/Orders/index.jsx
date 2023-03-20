import { ArrowCircleDown, ClipboardExport, Filter } from "iconsax-react";
import React from "react";
import styles from "./orders.module.css";
function AdminOrders() {
  const stocks = [
    {
      name: "John Smith",
      orderNumber: 123456,
      email: "john.smith@example.com",
      status: "Delivered",
      amountOrdered: 10,
    },
    {
      name: "Jane Doe",
      orderNumber: 234567,
      email: "jane.doe@example.com",
      status: "OutForDelivery",
      amountOrdered: 5,
    },
    {
      name: "Bob Johnson",
      orderNumber: 345678,
      email: "bob.johnson@example.com",
      status: "Canceled",
      amountOrdered: 2,
    },
    {
      name: "Samantha Brown",
      orderNumber: 456789,
      email: "samantha.brown@example.com",
      status: "Delivered",
      amountOrdered: 8,
    },
    {
      name: "Michael Lee",
      orderNumber: 567890,
      email: "michael.lee@example.com",
      status: "OutForDelivery",
      amountOrdered: 3,
    },
  ];

  return (
    <section className="w-full mt-10 flex flex-col items-center space-y-4 pr-4">
      <section className="w-full flex items-start justify-between">
        <h4 className="font-inter font-bold text-[24px] text-black">Orders</h4>
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
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Order Number</th>
              <th>Email</th>
              <th>Status</th>
              <th>Amount Ordered</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock, index) => (
              <tr
                key={stock.orderNumber}
                className={index % 2 === 0 ? styles.oddRow : ""}
              >
                <td>{index + 1}</td>
                <td>{stock.name}</td>
                <td>{stock.orderNumber}</td>
                <td>{stock.email}</td>
                <td>
                  <span
                    className={`${styles[stock.status]} ${styles.orderStatus}`}
                  >
                    {stock.status} <ArrowCircleDown className={styles.arrow} />
                  </span>
                </td>
                <td>{stock.amountOrdered}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default AdminOrders;
