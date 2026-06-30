# Deployment Guide for Event Management App

## Prerequisites
- Vercel account (free)
- MongoDB Atlas account (free tier)
- Git repository (GitHub, GitLab, or Bitbucket)

## Step 1: MongoDB Atlas Setup
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account and cluster
3. Create a database user with read/write permissions
4. Get your connection string (replace `<password>` with your actual password)
5. Add your IP address to the IP whitelist (or use 0.0.0.0/0 for all IPs)

## Step 2: Backend Deployment (Vercel)

### Environment Variables for Backend
Set these environment variables in Vercel:
- `MONGO_URI`: Your MongoDB connection string
- `FRONTEND_URL`: Your deployed frontend URL (will get this after frontend deployment)
- `JWT_SECRET`: A secure random string for JWT token generation

### Deploy Backend
1. Push your code to GitHub
2. Go to Vercel dashboard and click "Add New Project"
3. Import your repository
4. Set the root directory to `backend`
5. Add environment variables
6. Click "Deploy"

Your backend will be deployed at a URL like: `https://your-project.vercel.app`

## Step 3: Frontend Deployment (Vercel)

### Environment Variables for Frontend
Set this environment variable in Vercel:
- `VITE_API_URL`: Your deployed backend URL (from Step 2)

### Deploy Frontend
1. Go to Vercel dashboard and click "Add New Project"
2. Import your repository (same repo)
3. Set the root directory to `frontend`
4. Add `VITE_API_URL` environment variable with your backend URL
5. Click "Deploy"

Your frontend will be deployed at a URL like: `https://your-project.vercel.app`

## Step 4: Update Backend CORS
After getting your frontend URL, update the backend's `FRONTEND_URL` environment variable in Vercel to match your deployed frontend URL.

## Important Notes
- The backend is configured to work with Vercel's serverless functions
- All API calls in the frontend now use the `API_URL` from config.js
- Make sure to keep your MongoDB connection string and JWT_SECRET secure
- The free tier of MongoDB Atlas has a 512MB storage limit

## Troubleshooting
- If you get CORS errors, make sure `FRONTEND_URL` is set correctly in backend
- If database connection fails, check your MongoDB connection string and IP whitelist
- If API calls fail, ensure `VITE_API_URL` is set correctly in frontend
