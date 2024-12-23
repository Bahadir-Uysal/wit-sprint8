import React from "react";

function OrderSummary(props) {
  const { totalPrice, totalSelections, page, quickPrice } = props;
  console.log(props);
  return (
    <div
      className={`border border-[#FAF7F2] rounded flex flex-col justify-between ${
        page === "sonuc" ? "w-[350px]" : "bg-beige"
      }`}
    >
      {" "}
      <h3
        className={`text-xl leading-7 mb-5 pt-10 ml-12 ${
          page==="sonuc1"?"bg-red":""
        }`}
      >
        Sipariş Toplamı
      </h3>
      <div className="flex flex-col gap-3 pb-5 px-12">
        <div
          className={`flex justify-between ${
            page === "sonuc" ? "text-white" : ""
          }`}
        >
          Seçimler <span>{totalSelections}₺</span>
        </div>
        <div
          className={`flex justify-between ${
            page === "sonuc" ? "text-white" : ""
          }`}
        >
          Hızlı Teslimat <span>{quickPrice? quickPrice+"₺":"Seçilmedi"}</span>
        </div>

        <div
          className={`flex justify-between ${
            page === "sonuc" ? "text-white" : "text-red"
          }`}
        >
          Toplam <span>{totalPrice}₺</span>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;