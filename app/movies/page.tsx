interface Metadata {
  title: string;
  description: string;
}

export const metadata: Metadata = {
  title: "Movies",
  description: "A collection of movies for you to choose from",
};

export default function Movies(): React.ReactElement {
  return (
    <>
      <p> Search for movies</p>
      <br />
      <p> Movies</p>
      {/* Display all movies */}
    </>
  );
}
