import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles/Info';
import CommonStyles from '../../../themes/common';

const Info = ({ data }) => (
  <View style={[styles.wrapper, CommonStyles.layoutColumn]}>
    <View style={styles.avatarWrapper}>
      <Image style={styles.avatar} source={{ uri: data.profile_pic_url }} />
      <Text style={[styles.username, CommonStyles.textBold]}>
        {data.username}
      </Text>
    </View>
    <Text>
      <Text style={CommonStyles.textBold}>{data.full_name}</Text>
      {' - '}
      {data.biography}
    </Text>
  </View>
);

export default Info;
