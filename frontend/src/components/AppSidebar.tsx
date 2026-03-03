import { useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import {
  LayoutDashboard,
  BookOpen,
  Truck,
  Package,
  Wallet,
  Users,
  BookText,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { authApi } from "@/api/auth.api";
import { Button } from "@/components/ui/button";

const navItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Daily Entry", url: "/daily-entry", icon: BookOpen, highlight: true },
  { title: "Dispatch", url: "/dispatch", icon: Truck },
  { title: "Stock", url: "/stock", icon: Package },
  { title: "Expenses", url: "/expenses", icon: Wallet },
  { title: "Workers", url: "/workers", icon: Users },
  { title: "Cash Book", url: "/cash-book", icon: BookText },
  { title: "Reports", url: "/reports", icon: BarChart3 },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    authApi.logout();
    navigate("/login");
  };

  return (
    <Sidebar collapsible="icon" className="border-r-0">
      <SidebarHeader className="p-4 border-b border-sidebar-border/50">
        <div className="flex items-center gap-3">
          <img src="/favicon.ico" alt="RD Interlock" className="h-10 w-10 shrink-0" />
          {!collapsed && (
            <div>
              <p className="font-bold text-sidebar-foreground text-sm leading-tight">RD Interlock</p>
              <p className="text-xs text-sidebar-foreground/50">Factory Operations</p>
            </div>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent className="pt-3 px-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className="h-11 mb-0.5"
                    >
                      <NavLink
                        to={item.url}
                        end
                        className="rounded-xl transition-all duration-200 text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
                        activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-semibold"
                      >
                        <item.icon className="h-5 w-5 mr-3 shrink-0" />
                        {!collapsed && (
                          <span className="text-sm flex items-center gap-2">
                            {item.title}
                            {item.highlight && !isActive && (
                              <span className="h-1.5 w-1.5 rounded-full bg-sidebar-primary inline-block" />
                            )}
                          </span>
                        )}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-2 border-t border-sidebar-border/50">
        <Button
          variant="ghost"
          onClick={handleLogout}
          className="w-full justify-start h-11 rounded-xl text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
        >
          <LogOut className="h-5 w-5 mr-3 shrink-0" />
          {!collapsed && <span className="text-sm">Logout</span>}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
