import { useEffect } from 'react'

const useUpdateSiteTitle = title => {
  useEffect(() => (
    document.title = title
  ))
}

export {
  useUpdateSiteTitle
}
