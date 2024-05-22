import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const StudentItem = ({ student, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.item}>
                <Text style={styles.name}>{student.tenUngVien}</Text>
                <Text>Mã số: {student.maUngVien}</Text>
                <Text>Email: {student.email}</Text>
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

export default StudentItem;