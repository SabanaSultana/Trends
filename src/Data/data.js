const products = [
  {
    id: 1,
    category: "Men",
    title: "Men's Casual Shirt",
    description: "A stylish and comfortable casual shirt, perfect for everyday wear.",
    price: 29.99,
    imageUrl: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/t/s/t/xl-dss-plan-3-prexacreation-original-imagmamnupk4hyhh.jpeg?q=90&crop=false"
  },
  {
    id: 2,
    category: "Men",
    title: "Men's Formal Suit",
    description: "A sleek and elegant formal suit, ideal for special occasions and business meetings.",
    price: 199.99,
    imageUrl: "https://i.etsystatic.com/31737802/r/il/639f37/3798474235/il_570xN.3798474235_gzwt.jpg"
  },
  {
    id: 3,
    category: "Men",
    title: "Men's Denim Jeans",
    description: "Classic denim jeans with a comfortable fit and timeless style.",
    price: 49.99,
    imageUrl: "https://metalhawk.in/cdn/shop/products/MHMJN13422_2.jpg?v=1661461270"
  },
  {
    id: 4,
    category: "Men",
    title: "Men's Leather Jacket",
    description: "A high-quality leather jacket that adds a rugged and stylish edge to any outfit.",
    price: 149.99,
    imageUrl: "https://cdn.shopify.com/s/files/1/1202/0618/products/Screenshot2023-04-01at3.01.10PM_480x480.png?v=1680333192"
  },
  {
    id: 5,
    category: "Women",
    title: "Women's Summer Dress",
    description: "A light and airy summer dress, perfect for warm weather and casual outings.",
    price: 39.99,
    imageUrl: "https://m.media-amazon.com/images/I/71b907qJx+L._AC_UY1100_.jpg"
  },
  {
    id: 6,
    category: "Women",
    title: "Women's Evening Gown",
    description: "A stunning evening gown that exudes elegance and sophistication.",
    price: 249.99,
    imageUrl: "https://5.imimg.com/data5/BI/EV/MY-26536465/ladies-ball-gown.jpg"
  },
  {
    id: 7,
    category: "Women",
    title: "Women's Casual Top",
    description: "A comfortable and stylish casual top, great for everyday wear.",
    price: 24.99,
    imageUrl: "https://m.media-amazon.com/images/I/81GHs6R4m-L._AC_UY1100_.jpg"
  },
  {
    id: 8,
    category: "Women",
    title: "Women's Leather Handbag",
    description: "A chic leather handbag that combines functionality with style.",
    price: 89.99,
    imageUrl: "https://images-cdn.ubuy.co.in/65236c2a46deef6e6118429b-sexy-dance-tote-bags-for-women-vintage.jpg"
  },
  {
    id: 9,
    category: "Men",
    title: "Men's Hooded Sweatshirt",
    description: "A comfortable and warm hoodie, perfect for chilly days.",
    price: 34.99,
    imageUrl: "https://5.imimg.com/data5/SELLER/Default/2023/7/325236006/OX/YL/AU/22817649/men-hooded-sweatshirt.jpg"
  },
  {
    id: 10,
    category: "Men",
    title: "Men's Running Shoes",
    description: "Lightweight and supportive running shoes for active men.",
    price: 79.99,
    imageUrl: "https://www.tracerindia.com/cdn/shop/products/5_31ff2c06-4b3b-4c57-8590-e447eeb9b34d.jpg?v=1688469389&width=1445"
  },
  {
    id: 11,
    category: "Men",
    title: "Men's Chinos Pants",
    description: "Versatile and stylish chinos pants for a smart-casual look.",
    price: 59.99,
    imageUrl: "https://assets.ajio.com/medias/sys_master/root/20221230/xaXE/63ae8a24f997ddfdbd03789d/-473Wx593H-443001119-olive-MODEL.jpg"
  },
  {
    id: 12,
    category: "Men",
    title: "Men's Winter Jacket",
    description: "A durable and insulated jacket to keep you warm during winter.",
    price: 179.99,
    imageUrl: "https://5.imimg.com/data5/SELLER/Default/2023/8/331411565/AE/NV/GF/66832236/4302520401-2-1-1-500x500.jpg"
  },
  {
    id: 13,
    category: "Women",
    title: "Women's Saree",
    description: "Elegant and traditional saree for a graceful appearance.",
    price: 29.99,
    imageUrl: "https://m.media-amazon.com/images/I/61QdwpkFolL._AC_UY1100_.jpg"
  },
  {
    id: 14,
    category: "Women",
    title: "Women's Salwar Suits",
    description: "Elegant salwar suits for traditional occasions.",
    price: 44.99,
    imageUrl: "https://img0.junaroad.com/uiproducts/19809222/zoom_0-1683301514.jpg"
  },
  {
    id: 15,
    category: "Women",
    title: "Women's Heel",
    description: "Stylish Heel for party wear.",
    price: 69.99,
    imageUrl: "https://images-cdn.ubuy.co.in/635f3a73144edf0ddd537083-musshoe-platform-heels-chunky-heels-for.jpg"
  },
  {
    id: 16,
    category: "Women",
    title: "Women's Formal Blouse",
    description: "Elegant blouse for formal occasions, with a classic design.",
    price: 54.99,
    imageUrl: "https://images-cdn.ubuy.co.in/63c1a9bb10104f2f732dfd09-long-sweater-vest-work-neck-v-women.jpg"
  },
  {
    id: 17,
    category: "Men",
    title: "Men's T Shirt",
    description: "Classic T shirt with a comfortable fit, suitable for various occasions.",
    price: 39.99,
    imageUrl: "https://m.media-amazon.com/images/I/B1vjL6MUg1S._CLa%7C2140%2C2000%7C71B96Y-AwAL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png"
  },
  {
    id: 18,
    category: "Men",
    title: "Men's Backpack",
    description: "Durable and spacious backpack for everyday use or travel.",
    price: 69.99,
    imageUrl: "https://i.etsystatic.com/18815814/r/il/e5be2a/3669196769/il_1080xN.3669196769_8a49.jpg"
  },
  {
    id: 19,
    category: "Women",
    title: "Women's Jeans Top",
    description: "Comfortable swim shorts with quick-dry fabric, perfect for the beachStylish and versatile jeans top for women.",
    price: 29.99,
    imageUrl: "https://cdn.shopify.com/s/files/1/0523/6310/0335/files/1_8392196d-3a70-48bb-9523-014da10bb852_350x.jpg?v=1709274636p"
  },
  {
    id: 20,
    category: "Men",
    title: "Men's Watch",
    description: "Elevate your style with this sophisticated men's watch.",
    price: 49.99,
    imageUrl: "https://rukminim2.flixcart.com/image/850/1000/xif0q/watch/e/v/5/1-watches-axe-style-men-original-imagrtccnbxfty6e.jpeg?q=90&crop=false"
  },
  {
    id: 21,
    category: "Women",
    title: "Women's Watch",
    description: "Elevate your style with this sophisticated women's watch.",
    price: 129.99,
    imageUrl: "https://m.media-amazon.com/images/I/61p66iye3sL._AC_UY1000_.jpg"
  },
  {
    id: 22,
    category: "Women",
    title: "Women's Floral Skirt",
    description: "Flowy and vibrant floral skirt for a cheerful and feminine look.",
    price: 34.99,
    imageUrl: "https://assets.ajio.com/medias/sys_master/root/20210903/MbFo/613141487cdb8cb82414b2f7/-473Wx593H-461007859-yellow-MODEL5.jpg"
  },
  {
    id: 23,
    category: "Women",
    title: "Women's Earrings",
    description: "Add a touch of elegance to your ensemble with these stunning women's earrings.",
    price: 49.99,
    imageUrl: "https://assets.ajio.com/medias/sys_master/root/20240109/YtMv/659c641c74cb305fe00c3f9b/-473Wx593H-466964033-silver-MODEL.jpg"
  },
  {
    id: 24,
    category: "Women",
    title: "Women's Winter Coat",
    description: "Warm and cozy winter coat with a fashionable design.",
    price: 199.99,
    imageUrl: "https://cdna.lystit.com/photos/wolfandbadger/ec5bc283/james-lakeland-Brown-Double-Breasted-A-Line-Coat-Camel.jpeg"
  },
  {
    id: 25,
    category: "Men",
    title: "Men's Baseball Cap",
    description: "Comfortable and adjustable baseball cap for casual wear.",
    price: 19.99,
    imageUrl: "https://m.media-amazon.com/images/I/61C62x4J+oL._AC_UY350_.jpg"
  },
  {
    id: 26,
    category: "Women",
    title: "Women's Necklace",
    description: "Enhance your neckline with this exquisite necklace.",
    price: 99.99,
    imageUrl: "https://m.media-amazon.com/images/I/511iSJ4j+8L._AC_UY1100_.jpg"
  },
  {
    id: 27,
    category: "Women",
    title: "Women's Lehenga",
    description: "Embrace timeless elegance with this stunning lehenga. Perfect for weddings and festive celebrations, this traditional ensemble features intricate embroidery and exquisite detailing.",
    price: 39.99,
    imageUrl: "https://5.imimg.com/data5/SELLER/Default/2020/11/CR/KO/OK/88883037/red-lehangha-choli.jpeg"
  }
]


export default products;