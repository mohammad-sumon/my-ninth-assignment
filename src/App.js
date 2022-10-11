import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import QuizDetails from "./components/QuizDetails";
import Statistics from "./components/Statistics";
import Main from "./layouts/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Home></Home>,
        },
        {
          path: "quiz",
          element: <Quiz></Quiz>,
        },
        {
          path: 'quiz/:quizId',
          loader: ({params}) => {
            return fetch (`https://openapi.programming-hero.com/api/quiz/${params.quizId}`);
          },
          element: <QuizDetails></QuizDetails>
        },
        {
          path: "statistics",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Statistics></Statistics>,
        },
        {
          path: "blog",
          element: <Blog></Blog>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
