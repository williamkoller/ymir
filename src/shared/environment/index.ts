type Environment = {
  port: number;
  nodeEnv: string;
  appUrl: string;
  mongoUrl: string;
};

export const environment = (): Environment => ({
  port: Number(process.env.PORT),
  nodeEnv: process.env.NODE_ENV,
  appUrl: process.env.APP_URL,
  mongoUrl: process.env.MONGODB_URL,
});

export default {
  filepath: '.env',
};
