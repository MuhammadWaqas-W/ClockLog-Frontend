const roleBasedRoutes: any = {
  "/": ["Admin", "Manager", "Employee"],
  "/settings/blocking": ["Admin"],
  "/settings/email": ["Admin"],
};

export default roleBasedRoutes;
