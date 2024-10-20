interface Metadata {
  title: string;
  description: string;
}

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign up to access your favourite movies",
};

export default function TvSeries(): React.ReactElement {
  return (
    <>
      <p> Search for TV series</p>
      <br />
      <p> TV Series</p>
      {/* Display all TV series */}
    </>
  );
}
