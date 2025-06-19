import { Button, Result } from "antd";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import DashboardLayout from "../layouts/DashboardLayout";
import AuthLayout from "../layouts/AuthLayout";
import SignIn from "../pages/signin";

// Placeholder components for demo
const DashboardContent = () => <div>Dashboard Content</div>;
const UsersContent = () => <div>Users Management</div>;
const TransactionsContent = () => <div>Transactions List</div>;
const AnalyticsContent = () => <div>Analytics Dashboard</div>;
const ReportsContent = () => <div>Reports</div>;
const MobileTopupContent = () => <div>Mobile Topup Service</div>;
const PaymentsContent = () => <div>Payments Service</div>;
const SettingsContent = () => <div>Settings</div>;

const IndexRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<DashboardContent />} />
          <Route path="users" element={<UsersContent />} />
          <Route path="transactions" element={<TransactionsContent />} />
          <Route path="analytics" element={<AnalyticsContent />} />
          <Route path="reports" element={<ReportsContent />} />
          <Route path="services">
            <Route path="mobile-topup" element={<MobileTopupContent />} />
            <Route path="payments" element={<PaymentsContent />} />
          </Route>
          <Route path="settings" element={<SettingsContent />} />
        </Route>
        <Route path="/" element={<AuthLayout />}>
          <Route path="signin" element={<SignIn />} />
        </Route>
        <Route
          path="/*"
          element={
            <Result
              status="404"
              title="404"
              subTitle="Sorry, the page you visited does not exist."
              extra={
                <Button type="primary">
                  <Link to="/">Back Home</Link>
                </Button>
              }
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default IndexRoute;
