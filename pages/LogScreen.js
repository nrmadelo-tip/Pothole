import { FlatList,Image, StyleSheet, Text, View,Alert, Modal, Pressable ,ActivityIndicator, ScrollView, TextInput, Button,TouchableOpacity,RefreshControl } from 'react-native'
import React, { useContext,useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES, FONTS, icons, images } from "../constants"
import LinearGradient from 'react-native-linear-gradient';
import { GlobalContext } from '../datafolder/GlobalState';
import Lottie from 'lottie-react-native';

const Log = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [text,onChangeText] = useState();
  const {das,setDas} = useContext(GlobalContext)
  const {yes,setYes} = useContext(GlobalContext)
  const [modalVisible, setModalVisible] = useState(false);
  const [emailsuccess,setEmailSuccess] = useState(false);
  const [emaildata,setEmailData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  let deym
  function updateIP (text){
    setDas(text)
    console.log(das)
  }
  function openEmail(text){
    setModalVisible(true)
    setEmailData(text)
    if(emaildata == null){
      setEmailData(text)
    }
  }    
    useEffect(() => {
      let timer = null;
      if(yes === false){
      timer = setInterval(() => {
        handleRefresh();
      }, 30000);
    }
      // Clear the interval when the component unmounts
      return () => clearInterval(timer);
    }, [yes]);
  
  const sendEmail = (x) =>{
    var params = {
      "recipient": "dpwhtesting@gmail.com",
      "msgBody": `There is confirm Pothole detected at ${emaildata.location} \n in Longtitude:   ${emaildata.longitude} Latitude ${emaildata.latitude} \n on Time: ${emaildata.dateTime} \n ` ,
      "subject": "Pothole Here!",
      "attachment":`/var/www/html/images/${emaildata.imagePath}`
    }
    console.log("SEND EMAIL!!!")
    let headers = {
      'Content-type': 'application/json'
  };

  let options = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(params)
  };
  console.log(deym)
  setModalVisible(!modalVisible)
  setVisible(true)
  fetch(`http://${x}:9191/sendMailWithAttachment`, options)
    .then((httpResponse) => {
        if (httpResponse.ok) {
            setVisible(false)
            setEmailSuccess(true)
            console.log('Your mail is sent!');            
        } else {
            setVisible(false)
            return httpResponse.text()
              .then(text => Promise.reject(text));
        }
    })
    .catch((error) => {
      setVisible(false)
      Alert.alert(
        "Error Send Email",
        "Your Email has not been sent",
        [
          {
            text: "Ok",
            onPress: ()=> console.log("cancel is pressed"),
            style: "cancel",
          },
        ],
        {
          cancelable: true,
          onDismiss: ()=>
          Alert.alert(
            "This alert was dismissed by tapping outside of the alert dialog."
          ),
        }
      )
        console.log('Oops... ' + error);
    });
  }
  
  const getPots = async(loadMore = false) =>{
    try{
      deym = das
      console.log(page)
      const response = await fetch(`http://${deym}:9191/GetPotholes?page=${page}&size=10&sort=dateTime,desc`)
      const responseData = await response.json()
      const { content: newData, totalPages: newTotalPages } = responseData;
      const updatedData = loadMore ? [...data, ...newData] : newData;
      setData(newData);
      // console.log("NewData",newData,"responseData",responseData,"updateddata",updatedData)
      setLoading(false);
      setRefreshing(false)
      setTotalPages(newTotalPages);

      setYes(false)  
    } catch(error){
      console.log("NO VALUE",error)
      setLoading(false)
      setRefreshing(false)
    }
    
  }
  const handleRefresh = () => {
    setRefreshing(true);
    setPage(0)
    getPots()
  };
  useEffect(()=>{
    if(das != null && yes === true){
      deym = das
      getPots();
      
    }
  },[das])
  useEffect(()=>{
    if(yes === false)
    {
      getPots();
      console.log("pageuseeffect",page)
    }
  },[page])
  const handleLoadMore = () => {
    if (isLoading || page >= totalPages) return;
    setPage(page);
    getPots(true);
  };
  const handlePageChange = (pageNumber) => {
    setRefreshing(true);
    setPage(pageNumber);
    

  };
  const renderFooter = () => {
    if (!isLoading) return null;

    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  };
  const renderPaginationButtons = () => {
    const buttons = [];

    for (let i = 0; i <= totalPages-1; i++) {
      buttons.push(
        <Button
          key={i}
          title={(i+1).toString()}
          disabled={i===page}
          onPress={() => handlePageChange(i)}
        />
      );
    }

    return buttons;
  };
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
          title="Update IP Address of Jetson"
          color="#841584"
          
        />}
        {!yes && 
          <View style={{ alignItems: 'center', marginTop: 10 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Button
              title="Previous"
              disabled={page === 0}
              onPress={() => handlePageChange(page - 1)}
            />
    
            {renderPaginationButtons()}
    
            <Button
              title="Next"
              disabled={page+1 >= totalPages}
              onPress={() => handlePageChange(page + 1)}
            />
          </View>
          </ScrollView>
        </View>

          }
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
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ paddingBottom: "20%",padding:20,paddingRight:50,paddingLeft:50}}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={renderFooter}
                refreshControl={
                  <RefreshControl 
                    refreshing={refreshing}
                    onRefresh={handleRefresh}/>
                  }



                renderItem= {({item}) =>(

                  
          <View>
                    <View style={styles.itemList}>
                      <Image 
                      source = {{uri:`http://${das}/images/${item.imagePath}`}}
                      style={{ width: 130, height: 150 , margin:5}}/>
                      
                      <View style={{paddingLeft:15}}>
                        <Text style={styles.txtName}>Location: {item.location}</Text>
                        <Text style={styles.txtName}>dateTime: {item.dateTime}</Text>
                        <Text style={styles.txtName}>Latitude: {item.latitude}</Text>
                        <Text style={styles.txtName}>Longtitude: {item.longitude}</Text>

                  <TouchableOpacity
                    style={[styles.shadow, { marginTop: 2, width: '50%', height: 50, alignItems: 'center', justifyContent: 'center' }]}
                    >
                    <LinearGradient
                        style={{ height: '50%', width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}
                        colors={['#FE9001', '#010101']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }} onPress={() => openEmail(item)}>Send Email</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                          
                      </View>

                    </View> 
                
          </View>
          
          )}/>
          
          {/* <AnimatedLoader
            visible = {visible}
            overlayColor = "rgba(255,255,255,0.75)"
            animationStyle={styles.lottie}
            speed={1}>
            <Text>Sending Email~~</Text>
          </AnimatedLoader> */}
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={visible}
              onRequestClose={()=>{
                setVisible(!visible)
              }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.emailS}>
                    {visible && <Lottie source={require('../assets/animated_json/email-sent.json')} autoPlay loop />}
                  </View>
                </View>
              </Modal>
          </View>
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={emailsuccess}
              onRequestClose={()=>{
                setVisible(!visible)
              }}
              >
                <View style={styles.centeredView}>
                  <View>
                  <Pressable
                      style={[styles.emailS, styles.emailS]}
                      onPress={() => setEmailSuccess(!emailsuccess)}
                      >
                    <Lottie source={require('../assets/animated_json/email-success.json')}autoPlay loop={false}/>
                    
                      </Pressable>
                  </View>
                </View>
              </Modal>
          </View>
          
          <View style={styles.headerBar}/>
                        <View style={styles.centeredView}>
                          <Modal
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                              Alert.alert("Modal has been closed.");
                              setModalVisible(!modalVisible);
                            }}
                          >
                            <View style={styles.centeredView}>
                              <View style={styles.modalView}>
                                <Text style={styles.txtName}>Location: {emaildata.location}</Text>
                                <Text style={styles.txtName}>dateTime: {emaildata.dateTime}</Text>
                                <Text style={styles.txtName}>Latitude: {emaildata.latitude}</Text>
                                <Text style={styles.txtName}>Longtitude: {emaildata.longitude}</Text>
                                <Pressable
                                  style={[styles.button]}
                                  onPress={() => sendEmail(das)}
                                >
                                  <Text style={styles.textStyle}>Send Email</Text>
                                </Pressable>
                                <Pressable
                                  style={[styles.button, styles.buttonClose]}
                                  onPress={() => setModalVisible(!modalVisible)}
                                >
                                  <Text style={styles.textStyle}>Cancel</Text>
                                </Pressable>
                              </View>
                            </View>
                          </Modal>
                        </View>
    </SafeAreaView>
  );
};

export default Log;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  emailS: {
    margin: 0,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 100,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },


  container:{
    backgroundColor:"#e1e1e1",

  },

  
  headerBar: {
    padding:20,
    backgroundColor:"#e1e1e1",
    flex: 1,
    padding: 20
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
    paddingVertical: 30,
    borderBottomColor: "#e2e2e",
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  txtName:{
    fontsize: 16,
    textAlign: "justify",
    fontWeight: "bold"
  },
});