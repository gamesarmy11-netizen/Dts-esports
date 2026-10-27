// ONLY place to set admins on the frontend. Real security is enforced by firestore.rules.
export const ADMIN_EMAILS: string[] = ["gamesarmy11@gmail.com"];
export const ADMIN_UIDS: string[] = [];
export const isAdminIdentity = (email?: string | null, uid?: string | null) =>
  (!!email && ADMIN_EMAILS.includes(email)) || (!!uid && ADMIN_UIDS.includes(uid));
