import type { CSSProperties, Dispatch, SetStateAction } from "react";
import { Input, Badge, Avatar, Button, Grid } from "antd";
import { FiMenu, FiBell, FiMail } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";

const { useBreakpoint } = Grid;

interface TopBarProps {
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
}

const TopBar = ({ collapsed, setCollapsed }: TopBarProps) => {
  const screens = useBreakpoint();

  const topbarStyle: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
  };

  const userInfoStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  return (
    <div style={topbarStyle}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button
          type="text"
          icon={<FiMenu size={20} />}
          onClick={() => setCollapsed(!collapsed)}
          style={{ marginRight: 16 }}
        />
        {screens.md && (
          <Input
            placeholder="Search..."
            prefix={<AiOutlineSearch />}
            style={{ width: screens.lg ? 300 : 180 }}
          />
        )}
      </div>
      <div style={userInfoStyle}>
        <Badge count={4}>
          <Button type="text" icon={<FiBell size={20} />} />
        </Badge>
        {screens.sm && (
          <Badge count={2}>
            <Button type="text" icon={<FiMail size={20} />} />
          </Badge>
        )}
        <Avatar style={{ backgroundColor: "#1890ff" }}>A</Avatar>
        {screens.md && <span style={{ fontWeight: 500 }}>Admin User</span>}
      </div>
    </div>
  );
};

export default TopBar;
