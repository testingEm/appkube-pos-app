import React from 'react';
import style from './styles';
import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    Image,
    ScrollView,
    // TextInput,
    // Picker,
    // Pressable,
 } from 'react-native';


const PrintToA4 = () => {
  // Assuming a portrait orientation
//   const width = Dimensions.get('window').width;
//   const height = width * 1.4142; // A4 aspect ratio
const { width, height } = Dimensions.get('window');
const viewWidth = width;
const viewHeight = viewWidth * 1.414; // A4 aspect ratio
const adjustedHeight = viewHeight > height ? height : viewHeight;
  const adjustedWidth = adjustedHeight / 1.414;

  return (
    <ScrollView  contentContainerStyle={[styles.maincontainer, { width: adjustedWidth, height: adjustedHeight }]}>
        <View style={[style.container,style.main]}>
            <Image
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/2/25/Apple_fruit_icon.svg",
                }}
                style={{ width: 62, height: 62, borderRadius: 10 }}
              />
              <View style={style.flexStyle}>
                <Text style={style.textStyle}>Apple</Text>
                <Text style={style.textStyle}>Price: $5/ kg</Text>
              </View>
              
        </View>
        <View style={[style.container,style.main]}>
            <Image
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/2/25/Apple_fruit_icon.svg",
                }}
                style={{ width: 62, height: 62, borderRadius: 10}}
              />
              <View style={style.flexStyle}>
                <Text style={style.textStyle}>Apple</Text>
                <Text style={style.textStyle}>Price: $5/ kg</Text>
              </View>
              
        </View>
        <View style={[style.container,style.main]}>
            <Image
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/2/25/Apple_fruit_icon.svg",
                }}
                style={{ width: 62, height: 62, borderRadius: 10}}
              />
              <View style={style.flexStyle}>
                <Text style={style.textStyle}>Apple</Text>
                <Text style={style.textStyle}>Price: $5/ kg</Text>
              </View>
              
        </View>
        <View style={[style.container,style.main]}>
            <Image
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/2/25/Apple_fruit_icon.svg",
                }}
                style={{ width: 62, height: 62, borderRadius: 10}}
              />
              <View style={style.flexStyle}>
                <Text style={style.textStyle}>Apple</Text>
                <Text style={style.textStyle}>Price: $5/ kg</Text>
              </View>
              
        </View>
        <View style={[style.container,style.main]}>
            <Image
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/2/25/Apple_fruit_icon.svg",
                }}
                style={{ width: 62, height: 62, borderRadius: 10}}
              />
              <View style={style.flexStyle}>
                <Text style={style.textStyle}>Apple</Text>
                <Text style={style.textStyle}>Price: $5/ kg</Text>
              </View>
              
        </View>
        <View style={[style.container,style.main]}>
            <Image
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/2/25/Apple_fruit_icon.svg",
                }}
                style={{ width: 62, height: 62, borderRadius: 10}}
              />
              <View style={style.flexStyle}>
                <Text style={style.textStyle}>Apple</Text>
                <Text style={style.textStyle}>Price: $5/ kg</Text>
              </View>
              
        </View>
        <View style={[style.container,style.main]}>
            <Image
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/2/25/Apple_fruit_icon.svg",
                }}
                style={{ width: 62, height: 62, borderRadius: 10}}
              />
              <View style={style.flexStyle}>
                <Text style={style.textStyle}>Apple</Text>
                <Text style={style.textStyle}>Price: $5/ kg</Text>
              </View>
              
        </View>
        <View style={[style.container,style.main]}>
            <Image
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/2/25/Apple_fruit_icon.svg",
                }}
                style={{ width: 62, height: 62, borderRadius: 10}}
              />
              <View style={style.flexStyle}>
                <Text style={style.textStyle}>Apple</Text>
                <Text style={style.textStyle}>Price: $5/ kg</Text>
              </View>
              
        </View>
        <View style={[style.container,style.main]}>
            <Image
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/2/25/Apple_fruit_icon.svg",
                }}
                style={{ width: 62, height: 62, borderRadius: 10}}
              />
              <View style={style.flexStyle}>
                <Text style={style.textStyle}>Apple</Text>
                <Text style={style.textStyle}>Price: $5/ kg</Text>
              </View>
              
        </View>
        <View style={[style.container,style.main]}>
            <Image
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/2/25/Apple_fruit_icon.svg",
                }}
                style={{ width: 62, height: 62, borderRadius: 10}}
              />
              <View style={style.flexStyle}>
                <Text style={style.textStyle}>Apple</Text>
                <Text style={style.textStyle}>Price: $5/ kg</Text>
              </View>
              
        </View>
        <View style={[style.container,style.main]}>
            <Image
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/2/25/Apple_fruit_icon.svg",
                }}
                style={{ width: 62, height: 62, borderRadius: 10}}
              />
              <View style={style.flexStyle}>
                <Text style={style.textStyle}>Apple</Text>
                <Text style={style.textStyle}>Price: $5/ kg</Text>
              </View>
              
        </View>
        <View style={[style.container,style.main]}>
            <Image
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/2/25/Apple_fruit_icon.svg",
                }}
                style={{ width: 62, height: 62, borderRadius: 10}}
              />
              <View style={style.flexStyle}>
                <Text style={style.textStyle}>Apple</Text>
                <Text style={style.textStyle}>Price: $5/ kg</Text>
              </View>
              
        </View>





        
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    borderWidth: 1,
    borderColor: 'black',
    display:"flex",
    flexDirection:"row",
    paddingTop:10,
    flexWrap:"wrap",
    // backgroundColor: "red",
    
  },
});

export default PrintToA4;
