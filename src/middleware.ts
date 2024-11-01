import { NextResponse } from "next/server";

export const middleware = async (): Promise<Response> => {
  return NextResponse.next({
    headers: {
      "X-From-Middleware": "true",
      "Vercel-CDN-Cache-Control": `public, s-maxage=60, stale-while-revalidate=60`,
    },
  });
};
