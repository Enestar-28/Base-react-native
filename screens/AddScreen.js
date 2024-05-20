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
            <Text style={styles.searchBarTitle}>Thêm ứng viên</Text>
            </View>
           

            <View >
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>Tên ứng viên</Text>
            <TextInput
              placeholderTextColor={"black"}
              placeholder="Nhập tên ứng viên"
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
            <Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 15 }}>Mô tả Kinh nghiệm</Text>
            <TextInput
              placeholderTextColor={"black"}
              style={{
                height: 70,
                padding: 10,
                borderColor: "#D0D0D0",
                borderWidth: 1,
                marginTop: 10,
                borderRadius: 5,
              }}
            />
            </View>
            <View >
            <Text style={{ fontWeight: "bold", fontSize: 17 , marginTop: 15}}>Email</Text>
            <TextInput
              placeholderTextColor={"black"}
              placeholder="Nhập địa chỉ email"
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
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.deleteButton}>
                        <Text style={styles.buttonText}>Hủy bỏ</Text>
                    </Pressable>
                    <Pressable style={styles.addsButton}>
                        <Text style={styles.buttonText}>Lưu lại</Text>
                    </Pressable>
                </View>
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
        marginLeft: 80,
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
      

      buttonContainer: {
        flexDirection: 'row', // Hiển thị các phần tử con theo hàng ngang
        justifyContent: 'center', // Căn giữa theo chiều ngang
        alignItems: 'center', // Căn giữa theo chiều dọc
      },
       deleteButton: {
        flex: 1, // Sử dụng một phần bằng nhau của không gian
        marginRight: 175, // Khoảng cách giữa hai nút
        alignItems: 'center',
        borderRadius:4,
        marginTop: 30,
        borderColor: "#000",
        borderWidth:1,
        paddingVertical: 5,
        paddingHorizontal: 10,
    
      },
      addsButton: {
        flex: 1, // Sử dụng một phần bằng nhau của không gian
        alignItems: 'center',
        borderRadius:4,
        marginTop: 30,
        borderColor: "#000",
        borderWidth:1,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
      },
      buttonText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#000',
      },


  });