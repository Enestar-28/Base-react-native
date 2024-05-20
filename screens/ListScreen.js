import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity ,Pressable,} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';

const App = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <View style={styles.searchBarTitleContainer}>
          <Text style={styles.searchBarTitle}>Danh sách ứng viên</Text>
          <TouchableOpacity 
            style={styles.addButton}
            onPress={() => navigation.navigate('Add')}
            >
            <AntDesign name="plus" size={24} color="black" />
          </TouchableOpacity>
        </View> 

        <View style={styles.searchInputContainer}>
        <TextInput
            style={styles.searchInput}
            placeholder="Tìm kiếm..."
          />
          <Text style={styles.searchButton}>Tìm kiếm</Text>
        </View>
       





      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#ccc',
  },
  time: {
    fontWeight: 'bold',
  },
  searchBar: {
    padding: 10,
  },
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
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#000000',
    fontSize: 35,
    marginRight: 10,
  },
  searchInputContainer: {
    flexDirection: 'row', // Hiển thị các phần tử con theo hàng ngang
    justifyContent: 'center', // Căn giữa theo chiều ngang
    alignItems: 'center', // Căn giữa theo chiều dọc

  },
  searchInput: {
    flex: 1,
    padding: 5,
    borderRadius: 5,
    borderColor: "#000",
    borderWidth:1,
    height: 35,
    
  },
  searchButton: {
    height: 30,
    marginLeft: 20, 
    justifyContent: 'center',
    borderColor: "#000",
    padding: 5,
    borderRadius: 5,
    borderColor: "#000",
    borderWidth:1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,

  },
 
   
});

export default App;