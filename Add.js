import React, { useState } from 'react';
import { datasource } from "./Data";
import { TextInput, Text, Button, View, Image, StyleSheet } from "react-native";
import RNPickerSelect from 'react-native-picker-select';

const Add = ({ navigation }) => {
    const [destination, setDestination] = useState('');
    const [type, setType] = useState('Countries');
    const [imageUrl, setImageUrl] = useState(''); // State to hold the image URL

    const handleSubmit = () => {
        if (!destination || !imageUrl) {
            alert('Please provide a destination and an image URL.');
            return;
        }

        let item = {
            key: destination,
            picture: { uri: imageUrl } // Store the image URI
        };

        let indexNum = type === 'Countries' ? 0 : 1;
        datasource[indexNum].data.push(item);
        navigation.navigate('Home');
    };

    return (
        <View style={{ padding: 10 }}>
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}> Destination:</Text>
                <TextInput
                    style={{ borderWidth: 1 }}
                    onChangeText={(text) => setDestination(text)}
                />
            </View>

            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}> Type:</Text>
                <RNPickerSelect
                    value={type}
                    onValueChange={(value) => setType(value)}
                    items={[
                        { label: 'Countries', value: 'Countries' },
                        { label: 'Wonder of The World', value: 'Wonder of The World' },
                    ]}
                />
            </View>

            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}> Image URL:</Text>
                <TextInput
                    style={{ borderWidth: 1 }}
                    onChangeText={(text) => setImageUrl(text)}
                    placeholder="Enter image URL"
                />
            </View>

            {imageUrl ? (
                <Image
                    source={{ uri: imageUrl }}
                    style={styles.imageStyle}
                />
            ) : null}

            <Button title="SUBMIT" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        width: 100,
        height: 100,
        marginTop: 10,
        borderRadius: 10,
    },
});

export default Add;