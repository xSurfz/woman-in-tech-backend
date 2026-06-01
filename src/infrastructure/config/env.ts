interface Environment {
  PORT: number;
  NODE_ENV: string;
  STORAGE_PROVIDER: string;
}

export const env: Environment = {
  PORT: Number(process.env.PORT ?? 3000),
  NODE_ENV: process.env.NODE_ENV ?? "development",
  STORAGE_PROVIDER: process.env.STORAGE_PROVIDER ?? "local",
};
