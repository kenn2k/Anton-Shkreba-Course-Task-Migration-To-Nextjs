import axios from "axios";
import { cookies } from "next/headers";

export const getMyExhibits = async (page: number) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/exhibits/my-posts`,
    {
      params: { page },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
