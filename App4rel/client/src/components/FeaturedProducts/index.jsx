import Card from "../../components/Card";
import React from "react";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img:
        "https://img.freepik.com/free-photo/close-up-portrait-teenager-isolated_23-2149158186.jpg?w=360&t=st=1697672686~exp=1697673286~hmac=a3db67e90322c9c14ca852ce2ddcf15286d2eb83d750848b66cdb208483902e0",
      img2:
        "https://img.freepik.com/free-photo/close-up-portrait-teenager-isolated_23-2149158187.jpg?t=st=1697672686~exp=1697673286~hmac=7585773b4dd58f980f3fa6e0d64c2f1b02be1f1c57a3fe701eb054026e714b09",
      title: "Essential Hoody Blue",
      isNew: true,
      oldPrice: 40,
      newPrice: 25,
    },
    {
      id: 2,
      img:
        "https://img.freepik.com/free-photo/teenage-girl-black-top-flannel-shirt-youth-apparel-grunge-fashion-shoot_53876-126954.jpg?w=360&t=st=1697672989~exp=1697673589~hmac=5627251d645e6af1e6d35211ed8c048971117bc5b24d363d41bd059473382e0d",
      img2:
        "https://img.freepik.com/free-photo/girls-black-tank-top-with-flannel-shirt_53876-102947.jpg?w=360&t=st=1697673029~exp=1697673629~hmac=22c49de746cc046b3a566d60276241e652bbfdd81f7ed3824f7fa8b623be139b",
      title: "Sleeveles Crop Black",
      isNew: false,
      oldPrice: 40,
      newPrice: 25,
    },
    {
      id: 3,
      img:
        "https://img.freepik.com/free-photo/white-polo-shirt-street-style-menswear-fashion-apparel-shoot_53876-105528.jpg?w=360&t=st=1697673272~exp=1697673872~hmac=fd0b6143525e5b8aa75503b588e49008384d0412f5c3a773cc9cd6c6b3a3d772",
      img2:
        "https://img.freepik.com/free-photo/white-polo-shirt-street-style-menswear-fashion-apparel-shoot_53876-119742.jpg?w=360&t=st=1697673311~exp=1697673911~hmac=b9f979a1b7cebad83cc6d8b8c46cc18b8b07e947ded0d45246c3521c7d498058",
      title: "Simple Polo White",
      isNew: true,
      oldPrice: 40,
      newPrice: 25,
    },
    {
      id: 4,
      img:
        "https://img.freepik.com/free-photo/young-woman-wearing-orange-dress-with-turban-ethnic-jewelry_273443-4387.jpg?w=360&t=st=1697718087~exp=1697718687~hmac=6ba4ba4e85a1aff88786106b2a47cdfcbf1fad578b3f136918bcff247e910a35",
      img2:
        "https://img.freepik.com/free-photo/young-woman-wearing-orange-dress-with-turban-ethnic-jewelry_273443-4390.jpg?w=360&t=st=1697718031~exp=1697718631~hmac=c3ba10abb57330eb784b9c8a71a0ca32617e335bbda0c879492854ea90c9ee64",
      title: "Orange Dress",
      isNew: false,
      oldPrice: 40,
      newPrice: 25,
    },
  ];
  return (
    <section className="my-20">
      {/* header */}
      <div className="uppercase font-bold text-2xl px-10 mb-10">
        {type} products
      </div>
      {/* Cards */}
      <div className="flex items-center justify-center gap-5">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
