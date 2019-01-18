// Libs
import Immutable from 'seamless-immutable'

// Mocking data
import { photos } from './sample-data'

/**
 * Generate feeds from sample data
 * @param {number} amount Number item
 * @returns {array} feeds - Feeds
 */
const generateFeeds = amount => {
  const firstIdx = 1
  let feeds

  for (let idx = firstIdx; idx < amount; idx++) {
    const randomIndex = Math.floor(Math.random() * photos.length),
      sampleFeed = Immutable(photos[randomIndex])

    feeds.push(sampleFeed.without('id').setIn(['id'], idx))
  }

  return feeds
}

export { generateFeeds }
