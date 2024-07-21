
# Froker-Blogs

Assignment given by Froker for tech profile - 2025. This is a clone of the Blog page of the website of Froker.

## Technologies used
- Frontend: React, HTML5, CSS3, Javascript, Tailwind CSS
- Backend: Node.js, Express.js
- Deployment: Vercel, Render

## Architecture
 ![architecture](https://i.postimg.cc/fb0cGx8g/diagram-export-7-21-2024-10-48-12-AM.png)

## Screenshot
 ![ss1](https://i.postimg.cc/T2HPDZdg/Screenshot-2024-07-21-105130.png)
 ![ss2](https://i.postimg.cc/ZYgTRpHL/Screenshot-2024-07-21-105141.png)
 ![ss3](https://i.postimg.cc/W1cTmVQF/Screenshot-2024-07-21-105156.png)
 ![ss4](https://i.postimg.cc/N0gtV4GQ/Screenshot-2024-07-21-105241.png)
 ![ss5](https://i.postimg.cc/qRqTBvCY/Screenshot-2024-07-21-105250.png)
 


## Run the program

It is deployed on [froker-main.vercel.app](froker-main.vercel.app).




## API Reference

#### Get all blogs

```http
  GET /blogs
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| NULL      |          | Fetches all blogs          |

#### Get blogs by id

```http
  GET /blog/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Get Top 3 posts
```http
    GET /blogs/hero/top3
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| NULL      |          | Fetches top 3 blogs as per likes  |

#### Add a like by id

```http
  POST /blog/:id/like
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to add   |

#### Delete a like by id

```http
  DELETE /blog/:id/like
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to delete|


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
