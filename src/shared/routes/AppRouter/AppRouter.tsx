import { Route, BrowserRouterProps, Routes } from "react-router-dom";
import paths from "../paths";

const AppSwitch = ({ children, ...props }: BrowserRouterProps) => {
  return <Routes {...props}>{children}</Routes>;
};

const AppRouter = () => {
  return (
    <AppSwitch>
      <Route path={paths.root} element={<>Home</>} />
      <Route path={paths.notFound} element={<>Not Found</>} />
      <Route path={paths.error} element={<>Error</>} />

      <Route path="*" element={<>Not Found</>} />
    </AppSwitch>
  );
};

export default AppRouter;
