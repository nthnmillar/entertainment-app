interface Metadata {
  title: string;
  description: string;
}

export const metadata: Metadata = {
  title: "Login",
  description: "Access the entertainment web app",
};

export default function Login(): React.ReactElement {
  return (
    <>
      <p> Login</p>
      <br />
      <p> Email address</p>
      <p> Password</p>
      <br />
      <p> Login to your account</p>
      <br />
      <p> Don't have an account? Sign Up</p>
    </>
  );
}
