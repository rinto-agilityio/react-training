import React from 'react'

// Assets
import LampOn from '../../assets/lamp-on.svg'
import LampOff from '../../assets/lamp-off.svg'

// Component
import BaseIconStyle from './BaseIconStyle'

const LampIcon = ({ isOn }) => (
  <BaseIconStyle src={isOn ? LampOn : LampOff} alt="Reading mode" />
)

export default LampIcon
