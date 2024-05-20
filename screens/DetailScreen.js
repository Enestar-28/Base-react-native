import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Pressable,
    TextInput,
    TouchableOpacity,
 
  } from "react-native";
  import React, { useEffect, useContext, useState, useCallback } from "react";
  import { useFocusEffect, useNavigation } from "@react-navigation/native";
  import { AntDesign } from '@expo/vector-icons';
  
  
  const AddAddressScreen = () => {
    const navigation = useNavigation();

    return (
        <ScrollView style={{ marginTop: 50 }}>
          <View style={{ padding: 10 }}>
          <View style={styles.searchBarTitleContainer}>
            <TouchableOpacity 
            style={styles.addButton}
            onPress={() => navigation.navigate('List')}
            >
            <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.searchBarTitle}>Thông tin ứng viên chi tiết</Text>
            </View>
           

            <View >
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>Tên địa chỉ</Text>
            <TextInput
              placeholderTextColor={"black"}
              placeholder="Nhập tên địa chỉ"
              style={styles.input}
            />
            </View>


            <View >
            <Text style={{ fontWeight: "bold", fontSize: 17 , marginTop: 15}}>Mã số ứng viên</Text>
            <TextInput
              placeholderTextColor={"black"}
              placeholder="Mã số ứng viên"
              style={styles.input}
            />
            </View>
            <View >
            <Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 15 }}>Kinh nghiệm</Text>
            <TextInput
              placeholderTextColor={"black"}
              placeholder="Nhập kinh nghiệm"
              style={styles.input}
            />
            </View>
            <View >
            <Text style={{ fontWeight: "bold", fontSize: 17 , marginTop: 15}}>Email</Text>
            <TextInput
              placeholderTextColor={"black"}
              placeholder="Nhập email"
              style={styles.input}
            />
            </View>
            <View >
            <Text style={{ fontWeight: "bold", fontSize: 17 , marginTop: 15}}>Địa chỉ</Text>
            <TextInput
              placeholderTextColor={"black"}
              placeholder="Nhập địa chỉ"
              style={styles.input}
            />
            </View>
    
        
            <Pressable
              style={styles.deleteButton}
            >
              <Text style={{ fontWeight: "bold", fontSize:15,color: '#000', }}>Xóa ứng viên</Text>
            </Pressable>
          </View>
        </ScrollView>
      );
    };
  
  export default AddAddressScreen;
  
  const styles = StyleSheet.create({
    searchBarTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
      },
      searchBarTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
        marginLeft: 50,
      },
      addButton: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
      },
      addButtonText: {
        fontSize: 35,
        marginRight: 10,
      },

      input:{
        padding: 10,
        borderColor: "#D0D0D0",
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 5,
      },
      deleteButton:{
        width: 120,
        height: 35,
        alignItems: 'center',
        borderRadius:4,
        marginTop: 30,
        borderColor: "#000",
        borderWidth:1,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
      }

  });