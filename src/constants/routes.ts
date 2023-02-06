/** @format */

import React from "react";

export const routes = [
	{
		id: 1,
		name: "homepage",
		title: "HomePage",
		path: "/",
		load: React.lazy(async () => import("#pages/HomePage")),
	},
];
