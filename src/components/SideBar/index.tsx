import type { CSSProperties, Dispatch, SetStateAction } from "react";
import { Menu, Grid, Button, theme } from "antd";
import {
  FiHome,
  FiUsers,
  FiDollarSign,
  FiSettings,
  FiPieChart,
  FiCalendar,
  FiMenu,
} from "react-icons/fi";
import "../../styles/sidebar.css";

const { useBreakpoint } = Grid;

interface SideBarProps {
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
}

const SideBar = ({ collapsed, setCollapsed }: SideBarProps) => {
  const screens = useBreakpoint();
  // Get the primary color from Ant Design's theme
  const { token } = theme.useToken();

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
        {!collapsed && <h2 style={{ margin: 0 }}>Pesewa Admin</h2>}
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
        defaultSelectedKeys={["1"]}
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
            icon: <FiSettings size={16} />,
            label: "Settings",
          },
        ]}
      />
    </div>
  );
};

export default SideBar;
