import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function FaqCard({item}) {

  const [expand, setExpand] = useState(false)
  const [layoutHeight, setLayoutHeight] = useState(0);

  useEffect(() => {
    if (expand) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [expand]);

  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
      onPress={() => setExpand(!expand)} 
      activeOpacity={0.7} 
      style={{ padding: 10, marginTop: 14,}}>
        <Text style={{fontSize: 18}}>{item.question}</Text>
      </TouchableOpacity>
      <View 
      style={{
          height: layoutHeight,
          overflow: 'hidden',
      }}>
        <Text style={{fontSize: 14, paddingLeft: 23, paddingRight: 28, textAlign: 'center'}}>{item.answer}</Text>
      </View>
      <Text style={{width: 229 ,justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: 'black'}}> </Text>
    </View>
  );
}

const FAQ = () => {

    const [dataList, setDataList] = useState([
        {id: 1, question: " 1. who is the president of INDIA?", answer: "Sir Ramnath Kovind",},
        {id: 2, question: " 2. who is the president of INDIA?", answer: "Sir Ramnath Kovind",},
        {id: 3, question: " 3. who is the president of INDIA?", answer: "Sir Ramnath Kovind",},

    ])

    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <Text style={{marginTop: 22, marginLeft: 23, fontSize: 18}}>FAQs</Text>
                <ScrollView>
                {dataList.map(item => (
                    <FaqCard item={item} key={item.id}/>
                ))}
                </ScrollView>

            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
    },

});

export default FAQ;
