import axios from "axios";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ZodError, ZodSchema } from "zod";
import { type formDataType } from "./types/types"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const URL = "localhost:4202";

export const fetchSingleEndpoint = async <T>(
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
    throw new Error(e);
  }
};

export const validateData = (formData: formDataType, schema: ZodSchema) => {
  const validatedData = schema.safeParse(formData)
  if (!validatedData.success) {
    return { data: null, errors: validatedData.error }
  } else {
    return { data: validatedData.data, errors: null}
  }
}

export const postFormData = async <T>(
  formData: formDataType,
  endpoint: string,
  schema: ZodSchema<T>
) => {
  const headers = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }
  }
  try {
  const validatedData = validateData(formData, schema)
  if (validatedData.data) {
    const stringifiedData = JSON.stringify(validatedData.data)
    const response = await axios.post(`http://${URL}/${endpoint}`, stringifiedData, headers)
    console.log(response.data)
    return response.data
  }
  } catch (e: any) {
     if (axios.isAxiosError(e)) {
      console.log(`Erros: ${e.response?.data}`,
        `You have sent: ${JSON.stringify(formData)}`
      )
    } else {
      console.log(e)
    }
  }
}
