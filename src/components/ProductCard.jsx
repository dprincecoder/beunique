import { Bag2, Heart } from "iconsax-react";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToBag } from "../redux/features/bag/bagSlice";
import priceFormatter from "../utils/priceFormatter";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const [selectSizeOpen, setSelectSizeOpen] = useState({
    productId: null,
    isSelectSizeOpen: false,
  });

  const imgUrl = product?.product_url?.[0] ? product?.product_url : "";

  const sizes = product?.sizes;
  const [size, setSize] = useState(null);

  const handleSize = (sizeId) => {
    for (let x = 0; x < sizes.length; x++) {
      if (sizes[x].id === sizeId) {
        sizes[x].selected = !sizes[x].selected;
      } else {
        sizes[x].selected = false;
        setSize(null);
      }
    }

    setSize(
      sizes.find((ft) => ft.selected === true)
        ? sizes.find((ft) => ft.selected === true).size
        : null
    );
  };

  const handleSelectSizeOpen = (productIdx) => {
    setSelectSizeOpen({ productId: productIdx, isSelectSizeOpen: true });
  };

  const handleAddToBag = (itm) => {
    if (size) {
      const bagItem = {
        id: itm?.id,
        name: itm?.product_name,
        price: itm?.price,
        size: size,
        image: itm?.product_url[0],
        category_slug: itm?.category_slug,
        item_slug: itm?.slug_name,
      };

      dispatch(addToBag(bagItem));
      toast.success(`${bagItem.name} added to bag`);

      setSize(null);
      setSelectSizeOpen({
        productId: null,
        isSelectSizeOpen: false,
      });
    } else {
      alert("Please SELECT a size!");
      toast.error("Please SELECT a size!");
    }
  };
  return (
    <section className="w-full relative inline-block group duration-300 mt-4">
      {product?.new_stock && (
        <span className="font-inter text-[#fcfcfd] bg-black rounded-full px-3 py-1 text-[12px] md:text-[14px] absolute top-[8px] left-[8px] z-20">
          New!
        </span>
      )}

      <section className="relative">
        <img
          src={product?.product_url?.[0]}
          alt={product?.product_name}
          width={500}
          height={500}
          layout="fill"
          quality={80}
          loading="eager"
          className="w-full h-[240px] sm:h-[300px] sm3:h-[375px] md:h-[300px] md2:h-[270px] lg:h-[340px] lg3:h-[375px] z-10"
        />
        <button
          className="bg-black rounded-lg font-inter text-[14px] text-white px-5 py-2 w-[70%] hidden md:group-hover:block mx-auto cursor-pointer absolute bottom-[25px] left-[50%] -translate-x-[50%] duration-300 "
          onClick={() => handleSelectSizeOpen(product?.id)}
        >
          Quick Add
        </button>

        <section
          className={`bg-white rounded-full font-inter text-[14px] text-black w-[40px] h-[40px] mx-auto grid cursor-pointer absolute bottom-[8px] right-[8px] duration-300 place-product-center md:hidden ${
            selectSizeOpen.productId &&
            selectSizeOpen.isSelectSizeOpen &&
            "hidden"
          }`}
          onClick={() => handleSelectSizeOpen(product?.id)}
        >
          <Bag2 variant="Linear" size={28} />
        </section>

        <section
          className={`absolute bottom-[15px] left-[50%] md:bottom-[25px] md:left-[50%] -translate-x-[50%] duration-300 bg-white w-[90%] md:w-[75%] rounded-lg font-inter p-4 text-black ${
            selectSizeOpen.productId && selectSizeOpen.isSelectSizeOpen
              ? "block"
              : "hidden"
          } `}
        >
          <section className="flex product-center justify-between">
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
                        className="grid place-product-center  cursor-pointer text-[16px] font-medium w-[40px] h-[40px] bg-[#101828] text-[#fcfcfd] rounded-lg"
                        onClick={() => handleSize(size.id)}
                      >
                        {size.size}
                      </section>
                    );
                  } else if (size.disabled) {
                    return (
                      <section
                        key={size.id}
                        className={
                          "grid place-product-center border-[1px] border-[#d0d5dd] cursor-not-allowed text-[16px] font-medium w-[43px] h-[40px] bg-[#eaecf0] text-[#667085] rounded-lg"
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
                          "grid place-product-center border-[1px] border-[#d0d5dd] cursor-pointer text-[16px] font-medium w-[43px] h-[40px] bg-white rounded-lg"
                        }
                        onClick={() => handleSize(size.id, product?.id)}
                      >
                        {size.size}
                      </section>
                    );
                  }
                })
              : "No sizes"}
          </section>

          <button
            className="bg-black rounded-lg font-inter text-[14px] text-white px-5 py-2 w-full block mx-auto cursor-pointer duration-300"
            onClick={() => handleAddToBag(product)}
          >
            Add to bag
          </button>
        </section>
      </section>

      <section className="w-full flex product-start justify-between mt-5">
        <Link
          to={`/p?type=${product?.category_slug}&item?=${product?.slug_name}`}
          className="w-full"
        >
          <section className="whitespace-normal">
            <h3 className="text-[12px] md:text-[14px] font-medium">
              {product?.product_name}
            </h3>
            <p className="text-[20px] font-anybody font-bold mt-3">
              {priceFormatter(product?.price)}
            </p>
          </section>
        </Link>

        <Heart variant="Linear" size={24} className="text-black ml-6" />
      </section>
    </section>
  );
};

export default ProductCard;
