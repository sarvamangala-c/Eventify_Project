import app from "./app.js";

const PORT = process.env.PORT || 4000;

// For Vercel deployment
export default app;

// For local development
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
  });
}
