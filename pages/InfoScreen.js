import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    Image,
    Keyboard,
    TouchableOpacity,
} from 'react-native';

import { COLORS, SIZES, FONTS, icons, images } from "../constants"


const Info = () => {
  return(
    <ScrollView>
        <Image
            source={require("../Image/LOGOKOTO.png")}
            style={{
              width: "100%",
              height: 200,
              resizeMode: "contain",
            }}
        />


        <Text style={styles.titleText}>
            What Is Pothole:
        </Text>

        <Text style={styles.text}>
        pavement and the material beneath—called the
        base or sub-base—cannot support the weight of
        the traffic. Two factors are always present in such
        a failure: TRAFFIC and WATER. 
        </Text>

        <Image
            source={require("../Image/xx.png")}
            style={{
              width: "100%",
              height: 300,
              resizeMode: "contain",
            }}
        />




        <Text style={styles.titleText} >
        The “gestation period” for a pothole includes::
        </Text>

        <Text style={styles.text}>
        1) Snow-melt or rain seeps through cracks in
the pavement and into the sub-base; if the
moisture cannot adequately drain away from
the sub-base and soft {"\n"} {"\n"}

2) Trapped moisture is subjected to repeated
freeze/thaw cycles–and with each occurrence
the expanding ice lifts and cracks the
pavement more. The passing traffic weakens
the pavement, cracking it further {"\n"}{"\n"}
3) As temperatures rise and the ice melts, a void
is left under the pavement. This void collects
more water, and during the next freeze, the
void will enlarge.{"\n"}{"\n"}
4) Vehicles driving over the weakened
pavement pound it until the surface breaks
and collapses into the void below, thus
creating a pothole.

        </Text>

        <Text style={styles.titleText}>
        What affects pavement life?
        </Text>

        <Text style={styles.text}>
        Pavement life is influenced by many factors: vehicle loading (axle loads,
tire pressure and gross vehicle weight [GVW]), traffic volume and mix,
environmental conditions, topography, subgrade condition, initial pavement
design and construction practices, maintenance activity and pavement age.
        </Text>

        <Text style={styles.titleText}>
        The Department of Public Works and Highways(DPWH):
        </Text>
            
        <Text style={styles.text}>
        The Department of Public Works and Highways is one of the three departments of the government undertaking major infrastructure projects. The DPWH is mandated to undertake (a) the planning of infrastructure, such as national roads and bridges, flood control, water resources projects and other public works, and (b) the design, construction, and maintenance of national roads and bridges, and major flood control systems.
        </Text>
            
        <Text style={styles.titleText}>
        The Department of Public Works and Highways
        </Text>
                            
        <Text style={styles.text}>
        The Department of Public Works and Highways functions as the engineering and construction arm of the Government tasked to continuously develop its technology for the purpose of ensuring the safety of all infrastructure facilities and securing for all public works and highways the highest efficiency and quality in construction. DPWH is currently responsible for the planning, design, construction and maintenance of infrastructure, especially the national highways, flood control and water resources development system, and other public works in accordance with national development objectives.
        </Text>
                            
        <Text style={styles.titleText}>
            VISION:
        </Text>
            
        <Text style={styles.text}>
        By 2030, DPWH is an effective and efficient government agency, improving the life of every Filipino through quality infrastructure.
        </Text>

        <Text style={styles.titleText}>
        Mission:
        </Text>
            
        <Text style={styles.text}>
        To provide and manage quality infrastructure facilities and services responsive to the needs of the Filipino people in the pursuit of national development objectives.
        </Text>

    </ScrollView>
);
};

export default Info;


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 13,
    color:  "black",
    textAlign: 'center'
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'orange',
    textAlign: 'center'
  },
  subHeader:{
    fontsize: 15,
    fontweight: "bold",
    color: 'orange',
  }
});