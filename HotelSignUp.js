import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import * as DocumentPicker from 'expo-document-picker';
import { useState } from 'react';
import { ActivityIndicator, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import back from ".././assets/back.png";
import email1 from ".././assets/email.png";
import lock from ".././assets/lock.png";

export default function HotelSignUp() {
  const navigation = useNavigation();
  const [singleFile, setSingleFile] = useState([]);
  const [images,setImages]=useState([]);
  const [video,setVideo]=useState([]);

  const checkPermissions = async () => {
    try {
      const result = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
      );

      if (!result) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title:
              'You need to give storage permission to download and save the file',
            message: 'App needs access to your camera ',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the camera');
          return true;
        } else {
          Alert.alert('Error', I18n.t('PERMISSION_ACCESS_FILE'));

          console.log('Camera permission denied');
          return false;
        }
      } else {
        return true;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  async function uploadVideo() {
    try {
      const result = true
      setSuccess(true);
      if (result) {
        const result = await DocumentPicker.getDocumentAsync({
          copyToCacheDirectory: false,
        
          type: 'video/*',
        });

        if (result.type === 'success') {
            setSuccess(false);
          setVideo(result.output)
          // Setting the state to show single file attributes
         
        }
      }
    } catch (err) {
      setSingleFile(null);
      console.warn(err);
      return false;
    }
  }
  async function uploadImages() {
    try {
      const result = true
      setSuccess(true);
      if (result) {
        const result = await DocumentPicker.getDocumentAsync({
          copyToCacheDirectory: false,
          multiple:true,
          type: 'image/*',
        });

        if (result.type === 'success') {
            setSuccess(true);
          setImages(result.output)
          // Setting the state to show single file attributes
         
        }
      }
    } catch (err) {
      setSingleFile(null);
      console.warn(err);
      return false;
    }
  }
  async function selectFile() {
    try {
        setSuccess(true);
      const result = true

      if (result) {
        const result = await DocumentPicker.getDocumentAsync({
          copyToCacheDirectory: false,
          
        });

        if (result.type === 'success') {
          // Printing the log realted to the file
          setSuccess(true);
          console.log(result.file);
          setSingleFile(result1=>[...result1,result.file]);
        }
      }
    } catch (err) {
      setSingleFile(null);
      console.warn(err);
      return false;
    }
  }
  const [userCreated,setUserCreated]=useState(false);
  const [user,setUser]=useState({})
    const handleSubmit=()=>{
        setLoad(true);
        axios.post("http://localhost:5001/hotel/createhotel",{
            name,
            address,
            taxId,
            accountName,
            accountNumber,
            email,
            password,
            video,
            images,
            singleFile





        },{headers:{
          
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
            
        }}).then(res=>{{
            console.log(res);
            setLoad(false);
            const user =  res.data;
            setUser(user);
         AsyncStorage.setItem("@user", user).then(response=>{
          setUserCreated(true);
         });
       
        }}).catch(err=>{
          setUserCreated(true);
          setSuccess(true);
            setLoad(false);
            setErr(true);
            console.log(err)})
        
    }
    const [success,setSuccess]=useState(false);
    const [load,setLoad]=useState(false);
    const [name,setName]=useState("");
    const [address,setAddress]=useState("");
    const [taxId,setTaxId]=useState("");
    const [accountName,setAccountName]=useState("");
    const [accountNumber,setAccountNumber]=useState("");
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState("");
    const [err,setErr]=useState(false);
  return (
    <View style={{flex:1,}}>
        {success&&<View style={{padding:20,backgroundColor:"#95BF8B"}}><Text style={{color:"white"}}>File was uploaded successfully</Text></View>}
      {load&&<ActivityIndicator size="large" color="#00ff00" />}
      {!load&&!userCreated&&<View style={styles.container}>
    <View style={{flex:0.5,alignSelf:"flex-start"}}>
    <Image source={back} style={{height:20,width:20}}
    />
    </View>
    <View style={{textAlign:"center",flex:3,width:"100%",}}>
        <Text style={{fontSize:30,marginBottom:20,fontWeight:"bold"}}>Hotel Sign Up</Text>
        <View style={{display:"flex",flexDirection:"row",alignItems:"center",padding:15,borderWidth:1,borderRadius:20,marginBottom:10,backgroundColor:"white"}}>
          <Image source={email1} style={{height:20,width:20,marginRight:10}}/>
        <TextInput  value={email}onChangeText={e=>setEmail(e)}placeholder="Enter Hotel Email"style={{borderWidth:0,flex:3,padding:5}}/>
        </View>
        <View style={{display:"flex",flexDirection:"row",alignItems:"center",padding:15,borderWidth:1,borderRadius:20,marginBottom:10,backgroundColor:"white"}}>
          <Image source={lock} style={{height:20,width:20,marginRight:10}}/>
        <TextInput  secureTextEntry={true}value={password}onChangeText={e=>setPassword(e)}placeholder="Enter Password"style={{borderWidth:0,flex:3,padding:5}}/>
        </View>
        <View style={{display:"flex",flexDirection:"row",alignItems:"center",padding:15,borderWidth:1,borderRadius:20,marginBottom:10,backgroundColor:"white"}}>
          <Image source={email1} style={{height:20,width:20,marginRight:10}}/>
        <TextInput  value={name}onChangeText={e=>setName(e)}placeholder="Enter Hotel Name"style={{borderWidth:0,flex:3,padding:5}}/>
        </View>
        <View style={{display:"flex",flexDirection:"row",alignItems:"center",padding:15,borderWidth:1,borderRadius:20,marginBottom:10,backgroundColor:"white"}}>
        <Image source={lock} style={{height:20,width:20,marginRight:10}}/>
        <TextInput  value={address}onChangeText={e=>setAddress(e)}placeholder="Enter Address"style={{borderWidth:0,flex:3,padding:5}}/>
        </View>
        <View style={{display:"flex",flexDirection:"row",alignItems:"center",padding:15,borderWidth:1,borderRadius:20,marginBottom:10,backgroundColor:"white"}}>
        <Image source={lock} style={{height:20,width:20,marginRight:10}}/>
        <TextInput value={taxId}onChangeText={e=>setTaxId(e)}placeholder="TaxId or Registration Number"style={{borderWidth:0,flex:3,padding:5}}/>
        </View>
        <Text style={{marginTop:10,marginBottom:10,fontWeight:"bold"}}>Bank Account Details</Text>
        <View style={{display:"flex",flexDirection:"row",alignItems:"center",padding:15,borderWidth:1,borderRadius:20,marginBottom:10,backgroundColor:"white"}}>
        <Image source={lock} style={{height:20,width:20,marginRight:10}}/>
        <TextInput  value={accountName}onChangeText={e=>setAccountName(e)}placeholder="Enter Bank Account Name"style={{borderWidth:0,flex:3,padding:5}}/>
        </View>
        <View style={{display:"flex",flexDirection:"row",alignItems:"center",padding:15,borderWidth:1,borderRadius:20,marginBottom:10,backgroundColor:"white"}}>
        <Image source={lock} style={{height:20,width:20,marginRight:10}}/>
        <TextInput  value={accountNumber}onChangeText={e=>setAccountNumber(e)}placeholder="Enter Bank Account Name"style={{borderWidth:0,flex:3,padding:5}}/>
        </View>
        <Button onPress={selectFile}title="Business Authentic File" color="#FE9E28"width="100%"style={{marginBottom:10}}/>
        {err&&<Text style={{color:"red"}}>This email already exists</Text>}
        <View style={{marginTop:20}}></View>
        <Button onPress={selectFile}title="Upload ID Card" color="#FE9E28"width="100%"/>
        <View style={{marginTop:20}}></View>
        <Button onPress={uploadImages}title="Upload Images" color="#FE9E28"width="100%"/>
        <View style={{marginTop:20}}></View>
        <Button onPress={uploadVideo}title="Upload Video" color="#FE9E28"width="100%"/>
        <View style={{marginTop:20}}></View>
        <Button onPress={handleSubmit}title="Submit Hotel" color="#FE9E28"width="100%"/>
        <View style={{marginTop:20,marginBottom:20}}></View>
    </View>
    
    </View>}
    {userCreated&&<View style={styles.container}>
       <Text style={{fontSize:25,fontWeight:"bold",marginBottom:20}}>You data has been saved</Text>
       <Text style={{fontSize:25,fontWeight:"bold",marginBottom:20}}>Email:germanyengland911@gmail.com</Text>
       <Text style={{fontSize:25,fontWeight:"bold",marginBottom:20}}>Id:02</Text>
       <Button title="Go Home"  color="#FE9E28"onPress={() => navigation.navigate("Admin")}></Button>
      </View>}
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  display:"flex",
    flexDirection:"column",
    backgroundColor: '#FEF8F2',
    alignItems: 'center',
    padding:25,
    justifyContent: 'center',
  },
});
