// @flow
// add flow above to fix for using flow with React.memo

// Libs
import React, { memo } from 'react'
import Tag from '../../../../components/Tag'
// Styles
import styles from './styles'

type Props = {
  item: string,
  onClose: (item: string) => void,
  disabled: boolean,
}

const Ingredient = ({
  item = '',
  onClose = () => {},
  disabled,
}: Props) => (
  <Tag
    onClose={() => onClose(item)}
    mode="flat"
    customTextStyle={styles.customTextStyle}
    disabled={disabled}
  >
    {item ? item.trim() : ''}
  </Tag>
)

export default memo<Props>(Ingredient)
