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
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios"; // Giả sử bạn sử dụng axios để gọi API

const AddAddressScreen = () => {
  const navigation = useNavigation();

  // State để lưu trữ thông tin nhập liệu
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [experience, setExperience] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState({});

  // Hàm xử lý khi nhấn nút "Hủy bỏ"
  const handleCancelPress = () => {
    navigation.goBack(); // Điều hướng trở lại trang trước đó
  };
  // Hàm kiểm tra ràng buộc
  const validate = () => {
    let valid = true;
    let errors = {};

    if (name.length < 25) {
      errors.name = "Tên ứng viên phải có ít nhất 25 ký tự.";
      valid = false;
    }
    if (!email.includes("@")) {
      errors.email = "Email phải chứa ký tự @.";
      valid = false;
    }
    if (code.trim() === "") {
      errors.code = "Mã số ứng viên không được bỏ trống.";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  // Hàm xử lý khi nhấn nút "Lưu lại"
  const handleSavePress = async () => {
    if (!validate()) {
      return;
    }
    // Tạo đối tượng ứng viên từ các state
    const student = {
      name,
      code,
      experience,
      email,
      address,
    };

    try {
      // Gọi API để lưu thông tin ứng viên
      const response = add(student);

      if (response.status === 200 || response.status === 201) {
        Alert.alert("Thành công", "Ứng viên đã được lưu thành công.");
        navigation.navigate("List"); // Điều hướng về trang danh sách ứng viên
      } else {
        Alert.alert("Lỗi", "Có lỗi xảy ra khi lưu ứng viên.");
      }
    } catch (error) {
      console.error("Lỗi khi lưu ứng viên:", error);
      Alert.alert("Lỗi", "Không thể kết nối đến máy chủ.");
    }
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
          <Text style={styles.searchBarTitle}>Thêm ứng viên</Text>
        </View>

        <View>
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>Tên ứng viên</Text>
          <TextInput
            placeholderTextColor={"black"}
            placeholder="Nhập tên ứng viên"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
          {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
        </View>

        <View>
          <Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 15 }}>
            Mã số ứng viên
          </Text>
          <TextInput
            placeholderTextColor={"black"}
            placeholder="Mã số ứng viên"
            style={styles.input}
            value={code}
            onChangeText={setCode}
          />
          {errors.code && <Text style={styles.errorText}>{errors.code}</Text>}
        </View>

        <View>
          <Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 15 }}>
            Mô tả Kinh nghiệm
          </Text>
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
            value={experience}
            onChangeText={setExperience}
          />
        </View>

        <View>
          <Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 15 }}>
            Email
          </Text>
          <TextInput
            placeholderTextColor={"black"}
            placeholder="Nhập địa chỉ email"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
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

        <View style={styles.buttonContainer}>
          <Pressable style={styles.deleteButton} onPress={handleCancelPress}>
            <Text style={styles.buttonText}>Hủy bỏ</Text>
          </Pressable>
          <Pressable style={styles.addsButton} onPress={handleSavePress}>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  searchBarTitle: {
    fontSize: 18,
    fontWeight: "bold",
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
  input: {
    padding: 10,
    borderColor: "#D0D0D0",
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: "row", // Hiển thị các phần tử con theo hàng ngang
    justifyContent: "center", // Căn giữa theo chiều ngang
    alignItems: "center", // Căn giữa theo chiều dọc
  },
  deleteButton: {
    flex: 1, // Sử dụng một phần bằng nhau của không gian
    marginRight: 175, // Khoảng cách giữa hai nút
    alignItems: "center",
    borderRadius: 4,
    marginTop: 30,
    borderColor: "#000",
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  addsButton: {
    flex: 1, // Sử dụng một phần bằng nhau của không gian
    alignItems: "center",
    borderRadius: 4,
    marginTop: 30,
    borderColor: "#000",
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#000",
  },
  errorText: {
    color: "red",
    marginTop: 5,
  },
});
