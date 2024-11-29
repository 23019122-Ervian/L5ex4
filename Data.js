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

export {datasource};
