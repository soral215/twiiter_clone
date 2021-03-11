import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <View>
          <TextInput />
        </View>
        <View style={styles.navMenu}>
          <TouchableOpacity>
            <Text>인기</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>최신</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>사용자</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>사진</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>동영상</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.feed}>
          <Image
            source={require('./img/userProfile.jpg')}
            style={{width: 50, height: 50}}
          />
          <View>
            <View style={styles.userInfo}>
              <Text>aram</Text>
              <Text>@baba</Text>
              <Text>3월 11일</Text>
            </View>

            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
              quibusdam porro, libero dolorem ea recusandae nulla vitae non,
              laudantium in iste! Explicabo reiciendis est incidunt quam fugiat
              quibusdam? Quia, porro!
            </Text>
          </View>
        </View>
        <View style={styles.iconbar}>
          <TouchableOpacity>
            <Image
              source={require('./img/comment.png')}
              style={{width: 40, height: 40}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('./img/bookmark.png')}
              style={{width: 40, height: 40}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('./img/heart.png')}
              style={{width: 40, height: 40}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('./img/share.png')}
              style={{width: 40, height: 40}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  feed: {flexDirection: 'row'},
  navMenu: {flexDirection: 'row'},
  iconbar: {flexDirection: 'row'},
  userInfo: {flexDirection: 'row'},
});
