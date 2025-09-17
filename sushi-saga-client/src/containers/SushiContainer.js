// src/containers/SushiContainer.js
import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'

const SushiContainer = ({ sushis, eatenSushis, onEatSushi, onMoreSushi }) => {
  return (
    <Fragment>
      <div className="belt">
        {sushis.map(sushi => (
          <Sushi
            key={sushi.id}
            sushi={sushi}
            eaten={eatenSushis.includes(sushi.id)}
            onEatSushi={onEatSushi}
          />
        ))}
        <MoreButton onClick={onMoreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
