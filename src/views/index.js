import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./app-views/home";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
]);

export default function Views() {
	return <RouterProvider router={router} />;
}
