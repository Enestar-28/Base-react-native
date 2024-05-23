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
import axios from "axios"; // Assuming you use axios for API calls
import {addPatient} from "../api/Api";
const AddScreen = () => {
  const navigation = useNavigation();

  // State to store form inputs
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [diseaseName, setDiseaseName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState({});

  // Handle Cancel button press
  const handleCancelPress = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  // Validation function
  const validate = () => {
    let valid = true;
    let errors = {};

    if (name.length < 5 || name.length > 255) {
      errors.name =
        "Tên bệnh nhân phải có ít nhất 5 ký tự và tối đa 255 kí tự.";
      valid = false;
    }
    if (diseaseName.length < 5 || diseaseName.length > 255) {
      errors.diseaseName =
        "Tên bệnh phải có ít nhất 5 ký tự và tối đa 255 kí tự.";
      valid = false;
    }
    if (number.length < 10 || number.length > 15) {
      errors.number =
        "Số điện thoại phải có ít nhất 10 ký tự và tối đa 15 kí tự.";
      valid = false;
    }
    if (id.length < 10 || id.length > 50) {
      errors.id =
        "Mã số bệnh nhân phải có ít nhất 10 ký tự và tối đa 50 kí tự.";
      valid = false;
    }
    if (address.length > 255) {
      errors.address = "Địa chỉ phải có tối đa 255 kí tự.";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  // Handle Save button press
  const handleSavePress = async () => {
    if (!validate()) {
      return;
    }

    // Create patient object from state
    const patient = {
      name,
      id,
      diseaseName,
      number,
      address,
    };

    try {
      // Call API to save patient info
      const response = addPatient(patient);

      if (response.status === 200 || response.status === 201) {
        Alert.alert(
          "Thành công",
          "Thông tin bệnh nhân đã được lưu thành công."
        );
        navigation.navigate("List"); 
      } else {
        Alert.alert("Lỗi", "Có lỗi xảy ra khi lưu thông tin bệnh nhân.");
      }
    } catch (error) {
      console.error("Lỗi khi lưu thông tin bệnh nhân:", error);
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
          <Text style={styles.searchBarTitle}>Thêm bênh nhân</Text>
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
          {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
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
          {errors.id && <Text style={styles.errorText}>{errors.id}</Text>}
        </View>

        <View>
          <Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 15 }}>
            Tên bệnh
          </Text>
          <TextInput
            placeholderTextColor={"black"}
            placeholder="Tên bệnh"
            style={styles.input}
            value={diseaseName}
            onChangeText={setDiseaseName}
          />
          {errors.diseaseName && (
            <Text style={styles.errorText}>{errors.diseaseName}</Text>
          )}
        </View>

        <View>
          <Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 15 }}>
            Số điện thoại
          </Text>
          <TextInput
            placeholderTextColor={"black"}
            placeholder="Số điện thoại"
            style={styles.input}
            value={number}
            onChangeText={setNumber}
          />
          {errors.number && (
            <Text style={styles.errorText}>{errors.number}</Text>
          )}
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
          {errors.address && (
            <Text style={styles.errorText}>{errors.address}</Text>
          )}
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
export default AddScreen;

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
    flexDirection: "row", // Display children in a row
    justifyContent: "center", // Center horizontally
    alignItems: "center", // Center vertically
  },
  deleteButton: {
    flex: 1, // Take up equal space
    marginRight: 175, // Space between buttons
    alignItems: "center",
    borderRadius: 4,
    marginTop: 30,
    borderColor: "#000",
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  addsButton: {
    flex: 1, // Take up equal space
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
