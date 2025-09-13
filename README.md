Nginx with MERN (Tutorial Reference)

This repository is a reference setup for MERN developers who want to learn how to use Nginx as a reverse proxy for serving a React frontend and forwarding API requests to a Node.js backend inside Docker containers.

It is not a production app but a tutorial-friendly scaffold to help you understand how to connect the pieces together.


Prerequisites / Installations

Make sure you have the following installed before running this setup:

Git

1- Node.js & npm
    (for backend/frontend development)

2- Docker
     (Docker Desktop for Windows/Mac, Docker Engine for Linux)

3- docker-compose (bundled with Docker Desktop; install separately if using Linux)

Basic familiarity with:

      Terminal / command line
      
      Networking concepts (ports, host vs. container)
      
      Docker images & containers



How to Run

1- Clone this repository
```
git clone https://github.com/your-username/mern-nginx-tutorial.git
cd mern-nginx-tutorial

```
2- Build and start the containers

```
docker compose up --build

```

3- Access the app

React frontend → http://localhost:3000

Backend API → proxied at http://localhost:3000/api

MongoDB → running internally (exposed on port 27017 if needed)



There will be a blog shortly the link will be below.
