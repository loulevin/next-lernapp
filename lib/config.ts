
export const backendUrl = (): string => {
    return (import.meta as any).env.VITE_BACKEND_URL;
  }