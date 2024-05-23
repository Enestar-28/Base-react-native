import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PatientItem = ({ student, onPress }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.item}>
          <Text style={styles.name}>{student.hoTen}</Text>
          <Text>Mã số: {student.maSoBenhNhan}</Text>
          <Text>STD: {student.soDienThoai}</Text>
        </View>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 16,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default PatientItem;