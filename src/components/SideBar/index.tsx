import {
  useState,
  useEffect,
  type CSSProperties,
  type Dispatch,
  type SetStateAction,
} from "react";
import { Menu, Grid, Button, theme } from "antd";
import { useLocation, useNavigate } from "react-router";
import {
  FiHome,
  FiUsers,
  FiDollarSign,
  FiSettings,
  FiPieChart,
  FiCalendar,
  FiMenu,
  FiLayers,
  FiSmartphone,
  FiCreditCard,
} from "react-icons/fi";
import "../../styles/sidebar.css";

const { useBreakpoint } = Grid;

interface SideBarProps {
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
}

const SideBar = ({ collapsed, setCollapsed }: SideBarProps) => {
  const screens = useBreakpoint();
  const location = useLocation();
  const navigate = useNavigate();
  const { token } = theme.useToken();

  const [selectedKeys, setSelectedKeys] = useState<string[]>(["1"]);

  const [openKeys, setOpenKeys] = useState<string[]>(() => {
    if (location.pathname.startsWith("/services")) {
      return ["6"];
    }
    return [];
  });

  useEffect(() => {
    const pathname = location.pathname;

    if (pathname === "/") {
      setSelectedKeys(["1"]);
    } else if (pathname.startsWith("/users")) {
      setSelectedKeys(["2"]);
    } else if (pathname.startsWith("/transactions")) {
      setSelectedKeys(["3"]);
    } else if (pathname.startsWith("/analytics")) {
      setSelectedKeys(["4"]);
    } else if (pathname.startsWith("/reports")) {
      setSelectedKeys(["5"]);
    } else if (pathname.startsWith("/services")) {
      // Make sure Services submenu is open
      if (!openKeys.includes("6")) {
        setOpenKeys((prevKeys) => [...prevKeys, "6"]);
      }

      // Select the appropriate child menu based on the specific route
      if (pathname.includes("/mobile-topup")) {
        setSelectedKeys(["services-topup"]);
      } else if (pathname.includes("/payments")) {
        setSelectedKeys(["services-payment"]);
      }
    } else if (pathname.startsWith("/settings")) {
      setSelectedKeys(["7"]);
    }
  }, [location.pathname, openKeys]);

  const handleOpenChange = (keys: string[]) => {
    setOpenKeys(keys);
  };

  const handleMenuClick = (info: { key: string }) => {
    if (info.key === "6") {
      return;
    }

    setSelectedKeys([info.key]);

    switch (info.key) {
      case "1":
        navigate("/");
        break;
      case "2":
        navigate("/users");
        break;
      case "3":
        navigate("/transactions");
        break;
      case "4":
        navigate("/analytics");
        break;
      case "5":
        navigate("/reports");
        break;
      case "services-topup":
        if (!openKeys.includes("6")) {
          setOpenKeys([...openKeys, "6"]);
        }
        navigate("/services/mobile-topup");
        break;
      case "services-payment":
        if (!openKeys.includes("6")) {
          setOpenKeys([...openKeys, "6"]);
        }
        navigate("/services/payments");
        break;
      case "7":
        navigate("/settings");
        break;
    }
  };

  const logoStyle: CSSProperties = {
    height: "64px",
    display: "flex",
    alignItems: "center",
    justifyContent: collapsed ? "center" : "space-between",
    padding: collapsed ? "0" : "0 20px",
    color: "white",
    backgroundColor: token.colorPrimary,
  };

  return (
    <div style={{ height: "100%" }}>
      <div style={logoStyle}>
        {!collapsed && <h2 style={{ margin: 0 }}>Amrit Admin</h2>}
        {!collapsed && !screens.md && (
          <Button
            type="text"
            icon={<FiMenu size={18} />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              color: "white",
              fontSize: "16px",
              background: "transparent",
              border: "none",
            }}
          />
        )}
      </div>

      <Menu
        mode="inline"
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        onOpenChange={handleOpenChange}
        onClick={handleMenuClick}
        style={{
          borderRight: 0,
          fontSize: screens.lg ? "14px" : "12px",
          backgroundColor: token.colorPrimary,
          color: "white",
        }}
        className="primary-sidebar-menu"
        theme="dark"
        items={[
          {
            key: "1",
            icon: <FiHome size={16} />,
            label: "Dashboard",
          },
          {
            key: "2",
            icon: <FiUsers size={16} />,
            label: "Users",
          },
          {
            key: "3",
            icon: <FiDollarSign size={16} />,
            label: "Transactions",
          },
          {
            key: "4",
            icon: <FiPieChart size={16} />,
            label: "Analytics",
          },
          {
            key: "5",
            icon: <FiCalendar size={16} />,
            label: "Reports",
          },
          {
            key: "6",
            icon: <FiLayers size={16} />,
            label: "Services",
            children: [
              {
                key: "services-topup",
                icon: <FiSmartphone size={16} />,
                label: "Mobile Topup",
              },
              {
                key: "services-payment",
                icon: <FiCreditCard size={16} />,
                label: "Payments",
              },
            ],
          },
          {
            key: "7",
            icon: <FiSettings size={16} />,
            label: "Settings",
          },
        ]}
      />
    </div>
  );
};

export default SideBar;
