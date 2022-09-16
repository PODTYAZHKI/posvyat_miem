const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/registration",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/RegistrationPage.vue") },
    ],
  },
  {
    path: "/resettlement",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/ResettlementPage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
];

export default routes;
