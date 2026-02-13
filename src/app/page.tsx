import { getAllExhibits } from "@/api/actions/exhibitActions";

import { PostList } from "@/components/posts/PostList";

interface HomeParamsProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function Home({ searchParams }: HomeParamsProps) {
  const params = await searchParams;

  const page = Number(params.page) || 1;

  const exhibits = await getAllExhibits(page);

  return <PostList exhibits={exhibits} page={page} />;
}
