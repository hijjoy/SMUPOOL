import { AppLayout, BoardLayout } from "../layout";
import {
  MainPage,
  LoginPage,
  SignupPage,
  BoardPage,
  PostDetailPage,
  MypagePage,
  CreatePage,
  NotFoundPage,
} from "../pages";

const Router = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "home",
        element: <MainPage />,
      },
      {
        path: "sign-up",
        element: <SignupPage />,
      },
      { path: "my-page/:id", element: <MypagePage /> },
    ],
    errorElement: <NotFoundPage />,
  },
  {
    path: "/board",
    element: <BoardLayout />,
    children: [
      {
        index: true,
        element: <BoardPage />,
      },
      {
        path: ":id",
        element: <PostDetailPage />,
      },
      {
        path: "create",
        element: <CreatePage />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
];

export default Router;
