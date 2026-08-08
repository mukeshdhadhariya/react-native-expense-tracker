import { clerkMiddleware, getAuth } from "@clerk/express";

/*
 * Clerk middleware:
 *
 * - Reads Authorization: Bearer <token>
 * - Verifies the Clerk session token
 * - Makes authentication information available
 *   through getAuth(req)
 */
export const clerkAuthMiddleware = clerkMiddleware();

/*
 * Protect API routes.
 *
 * Any route using this middleware requires
 * an authenticated Clerk user.
 */
export const requireClerkAuth = (req, res, next) => {
  const auth = getAuth(req);

  if (!auth.isAuthenticated) {
    return res.status(401).json({
      status: "error",
      message: "Unauthorized",
    });
  }

  /*
   * Store userId on request so controllers
   * can easily access the authenticated user.
   */
  req.userId = auth.userId;

  /*
   * You can also access:
   *
   * req.auth = auth
   *
   * if you want the complete Clerk auth object.
   */

  next();
};