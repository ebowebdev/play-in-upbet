import React from 'react'
import { textsManager } from '../../textsManager'

function ShowAll() {
  return (
    <div>
      <button>
        { textsManager.listContent.showAll }
      </button>
    </div>
  )
}

export default ShowAll