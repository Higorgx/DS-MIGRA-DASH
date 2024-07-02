export default defineNuxtRouteMiddleware((to, from) => {
  const publicPages = ["/login", "/register", "/forgot-password"];
  const authPage = !publicPages.includes(to.fullPath);

  if (typeof window !== "undefined") {
    const loggedUser = localStorage.getItem("user");

    if (authPage && !loggedUser) {
      return navigateTo({ path: "/login" });
    }
  }
});
