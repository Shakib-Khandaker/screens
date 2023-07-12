import { useNavigation } from "@react-navigation/native";
import * as DocumentPicker from 'expo-document-picker';
import * as React from "react";
import { Button, Text, TextInput, View } from "react-native";

const AddRoom = () => {
  const navigation = useNavigation();
   const [roomname,setRoomName]=React.useState("");
   const [roomprice,setRoomPrice]=React.useState("");
   const [images,setImages]=React.useState("");
   const [success,setSuccess]=React.useState(false);
   const [room,setRoom]=React.useState(false);
   async function uploadImages() {
    try {
      const result = true
     
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
      
      console.warn(err);
      return false;
    }
  }
  const handleSubmit=()=>{
    setTimeout(() => {
        setRoom(true);
    }, 5000);
   
  }
  return (
    <View style={{flex:1,padding:20,backgroundColor: '#FEF8F2',}}>
     {!room&&   <View>
        <Text style={{fontWeight:"bold",fotnSize:24,marginBottom:20}}>Add a New Room to your hotel</Text>
         {success&&<View style={{padding:20,backgroundColor:"#95BF8B"}}><Text style={{color:"white"}}>File was uploaded successfully</Text></View>}
     <View >
      <TextInput value={roomname}onChangeText={e=>setRoomName(e)}placeholder="Enter Room Name"style={{width:"100%",borderWidth:2,borderColor:"grey",marginBottom:20,padding:20}}/>

     </View>
     <View>
      <TextInput value={roomprice}onChangeText={e=>setRoomPrice(e)}placeholder="Enter Room Price"style={{width:"100%",borderWidth:2,borderColor:"grey",marginBottom:20,padding:20}}/>

     </View>
     <Button onPress={uploadImages}title="Upload Images" color="#FE9E28"width="100%"/>
     <View style={{marginTop:20}}></View>
     <Button onPress={handleSubmit}title="Submit" color="#FE9E28"width="100%"/>
     </View>}
     {room&&<View>
        <Text style={{fontSize:25,fontWeight:"bold",marginBottom:20}}>Room has been addedd Successfully</Text>
       <Text style={{fontSize:25,fontWeight:"bold",marginBottom:20}}>RoomName:{roomname}</Text>
       <Text style={{fontSize:25,fontWeight:"bold",marginBottom:20}}>RoomPrice:${roomprice}</Text>
       <Button title="Go Home"  color="#FE9E28"onPress={() => navigation.navigate("Admin")}></Button>
       </View> 
        }
    </View>
  );
};



export default AddRoom;
