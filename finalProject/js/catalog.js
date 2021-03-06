const CATALOG = [
    {
        id: "1",
        name: "Air Jordan 1 Retro High Red",
        img: "img/catalog/1.jpg",
        img2: "img/catalog/1_2.jpg",
        type: "lifestyle",
        price: 130,
        gender: "men"
    },
    {
        id: "2",
        name: "Air Jordan 1 Retro High Pine Green",
        img: "img/catalog/2.jpg",
        img2: "img/catalog/2_2.jpg",
        type: "lifestyle",
        price: 190,
        gender: "men"
    },
    {
        id: "3",
        name: "Air Jordan 1 Retro Low Purple",
        img: "img/catalog/3.jpg",
        img2: "img/catalog/3_2.jpg",
        type: "lifestyle",
        price: 90,
        gender: "men"
    },
    {
        id: "4",
        name: "Air Jordan 4 Retro SE",
        img: "img/catalog/4.jpg",
        img2: "img/catalog/4_2.jpg",
        type: "lifestyle",
        price: 200,
        gender: "men"
    },
    {
        id: "5",
        name: "Air Jordan 13 Retro White/Blue",
        img: "img/catalog/5.jpg",
        img2: "img/catalog/5_2.jpg",
        type: "basketball",
        price: 220,
        gender: "men"
    },
    {
        id: "6",
        name: "Air Jordan XXXIV Blue Void",
        img: "img/catalog/6.jpg",
        img2: "img/catalog/6_2.jpg",
        type: "basketball",
        price: 160,
        new: "new",
        gender: "men"
    },
    {
        id: "7",
        name: "Nike Kyrie 4 Red Carpet",
        img: "img/catalog/7.jpg",
        img2: "img/catalog/7_2.jpg",
        type: "basketball",
        price: 70,
        gender: "men"
    },
    {
        id: "8",
        name: "Air Jordan 'Why Not?' Zer0.1 'Triple Double King'",
        img: "img/catalog/8.jpg",
        img2: "img/catalog/8_2.jpg",
        type: "basketball",
        price: 80,
        gender: "men"
    },
    {
        id: "9",
        name: "Off-White x Air Jordan 1 Retro High OG",
        img: "img/catalog/9.jpg",
        img2: "img/catalog/9_2.jpg",
        type: "lifestyle",
        price: 3900,
        gender: "men"
    },
    {
        id: "10",
        name: "Nike LeBron 17 'Lakers'",
        img: "img/catalog/10.jpg",
        img2: "img/catalog/10_2.jpg",
        type: "basketball",
        price: 180,
        new: "new",
        gender: "men"
    },
    {
        id: "11",
        name: "Air Jordan 1 Retro High Black/Crimson Tint",
        img: "img/catalog/11.jpg",
        img2: "img/catalog/11_2.jpg",
        price: 120,
        type: "lifestyle",
        gender: "women"
    },
    {
        id: "12",
        name: "Air Jordan 1 Retro Mid SE Crimson",
        img: "img/catalog/12.jpg",
        img2: "img/catalog/12_2.jpg",
        price: 130,
        type: "lifestyle",
        gender: "women"
    },
    {
        id: "13",
        name: "Air Jordan 1 Retro High 'Serena Williams'",
        img: "img/catalog/13.jpg",
        img2: "img/catalog/13_2.jpg",
        price: 120,
        type: "lifestyle",
        gender: "women"
    },
    {
        id: "14",
        name: "Nike Hyperdunk 2016 Black/White",
        img: "img/catalog/14.jpg",
        img2: "img/catalog/14_2.jpg",
        price: 100,
        type: "basketball",
        gender: "women"
    },
    {
        id: "15",
        name: "Nike Air Foamposite One Shine",
        img: "img/catalog/15.jpg",
        img2: "img/catalog/15_2.jpg",
        price: 140,
        type: "lifestyle",
        gender: "women"
    },
    {
        id: "16",
        name: "Nike PG 1 Black/Rose",
        img: "img/catalog/16.jpg",
        img2: "img/catalog/16_2.jpg",
        price: 90,
        type: "basketball",
        gender: "women"
    },
    {
        id: "17",
        name: "Nike Kyrie 6 Black",
        img: "img/catalog/17.jpg",
        img2: "img/catalog/17_2.jpg",
        price: 130,
        new: "new",
        type: "basketball",
        gender: "men"
    },
    {
        id: "18",
        name: "Nike LeBron 15 'Ashes'",
        img: "img/catalog/18.jpg",
        img2: "img/catalog/18_2.jpg",
        price: 120,
        type: "basketball",
        gender: "men"
    },
    {
        id: "19",
        name: "Nike Kyrie 5 'Friends'",
        img: "img/catalog/19.jpg",
        img2: "img/catalog/19_2.jpg",
        price: 110,
        type: "basketball",
        gender: "men"
    },
    {
        id: "20",
        name: "Nike PG 4 All-Star",
        img: "img/catalog/20.jpg",
        img2: "img/catalog/20_2.jpg",
        price: 115,
        type: "basketball",
        new: "new",
        gender: "men"
    },
    {
        id: "21",
        name: "Nike KD 12",
        img: "img/catalog/21.jpg",
        img2: "img/catalog/21_2.jpg",
        price: 160,
        type: "basketball",
        new: "new",
        gender: "men"
    },
    {
        id: "22",
        name: "Nike Zoom Freak 1",
        img: "img/catalog/22.jpg",
        img2: "img/catalog/22_2.jpg",
        price: 120,
        type: "basketball",
        new: "new",
        gender: "men"
    },
    {
        id: "23",
        name: "Nike Kyrie Low 2 'Sunset'",
        img: "img/catalog/23.jpg",
        img2: "img/catalog/23_2.jpg",
        price: 85,
        type: "basketball",
        new: "new",
        gender: "men"
    },
    {
        id: "24",
        name: "Nike AlphaDunk 'Pure Magic'",
        img: "img/catalog/24.jpg",
        img2: "img/catalog/24_2.jpg",
        price: 135,
        type: "basketball",
        new: "new",
        gender: "men"
    },
    {
        id: "25",
        name: "Nike Hyperdunk 2016 Low Black/Red",
        img: "img/catalog/25.jpg",
        img2: "img/catalog/25_2.jpg",
        price: 105,
        type: "basketball",
        gender: "men"
    },
    {
        id: "26",
        name: "Nike Hyperdunk X Red",
        img: "img/catalog/26.jpg",
        img2: "img/catalog/26_2.jpg",
        price: 135,
        type: "basketball",
        gender: "men"
    },
    {
        id: "27",
        name: "Jordan WhyNot Zer0.3 White/Black",
        img: "img/catalog/27.jpg",
        img2: "img/catalog/27_2.jpg",
        price: 125,
        type: "basketball",
        new: "new",
        gender: "men"
    },
    {
        id: "28",
        name: "Nike Kyrie 4 Black",
        img: "img/catalog/28.jpg",
        img2: "img/catalog/28_2.jpg",
        price: 90,
        type: "basketball",
        gender: "men"
    },
    {
        id: "29",
        name: "Air Jordan 12 Retro Dark Grey",
        img: "img/catalog/29.jpg",
        img2: "img/catalog/29_2.jpg",
        price: 175,
        type: "lifestyle",
        gender: "men"
    },
    {
        id: "30",
        name: "Air Jordan 7 Retro 'Bordeaux'",
        img: "img/catalog/30.jpg",
        img2: "img/catalog/30_2.jpg",
        price: 215,
        type: "lifestyle",
        gender: "men"
    },
    {
        id: "31",
        name: "Travis Scott x Air Jordan 6 Retro",
        img: "img/catalog/31.jpg",
        img2: "img/catalog/31_2.jpg",
        price: 650,
        type: "lifestyle",
        gender: "men"
    },
    {
        id: "32",
        name: "Nike Kyrie 5 Black/White/Hot Lava",
        img: "img/catalog/32.jpg",
        img2: "img/catalog/32_2.jpg",
        price: 105,
        type: "basketball",
        gender: "women"
    },
    {
        id: "33",
        name: "Nike Hyperdunk 2017 White",
        img: "img/catalog/33.jpg",
        img2: "img/catalog/33_2.jpg",
        price: 95,
        type: "basketball",
        gender: "women"
    },
    {
        id: "34",
        name: "Nike Hyperdunk X Black/Violet",
        img: "img/catalog/34.jpg",
        img2: "img/catalog/34_2.jpg",
        price: 115,
        type: "basketball",
        gender: "women"
    },
    {
        id: "35",
        name: "Air Jordan 1 Retro High OG 'Los Primeros'",
        img: "img/catalog/35.jpg",
        img2: "img/catalog/35_2.jpg",
        price: 1200,
        type: "lifestyle",
        gender: "women"
    },
    {
        id: "36",
        name: "Air Jordan 6 Retro Black/Rose",
        img: "img/catalog/36.jpg",
        img2: "img/catalog/36_2.jpg",
        price: 180,
        type: "lifestyle",
        gender: "women"
    },
    {
        id: "37",
        name: "Nike Air Force 1",
        img: "img/catalog/37.jpg",
        img2: "img/catalog/37_2.jpg",
        price: 100,
        type: "lifestyle",
        gender: "women"
    },
    {
        id: "38",
        name: "Air Jordan 1 High React Purple",
        img: "img/catalog/38.jpg",
        img2: "img/catalog/38_2.jpg",
        price: 175,
        type: "lifestyle",
        gender: "men"
    },
    {
        id: "39",
        name: "Nike PG 3 Black/Aqua",
        img: "img/catalog/39.jpg",
        img2: "img/catalog/39_2.jpg",
        price: 80,
        type: "basketball",
        gender: "men"
    },
    {
        id: "40",
        name: "Travis Scott x Air Jordan 1 High OG",
        img: "img/catalog/40.jpg",
        img2: "img/catalog/40_2.jpg",
        price: 1750,
        type: "lifestyle",
        gender: "men"
    },
    {
        id: "41",
        name: "Air Jordan 3 Retro 'Katrina'",
        img: "img/catalog/41.jpg",
        img2: "img/catalog/41_2.jpg",
        price: 325,
        type: "lifestyle",
        gender: "men"
    },
    {
        id: "42",
        name: "Air Jordan True Flight GS Women",
        img: "img/catalog/42.jpg",
        img2: "img/catalog/42_2.jpg",
        price: 98,
        type: "basketball",
        gender: "women"
    },
    {
        id: "43",
        name: "Nike KD 11 'Peach Jam'",
        img: "img/catalog/43.jpg",
        img2: "img/catalog/43_2.jpg",
        price: 115,
        type: "basketball",
        gender: "women"
    },
    {
        id: "44",
        name: "Air Jordan 1 Retro Mid GS 'Candy'",
        img: "img/catalog/44.jpg",
        img2: "img/catalog/44_2.jpg",
        price: 235,
        type: "lifestyle",
        gender: "women"
    },
    {
        id: "45",
        name: "Air Jordan 11 GS Heiress Red Velvet",
        img: "img/catalog/45.jpg",
        img2: "img/catalog/45_2.jpg",
        price: 195,
        type: "lifestyle",
        gender: "women"
    },
    {
        id: "46",
        name: "Air Jordan 4 Retro White",
        img: "img/catalog/46.jpg",
        img2: "img/catalog/46_2.jpg",
        price: 135,
        type: "lifestyle",
        gender: "women"
    },
    {
        id: "47",
        name: "Air Jordan 13 Retro Black/Pink",
        img: "img/catalog/47.jpg",
        img2: "img/catalog/47_2.jpg",
        price: 165,
        type: "lifestyle",
        gender: "women"
    },
];