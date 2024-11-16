import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, SectionList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const datasource = [
  {
    data: [
      { key: 'Australia', picture: require('./img/AUS.jpg') },
      { key: 'New Zealand', picture: require('./img/NZ.jpg') },
    ],
    title: "Places Visited",
    bgColor: 'yellow',
    icon: "flag",
    color: "black",
  },
  {
    data: [
      { key: 'Great Wall Of China', picture: require('./img/GWOC.jpg') },
      { key: 'Taj Mahal', picture: require('./img/Tajmahal.jpg') },
      { key: 'Colosseum', picture: require('./img/colosseum.jpg') },
    ],
    title: "7 Wonders of The World",
    bgColor: 'green',
    icon: "leaf",
    color: "white",
  },
  {
    data: [
      { key: 'Petra', picture: require('./img/Petra.jpg') },
      { key: 'Christ the Redeemer', picture: require('./img/Christ.jpg') },
      { key: 'Machu Picchu', picture: require('./img/Pichu.jpg') },
      { key: 'Pyramid of Giza', picture: require('./img/Giza.jpg') },
    ],
    title: "Wonders of the World Left to Visit",
    bgColor: '#ff6347',
    icon: "plane-departure",
    color: "white",
  },
];

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
    backgroundColor: 'white',
  },
});

const renderItem = ({ item }) => (
    <View style={styles.opacityStyle}>
      <View style={styles.itemContainer}>
        <Image source={item.picture} style={styles.imageStyle} />
        <Text style={styles.textStyle}>{item.key}</Text>
      </View>
    </View>
);

const App = () => {
  return (
      <View style={{ flex: 1, marginTop: 50 }}>
        <StatusBar hidden />
        <SectionList
            sections={datasource}
            keyExtractor={(item) => item.key}
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

export default App;
