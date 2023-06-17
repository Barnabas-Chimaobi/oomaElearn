import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  FlatList,
  StatusBar,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {SORABOLD, SORAREGULAR} from '../../font';
import {Colors} from '../../helpers/colors';
// import {images} from '../../assets';
import {Buttons} from '../../component';
import {t} from '../../i18n';
import {Slides} from '../../component/onboarding/slides';
import {slideList} from '../../helpers/constants';
import {Button} from '@ant-design/react-native';
import {Footer} from '../../component/onboarding/footer';

const {width, height} = Dimensions.get('window');

const Onboarding = ({navigation}) => {
  const ref = React.useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  //  const navigation = useNavigation()

  const updateCurrentSlidesIndex = e => {
    const currentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(currentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slideList?.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset(offset);
      setCurrentSlideIndex(nextSlideIndex);
    }
  };

  const skip = () => {
    const lastSlideIndex = currentSlideIndex - 1;
    const offset = lastSlideIndex * width;
    ref?.current?.scrollToOffset(offset);
    setCurrentSlideIndex(lastSlideIndex);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.day_mode.white}
      />
      <View style={styles.container}>
        <FlatList
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlidesIndex}
          pagingEnabled
          horizontal
          data={slideList}
          contentContainerStyle={{height: height * 0.75}}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <Slides item={item} />}
        />
        <Footer
          scrollfunc={updateCurrentSlidesIndex}
          refs={ref}
          slideList={slideList}
          currentSlideIndex={currentSlideIndex}
        />
      </View>
    </SafeAreaView>
  );
};

export {Onboarding};

const styles = StyleSheet.create({
  slide: {
    width: 1000,
    height: 1000,
  },
  image: {
    height: Dimensions.get('window').height / 1.2,
    width: Dimensions.get('window').width / 0.9,
  },
  image1: {
    height: Dimensions.get('window').height / 1.2,
    width: Dimensions.get('window').width / 0.1,
    top: 70,
  },
  text: {},
  container: {
    backgroundColor: Colors.day_mode.white,
    flex: 1,
  },
  buttonContainer: {
    marginHorizontal: 30,
    marginBottom: 60,
  },
  buttonStyleSignup: {
    backgroundColor: Colors.day_mode.cardColor,
    borderRadius: 10,
    borderColor: Colors.day_mode.cardColor,
  },
  buttonStyleLogin: {
    backgroundColor: Colors.day_mode.white,
    borderRadius: 50,
  },
  titleStyleLogin: {
    color: Colors.day_mode.primary,
  },
  indicator: {
    height: 5,
    width: 5,
    backgroundColor: Colors.day_mode.white,
    marginHorizontal: 8,
    borderRadius: 2,
  },
  buttonText: {
    color: Colors.day_mode.primary,
  },
  buttonTextSignUp: {
    color: Colors.day_mode.white,
  },
});
