import React, {useEffect} from 'react';
import {SafeAreaView, Text, View, StyleSheet, RefreshControl, ScrollView, TouchableOpacity, Image, Linking} from 'react-native'
import { connect } from 'react-redux';
import {fetchDirectory} from '../../store/actions/DirectoryActions'
import { useTheme } from '@react-navigation/native';
import Loader from '../../components/Loader';
import InfoScreen from '../../components/InfoScreen';
import ErrorView from '../../components/ErrorScreen';


const Directory = (props) => {

    const {dark, colors} = useTheme();

    const reload = ()=>{props.fetchDirectory()};
    
    // useEffect(() => {
    //     reload();
    // }, [])

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            reload();
          });
        return unsubscribe;
    }, [props.navigation])

    if(props.loading){
        return <Loader darkMode={dark}/>
    }

    if(props.error){
        return <ErrorView color={colors.normalText} imgUrl={dark?require('../../assets/error_dark.png'):require('../../assets/error_light.png')} error={"Oops! Something went wrong."} reload={reload} />;
    }

    return (<SafeAreaView style={styles.container}>
        <Text style={{color: colors.headerText, fontWeight: '700', fontSize: 24, marginVertical: 10}}>Directory</Text>
            <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle = {{flex: Object.entries(props.data).length?0:1}}       
            refreshControl={
            <RefreshControl
            refreshing={false}
            onRefresh={reload}
            />} >
                {Object.entries(props.data).length ? 

                    Object.entries(props.data).map((items,ind)=> (
                            <View style={styles.categoryWrapper} key={items[0]}>
                                <Text style={[styles.categoryName,{color: colors.headerText}]}>{items[0]}</Text>
                                <View style={[styles.listWrapper,{backgroundColor: colors.secondary}]}>
                                    {
                                        items[1].map((item,ind) => (
                                            <View style={[styles.listElement,
                                            {borderBottomWidth:(items[1].length==ind+1)?0:0.5, borderBottomColor:dark?"rgba(173,173,173,0.15)":"#cccccc"}]} 
                                            key={item.phone}>
                                                <Text style={[styles.name,{color:colors.normalText}]}>{item.name}</Text>
                                                <TouchableOpacity style={{flexDirection: 'row', alignItems:'center'}}
                                                activeOpacity={0.6}
                                                // onPress={() => calling(item.phone)}
                                                onPress={() => Linking.openURL(`tel:${item.phone}`)}
                                                >
                                                    {/* <IconButton icon="phone" color="#9262E4" size={20} style={styles.call} /> */}
                                                    <Text style={styles.phone}>{item.phone}</Text>
                                                </TouchableOpacity>
                                            </View>
                                        ))
                                    }
                                </View>
                            </View>
                        ))
                    :
                    
                    <InfoScreen color={colors.normalText} imgUrl={dark?require('../../assets/blank_dark.png'):require('../../assets/blank_light.png')} info="There's Nothing here. Whatever you were looking for is not here at present. Unless, of course, you came all the way here to see this message in which case, 'Hello human!' ;)" />

                    }

            </ScrollView>
        </SafeAreaView>)
        
}


const styles=StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        flex: 1,
        paddingHorizontal: 20,
    },
    categoryWrapper: {
        borderRadius: 8,
        marginBottom: 24
    },
    categoryName: {
        fontSize: 14,
        marginBottom: 11
    },
    listWrapper: {
        borderRadius: 10,
        
    },
    listElement : {
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        marginHorizontal: 10
    },
    name: {
        opacity: 0.6,
        flexShrink: 1,
        marginRight: 5
    },
    phone: {
        color: "#9262E4",
    },
    call : {
        marginRight: 5,
    }

})
    



const mapStateToProps = (state)=> {
    return {
        loading: state.directory.loading,
        data: state.directory.data,
        error: state.directory.error
    }
}
export default connect(mapStateToProps, {fetchDirectory})(Directory);