import React, { Fragment } from 'react'

const Table = ({ eatenSushis, budget }) => {
  const renderPlates = (array) => {
    return array.map((_, index) => (
      <div
        key={index}
        className="empty-plate"
        style={{ top: -7 * index }}
      />
    ))
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${budget} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {renderPlates(eatenSushis)}
        </div>
      </div>
    </Fragment>
  )
}

export default Table
