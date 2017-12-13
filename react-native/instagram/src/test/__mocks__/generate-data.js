// Libs
import Immutable from 'seamless-immutable'

// Mocking data
import { photos } from './sample-data'

/**
 * Generate feeds from sample data
 * @param {number} amount
 */
export const generateFeeds = (amount) => {
  const sampleFeed = Immutable(photos[0])
  let feeds = []

  for (let i = 1; i < amount; i++) {
    feeds.push(sampleFeed.without('id').setIn(['id'], i))
  }

  return feeds
}
