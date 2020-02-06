const CATALOG = [
    {
        id: "1",
        name: "Air Jordan 1 Retro High Red",
        img: "https://stockx-360.imgix.net/Air-Jordan-1-Retro-High-Bred-Toe/Images/Air-Jordan-1-Retro-High-Bred-Toe/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1538080256",
        type: "lifestyle",
        price: 130,
        gender: "men"
    },
    {
        id: "2",
        name: "Air Jordan 1 Retro High Pine Green",
        img: "https://www.deadstock.de/wp-content/uploads/2019/10/air-jordan-1-high-og-pine-green-ds-2.jpg",
        type: "lifestyle",
        price: 170,
        gender: "men"
    },
    {
        id: "3",
        name: "Air Jordan 1 Retro Low Purple",
        img: "https://cdn.shopify.com/s/files/1/0727/7851/products/Air_Jordan_1_Low_GS_Court_Purple_553560-125-2_600x.jpg?v=1576301227",
        type: "lifestyle",
        price: 90,
        gender: "men"
    },
    {
        id: "4",
        name: "Air Jordan 4 Retro SE",
        img: "https://cdn.shopify.com/s/files/1/0282/5850/products/footwear_jordan_aj-4-retro-se_CI1184-146.view_1_2400x.jpg?v=1574190892",
        type: "lifestyle",
        price: 200,
        gender: "men"
    },
    {
        id: "5",
        name: "Air Jordan 13 Retro White/Blue",
        img: "https://nssdata.s3.amazonaws.com/images/galleries/15529/air-jordan-13-hyper-royal-2018-002.jpg",
        type: "basketball",
        price: 220,
        gender: "men"
    },
    {
        id: "6",
        name: "Air Jordan XXXIV Blue Void",
        img: "https://www.bstn.com/media/107018/w/1000/h/1000/n/jordan-air-jordan-xxxiv-ar3240-400-1.jpg",
        type: "basketball",
        price: 160,
        new: "new",
        gender: "men"
    },
    {
        id: "7",
        name: "Nike Kyrie 4 Red Carpet",
        img: "https://i.pinimg.com/originals/ef/5c/d7/ef5cd792ccc5c330d40e5a071a1491f3.jpg",
        type: "basketball",
        price: 70,
        gender: "men"
    },
    {
        id: "8",
        name: "Air Jordan 'Why Not?' Zer0.1 'Triple Double King'",
        img: "https://i.pinimg.com/736x/eb/be/15/ebbe15a4aad85c1a5f1a11bd421cdf67.jpg",
        type: "basketball",
        price: 80,
        gender: "men"
    },
    {
        id: "9",
        name: "Off-White x Air Jordan 1 Retro High OG",
        img: "https://back-door.moscow/wp-content/uploads/2019/05/OAJB1.jpg",
        type: "lifestyle",
        price: 3900,
        gender: "men"
    },
    {
        id: "10",
        name: "Nike LeBron 17 'Lakers'",
        img: "https://brooklynstore.com.ua/content/images/34/basketbolnye-krossovki-nike-lebron-17-lakers-0-93303770094003_small11.jpg",
        type: "basketball",
        price: 180,
        new: "new",
        gender: "men"
    },
    {
        id: "11",
        name: "Air Jordan 1 Retro High Black/Crimson Tint",
        img: "https://sole.com.ua/28740-thickbox_default/krossovki-nike-air-jordan-1-retro-high-og-crimson-tint-black-crimson-tint-white-hyper-pink.jpg",
        price: 120,
        type: "lifestyle-women",
        gender: "women"
    },
    {
        id: "12",
        name: "Air Jordan 1 Retro Mid SE Crimson",
        img: "https://kickz.akamaized.net/es/media/images/p/600/AIR_JORDAN_1_MID_SE-CRIMSON_TINT_HYPER_PINK_BLACK_SAIL-1.jpg",
        price: 130,
        type: "lifestyle-women",
        gender: "women"
    },
    {
        id: "13",
        name: "Air Jordan 1 Retro High OG Pink",
        img: "https://shop.r10s.jp/noel-ange/cabinet/shoes/nike9/nike-aq9131-600-al-a.jpg",
        price: 160,
        type: "lifestyle-women",
        gender: "women"
    },
    {
        id: "14",
        name: "Nike Hyperdunk 2016 Black/White",
        img: "https://www.kicksandice.com/media/catalog/product/cache/afad95d7734d2fa6d0a8ba78597182b7/8/6/86582-2.jpg",
        price: 100,
        type: "basketball-women",
        gender: "women"
    },
    {
        id: "15",
        name: "Nike Air Foamposite One Dark Stucco",
        img: "https://www.nycmode.com/media/catalog/product/cache/1/thumbnail/1500x/17f82f742ffe127f42dca9de82fb58b1/a/a/aa3963-001---1.jpg",
        price: 140,
        type: "lifestyle-women",
        gender: "women"
    },
    {
        id: "16",
        name: "Nike PG 1 Black/Rose",
        img: "https://www.sepsale.com/media/x490/Nike_Other_Basketball_Shoes/Nike_Paul_George_PG1/Nike_Zoom_PG_1_EP_Paul_Jeorge_The_Black_Rose_Women_Basketball_Shoes.jpg",
        price: 90,
        type: "basketball-women",
        gender: "women"
    },
    {
        id: "17",
        name: "Nike Kyrie 6 Black",
        img: "https://images-na.ssl-images-amazon.com/images/I/71B-S6FYbBL._AC_UY500_.jpg",
        price: 130,
        new: "new",
        type: "basketball",
        gender: "men"
    },
    {
        id: "18",
        name: "Nike LeBron 15 'Ashes'",
        img: "https://brooklynstore.com.ua/content/images/50/29587277852826.jpg",
        price: 120,
        type: "basketball",
        gender: "men"
    },
    {
        id: "19",
        name: "Nike Kyrie 5 'Friends'",
        img: "https://images-na.ssl-images-amazon.com/images/I/71a-hHwyRaL._AC_UL1500_.jpg",
        price: 110,
        type: "basketball",
        gender: "men"
    },
    {
        id: "20",
        name: "Nike PG 4 All-Star",
        img: "https://images.nikeshoeszone.com/images/202001/uploaded/1e50dd2dc7db2465289cbfb16cbf0be4.jpg",
        price: 115,
        type: "basketball",
        new: "new",
        gender: "men"
    },
    {
        id: "21",
        name: "Nike KD 12",
        img: "https://images.ua.prom.st/1719628173_w640_h640_originalnye-krossovki-nike.jpg",
        price: 150,
        type: "basketball",
        new: "new",
        gender: "men"
    },
    {
        id: "22",
        name: "Nike Zoom Freak 1",
        img: "https://dreamshoes.in.ua/content/images/40/96611886395979_small11.jpeg",
        price: 120,
        type: "basketball",
        new: "new",
        gender: "men"
    },
    {
        id: "23",
        name: "Nike Kyrie Low 2 Orange Black",
        img: "https://styles.ua/content/images/13/kyrie-low-2-av6337-800-62550949606216_small11.jpg",
        price: 85,
        type: "basketball",
        new: "new",
        gender: "men"
    },
    {
        id: "24",
        name: "Nike AlphaDunk 'Pure Magic'",
        img: "https://brooklynstore.com.ua/content/images/38/basketbolnye-krossovki-nike-alpha-dunk-pure-magic-0-30785855776811_small11.jpeg",
        price: 135,
        type: "basketball",
        new: "new",
        gender: "men"
    },
    {
        id: "25",
        name: "Nike Hyperdunk 2016 Low Black/Red",
        img: "https://www.kicksonfire.com/wp-content/uploads/2016/12/Nike-Hyperdunk-2016-Low-11.png",
        price: 105,
        type: "basketball",
        gender: "men"
    },
    {
        id: "26",
        name: "Nike Hyperdunk X Red",
        img: "https://saintshoes.ru/wa-data/public/shop/products/70/05/570/images/1102/1102.750x0@2x.jpeg",
        price: 135,
        type: "basketball",
        gender: "men"
    },
    {
        id: "27",
        name: "Jordan WhyNot Zer0.3 White/Black",
        img: "https://dreamshoes.in.ua/content/images/16/krossovki-jordan-why-not-zer0.3-white-bright-crimson-black-22988752742226_small11.jpg",
        price: 125,
        type: "basketball",
        new: "new",
        gender: "men"
    },
    {
        id: "28",
        name: "Nike Kyrie 4 Black",
        img: "https://image2.stileo.ua/images/3936123/I520x490-nike-vysokie-krossovki-kyrie-4-chernyj-farfetch-chernyj.jpg",
        price: 90,
        type: "basketball",
        gender: "men"
    },
    {
        id: "29",
        name: "Air Jordan 12 Retro Dark Grey",
        img: "https://www.jordans2019cheap.com/wp-content/uploads/2019/06/air-jordan-12-dark-grey-white-gym-red-for-sale-3.jpg",
        price: 175,
        type: "lifestyle",
        gender: "men"
    },
    {
        id: "30",
        name: "Air Jordan 7 Retro 'Bordeaux'",
        img: "https://brooklynstore.com.ua/content/images/49/basketbolnye-krossovki-air-jordan-7-retro-bordeaux-2015-0-40077686099902_small11.jpg",
        price: 215,
        type: "lifestyle",
        gender: "men"
    },
    {
        id: "31",
        name: "Travis Scott x Air Jordan 6 Retro",
        img: "https://kickstw.com.au/wp-content/uploads/2019/10/Jordan-6-travis-2.jpg",
        price: 650,
        type: "lifestyle",
        gender: "men"
    },
    {
        id: "32",
        name: "Nike Kyrie 5 Black/White/Hot Lava",
        img: "https://cheapinus.weblan.net/images/201911/uploaded/d14c76b2d88d977498b4f4999a6aaac7.jpg",
        price: 105,
        type: "basketball-women",
        gender: "women"
    },
    {
        id: "33",
        name: "Nike Hyperdunk 2017 Low White",
        img: "https://images-na.ssl-images-amazon.com/images/I/51WjNlVpD0L.jpg",
        price: 85,
        type: "basketball-women",
        gender: "women"
    },
    {
        id: "34",
        name: "Nike Hyperdunk X Black/Violet",
        img: "https://www.stadiumgoods.com/cdn-cgi/image/fit%3Dcontain%2Cformat%3Dauto%2Cwidth%3D720/media/catalog/product/A/O/AO7893-002_1.png",
        price: 115,
        type: "basketball-women",
        gender: "women"
    },
    {
        id: "35",
        name: "Air Jordan 1 Retro High Girls",
        img: "https://i.pinimg.com/originals/10/8a/a6/108aa676970dd599607cb5b50ceb75d9.jpg",
        price: 145,
        type: "lifestyle-women",
        gender: "women"
    },
    {
        id: "36",
        name: "Air Jordan 6 Retro Black/Violet",
        img: "https://www.shoesvalley.cn/image/cache/shoes/28796_G_1437034115586-800x800.jpg",
        price: 180,
        type: "lifestyle-women",
        gender: "women"
    },
    {
        id: "37",
        name: "Nike Air Force 1",
        img: "https://cdn.shopify.com/s/files/1/0229/8780/0654/products/14a70c1b6583b1c3f9ac0dbaf0f73946_580x.jpg?v=1579707257",
        price: 100,
        type: "lifestyle-women",
        gender: "women"
    },
    {
        id: "38",
        name: "Air Jordan 1 High React Purple",
        img: "https://stockx.imgix.net/Air-Jordan-1-High-React-Black-Court-Purple.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1569298347",
        price: 175,
        type: "lifestyle",
        gender: "men"
    },
    {
        id: "39",
        name: "Nike PG 3 Black/White",
        img: "https://lh3.googleusercontent.com/proxy/60qjHZbBuHBPNFPb3HATa27_S3Yr0dxMh4aIi1GwNxRi1OgTYw7O9UMMIDVG_of1t1zpEmwFTn1Qm62HILkylcAY9hYawLWVT-pIoOmV7kVC4Q",
        price: 80,
        type: "basketball",
        gender: "men"
    },
    {
        id: "40",
        name: "Travis Scott x Air Jordan 1 High OG",
        img: "https://hypebeast.com/image/2019/03/travis-scott-jordan-1-cactus-jack-2019-release-001-1.jpg",
        price: 1750,
        type: "lifestyle",
        gender: "men"
    },
    {
        id: "41",
        name: "Air Jordan 3 Retro 'Katrina'",
        img: "https://tshop.r10s.jp/lowtex/cabinet/airjordan07/136064-116.jpg",
        price: 325,
        type: "lifestyle",
        gender: "men"
    },
    {
        id: "42",
        name: "Air Jordan True Flight GS Women",
        img: "https://tshop.r10s.com/247/b9b/2ee4/5fba/602f/6986/d46a/11a7e8bbe62c600c737499.jpg",
        price: 98,
        type: "basketball-women",
        gender: "women"
    },
    {
        id: "43",
        name: "Nike KD 11 'Reach Jam'",
        img: "https://brooklynstore.com.ua/content/images/28/basketbolnye-krossovki-nike-kd-11-eybl-peach-jam-0-42906328828798.png",
        price: 115,
        type: "basketball-women",
        gender: "women"
    },
    {
        id: "44",
        name: "Air Jordan 1 Retro Mid GS 'Candy'",
        img: "https://sneakerbardetroit.com/wp-content/uploads/2019/09/Air-Jordan-1-Mid-Multi-Color-GS-Release-Date.jpg",
        price: 90,
        type: "lifestyle-women",
        gender: "women"
    },
    {
        id: "45",
        name: "Air Jordan 11 GS Heiress Red Velvet",
        img: "https://www.basketstore.fr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/j/o/jordan_11_heiress_collection_852625-650_2.jpg",
        price: 195,
        type: "lifestyle-women",
        gender: "women"
    },
    {
        id: "46",
        name: "Air Jordan 4 Retro White",
        img: "https://img.jimmyjazz.com/images/f_auto/q_auto/t_1000/product/308497-100-white-1/Jordan-RETRO-4-SNEAKER",
        price: 135,
        type: "lifestyle-women",
        gender: "women"
    },
    {
        id: "47",
        name: "Air Jordan 13 Retro Black/Pink",
        img: "https://cdn.shopify.com/s/files/1/1793/4663/products/product-image-811296598_1200x.jpg?v=1571439663",
        price: 165,
        type: "lifestyle-women",
        gender: "women"
    },
];