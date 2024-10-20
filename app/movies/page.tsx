import Movies from "@/components/movies/Movies";

interface Metadata {
  title: string;
  description: string;
}

export const metadata: Metadata = {
  title: "Movies",
  description: "A collection of movies for you to choose from",
};

export default function MoviesPage(): React.ReactElement {
  return <Movies />;
}
