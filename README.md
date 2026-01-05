# DevOps Greenfield Project

A full-stack web application with a React frontend and Node.js/Express backend connected to MongoDB.

## Project Structure

```
src/
├── backend/                 # Node.js Express API
│   ├── src/
│   │   ├── app.js          # Express app configuration
│   │   ├── server.js       # Server entry point
│   │   ├── controllers/
│   │   │   └── usersController.js  # User CRUD operations
│   │   ├── models/
│   │   │   └── User.js     # Mongoose User model
│   │   └── routes/
│   │       └── index.js    # API routes
│   ├── Dockerfile          # Docker configuration
│   └── package.json
│
└── frontend/               # React + Vite application
    ├── src/
    │   ├── App.jsx         # Main App component
    │   ├── main.jsx        # React entry point
    │   ├── components/
    │   │   ├── UserForm.jsx    # User form component
    │   │   └── UserList.jsx    # User list component
    │   └── services/
    │       └── api.js      # API service (Axios)
    ├── index.html
    ├── Dockerfile          # Docker configuration
    ├── nginx.conf          # Nginx configuration
    ├── vite.config.js      # Vite configuration
    ├── tailwind.config.js  # Tailwind CSS configuration
    └── package.json
```

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB ODM
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB (local or cloud instance)

### Running the Backend

1. Navigate to the backend directory:
   ```bash
   cd src/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/devops-greenfield
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

   Or for production:
   ```bash
   npm start
   ```

The backend API will be available at `http://localhost:3000`

### Running the Frontend

1. Navigate to the frontend directory:
   ```bash
   cd src/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file (copy from `.env.example` if available):
   ```env
   VITE_API_URL=http://localhost:3000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:5173`

### Building for Production

#### Frontend
```bash
cd src/frontend
npm run build
npm run preview  # Preview the production build
```

## Docker

Both frontend and backend include Dockerfiles for containerized deployment.

### Build and run backend:
```bash
cd src/backend
docker build -t devops-backend .
docker run -p 3000:3000 devops-backend
```

### Build and run frontend:
```bash
cd src/frontend
docker build -t devops-frontend .
docker run -p 80:80 devops-frontend
```

## API Endpoints

| Method | Endpoint     | Description        |
|--------|-------------|--------------------|
| GET    | /api/users  | Get all users      |
| POST   | /api/users  | Create a new user  |
| GET    | /api/users/:id | Get user by ID  |
| PUT    | /api/users/:id | Update user     |
| DELETE | /api/users/:id | Delete user     |

## License

ISC
