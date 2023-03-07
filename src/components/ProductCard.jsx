import { Bag2, Heart } from "iconsax-react";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { MdClose } from "react-icons/md";
import { addToCart } from "../redux/features/cart/cartslice";
import { dispatch } from "../redux/store";

const sizes = [
  { id: 1, size: "xs", selected: false, disabled: false },
  { id: 2, size: "s", selected: true, disabled: false },
  { id: 3, size: "m", selected: false, disabled: false },
  { id: 4, size: "lg", selected: false, disabled: false },
  { id: 5, size: "xl", selected: false, disabled: false },
  { id: 6, size: "xxl", selected: false, disabled: true },
];

const ProductCard = ({ product }) => {
  const [selectSizeOpen, setSelectSizeOpen] = useState({
    productId: null,
    isSelectSizeOpen: false,
  });

  const [size, setSize] = useState(null);
  const [sizesFt, setSizesFt] = useState(sizes);

  const sizes2 = [...sizes];

  const handleSize = (sizeId, productId) => {
    for (let x = 0; x < sizes2.length; x++) {
      sizes2[x].selected = false;

      if (sizes2[x].id === sizeId) {
        sizes2[x].selected = true;
      }
    }

    setSizesFt(sizes2);

    setSize(sizes2.find((ft) => ft.selected === true));
  };

  const handleSelectSizeOpen = (productIdx) => {
    setSelectSizeOpen({ productId: productIdx, isSelectSizeOpen: true });
  };

  const addToBag = (prod) => {
    const item = {
      ...prod,
      selectedSize: size.size,
    };

    console.log(item);
    dispatch(addToCart(item));
    toast.success(`${prod.name} added to cart!`);
  };

  return (
    <section className="w-[195px] h-[382px] md:w-[273px] md:h-[534px] relative inline-block group duration-300 bg-white mt-4">
      {product.is_new && (
        <span className="font-inter text-[#fcfcfd] bg-black rounded-full px-3 py-1 text-[12px] md:text-[14px] absolute top-[8px] left-[8px] z-[3]">
          New!
        </span>
      )}

      <section className="relative">
        <img
          src="new-assets/IMG_9728.webp"
          alt={product.name}
          width={273}
          height={440}
          loading="lazy"
          className="w-[195px] h-[296px] md:w-[273px] md:h-[440px]"
        />
        <button
          className="bg-black rounded-lg font-inter text-[14px] text-white px-5 py-2 w-[70%] hidden md:group-hover:block mx-auto cursor-pointer absolute bottom-[25px] left-[50%] -translate-x-[50%] duration-300 "
          onClick={() => handleSelectSizeOpen(product.id)}
        >
          Quick Add
        </button>

        <section
          className={`bg-white rounded-full font-inter text-[14px] text-black w-[40px] h-[40px] mx-auto grid cursor-pointer absolute bottom-[8px] right-[8px] duration-300 place-items-center md:hidden ${
            selectSizeOpen.productId &&
            selectSizeOpen.isSelectSizeOpen &&
            "hidden"
          }`}
          onClick={() => handleSelectSizeOpen(product.id)}
        >
          <Bag2 variant="Linear" size={28} />
        </section>

        <section
          className={`absolute bottom-[15px] left-[50%] md:bottom-[25px] md:left-[50%] -translate-x-[50%] duration-300 bg-white w-[75%] rounded-lg font-inter p-4 text-black ${
            selectSizeOpen.productId && selectSizeOpen.isSelectSizeOpen
              ? "block"
              : "hidden"
          } `}
        >
          <section className="flex items-center justify-between">
            <h4 className="text-[14px] text-[#101828]">Select size</h4>
            <MdClose
              size={20}
              className="text-[#1d2939]"
              onClick={() =>
                setSelectSizeOpen({ productId: null, isSelectSizeOpen: false })
              }
            />
          </section>

          <section className="border-none w-fit sm2:w-full grid grid-cols-3 gap-5 sm2:gap-3 my-4">
            {sizes
              ? sizes.map((size) => {
                  if (size.selected) {
                    return (
                      <section
                        key={size.id}
                        className="grid place-items-center  cursor-pointer text-[16px] font-medium w-[40px] h-[40px] bg-[#101828] text-[#fcfcfd] rounded-lg"
                        onClick={() => handleSize(size.id, product.id)}
                      >
                        {size.size}
                      </section>
                    );
                  } else if (size.disabled) {
                    return (
                      <section
                        key={size.id}
                        className={
                          "grid place-items-center border-[1px] border-[#d0d5dd] cursor-not-allowed text-[16px] font-medium w-[43px] h-[40px] bg-[#eaecf0] text-[#667085] rounded-lg"
                        }
                      >
                        {size.size}
                      </section>
                    );
                  } else {
                    return (
                      <section
                        key={size.id}
                        className={
                          "grid place-items-center border-[1px] border-[#d0d5dd] cursor-pointer text-[16px] font-medium w-[43px] h-[40px] bg-white rounded-lg"
                        }
                        onClick={() => handleSize(size.id, product.id)}
                      >
                        {size.size}
                      </section>
                    );
                  }
                })
              : "No sizes"}
          </section>

          <button
            onClick={() => addToBag(product)}
            className="bg-black rounded-lg font-inter text-[14px] text-white px-5 py-2 w-full block mx-auto cursor-pointer duration-300"
          >
            Add to bag
          </button>
        </section>
      </section>

      <section className="w-full flex items-start justify-between mt-2 md:mt-4">
        <section className="whitespace-normal">
          <h3 className="text-[12px] md:text-[14px]">{product.name}</h3>
          {/* <p className="">{product.desc}</p> */}
          <p className="text-[20px] font-anybody font-bold mt-2 md:mt-4">
            {product.price}
          </p>
        </section>
        <Heart variant="Linear" size={24} className="text-black ml-6" />
      </section>
    </section>
  );
};

export default ProductCard;
