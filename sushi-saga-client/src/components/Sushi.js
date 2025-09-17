import React from 'react'

const Sushi = ({ sushi, onEatSushi, eaten }) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => !eaten && onEatSushi(sushi)}>
        { 
          eaten ?
            null
          :
            <img src={sushi.img_url} alt={sushi.name} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi