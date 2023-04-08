import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function RepoItemCaption({
  forks, stars, rating, reviews,
}) {
  const parseToThousand = (val) => (val >= 1000
    ? `${Math.round(val / 100) / 10}k`
    : String(val));

  return (
    <View style={styles.caption_container}>
      <View style={styles.caption_content}>
        <Text style={styles.caption_text}>Forks</Text>
        <Text style={styles.caption_text_number}>{ parseToThousand(forks)}</Text>
      </View>
      <View style={styles.caption_content}>
        <Text style={styles.caption_text}>Stars</Text>
        <Text style={styles.caption_text_number}>{ parseToThousand(stars)}</Text>
      </View>
      <View style={styles.caption_content}>
        <Text style={styles.caption_text}>Rating</Text>
        <Text style={styles.caption_text_number}>{parseToThousand(rating)}</Text>
      </View>
      <View style={styles.caption_content}>
        <Text style={styles.caption_text}>Reviews</Text>
        <Text style={styles.caption_text_number}>{parseToThousand(reviews)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  caption_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
  },
  caption_content: {
    marginHorizontal: 20,
    textAlign: 'center',
    justifyContent: 'center',
  },
  caption_text: {
    fontSize: 15,
  },
  caption_text_number: {
    textAlign: 'center',
    fontSize: 13,
  },

});
