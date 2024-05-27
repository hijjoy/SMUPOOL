import { AppLayout, BoardLayout } from "../layout";
import { MainPage, LoginPage, SignupPage, BoardPage, PostDetail, MypagePage, CreatePage } from "../pages";

const Router = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "sign-up",
        element: <SignupPage />,
      },
      { path: "my-page/:id", element: <MypagePage /> },
    ],
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
        element: <PostDetail />,
      },
      {
        path: "create",
        element: <CreatePage />,
      },
    ],
  },
];

export default Router;
