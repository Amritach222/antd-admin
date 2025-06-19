import { Button, Result } from "antd";
import { BrowserRouter, Routes, Route } from "react-router";
import DashboardLayout from "../layouts/DashboardLayout";
import AuthLayout from "../layouts/AuthLayout";
import SignIn from "../pages/signin";
const IndexRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<>Dashboard</>} />
          <Route path="settings" element={<>Settings</>} />
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
              extra={<Button type="primary">Back Home</Button>}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default IndexRoute;
