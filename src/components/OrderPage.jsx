import "./OrderPage.css";
import Header from "./Header";
import { useEffect, useState } from "react";
import axios from "axios";

import {useHistory} from "react-router-dom"

const initialForm = {
  isim: "",
  size: "",
  dough: "",
  malzemeler: {
    pepperoni: false,
    tavuk: false,
    misir: false,
    sarimsak: false,
    ananas: false,
    sosis: false,
    sogan: false,
    biber: false,
    kabak: false,
    jambon: false,
    domates: false,
    jalepeno: false,
  },
};

const malzemeList = [
  "pepperoni",
  "tavuk",
  "misir",
  "sarimsak",
  "ananas",
  "sosis",
  "sogan",
  "biber",
  "kabak",
  "jambon",
  "domates",
  "jalepeno",
];

 const errorMessages = {
  isim: "Lütfen geçerli bir ad giriniz.",
  size: "Boyut seçiniz.",
  dough: "Lütfen hamur tipini seçiniz.",
  malzemeler: "Belirtilen usulde seçim yapınız.",
};

export default function Order() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({
    isim: false,
    size: false,
    dough: false,
    malzemeler: false,
  });
  const [touched, setTouched] = useState({
    isim: false,
    size: false,
    dough: false,
    malzemeler: false,
  });
  const [isValid, setIsValid] = useState(false);
  const [totalPrice, setTotalPrice] = useState(85.5);
  const history = useHistory();

  const handleValidation = () => {
    const selectedMalzemeler = Object.values(form.malzemeler).filter(
      Boolean
    ).length;

    const newErrors = {
      isim: form.isim.trim().length < 4,
      size: form.size === "",
      dough: form.dough === "",
      malzemeler: selectedMalzemeler < 4 || selectedMalzemeler > 10,
    };

    setErrors(newErrors);

    const isValidForm =
      !newErrors.isim &&
      !newErrors.size &&
      !newErrors.dough &&
      !newErrors.malzemeler;
    setIsValid(isValidForm);
  };

  useEffect(() => {
    handleValidation();
    calculateTotalPrice();
  }, [form]);

  const calculateTotalPrice = () => {
    const basePrice = 85.5;
    const selectedMalzemelerCount = Object.values(form.malzemeler).filter(
      (isSelected) => isSelected
    ).length;
    const extraPrice = selectedMalzemelerCount * 5;
    setTotalPrice(basePrice + extraPrice);
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const isCheckbox = type === "checkbox";

    if (isCheckbox) {
      const updatedMalzemeler = {
        ...form.malzemeler,
        [name]: checked,
      };

      setForm({
        ...form,
        malzemeler: updatedMalzemeler,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
      setTouched((prev) => ({ ...prev, [name]: true }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid) {
      axios
        .post("https://reqres.in/api/pizza", form)
        .then((response) => {
          console.log("Sipariş Özeti", response.data);
          history.push("/orderConfirm")
        })
        .catch((err) => {
          console.warn(err);
        });
    }
  };

  return (
    <>
      <Header />
      <main>
        <article>
          <h3>Position Absolute Acı Pizza</h3>
          <p className="price">85.50</p>
          <p className="rating">4.9</p>
          <p className="rating">(200)</p>
          <p>
            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
        </article>

        <form onSubmit={handleSubmit}>
          <p>Boyut Seç *</p>
          <label>
            <input
              data-cy="radio-button"
              onChange={handleChange}
              name="size"
              type="radio"
              value="kucuk"
              checked={form.size === "kucuk"}
            />{" "}
            Küçük
          </label>
          <label>
            <input
              onChange={handleChange}
              name="size"
              type="radio"
              value="orta"
              checked={form.size === "orta"}
            />{" "}
            Orta
          </label>
          <label>
            <input
              onChange={handleChange}
              name="size"
              type="radio"
              value="buyuk"
              checked={form.size === "buyuk"}
            />{" "}
            Büyük
          </label>
          {errors.size && touched.size && <p>{errorMessages.size}</p>}
          <p>Hamur Seç *</p>
          <label>
            <select onChange={handleChange} name="dough" value={form.dough}>
              <option value="">Hamur Kalınlığı</option>
              <option value="ince">İnce</option>
              <option value="kalın">Kalın</option>
            </select>
          </label>
          {errors.dough &&  <p>{errorMessages.dough}</p>}
          <p>Ek Malzemeler</p>
          <p>En az 4 en fazla 10 malzeme seçebilirsiniz. 5tl</p>
          {malzemeList.map((malzeme, index) => (
            <label key={index}>
              <input
                data-cy="checkboxes"
                type="checkbox"
                name={malzeme}
                checked={form.malzemeler[malzeme]}
                onChange={handleChange}
                value={malzeme}
              />
              {malzeme.charAt(0).toUpperCase() + malzeme.slice(1)}
            </label>
          ))}
          {errors.malzemeler && touched.malzemeler && (
            <p>{errorMessages.malzemeler}</p>
          )}

          <p>İsminiz ?</p>
          <label>
            <input
              data-cy="ad-input"
              type="text"
              name="isim"
              placeholder="İsminizi girin"
              onChange={handleChange}
              value={form.isim}
            />
            {errors.isim && touched.isim && <p>{errorMessages.isim}</p>}
          </label>

          <p>Sipariş Notu</p>
          <label>
            <textarea
              onChange={handleChange}
              name="note"
              placeholder="Siparişine eklemek istediğin bir not var mı ?"
              value={form.note}
            ></textarea>
          </label>

          <div>
            <h4>Sipariş Toplamı</h4>
            <p>
              Seçimler
              <span>
                {Object.values(form.malzemeler).filter((selected) => selected)
                  .length * 5}
                ₺
              </span>
            </p>
            <p>
              Toplam
              <span>{totalPrice}₺"</span>
            </p>
            
              <button data-cy="button-submit" type="submit" disabled={!isValid}>
                Sipariş Ver
              </button>
            
          </div>
        </form>
      </main>
    </>
  );
}
