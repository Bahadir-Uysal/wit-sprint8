import "./OrderPage.css";
import Header from "./Header";
import { useState } from "react";

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
  malzemeler: "En az 4 adet ve en fazla 10 adet seçim yapınız.",
};

export default function Order() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({
    isim: false,
    size: false,
    dough: false,
    malzemeler: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const isCheckbox = type === "checkbox";

    if (isCheckbox) {
      const updatedMalzemeler = {
        ...form.malzemeler,
        [name]: checked,
      };

      const selectedCount =
        Object.values(updatedMalzemeler).filter(Boolean).length;

      const isMalzemeError = selectedCount < 4 || selectedCount > 10;

      setErrors((prevErrors) => ({
        ...prevErrors,
        malzemeler: isMalzemeError,
      }));

      setForm({
        ...form,
        malzemeler: updatedMalzemeler,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }

    if (name === "isim") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        isim: value.trim().length < 3,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formIsValid =
      form.isim.trim().length >= 3 &&
      form.size &&
      form.dough &&
      !errors.malzemeler;

    if (formIsValid) {
      setIsValid(true);
    } else {
      setIsValid(false);
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

          <p>Hamur Seç *</p>
          <label>
            <select onChange={handleChange} name="dough" value={form.dough}>
              <option value="">Hamur Kalınlığı</option>
              <option value="ince">İnce</option>
              <option value="kalın">Kalın</option>
            </select>
          </label>

          <p>Ek Malzemeler</p>
          <p>En az 4 en fazla 10 malzeme seçebilirsiniz. 5tl</p>
          {malzemeList.map((malzeme, index) => (
            <label key={index}>
              <input
                type="checkbox"
                name={malzeme}
                checked={form.malzemeler[malzeme]}
                onChange={handleChange}
              />
              {malzeme.charAt(0).toUpperCase() + malzeme.slice(1)}
            </label>
          ))}

          <p>İsminiz ?</p>
          <label>
            <input
              type="text"
              name="isim"
              placeholder="İsminizi girin"
              onChange={handleChange}
              value={form.isim}
            />
            {errors.isim && <span>{errorMessages.isim}</span>}
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

          {errors.malzemeler && <p>{errorMessages.malzemeler}</p>}
          <button type="submit">Sipariş Ver</button>
        </form>
      </main>
    </>
  );
}
