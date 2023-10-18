import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  menuClasses,
  MenuItemStyles,
} from "react-pro-sidebar";
import { SidebarHeader } from "./components/SidebarHeader";
import { Typography } from "./components/Typography";
import { colors } from "@/components/config";
import TopBar from "../TopBar/TopBar";

const themes = {
  light: {
    sidebar: {
      backgroundColor: "#f8f7f7",
      color: "#607489",
    },
    menu: {
      menuContent: "#fbfcfd",
      icon: colors.primary,
      hover: {
        backgroundColor: colors.secondary,
        color: "#000",
      },
      disabled: {
        color: "#9fb6cf",
      },
    },
  },
};

// hex to rgba converter
const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const SidebarComponent = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const [toggled, setToggled] = React.useState(false);
  const [broken, setBroken] = React.useState(false);

  const menuItemStyles: MenuItemStyles = {
    root: {
      fontSize: "13px",
      fontWeight: 400,
    },
    icon: {
      color: themes.light.menu.icon,
      [`&.${menuClasses.disabled}`]: {
        color: themes.light.menu.disabled.color,
      },
    },
    SubMenuExpandIcon: {
      color: "#b6b7b9",
    },
    subMenuContent: ({ level }) => ({
      backgroundColor:
        level === 0
          ? hexToRgba(themes.light.menu.menuContent, !collapsed ? 0.4 : 1)
          : "transparent",
    }),
    button: {
      [`&.${menuClasses.disabled}`]: {
        color: themes.light.menu.disabled.color,
      },
      "&:hover": {
        backgroundColor: hexToRgba(themes.light.menu.hover.backgroundColor, 1),
        color: themes.light.menu.hover.color,
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        direction: "ltr",
      }}
    >
      <Sidebar
        collapsed={collapsed}
        toggled={toggled}
        onBackdropClick={() => setToggled(false)}
        onBreakPoint={setBroken}
        breakPoint="md"
        backgroundColor={hexToRgba(themes.light.sidebar.backgroundColor, 1)}
        rootStyles={{
          color: themes.light.sidebar.color,
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <SidebarHeader style={{ marginBottom: "24px", marginTop: "16px" }} />
          <div style={{ flex: 1, marginBottom: "32px" }}>
            <div style={{ padding: "0 24px", marginBottom: "8px" }}>
              <Typography
                variant="body2"
                fontWeight={600}
                style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: "0.5px" }}
              >
                General
              </Typography>
            </div>
            <Menu menuItemStyles={menuItemStyles}>
              <MenuItem icon={<i className="fa-solid fa-user"></i>}>
                Users
              </MenuItem>
            </Menu>
            <Menu menuItemStyles={menuItemStyles}>
              <SubMenu
                label="Settings"
                icon={<i className="fa-solid fa-gear"></i>}
              >
                <MenuItem> Pie charts</MenuItem>
                <MenuItem> Line charts</MenuItem>
                <MenuItem> Bar charts</MenuItem>
              </SubMenu>
            </Menu>
          </div>
        </div>
      </Sidebar>

      <main className="w-100">
        <TopBar />
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
        <p>ababababababa</p>
      </main>
    </div>
  );
};
