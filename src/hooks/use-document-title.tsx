import * as React from 'react'

export const useDocumentTitle = title => {
  React.useEffect(() => {
    document.title = title
  }, [title])
}