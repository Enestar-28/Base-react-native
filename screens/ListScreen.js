import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { getAll } from "../api/Api";
import PatientItem from "../components/PatientItem"; // Đảm bảo đường dẫn đúng với file của bạn

const App = () => {
  const navigation = useNavigation();
  const [patient, setPatients] = useState([]);
   const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const allPatient = await getAll();
       
        setPatients(allPatient); // Lưu dữ liệu vào state nếu bạn muốn sử dụng trong component
      } catch (error) {
        console.error("Lỗi khi lấy danh sách bệnh nhân:", error);
      }
    };

    fetchPatients();
  }, []);

   const handleSearchPress = async () => {
     try {
       const searchResults = await getAll(searchKeyword);
       setPatients(searchResults);
     } catch (error) {
       console.error("Lỗi khi tìm kiếm bệnh nhân:", error);
     }
   };

  const handlePatientPress = (patient) => {
    navigation.navigate("Detail", { patient: patient }); // Điều hướng đến màn hình chi tiết ứng viên (DetailScreen)
  };

  return (
    <ScrollView style={{ marginTop: 50 }}>
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <View style={styles.searchBarTitleContainer}>
            <Text style={styles.searchBarTitle}>Danh sách ứng viên</Text>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => navigation.navigate("Add")}
            >
              <AntDesign name="plus" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.searchInputContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Tìm kiếm..."
              value={searchKeyword}
              onChangeText={setSearchKeyword}
            />
            <TouchableOpacity
              style={styles.searchButton}
              onPress={handleSearchPress}
            >
              <Text>Tìm kiếm</Text>
            </TouchableOpacity>
          </View>
        </View>
        {patient?.map((item, index) => (
          <PatientItem
            key={index}
            patient={item}
            onPress={() => handlePatientPress(item)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#ccc",
  },
  time: {
    fontWeight: "bold",
  },
  searchBar: {
    padding: 10,
  },
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
    textAlign: "center",
  },
  addButton: {
    backgroundColor: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: "#000000",
    fontSize: 35,
    marginRight: 10,
  },
  searchInputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    padding: 5,
    borderRadius: 5,
    borderColor: "#000",
    borderWidth: 1,
    height: 35,
  },
  searchButton: {
    height: 30,
    marginLeft: 20,
    justifyContent: "center",
    borderColor: "#000",
    padding: 5,
    borderRadius: 5,
    borderColor: "#000",
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default App;
