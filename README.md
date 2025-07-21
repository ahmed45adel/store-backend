# E-commerce Store with Admin Dashboard

E-commerce store designed for a seamless shopping experience with admin and customer roles.

## Features

*   **User Authentication:** Secure login, signup, and logout.
*   **People Also Bought:** Product recommendations based on purchasing patterns.
*   **Persistent Cart:** Users can manage items before checkout.
*   **Stripe Payments:** Secure and efficient payment processing.
*   **Coupon Management:** Administrators can create and distribute discounts.
*   **Sales Analytics:** Detailed insights into performance and customer behavior.

## Key Technologies

*   **Frontend:** React, Tailwind CSS, Framer Motion, Zustand
*   **Backend:** Node.js (Express), JWT, Bcryptjs
*   **Database:** MongoDB (Mongoose), Redis (Upstash)
*   **Payments:** Stripe
*   **Media:** Cloudinary
*   **Deployment:** vercel

## Environment Variables

This project requires the following environment variables. Make sure to replace each placeholder with your actual credentials and configurations.
- `PORT`: The port on which the server will run.
- `MONGO_URI`: The URI for connecting to the MongoDB database.
- `UPSTASH_REDIS_URL`: The URL for connecting to the Upstash Redis database.
- `CLOUDINARY_API_SECRET`: The secret key for Cloudinary API.
- `CLOUDINARY_API_KEY`: The API key for Cloudinary.
- `CLOUDINARY_CLOUD_NAME`: The cloud name for Cloudinary.
- `STRIPE_SECRET_KEY`: The secret key for Stripe API.
- `ACCESS_TOKEN_SECRET`: The secret for signing access tokens.
- `REFRESH_TOKEN_SECRET`: The secret for signing refresh tokens.
- `CLIENT_URL`: The URL of the client application.
- `NODE_ENV`: The environment mode (`development`, `production`, etc.).


<a href="https://github.com/ahmed45adel/store-backend" target="_blank">Backend Code Here</a>  
<a href="https://store-frontend-rose.vercel.app" target="_blank">Deployed Project Here</a>