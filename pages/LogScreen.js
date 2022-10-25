import { FlatList,Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

import { Image } from 'react-native';


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
  
  const getPots = async() =>{
    try{
      const response = await fetch("http://192.168.22.4:9191/GetPotholes")
      const dat = await response.json();
      setData(dat);
    } catch(error){
      console.error(error);
    }finally {
      setLoading(false);
    }
  }



  useEffect(()=>{
    getPots()
  },[data])


  

  return(
    <SafeAreaView style={styles.container}>
      
      <View style={styles.headerBar}>
          <Text style={styles.txtBar}> Log Screen</Text>
      </View>
      <ScrollView
          
      >
          <View>
              <Text style={styles.txtHeader}>List of Potholes</Text>
          </View>
          <View>
                <FlatList 
                contentContainerStyle={{
                  padding : 20,
                  backgroundColor: "white"
                }}
                data={data}
                keyExtractor={({id}, index) => id}
                renderItem= {({id})=>(

                    <View style={styles.itemList}>
                      <View/>
                      <View style={styles.icon}/>

                      <Image 
                      source={{uri: `data:image/png;base64,${item.blobData}`}} 
                      style={{width: 100, height: 100, margin:5}}/>
                      
                      <View style={{paddingLeft:15}}>
                        <Text style={styles.txtName}>ID: {item.id}</Text>
                        <Text style={styles.txtName}>Location: {item.location}</Text>
                        <Text style={styles.txtName}>dateTime: {item.dateTime}</Text>
                        <Text style={styles.txtName}>Latitude: {item.latitude}</Text>
                        <Text style={styles.txtName}>Longitude: {item.longitude}</Text>
                      </View>
                    </View> 
                )}/>
          </View>
          <View style={styles.headerBar}/>
        </ScrollView>
    </SafeAreaView>
  );
};

export default LogScreen;

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
  },
  txtHeader:{
    fontsize: 18,
    fontWeight: "bold"
  },
  itemList:{
    paddingVertical: 15,
    borderBottomColor: "#e2e2e",
    borderBottomWidth: 0.5,
    flexDirection: 'row'
  },
  txtName:{
    fontsize: 16,
    fontWeight: "bold"
  },
  icon:{
    width:150,
    height:150,
    margin:5,
    backgroundColor: "#e6e6e6"
  }
});