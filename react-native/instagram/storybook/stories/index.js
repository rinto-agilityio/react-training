// FIXME: Dynamic require all *.stories.js files
// Require new components
// Add textcenter for all stories

// Layout
require('@common/components/appHeader.stories')

// Components
require('@common/components/comment.stories')
require('@screens/home/components/postPhoto.stories')
require('@screens/home/components/postAuthor.stories')

require('@screens/account/components/info.stories')
require('@screens/account/components/photos.stories')
require('@screens/home/components/commentList.stories')
require('@screens/home/components/postAction.stories')
require('@screens/home/components/singlePhoto.stories')

// Screens
require('@screens/account/components/accountScreen.stories')
