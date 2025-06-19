import { useState } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Card,
  Typography,
  Divider,
  notification,
  Space,
  theme,
} from "antd";
import { UserOutlined, LockOutlined, LoginOutlined } from "@ant-design/icons";
import type { FormProps } from "antd";

const { Title, Text } = Typography;

interface SignInFormData {
  email: string;
  password: string;
  remember?: boolean;
}

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const { token } = theme.useToken();

  const onFinish: FormProps<SignInFormData>["onFinish"] = async (values) => {
    setLoading(true);
    try {
      // This is where you would typically call your authentication API
      console.log("Success:", values);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      notification.success({
        message: "Welcome back!",
        description: "You have successfully signed in.",
      });

      // Here you would typically redirect to the dashboard or handle auth state
      // navigate('/dashboard');
    } catch (err) {
      console.error("Login error:", err);
      notification.error({
        message: "Authentication Failed",
        description: "Please check your credentials and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="signin-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: "0 20px",
        boxSizing: "border-box",
      }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: "450px",
          borderRadius: "10px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        }}
        bodyStyle={{ padding: "24px" }}
      >
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <Space direction="vertical" size={4} style={{ display: "flex" }}>
            <Title level={2} style={{ margin: 0, color: token.colorPrimary }}>
              Welcome Back
            </Title>
            <Text type="secondary">Sign in to your Pesewa Admin account</Text>
          </Space>
        </div>

        <Form
          name="signin_form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
          size="large"
          style={{ width: "100%", margin: 0 }}
        >
          <Form.Item
            name="email"
            label="Email Address"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email address" },
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Email"
              autoComplete="email"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              { required: true, message: "Please enter your password" },
              { min: 6, message: "Password must be at least 6 characters" },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
              autoComplete="current-password"
            />
          </Form.Item>

          <Form.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Button type="link" size="small" style={{ padding: 0 }}>
                Forgot password?
              </Button>
            </div>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              icon={<LoginOutlined />}
              loading={loading}
              block
              style={{ height: "48px" }}
            >
              Sign In
            </Button>
          </Form.Item>

          <Divider plain>
            <Text type="secondary">Don't have an account?</Text>
          </Divider>

          <div style={{ textAlign: "center" }}>
            <Button type="link">Contact your administrator</Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default SignIn;
