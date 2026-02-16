import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { ZodError } from "zod";

export const getUserIdOrRedirect = async () => {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/");
  }

  return userId;
};

export const renderError = (e: unknown) => {
  if (e instanceof ZodError) {
    return { status: "FAILED", message: "Validation error" };
  } else if (e instanceof Error) {
    return { status: "FAILED", message: e.message };
  } else {
    return { status: "FAILED", message: "Unexpected error occurred" };
  }
};
