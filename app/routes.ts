import { type RouteConfig, route, layout } from "@react-router/dev/routes";

export default [
    layout('routes/admin/admin-layout.tsx', [  // Path to layout as a string
        route('dashboard', './routes/admin/dashboard.tsx'),  // Path to dashboard as a string
        route('all-users', './routes/admin/all-users.tsx'),
    ]),
] satisfies RouteConfig;
