import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import { useHistory } from "react-router-dom";
import OrderSummary from "./OrderSummary";
import Footer from "./Footer";

function Form(props) {
  const { setFormData } = props;
  const extras = [
    "Pepperoni",
    "Tavuk Izgara",
    "Mısır",
    "Sarımsak",
    "Ananas",
    "Sosis",
    "Soğan",
    "Sucuk",
    "Biber",
    "Kabak",
    "Kanada Jambonu",
    "Domates",
    "Jalepeno",
    "Kekik",
  ];

  const errors = {
    sizeError: "Lütfen boyut seçimi yapınız.",
    breadError: "Lütfen hamur kalınlığını seçiniz.",
    extrasError: "Lütfen en az 4 en fazla 10 malzeme seçiniz.",
    nameError: "Lütfen adınızı en az 3 harf giriniz.",
  };
  const breadTypes = ["İnce hamur", "Kalın hamur"];
  const sizes = ["Küçük", "Orta", "Büyük"];

  const [size, setSize] = useState("");
  const [breadType, setBreadType] = useState("");
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [name, setName] = useState("");
  const [note, setNote] = useState(""); // Sipariş notu
  const [quantity, setQuantity] = useState(1); // Miktar için
  const [error, setError] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [touch, setTouch] = useState({
    boyut: false,
    hamur: false,
    malzeme: false,
    isim: false,
  });
  const quickDeliveryPrice = 50;
  const [quickDelivery, setQuickDelivery] = useState(false);

  let history = useHistory();

  const totalSelections = selectedExtras.length * 5 * quantity;
  let totalPrice = quantity * 100 + totalSelections;
  if (quickDelivery === true) {
    totalPrice = totalPrice + quickDeliveryPrice;
  }

  function handleDeliveryPrice(event) {
    if (event.target.checked) {
      setQuickDelivery(true);
    } else {
      setQuickDelivery(false);
    }
  }

  function handleSizeChange(event) {
    setSize(event.target.value); // Boyut değişikliği
    setTouch((prev) => ({ ...prev, boyut: true }));
  }
  function handleBreadChange(event) {
    setBreadType(event.target.value); // Hamur değişikliği
    setTouch((prev) => ({ ...prev, hamur: true }));
  }

  function handleSelectExtras(event) {
    const { checked, value } = event.target;
    setTouch((prev) => ({ ...prev, malzeme: true }));
    if (selectedExtras.length >= 10) {
      event.preventDefault();
      event.target.checked = false;
      return;
    }

    if (checked) {
      setSelectedExtras([...selectedExtras, value]);
    } else {
      const newSelectedExtras = selectedExtras.filter((a) => a !== value);
      setSelectedExtras(newSelectedExtras);
    }
  }

  function handleNameChange(event) {
    const name = event.target.value;
    setName(name);
    setTouch((prev) => ({ ...prev, isim: true }));
  }

  function handleNoteChange(event) {
    setNote(event.target.value);
  }

  // Miktar artırma
  function increaseQuantity(e) {
    e.preventDefault();
    setQuantity((prevQuantity) => prevQuantity + 1);
  }
  // Miktar azaltma
  function decreaseQuantity(e) {
    e.preventDefault();
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  }

  useEffect(() => {
    setError((prevError) => ({
      ...prevError,
      sizeError: size === "" ? errors.sizeError : "",
      breadError: breadType === "" ? errors.breadError : "",
      extrasError:
        selectedExtras.length < 4 || selectedExtras.length > 10
          ? errors.extrasError
          : "",
      nameError: name.length < 3 ? errors.nameError : "",
    }));
    console.log(error);
  }, [size, breadType, selectedExtras, name]);

  useEffect(() => {
    if (
      error.sizeError !== "" ||
      error.breadError !== "" ||
      error.nameError !== "" ||
      error.extrasError !== ""
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [error]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    if (!isValid) {
      return;
    }
    const payload = {
      isim: name,
      boyut: size,
      malzemeler: selectedExtras,
      hamurTipi: breadType,
      not: note,
      adet: quantity,
    };
    setFormData(payload);
    axios
      .post("https://reqres.in/api/pizza", payload)
      .then((response) => {
        console.log("Sipariş Özeti:", response.data);
        setName("");
        setSize("");
        setBreadType("");
        setSelectedExtras([]);
        setNote("");
        setQuantity(1);
        setQuickDelivery(false);
        history.push({
          pathname: "/success",
          state: {
            orderSummary: response.data,
            totalSelections,
            totalPrice,
            quickPrice: quickDelivery ? quickDeliveryPrice : 0,
          },
        });
      })
      .catch((error) => {
        console.error("Sipariş Hatası:", error);
        if (!error.response) {
          // Ağ hatası veya internet bağlantısı yok
          alert("Lütfen internet bağlantınızı kontrol edin ve tekrar deneyin.");
        }
      });
  }

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center bg-[#FAF7F2]">
          <div className=" w-[532px] font-barlow mb-10">
            <img
              src="Assets/Iteration-2-aseets/pictures/form-banner.png"
              alt=""
            />
            <h2 className=" leading-7 font-semibold text-2xl mt-8 h-14">
              Position Absolute Acı Pizza
            </h2>
            <div className="flex gap-80 items-center">
              <div>
                <span className="text-3xl leading-9 font-bold ">85.50₺</span>
              </div>
              <div className="flex gap-14">
                <span>4.9</span>
                <span>(200)</span>
              </div>
            </div>

            <div className="mt-4">
              Frontent Dev olarak hala position:absolute kullanıyorsan bu çok
              acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
              çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
              odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
              yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
              İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen
              pizzetta denir.
            </div>
          </div>
          <div className="bg-white w-full flex justify-center">
            <div className=" w-[532px] font-barlow ">
              <div className="flex gap-32 mt-10 w-[420px] ">
                <div className="flex flex-col gap-4">
                  <span className="font-semibold text-xl">
                    Boyut Seç
                    <span className="text-red ">*</span>
                  </span>

                  {sizes.map((s) => (
                    <label htmlFor={s} className="block" key={s}>
                      <input
                        data-cy="size"
                        id={s}
                        type="radio"
                        name="size"
                        value={s}
                        onChange={handleSizeChange}
                        checked={size === s}
                        className="mr-2"
                      />
                      {s}
                    </label>
                  ))}
                  {touch.boyut && error.sizeError !== "" && (
                    <span className="text-red">{error.sizeError}</span>
                  )}
                </div>
                <div className="leading-7 ">
                  <span className=" font-semibold text-xl">
                    Hamur Seç<span className="text-red ">*</span>
                  </span>

                  <label htmlFor="bread" className="block border">
                    <select
                      data-cy="breadType"
                      id="bread"
                      name="bread"
                      onChange={handleBreadChange}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Hamur Kalınlığı
                      </option>
                      {breadTypes.map((b) => (
                        <option value={b} key={b}>
                          {b}
                        </option>
                      ))}{" "}
                    </select>
                  </label>
                  {touch.hamur && error.breadError !== "" && (
                    <span className="text-red">{error.breadError}</span>
                  )}
                </div>
              </div>

              <div>
                <div className="mt-10 font-semibold text-xl leading-6 mb-3">
                  Ek Malzemeler
                </div>
                <h3>En Fazla 10 malzeme seçebilirsiniz. 5₺</h3>
              </div>
              <div className="flex flex-wrap gap-7 w-[600px] mt-10 font-bold text-base text-[#5F5F5F] ">
                {extras.map((e) => (
                  <label
                    className="container md:basis-40 basis-48"
                    htmlFor={e}
                    key={e}
                  >
                    <input
                      type="checkbox"
                      className="mr-1"
                      onChange={handleSelectExtras}
                      value={e}
                      name={e}
                      checked={selectedExtras.includes(e)}
                      id={e}
                      data-cy="extras"
                    />
                    <span className="checkmark"></span>
                    {e}
                  </label>
                ))}
                {touch.malzeme && error.extrasError !== "" && (
                  <span data-cy="extras-error" className="text-red font-normal">
                    {error.extrasError}
                  </span>
                )}
              </div>
              <div className=" mt-10">
                <h2 className="font-semibold text-xl leading-6 mb-3">İsim</h2>
                <input
                  data-cy="name"
                  type="text"
                  name="name"
                  className="border w-[531px] rounded mb-2 h-10 px-2"
                  onChange={handleNameChange}
                />
                {touch.isim && error.nameError !== "" && (
                  <div data-cy="name-error" className="text-red mb-10">
                    {error.nameError}
                  </div>
                )}
                <h3 className="font-semibold text-xl mb-4 leading-6 ">
                  Sipariş Notu
                </h3>

                <div className="border w-[531px] h-14  rounded-md flex mb-9 ">
                  <textarea
                    onChange={handleNoteChange}
                    className=" w-full bg-[#FAF7F2] p-3"
                    value={note}
                    placeholder="Siparişine eklemek istediğin bir not var mı?"
                  />
                </div>
                <label className="container">
                  <input
                    type="checkbox"
                    name="quickdel"
                    onChange={handleDeliveryPrice}
                  />

                  <span className=" checkmark"> </span>
                  <div>
                    Hızlı Teslimat <span className="text-red">50₺</span>{" "}
                  </div>
                </label>
                <hr className="mb-10" />
              </div>
              <div className="flex justify-between items-start ">
                <div className="flex ">
                  <button
                    className="w-14 h-14 flex items-center justify-center bg-yellow rounded-l-lg"
                    onClick={decreaseQuantity}
                  >
                    -
                  </button>
                  <div className="w-14 h-14 flex items-center justify-center border-slate-200 border">
                    {quantity}
                  </div>
                  <button
                    className="w-14 h-14 flex items-center justify-center bg-yellow rounded-r-lg"
                    onClick={increaseQuantity}
                  >
                    +
                  </button>
                </div>

                <div className="w-[350px] font-semibold border-slate-200 border rounded-md flex flex-col justify-center mb-40 ">
                  <OrderSummary
                    totalSelections={totalSelections}
                    totalPrice={totalPrice}
                    quickPrice={quickDelivery ? quickDeliveryPrice : 0}
                  />

                  <button
                    type="submit"
                    data-cy="submit"
                    className={
                      "h-16 rounded-md w-full bg-yellow " +
                      `${!isValid ? "opacity-50" : "opacity-100"}`
                    }
                    disabled={!isValid}
                    onClick={handleSubmit}
                  >
                    SİPARİŞ VER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
}

export default Form;