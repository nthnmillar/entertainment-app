interface Metadata {
  title: string;
  description: string;
}

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign up to access your favourite movies",
};

export default function SignUp(): React.ReactElement {
  return (
    <>
      <p> Sign Up</p>
      <br />
      <p> Email address</p>
      <p> Password</p>
      <p> Repeat password</p>
      <br />
      <p> Create an account</p>
      <br />
      <p>Already have an account? Login</p>
    </>
  );
}
