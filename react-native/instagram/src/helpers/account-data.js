/**
 * At real app, there's all photos of many users in the system
 * This helper will filter photos of current user (account)
 * This is selector to get data for current user only
 * @param {array} allPhotos - All photos in system
 * @param {object} account - Account info
 * @returns {array} - Photos of current account
 */
export const getAccountPhotos = (allPhotos, account) => allPhotos
