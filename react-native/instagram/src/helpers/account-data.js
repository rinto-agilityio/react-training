/**
 * At real app, there's all photos of many users in the system
 * This helper will filter photos of current user (account)
 * This is selector to get data for current user only
 * @param {array} allPhotos
 * @param {object} account
 */
export const getAccountPhotos = (allPhotos, account) => {
  // FIXME: App didn't support auth yet, only 1 user for now, so, return all photos
  return allPhotos
}
