import { OwnPosts } from "@/components/posts/OwnPosts";
import { getMyExhibits } from "../api/server/exhibits";

interface HomeParamsProps {
  searchParams: Promise<{ page?: string }>;
}

const StripePage = async ({ searchParams }: HomeParamsProps) => {
  const params = await searchParams;
  const page = Number(params.page) || 1;

  const myExhibits = await getMyExhibits(page);
  return <OwnPosts myExhibits={myExhibits} page={page} />;
};

export default StripePage;
