import { NextResponse } from "next/server";

export const middleware = async (): Promise<Response> => {
  return NextResponse.next({
    headers: {
      "X-From-Middleware": "true",
      "Cache-Control": "public, max-age=60, must-revalidate",
    },
  });
};
