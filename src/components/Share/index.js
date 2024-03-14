import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  TextInput,
  Image,
  ScrollView,
  ToastAndroid,
  Platform,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
// import {Entypo} from '@expo/vector-icons';
import styles from './styles';
import reactNativeHTMLToPdf from 'react-native-html-to-pdf';
import RNFS from 'react-native-fs';
// import { UseSelector } from 'react-redux';
import {useSelector, useDispatch} from 'react-redux';
import { emptyCart } from '../../redux/slice/customerSlice';
const Share = () => {
  const checkout = useSelector(state => state.CustomerSlice.cart);
  // const checkout =  useSelector()
  const [show, setshow] = useState(false);
  const dispatch = useDispatch()
  const navigation = useNavigation();
  // const [reloadScreen, setReloadScreen] = useState(false); // State to trigger screen reload
  const route = useRoute();
  const data = route.params.data;
  console.log('details: ' + data );
  // const user =  data.user;
  // const handleOkClick = () => {
  //   setshowShare(true);
  // };

  // const goToOrders = () => {
  //   navigation.navigate("Orders");
  // };

  const goToHome = () => {
    navigation.navigate('Home');
    setshow(false);
    // dispatch(emptyCart())
    // setReloadScreen(true);
  };
  // const HandleShare = () => {
  //   setshow(true);
  // };

    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    const htmlContent = `
 <html>
  <body>
    <h1 style="color: blue; font-size: 30px; font-family: Arial; text-align: center; font-weight: 600;">Synectiks Farm</h1>
    <div style="display: flex; justify-content: space-between; padding:30px">
    <div>
        <p>Customer Name:${data.user.name}</p>
        <p>Phone-Number: ${data.user.phone}</p>
    </div>
    <div>
        <p>${currentDate}</p>
        <p>${currentTime}</p>
    </div>
</div>


    <table style="width:100%">
      <tr>
        <th>Name</th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
      </tr>
      ${checkout.map((data, index) => {
        return `
        <tr style="text-align: center">
          <td>${index + 1}</td>
          <td><img src="${
            data.image
          }" alt="Product Image" style="width: 50px; height: 50px;"></td>
          <td>${data.name}</td>
          <td>${data.price}</td>
          <td>${data.quantity}</td>
          <td>${data.price * data.quantity}</td>
          </tr>
          `;
      })}
          <tr>
   <td colspan="6" style="text-align: right;  font-size: 20px">Subtotal: ${
     data.totolPrice}</td>
   
 </tr>
    </table>

  </body>
</html>

      `;
    // <p>Tax: ${data.price}</p>

    const generatePdf = async () => {
      try {
        const options = {
          html: htmlContent,
          fileName: 'total-amount',
          directory: RNFS.DownloadDirectory, // Save in the downloads directory
        };

        const file = await reactNativeHTMLToPdf.convert(options);
        console.log(file);

        const base64String = await RNFS.readFile(file.filePath, 'base64');
        console.log('Base64 encoded string:', base64String);
        sendBills(base64String);

        // Show success message
        if (Platform.OS === 'android') {
          ToastAndroid.show('PDF downloaded successfully!', ToastAndroid.SHORT);
        } else {
          Alert.alert('Success', 'PDF downloaded successfully!');
        }
      } catch (error) {
        console.error('Error generating PDF:', error);
        // Show error message
        if (Platform.OS === 'android') {
          ToastAndroid.show('Failed to download PDF', ToastAndroid.SHORT);
        } else {
          Alert.alert('Error', 'Failed to download PDF');
        }
      }
      setshow(true);
      // dispatch(emptyCart());
      // sendBills(Bill)
    };

    // ------- api fetching------
    const sendBills = async content => {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      const raw = JSON.stringify({
        content: content,
        name: 'directory',
        phoneNumber: '8142340247',
      });

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };
      try {
        const response = await fetch(
          'https://2evfwh96lk.execute-api.us-east-1.amazonaws.com/sendBills',
          requestOptions,
        ); // Corrected options to requestOptions
        if (response.ok) {
          console.log('Pdf send');
        }
        if (!response.ok) {
          // throw new Error(HTTP error! Status: ${response.status});
        }
        return await response.text();
      } catch (error) {
        console.error(error);
        return null; // Return null or handle the error as needed
      }
    };

  return (
    // <View style={[styles.wrapper]}>
    <View style={[styles.container, {position: 'relative'}]}>
      <Text style={[styles.boldText, styles.dark, styles.shadow]}>
        Paid sucessfully
      </Text>
      <View style={[styles.btns]}>
        <Pressable style={[styles.bgLight, styles.btn]} onPress={goToHome}>
          <Text style={[styles.dark, styles.font]}>Ok</Text>
        </Pressable>
        <Pressable style={[styles.btn, styles.bgDark]} onPress={generatePdf}>
          {/* <Entypo name="share" size={20} color="#d8f3dc" /> */}
          <Text style={[styles.light, styles.font]}>Share</Text>
        </Pressable>

        {/* <TextInput
       style={{
         border: ".5px solid gray",
         padding: 6,

         flexDirection: "column",
       }}
       placeholder="please Enter your phone number"
     ></TextInput> */}
      </View>
      {show && (
        <View
          style={[
            styles.bgLight,
            styles.shadow,
            {padding: 10, position: 'absolute', width: 350, height: 350 },
          ]}>
          <Text style={[styles.semiBoldText, styles.dark, styles.shadow]}>
            Successfullu Shared
          </Text>

          <Pressable
            style={{backgroundColor: 'blue', padding: 10, borderRadius: 5}}
            onPress={goToHome}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>
              OK
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default Share;
