import {
  useState,
  type CSSProperties,
  type Dispatch,
  type SetStateAction,
} from "react";
import {
  Input,
  Badge,
  Avatar,
  Button,
  Grid,
  Dropdown,
  Space,
  Divider,
  Typography,
  theme,
} from "antd";
import {
  FiMenu,
  FiBell,
  FiMail,
  FiUser,
  FiLogOut,
  FiSettings,
} from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { IoChevronDownOutline } from "react-icons/io5";
import "./topbar.css";

const { useBreakpoint } = Grid;
const { Text } = Typography;

interface TopBarProps {
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
}

const TopBar = ({ collapsed, setCollapsed }: TopBarProps) => {
  const screens = useBreakpoint();
  const { token } = theme.useToken();
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
    gap: "12px",
  };

  // Define dropdown menu items for user profile
  const userMenuItems = [
    {
      key: "profile",
      label: (
        <Space>
          <FiUser size={16} />
          <Text>My Profile</Text>
        </Space>
      ),
    },
    {
      key: "settings",
      label: (
        <Space>
          <FiSettings size={16} />
          <Text>Settings</Text>
        </Space>
      ),
    },
    {
      type: "divider" as const,
    },
    {
      key: "logout",
      label: (
        <Space>
          <FiLogOut size={16} />
          <Text>Logout</Text>
        </Space>
      ),
      danger: true,
    },
  ];

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
            prefix={
              <AiOutlineSearch style={{ color: token.colorTextSecondary }} />
            }
            style={{
              width: screens.lg ? 300 : 180,
              borderRadius: token.borderRadius,
            }}
          />
        )}
      </div>
      <div style={userInfoStyle}>
        <Badge count={4} dot>
          <Button
            type="text"
            className="topbar-notification-btn"
            icon={<FiBell size={20} />}
            style={{
              backgroundColor: token.colorBgTextHover,
              color: token.colorTextSecondary,
              borderRadius: "50%",
              height: 36,
              width: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </Badge>
        {screens.sm && (
          <Badge count={2} dot>
            <Button
              type="text"
              className="topbar-notification-btn"
              icon={<FiMail size={20} />}
              style={{
                backgroundColor: token.colorBgTextHover,
                color: token.colorTextSecondary,
                borderRadius: "50%",
                height: 36,
                width: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          </Badge>
        )}
        <Divider type="vertical" style={{ height: 24, margin: "0 4px" }} />
        <Dropdown
          menu={{ items: userMenuItems }}
          trigger={["click"]}
          arrow
          placement="bottomRight"
          onOpenChange={setDropdownOpen}
        >
          <Space
            className={`topbar-user-dropdown ${
              dropdownOpen ? "topbar-dropdown-open" : ""
            }`}
          >
            <Avatar
              style={{
                backgroundColor: token.colorPrimary,
                boxShadow: `0 2px 8px ${token.colorPrimaryActive}40`,
              }}
            >
              A
            </Avatar>
            {screens.md && (
              <Space size={2}>
                <Text strong>Admin User</Text>
                <IoChevronDownOutline
                  size={14}
                  className="topbar-dropdown-arrow"
                />
              </Space>
            )}
          </Space>
        </Dropdown>
      </div>
    </div>
  );
};

export default TopBar;
