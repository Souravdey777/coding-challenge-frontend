import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './chart.css'

import Text from '../../atoms/text'

function Chart({ data, ...props }) {
  const [background, setBackground] = useState()

  useEffect(() => {
    let value = 0
    let backgroundColorString = ''
    data.forEach((element) => {
      backgroundColorString += `${element.color} ${value}% ${
        value + element.percentage
      }%,`
      value += element.percentage
    })
    setBackground(`conic-gradient(${backgroundColorString.slice(0, -1)})`)
  }, [data])

  return (
    <div className="pieChartRoot" {...props}>
      <div style={{ background }} className="pieChart" />
      <div>
        {data.map((element, id) => (
          <div className="label" key={id}>
            <div className="colorBox" style={{ background: element.color }} />
            <Text size="p1" primary>
              {element.text} - {element.percentage.toFixed(2)}%{' '}
            </Text>
          </div>
        ))}
      </div>
    </div>
  )
}

Chart.propTypes = {
  data: PropTypes.array.isRequired
}

export default Chart
