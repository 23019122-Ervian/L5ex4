import React, { useState } from 'react';
import { TextInput, Text, Button, View, Alert } from "react-native";
import { datasource } from "./Data";

const Edit = ({ navigation, route }) => {
    const [destination, setDestination] = useState(route.params.key);
    const [dataSource, setDataSource] = useState([...datasource]);

    const handleDelete = () => {
        let indexNum = route.params.type === 'Countries' ? 0 : 1;
        
        Alert.alert(
            "Are you sure?",
            '',
            [
                {
                    text: 'Yes',
                    onPress: () => {
                        const updatedData = [...dataSource[indexNum].data];
                        updatedData.splice(route.params.index, 1);
                        const newDataSource = [...dataSource];
                        newDataSource[indexNum].data = updatedData; 
                        setDataSource(newDataSource); 
                        navigation.navigate('Home'); 
                    }
                },
                { text: 'No' }
            ]
        );
    };

    const handleSave = () => {
        if (!destination.trim()) {
            Alert.alert("Error", "Destination name cannot be empty.");
            return;
        }

        let indexNum = route.params.type === 'Countries' ? 0 : 1;
        const newDataSource = [...dataSource];
        newDataSource[indexNum].data[route.params.index].key = destination;
        setDataSource(newDataSource);
        navigation.navigate('Home');
    };

    return (
        <View style={{ padding: 10 }}>
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}> Destination:</Text>
                <TextInput
                    value={destination}
                    maxLength={100}
                    style={{ borderWidth: 1, padding: 5 }}
                    onChangeText={(text) => setDestination(text)}
                />
            </View>

            <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flex: 1, margin: 10 }}>
                    <Button
                        title="SAVE"
                        onPress={handleSave}
                    />
                </View>
                <View style={{ flex: 1, margin: 10 }}>
                    <Button
                        title="DELETE"
                        onPress={handleDelete}
                    />
                </View>
            </View>
        </View>
    );
};

export default Edit;