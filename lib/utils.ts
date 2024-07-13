import axios from "axios";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ZodError, ZodSchema } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const URL = "localhost:4202";

export const fetchSingleEndpoint = async <T> (
  endpoint: string,
  schema: ZodSchema<T>
): Promise<{ data: T | null; errors: ZodError | null }> => {
  if (!endpoint) {
    throw new Error("Please enter a correct URL with a endpoint");
  }
  try {
    const response = await axios.get(`http://${URL}/${endpoint}`);
    const data = response.data;
    const validatedData = schema.safeParse(data);
    if (!validatedData.success) {
      return { data: null, errors: validatedData.error };
    }

    return { data: validatedData.data, errors: null };
  } catch (e: any) {
    if (e.response && e.response.status === 400) {
      throw new Error("404: The requested resource was not found");
    }
    throw new Error(e)
  }
};
