import { game, routes } from "./routes";
import { Routes, Route, Navigate } from "react-router-dom";

const allRoutes = [...game, ...routes];

const AppRouter = () => {
        return (
                <Routes>
                        {allRoutes.map(({ path, Component }) => (
                                <Route key={path} path={path} element={<Component />} />
                        ))}
                        <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
        );
};

export default AppRouter;