// Libs
import React, { useState } from 'react'
import { View, Text } from 'react-native'

// Styles
import styles from './styles'

// Helpers
import { getDateForCalendar, getDateOfWeek, getMilisecondsFromTime } from '../../../../helpers/date-time'
import { validator } from '../../../../helpers/validators'

// Components
import Calendar from '../../../../components/Calendar'
import Modal from '../../../../components/Modal'
import Categories from '../../../../containers/Categories'
import CookingTypes from '../../../../containers/CookingTypes'
import Error from '../../../../components/Error'
import Wrapper from '../../../../layout/Wrapper';
import Icon from '../../../../components/Icon'

// Themes
import { METRICS } from '../../../../themes'

type Props = {
  size: string,
  createWishList: (
    categoryId: string,
    cookingTypeId: string,
    date: string,
  ) => Promise<{ data: { createWishList: { id: string } } }>,
}

const WishListForm = ( {
  size = 'medium',
  createWishList,
}: Props ) => {
  const [visible, setVisible] = useState( false )
  const [visibleCategories, setVisibleCategories] = useState( false )
  const [visibleCookingTypes, setVisibleCookingTypes] = useState( false )
  const [category, setCategory] = useState( {} )
  const [cookingType, setCookingType] = useState( {} )
  const today = getDateForCalendar( Date.now() )
  const [selectedDay, setSelectedDay] = useState( today )
  const [error, setError] = useState('')

  const dayRange = getDateOfWeek()

  
  const dataIconClassify = [
    {
      label: 'Add categories',
      onPress: setVisibleCategories,
      value: category.name || '',
    },
    {
      label: 'Add cooking types',
      onPress: setVisibleCookingTypes,
      value: cookingType.name || '',
    },
  ]
  
  const handleCreateWishList = async () => {
    const categoryId = category.id
    const cookingTypeId = cookingType.id
    const date = selectedDay;
    
    const errors = validator( {
      categoryId,
      cookingTypeId,
    } )
    
    if (!Object.keys(errors).length) {
      try {
        await createWishList(
          categoryId,
          cookingTypeId,
          new Date(date).getTime().toString(),
        ).then( ( { data = {} } ) => {
          console.log('id', data.createWishList.id);
           return data.createWishList
        })
      } catch (err) {
        setError(err)
      }
    }
  }
  
  if (error) {
    return <Error message={error} />
  }

  return (
    <View style={ styles.container }>
      <Icon
        name="date-range"
        size={METRICS[`${size}Icon`]}
        onPress={() => setVisible( true )}
        label='Select date'
        wrapperIconStyle={[styles.icon, styles.wrapperMainPhoto]}
        customStyle={styles[`${size}Input`]}
      />
      { visible && (
        <Modal
          onDismiss={ () => setVisible( false ) }
          visible={ visible }
          onSubmit={ () => setVisible( false ) }
          size={ size }
        >
          <Calendar
            selectedDay={ selectedDay }
            dayRange={ dayRange }
            onSelectDay={ ( { dateString } ) => setSelectedDay( dateString ) }
            size={ size }
          />
        </Modal>
      ) }
      <Wrapper
        direction="column"
        childPosition="middle"
        customStyles={[styles.wrapperIcon, styles.wrapperClassifyIcon]}
      >
        {dataIconClassify.map(({ onPress, label, value }, index) => (
          <View key={`add-circle_${index}`} style={{ width: '100%' }}>
            <Icon
              name="add-circle"
              size={METRICS[`${size}Icon`]}
              onPress={() => onPress(true)}
              label={label}
              wrapperIconStyle={[styles.icon, styles.classifyIcon]}
              customStyle={styles[`${size}Input`]}
            />
            {value ? (
              <Text style={[{ marginBottom: METRICS.largeMargin }, styles[`${size}Input`]]}>
                {value}
              </Text>
            ) : null}
          </View>
        ))}
      </Wrapper>
      {
        visibleCategories && (
          <Categories
            size={ size }
            title="Categories"
            onDismiss={ () => setVisibleCategories( false ) }
            visible={ visibleCategories }
            handleSubmit={ value => {
              setCategory( value )
              setVisibleCategories( false )
            } }
          />
        )
      }
      {
        visibleCookingTypes && (
          <CookingTypes
            size={ size }
            title="Cooking types"
            onDismiss={ () => setVisibleCookingTypes( false ) }
            visible={ visibleCookingTypes }
            handleSubmit={ value => {
              setCookingType( value )
              setVisibleCookingTypes( false )
            } }
          />
        )
      }
    </View>
  )
}

export default WishListForm