// Libs
import Immutable from 'seamless-immutable'

// Mocking data
import { photos } from './sample-data'

/**
 * Generate feeds from sample data
 * @param {number} amount
 */
export const generateFeeds = (amount) => {
  let feeds = []

  for (let i = 1; i < amount; i++) {
    const randomIndex = Math.floor(Math.random() * photos.length),
          sampleFeed = Immutable(photos[randomIndex])

    feeds.push(sampleFeed.without('id').setIn(['id'], i))
  }

  return feeds
}
