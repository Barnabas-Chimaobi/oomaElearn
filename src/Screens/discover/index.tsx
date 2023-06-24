import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {Container, HeaderParams, Input} from '../../component';
import {BUBBLEREGULAR, POPPINSMEDIUM} from '../../font';
import {Colors} from '../../helpers/colors';
import Icon from 'react-native-vector-icons/EvilIcons';
import {width} from '../../helpers/utils';
import Explore1 from '../../assets/images/explore1.svg';
import Explore2 from '../../assets/images/explore2.svg';
import Explore3 from '../../assets/images/explore3.svg';
import Explore4 from '../../assets/images/explore4.svg';
import Course1 from '../../assets/images/course1.svg';
import Course2 from '../../assets/images/course2.svg';
import Course3 from '../../assets/images/course3.svg';
import {WhiteSpace} from '@ant-design/react-native';

const Discover = () => {
  const academics = [
    {name: 'Kids', button: 'Explore', image: <Explore1 />},
    {name: 'Sciences', button: 'Explore', image: <Explore2 />},
    {name: 'Economics', button: 'Explore', image: <Explore3 />},
    {name: 'Age', button: 'Explore', image: <Explore4 />},
  ];

  const courses = [
    {
      name: 'Technology',
      course: 'UI Style guide with Figma',
      image: <Course1 width={130} height={130} />,
    },
    {
      name: 'Kids',
      course: 'Counting from 1 - 10',
      image: <Course2 width={130} height={130} />,
    },
    {
      name: 'Technology',
      course: 'UI Vector designs third',
      image: <Course3 width={130} height={130} />,
    },
  ];
  const backgroundColors = [
    '#FFABAB',
    '#15BCCA',
    '#F6FFA6',
    '#FFA559',
    '#00FFFF',
    '#FF00FF',
    '#000000',
  ];
  const backgroundColor = ['#D14D72', '#15BCCA', '#FBD144', '#FF6000'];

  return (
    <View>
      <HeaderParams />
      <Container>
        <Text style={styles.discover}>Discover</Text>
        <View style={styles.searchContainer}>
          <Icon
            style={styles.icon}
            color={Colors.day_mode.black}
            size={25}
            name="search"
          />
          <Input inputStyle={styles.inputStyle} placeholder="Search" />
        </View>
        <Text style={styles.acadaTitle}>Academics</Text>
        <View style={styles.acadaContainer}>
          {academics?.map((item, index) => {
            return (
              <View
                style={[
                  {
                    backgroundColor:
                      backgroundColors[index % backgroundColors.length], // Assign a unique background color to each item
                  },
                  styles.courseContainer,
                ]}
                key={index}>
                {item.image}
                <Text style={styles.name}>{item.name}</Text>
                <View
                  style={[
                    {
                      backgroundColor:
                        backgroundColor[index % backgroundColors.length],
                    },
                    styles.buttonContainer,
                  ]}>
                  <Text style={[styles.buttonTitle]}>{item.button}</Text>
                </View>
              </View>
            );
          })}
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.courseTitle}>Top Courses</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>
        <View>
          <ScrollView horizontal>
            {courses?.map(item => {
              return (
                <View style={styles.courseImageContainer}>
                  {item.image}
                  <Text style={styles.course}>{item.course}</Text>
                  <Text style={styles.categoryName}>{item.name}</Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </Container>
    </View>
  );
};

export {Discover};

const styles = StyleSheet.create({
  discover: {
    fontFamily: BUBBLEREGULAR,
    fontSize: 30,
    color: Colors.day_mode.primary,
    paddingBottom: 10,
  },
  icon: {
    marginTop: 9,
    // marginVertical: 15,
  },
  inputStyle: {
    width: width * 0.82,
    borderColor: Colors.day_mode.white,
    // marginTop: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    borderRadius: 50,
    backgroundColor: Colors.day_mode.white,
    elevation: 5,
    paddingHorizontal: 5,
    height: 39,
    // marginTop: 10,
  },
  acadaTitle: {
    color: Colors.day_mode.black,
    fontFamily: BUBBLEREGULAR,
    paddingVertical: 10,
    fontSize: 20,
  },
  courseTitle: {
    color: Colors.day_mode.black,
    fontFamily: BUBBLEREGULAR,
    paddingVertical: 10,
    fontSize: 20,
  },
  acadaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  courseContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    alignItems: 'center',
    alignContent: 'center',
    width: width * 0.41,
    justifyContent: 'space-around',
    marginBottom: 10,
    borderRadius: 10,
    elevation: 5,
  },
  name: {
    fontFamily: BUBBLEREGULAR,
    fontSize: 20,
    color: Colors.day_mode.primary,
  },
  buttonTitle: {
    fontFamily: BUBBLEREGULAR,
    padding: 6,
    paddingHorizontal: 35,
    color: Colors.day_mode.white,
  },
  buttonContainer: {
    borderRadius: 15,
    elevation: 5,
    marginTop: 5,
    // padding: 5,
  },
  seeAll: {
    paddingTop: 12,
    fontFamily: POPPINSMEDIUM,
    color: Colors.day_mode.black,
  },
  courseImageContainer: {
    width: width * 0.4,
    marginBottom: width * 0.2,
  },
  course: {
    fontFamily: BUBBLEREGULAR,
    color: Colors.day_mode.black,
    fontSize: 16,
  },
  categoryName: {
    fontFamily: BUBBLEREGULAR,
    color: Colors.day_mode.primary,
  },
});
