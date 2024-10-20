import Login from "@/components/login/Login";

interface Metadata {
  title: string;
  description: string;
}

export const metadata: Metadata = {
  title: "Login",
  description: "Access the entertainment web app",
};

export default function LoginPage(): React.ReactElement {
  return <Login />;
}
