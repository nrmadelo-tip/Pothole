import { FlatList,Image, StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';



/*
<FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.title}, {item.releaseYear}</Text>
          )}
        />

*/

const Log = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [text,onChangeText] = useState();
  const [das,setDas] = useState()
  const [yes,setYes] = useState(true)
  function updateIP (text){
    setDas(text)
    console.log(das)
  }
  const getPots = async() =>{
    setDas(text)
    try{
      
      const response = await fetch(`http://${das}:9191/GetPotholes`)
      const dat = await response.json();
      setData(dat);
      setYes(false)
      setYes(false)
    } catch(error){
      console.error(error);
    }finally {
      setLoading(false);
    }
  }



  useEffect(()=>{
    getPots()
  },[data,das])


  

  return(
    <SafeAreaView style={styles.container}>
      { yes && <TextInput
        style={{height: 40,backgroundColor: 'azure', fontSize: 20,margin:20}}  
        onChangeText={onChangeText}
        value={text}
        editable = {yes}
        />}
        {yes && 
        <Button
          onPress={()=>updateIP(text)}
          title="Update IP Address of RPI"
          color="#841584"
          
        />}
      <View style={styles.headerBar}>
          <Text style={styles.txtBar}> Log Screen</Text>
      </View>
          <View>
              <Text style={styles.txtHeader}>List of Potholes</Text>
          </View>
          <FlatList 
                // contentContainerStyle={{
                //   padding : 20,
                //   backgroundColor: "white"
                // }}
                data={data}
                keyExtractor={({id}, index) => id}
                contentContainerStyle={{ paddingBottom: "20%"}}
                renderItem= {({item}) =>(
          <View>
                
                    <View style={styles.itemList}>
                      <Image 
                      source={{uri: `data:image/png;base64,${item.blobData}`}}
                      style={{width: 200, height: 100, margin:5}}/>
                      
                      <View style={{paddingLeft:15}}>
                        <Text style={styles.txtName}>Location: {item.location}</Text>
                        <Text style={styles.txtName}>dateTime: {item.dateTime}</Text>
                        <Text style={styles.txtName}>Latitude: {item.latitude}</Text>
                        <Text style={styles.txtName}>Longtitude: {item.longitude}</Text>
                      </View>
                    </View> 
                
          </View>
          )}/>
          <View style={styles.headerBar}/>
    </SafeAreaView>
  );
};

export default Log;

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#e1e1e1"
  },
  headerBar: {
    padding:20,
    backgroundColor:"#e1e1e1"
  },
  txtBar:{
    fontsize: 50,
    fontWeight: "bold",
    textAlign: "center",
  },
  txtHeader:{
    fontsize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  itemList:{
    paddingVertical: 15,
    borderBottomColor: "#e2e2e",
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
    // flexDirection: 'row',
  },
  txtName:{
    fontsize: 16,
    textAlign: "center",
    fontWeight: "bold"
  },
});