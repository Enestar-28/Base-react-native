import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios"; // Thêm import axios nếu bạn sử dụng axios để gọi API

const DetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { patient } = route.params; // Lấy thông tin patient từ route params

  const [name, setName] = useState(patient.hoTen);
  const [id, setId] = useState(patient.maSoBenhNhan);
  const [diseaseName, setDiseaseName] = useState(""); // Thêm giá trị kinh nghiệm nếu có
  const [number, setNumber] = useState(patient.soDienThoai);
  const [address, setAddress] = useState(""); // Thêm giá trị địa chỉ nếu có

  const handleDeletePress = () => {
    
    Alert.alert(
      "Xác nhận",
      "Bạn có chắc chắn muốn xóa bệnh nhân này không?",
      [
        {
          text: "Hủy bỏ",
          onPress: () => console.log("Hủy bỏ xóa"),
          style: "cancel",
        },
        {
          text: "Xóa",
          onPress: async () => {
            try {
              const response = await dele(patient.maSoBenhNhan); // Gọi API xóa bệnh nhân
              if (response.status === 200) {
                Alert.alert("Thành công", "Bệnh nhân đã được xóa thành công.");
                navigation.navigate("List"); // Điều hướng về trang danh sách
              } else {
                Alert.alert("Lỗi", "Có lỗi xảy ra khi xóa bệnh nhân.");
              }
            } catch (error) {
              Alert.alert("Lỗi", "Không thể kết nối đến máy chủ.");
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <ScrollView style={{ marginTop: 50 }}>
      <View style={{ padding: 10 }}>
        <View style={styles.searchBarTitleContainer}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.navigate("List")}
          >
            <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.searchBarTitle}>
            Thông tin chi tiết bệnh nhân
          </Text>
        </View>

        <View>
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>
            Tên bệnh nhân
          </Text>
          <TextInput
            placeholderTextColor={"black"}
            placeholder="Nhập tên bệnh nhân"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
        </View>

        <View>
          <Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 15 }}>
            Mã số bệnh nhân
          </Text>
          <TextInput
            placeholderTextColor={"black"}
            placeholder="Mã số bệnh nhân"
            style={styles.input}
            value={id}
            onChangeText={setId}
          />
        </View>

        <View>
          <Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 15 }}>
            Tên bệnh
          </Text>
          <TextInput
            placeholderTextColor={"black"}
            placeholder="Nhập tên bệnh"
            style={styles.input}
            value={diseaseName}
            onChangeText={setDiseaseName}
          />
        </View>

        <View>
          <Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 15 }}>
            Số điện thoại
          </Text>
          <TextInput
            placeholderTextColor={"black"}
            placeholder="Nhập số điện thoại"
            style={styles.input}
            value={number}
            onChangeText={setNumber}
          />
        </View>

        <View>
          <Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 15 }}>
            Địa chỉ
          </Text>
          <TextInput
            placeholderTextColor={"black"}
            placeholder="Nhập địa chỉ"
            style={styles.input}
            value={address}
            onChangeText={setAddress}
          />
        </View>

        <Pressable style={styles.deleteButton} onPress={handleDeletePress}>
          <Text style={{ fontWeight: "bold", fontSize: 15, color: "#000" }}>
            Xóa bệnh nhân
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  searchBarTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  searchBarTitle: {
    fontSize: 18,
    fontWeight: "bold",
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
  input: {
    padding: 10,
    borderColor: "#D0D0D0",
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 5,
  },
  deleteButton: {
    width: 120,
    height: 35,
    alignItems: "center",
    borderRadius: 4,
    marginTop: 30,
    borderColor: "#000",
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
