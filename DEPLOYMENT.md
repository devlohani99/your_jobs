# YourJobs - Job Portal Application

A modern job portal application built with React.js frontend and Node.js backend.

## Features

- User authentication (Job Seekers & Employers)
- Job posting and application management
- Modern UI with gradient designs
- Role-based dashboards
- File upload for resumes

## Deployment Instructions

### Backend Deployment (Vercel)

1. Create a new project on Vercel
2. Import this repository
3. Set the root directory to `backend`
4. Add the following environment variables:
   - `PORT=4000`
   - `CLOUDINARY_API_KEY=741567311439871`
   - `CLOUDINARY_API_SECRET=eROzUxqJarAu9wlH6_kM-O5uhdU`
   - `CLOUDINARY_CLOUD_NAME=drqturxhe`
   - `DB_URL=mongodb+srv://d:d@cluster0.bebu6in.mongodb.net/?appName=Cluster0`
   - `JWT_SECRET_KEY=fgjfgsudgfudnhfousidfnewuikfmlewf`
   - `JWT_EXPIRE=7d`
   - `COOKIE_EXPIRE=7`
   - `NODE_ENV=production`
   - `FRONTEND_URL=https://yourjobs-frontend.vercel.app`

5. Deploy the backend first

### Frontend Deployment (Vercel)

1. Create another new project on Vercel
2. Import this repository again
3. Set the root directory to `frontend`
4. Update the `frontend/src/config/environment.js` file with your backend URL
5. Deploy the frontend

### Post-Deployment Steps

1. Update CORS settings in backend with your frontend URL
2. Test all API endpoints
3. Verify authentication flow works correctly

## Local Development

### Backend
```bash
cd backend
npm install
npm start
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Test Accounts

- **Job Seeker**: `e@gmail.com` / `12345678`
- **Employer**: `j@gmail.com` / `12345678`

Note: Role names are swapped in the UI - "Job Seeker" displays "Employer" functionality and vice versa.

## Tech Stack

- **Frontend**: React.js, Vite, Axios, React Router
- **Backend**: Node.js, Express.js, MongoDB, JWT
- **Deployment**: Vercel
- **File Storage**: Cloudinary