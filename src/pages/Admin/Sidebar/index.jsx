// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/router";
import { DocumentUpload, I3Dcube, Setting2, ShoppingCart } from "iconsax-react";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoutSvg from "./assets/logout.svg";
import styles from "./sidebar.module.css";

const sidebar_list = [
  {
    name: "Overview",
    link: "/admin",
    icon: <I3Dcube size={20} className="mr-3" />,
  },
  {
    name: "Upload",
    link: "/admin?type=upload",
    icon: <DocumentUpload size={20} className="mr-3" />,
  },
  {
    name: "Orders",
    link: "/admin?type=orders",
    icon: <ShoppingCart size={20} className="mr-3" />,
  },
  {
    name: "Settings",
    link: "/admin?type=settings",
    icon: <Setting2 size={20} className="mr-3" />,
  },
];

const Sidebar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  // const router = useRouter();
  // const { asPath } = router;
  // console.log(asPath);
  const navigate = useNavigate();
  const location = useLocation();
  const fullPath = location.pathname;
  console.log(fullPath);

  const logoutHandler = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/auth/signin");
  };

  return (
    <div
      className={`${styles["admin-sidebar-wrap"]} ${
        toggleSidebar ? styles.showSidebar : ""
      }`}
    >
      <div className={styles["admin-sidebar-header"]}>
        <RxHamburgerMenu
          onClick={() => setToggleSidebar(!toggleSidebar)}
          className="mr-2"
        />
        <div className="flex">
          <Link to="/">
            <img src="/logo.png" alt="BeUnique" width={164} height={32} />
          </Link>
          <span className="text-[12px] text-[#101828] ml-2">Admin</span>
        </div>
      </div>
      <section className={styles["admin-sidebar"]}>
        <ul className={styles["admin-sidebar-list"]}>
          {sidebar_list.map((item, index) => {
            return (
              <li
                key={index}
                className={`${styles["admin-sidebar-list-item"]} ${
                  item.link === fullPath ? styles.isActive : ""
                }`}
                onClick={() => setToggleSidebar(false)}
              >
                <Link to={item.link}>
                  {item.icon}
                  <p className={styles["admin-sidebar-list-item-link"]}>
                    {item.name}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>

        <div
          className={styles["logout-btn"]}
          onClick={() => {
            logoutHandler();
            // router.reload(window.location.pathname);
          }}
        >
          <img src={logoutSvg} alt="logout" />
          <button className={styles["btn btn-primary"]}>Logout</button>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
