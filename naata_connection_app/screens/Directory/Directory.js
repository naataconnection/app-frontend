import React from 'react';
import {
  ScrollView,
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  SectionList,
} from 'react-native';
import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
//const DATA = [
//  {
//    title: "Emergency Numbers",
//    data: ["Ambulance", "Security Desk", "PR Head"],
//
//
//  },
//  {
//    title: "E-Rickshaw Numbers",
//    data: ["Jane Doe", "Jane Doe", "Jane Doe",]
//  },
//  {
//    title: "Team Representatives",
//    data: ["Jane Doe", "Jane Doe", "Jane Doe","Jane Doe","Jane Doe", "Jane Doe", "Jane Doe","Jane Doe",]
//  }
//];
//
//const Item = ({ title },{number}) => (
//  <View style={styles.item}>
//    <Text style={styles.title} >{title}</Text>
//     <Text style={styles.number} selectable={true}
//                                              selectionColor='grey' >{'+91 XXXXXXXXXX'}</Text>
//  </View>
//);
//
//
//const Directory = () => {
//
//      return(
//
//      <SafeAreaView style={styles.container}>
//             <SectionList
//                  sections={DATA}
//
//                  keyExtractor={(item, index) => item + index}
//                  renderItem={({ item }) => <Item title={item} />}
//                  renderSectionHeader={({ section: { title } }) => (
//                    <Text style={styles.header}>{title}</Text>
//                  )}
//                />
//
//      </SafeAreaView>
//
//
//      );
//}
//
//const styles = StyleSheet.create({
//       container: {
//       flex: 1,
//       alignItems: 'center',
//       },
//       container1: {
//
//            marginHorizontal:10,
//           marginLeft:10,
//                  paddingLeft:10,
//                  backgroundColor: '#1E1E1E',
//                  borderRadius:10,
//                  display: 'flex',
//
//          },
//          header: {
//                  fontSize: 15,
//                  color:'#fff',
//                  height:55,
//                  paddingTop:20,
//                  alignItems: 'center',
//                  backgroundColor: '#000000'
//            },
//            item: {
//                  height:44,
//                  display: 'flex',
//                  flexDirection:'row',
//            },
//            line:{
//               height:0,
//               borderTopWidth:1,
//               borderStyle: 'dashed',
//               borderColor: 'rgba(255, 255, 255, 0.025)'
//            },
//            title: {
//                      flex:1,
//                      paddingRight:5,
//                      alignSelf: 'center',
//                      fontSize: 14,
//                      color: 'rgba(255, 255, 255, 0.6)'
//            },
//
//            number: {
//                   flex:1,
//                   alignSelf: 'center',
//                   fontSize: 14,
//                   color: "#9262E4",
//
//
//             },
//
//
//
//});
const DATA = [
  {
    title: 'Emergency Numbers',
    data: ['Ambulance', 'Security Desk', 'PR Head'],
  },
  {
    title: 'E-Rickshaw Numbers',
    data: ['Jane Doe', 'Jane Doe', 'Jane Doe'],
  },
  {
    title: 'Team Representatives',
    data: [
      'Jane Doe',
      'Jane Doe',
      'Jane Doe',
      'Jane Doe',
      'Jane Doe',
      'Jane Doe',
      'Jane Doe',
      'Jane Doe',
    ],
  },
];

const Item = ({title}, {number}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.number} selectable={true} selectionColor="grey">
      {'+91 XXXXXXXXXX'}
    </Text>
  </View>
);

const Directory = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.scrollView}>
          <Text style={styles.header}>Emergency Contacts</Text>
          <View style={styles.container1}>
            <View style={styles.item}>
              <Text style={styles.title}>Ambulance</Text>
              <Text
                style={styles.number}
                selectable={true}
                selectionColor="grey">
                +91 XXXXXXXXXX
              </Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.item}>
              <Text style={styles.title}>Security Desk</Text>
              <Text
                style={styles.number}
                selectable={true}
                selectionColor="grey">
                +91 XXXXXXXXXX
              </Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.item}>
              <Text style={styles.title}>PR Head</Text>
              <Text
                style={styles.number}
                selectable={true}
                selectionColor="grey">
                +91 XXXXXXXXXX
              </Text>
            </View>
          </View>
          <Text style={styles.header}>E-Rickshaw Numbers</Text>
          <View style={styles.container1}>
            <View style={styles.item}>
              <Text style={styles.title}>Jane Doe</Text>
              <Text
                style={styles.number}
                selectable={true}
                selectionColor="grey">
                +91 XXXXXXXXXX
              </Text>
            </View>

            <View style={styles.line}></View>
            <View style={styles.item}>
              <Text style={styles.title}>Jane Doe</Text>
              <Text
                style={styles.number}
                selectable={true}
                selectionColor="grey">
                +91 XXXXXXXXXX
              </Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.item}>
              <Text style={styles.title}>Jane Doe</Text>
              <Text
                style={styles.number}
                selectable={true}
                selectionColor="grey">
                +91 XXXXXXXXXX
              </Text>
            </View>
          </View>
          <Text style={styles.header}>Team Representatives</Text>
          <View style={styles.container1}>
            <View style={styles.item}>
              <Text style={styles.title}>Jane Doe</Text>
              <Text
                style={styles.number}
                selectable={true}
                selectionColor="grey">
                +91 XXXXXXXXXX
              </Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.item}>
              <Text style={styles.title}>Jane Doe</Text>
              <Text
                style={styles.number}
                selectable={true}
                selectionColor="grey">
                +91 XXXXXXXXXX
              </Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.item}>
              <Text style={styles.title}>Jane Doe</Text>
              <Text
                style={styles.number}
                selectable={true}
                selectionColor="grey">
                +91 XXXXXXXXXX
              </Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.item}>
              <Text style={styles.title}>Jane Doe</Text>
              <Text
                style={styles.number}
                selectable={true}
                selectionColor="grey">
                +91 XXXXXXXXXX
              </Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.item}>
              <Text style={styles.title}>Jane Doe</Text>
              <Text
                style={styles.number}
                selectable={true}
                selectionColor="grey">
                +91 XXXXXXXXXX
              </Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.item}>
              <Text style={styles.title}>Jane Doe</Text>
              <Text
                style={styles.number}
                selectable={true}
                selectionColor="grey">
                +91 XXXXXXXXXX
              </Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.item}>
              <Text style={styles.title}>Jane Doe</Text>
              <Text
                style={styles.number}
                selectable={true}
                selectionColor="grey">
                +91 XXXXXXXXXX
              </Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.item}>
              <Text style={styles.title}>Jane Doe</Text>
              <Text
                style={styles.number}
                selectable={true}
                selectionColor="grey">
                +91 XXXXXXXXXX
              </Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.item}>
              <Text style={styles.title}>Jane Doe</Text>
              <Text
                style={styles.number}
                selectable={true}
                selectionColor="grey">
                +91 XXXXXXXXXX
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 146,
  },
  container1: {
    marginHorizontal: 10,
    marginLeft: 10,
    paddingLeft: 10,
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    display: 'flex',
  },
  header: {
    fontSize: 15,
    color: '#fff',
    height: 55,
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  item: {
    height: 44,
    display: 'flex',
    flexDirection: 'row',
  },
  line: {
    height: 0,
    borderTopWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'rgba(255, 255, 255, 0.025)',
  },
  title: {
    flex: 1,
    paddingRight: 5,
    alignSelf: 'center',
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  number: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 14,
    color: '#9262E4',
  },
  scrollView: {
    marginHorizontal: 20,
  },
});

export default Directory;