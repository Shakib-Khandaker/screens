import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useState } from 'react';
import { ActivityIndicator, Button, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import back from ".././assets/back.png";
import circle from ".././assets/circle.png";
import email1 from ".././assets/email.png";
import lock from ".././assets/lock.png";
export default function SignUp() {
  const navigation = useNavigation();

  const [userCreated,setUserCreated]=useState(false);
  const [user,setUser]=useState({})
    const handleSubmit=()=>{
        setLoad(true);
        axios.post("http://localhost:5001/user/createuser",{
            email,
            password
        }).then(res=>{{
            console.log(res);
            setLoad(false);
            const user =  res.data;
            setUser(user);
         AsyncStorage.setItem("@user", user).then(response=>{
          setUserCreated(true);
         });
        setUserCreated(true);
        }}).catch(err=>{
            setLoad(false);
            setErr(true);
            console.log(err)})
        
    }
    const [load,setLoad]=useState(false);
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [repassword,setRePassword]=useState("");
    const [err,setErr]=useState(false);
  return (
    <View style={{flex:1,}}>
      {load&&<ActivityIndicator size="large" color="#00ff00" />}
      {!load&&!userCreated&&<View style={styles.container}>
    <View style={{flex:0.5,alignSelf:"flex-start"}}>
    <Image source={back} 
    />
    </View>
    <View style={{textAlign:"center",flex:3,width:"100%",}}>
        <Text style={{fontSize:30,marginBottom:20}}>Sign Up</Text>
        <View style={{display:"flex",flexDirection:"row",alignItems:"center",padding:15,borderWidth:1,borderRadius:20,marginBottom:10,backgroundColor:"white"}}>
          <Image source={email1} style={{height:20,width:20,marginRight:10}}/>
        <TextInput  value={email}onChangeText={e=>setEmail(e)}placeholder="Enter Email Address"style={{borderWidth:0,flex:3,padding:5}}/>
        </View>
        <View style={{display:"flex",flexDirection:"row",alignItems:"center",padding:15,borderWidth:1,borderRadius:20,marginBottom:10,backgroundColor:"white"}}>
        <Image source={lock} style={{height:20,width:20,marginRight:10}}/>
        <TextInput  secureTextEntry={true}value={password}onChangeText={e=>setPassword(e)}placeholder="Enter Password"style={{borderWidth:0,flex:3,padding:5}}/>
        </View>
        <View style={{display:"flex",flexDirection:"row",alignItems:"center",padding:15,borderWidth:1,borderRadius:20,marginBottom:10,backgroundColor:"white"}}>
        <Image source={lock} style={{height:20,width:20,marginRight:10}}/>
        <TextInput  secureTextEntry={true}value={repassword}onChangeText={e=>setRePassword(e)}placeholder="Retype Password"style={{borderWidth:0,flex:3,padding:5}}/>
        </View>
        {err&&<Text style={{color:"red"}}>This email already exists</Text>}
        <View style={{display:"flex",flexDirection:"row"}}>
            <Image source={circle} style={{alignItems:"center"}}/>
            <Text >I have read <Text style={{color:"blue"}}>The Terms of Service</Text></Text>
        </View>
    </View>
    <View flex={0.5}>
      <Pressable  onPress={() => navigation.navigate("HotelSignUp")}>
        <Text style={{marginBottom:10}}>Not a regular user? Sign up as a hotel owner </Text>
        </Pressable>
        <Button title="Continue"color="#FE9E28"onPress={handleSubmit}/>
    </View>
    </View>}
    {userCreated&&<View style={styles.container}>
       <Text style={{fontSize:25,fontWeight:"bold",marginBottom:20}}>You data has been saved</Text>
       <Text style={{fontSize:25,fontWeight:"bold",marginBottom:20}}>Email:{user.email}</Text>
       <Text style={{fontSize:25,fontWeight:"bold",marginBottom:20}}>Id:{user._id}</Text>
       <Button title="Go Home"  color="#FE9E28"onPress={() => navigation.navigate("Home")}></Button>
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
