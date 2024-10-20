import SignUp from "@/components/sign-up/SignUp";

interface Metadata {
  title: string;
  description: string;
}

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign up to access your favourite movies",
};

export default function SignUpPage(): React.ReactElement {
  return <SignUp />;
}
