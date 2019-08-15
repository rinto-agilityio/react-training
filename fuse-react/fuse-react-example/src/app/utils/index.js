import _ from 'lodash'

export const getFilteredArray = (data, searchText) => {
  if (searchText.length === 0) {
    return data;
  }
  return _.filter(data, item =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  )
}
