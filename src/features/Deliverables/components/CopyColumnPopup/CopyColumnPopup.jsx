import { useState } from 'react'

// Style
import './CopyColumnPopup.css'

// Components
import SquadTab from './components/SquadTab'
import ColumnTab from './components/ColumnTab'
import Popup from '../../../../layouts/Popup'

const CopyColumnPopup = (props) => {
  const { id, isOpen, setIsOpen, deliverable } = props
  const [currentTab, setCurrentTab] = useState('columnTab')

  const columnClassName = `tab ${currentTab === 'columns' && 'highlight'}`
  const squadClassName = `tab ${currentTab === 'squads' && 'highlight'}`

  return (
    <Popup key={id} isOpen={isOpen}>
      <div className="copyColumn">
        <header>
          <h1>Copy Options</h1>
          <button className={columnClassName} onClick={() => setCurrentTab('columnTab')}>
            Columns
          </button>
          <button className={squadClassName} onClick={() => setCurrentTab('squadTab')}>
            Squads
          </button>
        </header>
        {currentTab === "columnTab"
          ? <ColumnTab deliverable={deliverable} />
          : <SquadTab deliverable={deliverable} />
        }
        <footer>
          <button onClick={() => setIsOpen(false)}>CLOSE</button>
        </footer>
      </div>
    </Popup>
  )
}

export default CopyColumnPopup