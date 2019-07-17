// Libs
import React from 'react'
import { Chip } from 'react-native-paper';

type Props = {
  mode: string,
  customTextStyle?: {} | Array<{}>,
  customStyle?: {} | Array<{}>,
  children: string,
  onClose: () => void,
  disabled: boolean,
}

const Tag = ({
  children,
  mode,
  onClose,
  disabled,
}: Props) => (
  <Chip
    mode={mode}
    onClose={onClose}
    disabled={disabled}
  >
    { children }
  </Chip>
)

export default Tag
