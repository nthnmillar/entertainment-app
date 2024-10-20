import TvSeries from "@/components/tv-series/TvSeries";

interface Metadata {
  title: string;
  description: string;
}

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign up to access your favourite movies",
};

export default function TvSeriesPage(): React.ReactElement {
  return <TvSeries />;
}
