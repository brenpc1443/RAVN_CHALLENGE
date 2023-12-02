import { Route, BrowserRouterProps, Routes } from "react-router-dom";

import MenuLayout from "../MenuLayout";

import NotFound from "pages/NotFound";
import ErrorPage from "pages/ErrorPage";

import TaskModeBurger from "pages/Dashboard/DashboardTasks/TasksModeBurger/";
import TaskModeLine from "pages/Dashboard/DashboardTasks/TasksModeLine/";

import paths from "../paths";

const AppSwitch = ({ children, ...props }: BrowserRouterProps) => {
  return <Routes {...props}>{children}</Routes>;
};

const AppRouter = () => {
  return (
    <AppSwitch>
      <Route path="/" element={<MenuLayout />}>
        <Route path={paths.tasks.burger} element={<TaskModeBurger />} />
        <Route path={paths.tasks.line} element={<TaskModeLine />} />
      </Route>
      <Route path={paths.notFound} element={<NotFound />} />
      <Route path={paths.error} element={<ErrorPage />} />

      <Route path="*" element={<NotFound />} />
    </AppSwitch>
  );
};

export default AppRouter;
