const Images = [
    { image: { uri: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/19/b9/db/2a/imperial-hotel-spa.jpg' } },
    { image: { uri: 'https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/95/2016/12/21145818/3546897_XL-3.jpg' } },
    { image: { uri: 'https://pix10.agoda.net/hotelImages/568/5685860/5685860_19101418000082056564.jpg?ca=9&ce=1&s=1024x768' } },
    { image: { uri: 'https://pix10.agoda.net/hotelImages/18868600/-1/3877fc23da23f6e3c183e67d9b4445b5.jpg?ce=0&s=1024x768' } },
];

export const markers = [
    {
        coordinate: {
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            latitude: 21.03387478487367,
            longitude: 105.787982314957
        },
        title: "Imperia Hotel",
        description: "Với diện tích 100m2, Deluxe Room là phòng được thiết kế theo phong cách sang trọng, tích hợp đầy đủ tiện nghi cho kỳ lưu thú của bạn. Với không gian rộng rãi mà ấm cúng, Deluxe Room là lựa chọn lý tưởng dành cho những cặp đôi đang tận hưởng kỳ nghĩ dưỡng",
        image: Images[0].image,
        rating: 4,
        reviews: 99,
        price: '4.000.000',
    },
    {
        coordinate: {
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            latitude: 21.03897463856986,
            longitude: 105.798743568436
        },
        title: "GTC Hotel I",
        description: "Với diện tích 120m2, Premium Room là phòng được thiết kế theo phong cách sang trọng, tích hợp đầy đủ tiện nghi cho kỳ lưu thú của bạn. Với không gian rộng rãi mà ấm cúng, Premium Room là lựa chọn lý tưởng dành cho những gia đình 4 người đang tận hưởng kỳ nghĩ dưỡng",
        image: Images[1].image,
        rating: 5,
        reviews: 102,
        price: '1.600.000',
    },
    {
        coordinate: {
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            latitude: 21.03947365878437,
            longitude: 105.778983982878
        },
        title: "Metrople Hanoi",
        description: "Trong một kì nghỉ, tất nhiên quang cảnh xung quanh phòng cũng là một điều đáng được chú ý tới. Với không gian và cửa sổ hướng ra Biển Beach View Room là phòng được nhiều du khách quan tâm nhất, tích hợp đầy đủ tiện nghi cho kỳ lưu thú của bạn. Với không gian rộng rãi mà ấm cúng, Beach View Room là lựa chọn lý tưởng dành cho những gia đình 4 người hoặc cặp đôi tận hưởng kỳ nghĩ dưỡng",
        image: Images[2].image,
        rating: 3,
        reviews: 220,
        price: '2.200.000',
    },
    {
        coordinate: {
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            latitude: 21.04347365878437,
            longitude: 105.772083982878
        },
        title: "Vinpearl Nha Trang",
        description: "Đẳng cấp, Sang Trọng là những gì được nhắc tới về President Room. Với không gian và nội thất tiêu chuẩn Tổng Thống, President Room sẽ giúp trải nghiệm trong chuyến du lịch của mình lên một đẳng cấp mới !",
        image: Images[3].image,
        rating: 4,
        reviews: 48,
        price: '2.000.000',
    },
    {
        coordinate: {
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            latitude: 21.03047365878437,
            longitude: 105.778983982878
        },
        title: "Mường Thanh Hạ Long",
        description: "Với diện tích 100m2, Deluxe Room là phòng được thiết kế theo phong cách sang trọng, tích hợp đầy đủ tiện nghi cho kỳ lưu thú của bạn. Với không gian rộng rãi mà ấm cúng, Deluxe Room là lựa chọn lý tưởng dành cho những cặp đôi đang tận hưởng kỳ nghĩ dưỡng",
        image: Images[3].image,
        rating: 4,
        reviews: 178,
        price: '1.300.000',
    },
];

export const mapDarkStyle = [
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#212121"
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#212121"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#bdbdbd"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#181818"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#1b1b1b"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#2c2c2c"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#8a8a8a"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#373737"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#3c3c3c"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#4e4e4e"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#3d3d3d"
            }
        ]
    }
];

export const mapStandardStyle = [
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
];

