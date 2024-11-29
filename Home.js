import React from 'react';
import { Button, Image, StyleSheet, Text, View, SectionList, TouchableOpacity } from 'react-native'; // Import TouchableOpacity
import Icon from 'react-native-vector-icons/FontAwesome6';
import { datasource } from './Data';
import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
    opacityStyle: {
        marginVertical: 5,
        borderRadius: 10,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#ccc',
    },
    textStyle: {
        fontSize: 16,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    headerText: {
        fontSize: 20,
        marginHorizontal: 10,
        fontWeight: 'bold',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    imageStyle: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
    },
    itemContainer: {
        alignItems: 'center',
        backgroundColor: 'beige',
    },
    buttonStyle: {
        backgroundColor: 'orange',
        marginBottom: 10,
    },
});

const Home = ({ navigation }) => {
    const renderItem = ({ item, index, section }) => (
        <TouchableOpacity
            style={styles.opacityStyle}
            onPress={() => {
                navigation.navigate("Edit", {
                    index: index,
                    type: section.title,
                    key: item.key,
                });
            }}
        >
            <View style={styles.itemContainer}>
                <Image source={item.picture} style={styles.imageStyle} />
                <Text style={styles.textStyle}>{item.key}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1, marginTop: 50 }}>
            <StatusBar />
            <View style={styles.buttonStyle}>
                <Button
                    title="Add destination"
                    color="orange"
                    onPress={() => { navigation.navigate('Add'); }}
                />
            </View>
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, bgColor, icon, color } }) => (
                    <View style={[styles.headerContainer, { backgroundColor: bgColor }]}>
                        <Icon name={icon} size={20} color={color} />
                        <Text style={[styles.headerText, { color: color }]}>{title}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default Home;
