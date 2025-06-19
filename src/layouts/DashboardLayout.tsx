import { Layout, Grid, theme } from "antd";
import useScreenHeight from "../hooks/useScreenHeight";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import { Outlet, useNavigate } from "react-router";
import type { CSSProperties } from "react";
import { useState, useEffect } from "react";

const { Header, Content, Sider, Footer: AntFooter } = Layout;
const { useBreakpoint } = Grid;

const DashboardLayout = () => {
  const navigate = useNavigate();
  // Get the primary color from Ant Design's theme
  const { token } = theme.useToken();

  const isAuthenticated = true; // Replace with actual authentication logic

  const screenHeight = useScreenHeight();
  const [collapsed, setCollapsed] = useState(() => {
    // Check if window is defined (for SSR compatibility)
    if (typeof window !== "undefined") {
      // If on a small screen, start collapsed
      return window.innerWidth < 768; // 768px is typical md breakpoint
    }
    return false;
  });
  const screens = useBreakpoint();

  useEffect(() => {
    if (screens.md) {
      requestAnimationFrame(() => {
        setCollapsed(false);
      });
    } else {
      setCollapsed(true);
    }
  }, [screens.md]);

  const layoutStyle: CSSProperties = {
    height: screenHeight,
    overflow: "hidden",
  };

  const siderStyle: CSSProperties = {
    height: "100%",
    position: "fixed",
    left: 0,
    overflow: "auto",
    zIndex: screens.md ? 10 : 1000, // Higher z-index for overlay mode on smaller screens
    transition: "all 0.2s",
    boxShadow: !screens.md && !collapsed ? "0 0 10px rgba(0,0,0,0.2)" : "none",
  };

  const rightSectionStyle: CSSProperties = {
    marginLeft: screens.md ? (collapsed ? 80 : 300) : 0, // No margin on smaller screens for overlay effect
    height: "100%",
    display: "flex",
    flexDirection: "column",
    transition: "all 0.2s",
  };

  const headerStyle: CSSProperties = {
    padding: "0 20px",
    height: 64,
    backgroundColor: "#fff",
    boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)",
  };

  const contentStyle: CSSProperties = {
    padding: "20px",
    flex: 1,
    overflow: "auto",
  };

  const footerStyle: CSSProperties = {
    padding: "10px 20px",
    backgroundColor: "#fff",
    boxShadow: "0 -1px 4px rgba(0, 0, 0, 0.1)",
  };

  if (!isAuthenticated) {
    navigate("/signin");
  }

  return (
    <Layout style={layoutStyle}>
      {/* Backdrop for overlay sidebar on small screens */}
      {!screens.md && !collapsed && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.45)",
            zIndex: 999,
            transition: "all 0.3s",
            opacity: collapsed ? 0 : 1,
            visibility: collapsed ? "hidden" : "visible",
          }}
          onClick={() => setCollapsed(true)}
        />
      )}
      <Sider
        style={{
          ...siderStyle,
          backgroundColor: token.colorPrimary,
        }}
        width={300}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        trigger={null}
        breakpoint="md"
        collapsedWidth={screens.md ? 80 : 0}
        zeroWidthTriggerStyle={{ top: 10 }}
        defaultCollapsed={false}
      >
        <SideBar collapsed={collapsed} setCollapsed={setCollapsed} />
      </Sider>
      <Layout style={rightSectionStyle}>
        <Header style={headerStyle}>
          <TopBar collapsed={collapsed} setCollapsed={setCollapsed} />
        </Header>
        <Content style={contentStyle}>
          <Outlet />
        </Content>
        <AntFooter style={footerStyle}>
          <Footer />
        </AntFooter>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
