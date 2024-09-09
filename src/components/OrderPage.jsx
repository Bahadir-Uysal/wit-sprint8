import "./OrderPage.css";
import Header from "./Header";
import { useState } from "react";


const initalForm ={
  isim:"",
  malzeme1 : "false",
  malzeme2 : "false",
  malzeme3 : "false",
  malzeme4 : "false",
  malzeme5 : "false",
  malzeme6 : "false",
  malzeme7 : "false",
  malzeme8 : "false",
  malzeme9 : "false",
  malzeme10 : "false",
  malzeme11 : "false",
  malzeme12 : "false",
}
export default function Order() {

const [form, setForm] = useState(initalForm)


const handleChange = (event) => {
  let {name, value, type, checked} = event.target
  value = type == "checkbox" ? checked : value
  setForm({...form,[name]:value})
}
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

        <form>
          <p>Boyut Seç *</p>
          <label>
            <input name="size" type="radio" value="small" /> Küçük
          </label>
          <label>
            <input name="size" type="radio" value="medium" /> Orta
          </label>
          <label>
            <input name="size" type="radio" value="large" /> Büyük
          </label>

          <p>Hamur Seç *</p>
          <label>
            <select name="dough">
              <option value="">Hamur Kalınlığı</option>
              <option value="ince">İnce</option>
              <option value="kalın">Kalın</option>
            </select>
          </label>

          <p>Ek Malzemeler</p>
          <p>En az 4 en fazla 10 malzeme seçebilirsiniz. 5tl</p>
          <label>
            <input type="checkbox" name="malzeme1" checked={form.malzeme} onChange={handleChange}/> Pepperoni
          </label>
          <label>
            <input type="checkbox" name="malzeme2"checked={form.malzeme} onChange={handleChange}/> Tavuk Izgara
          </label>
          <label>
            <input type="checkbox" name="malzeme3" checked={form.malzeme} onChange={handleChange}/> Mısır
          </label>
          <label>
            <input type="checkbox" name="malzeme4" checked={form.malzeme} onChange={handleChange}/> Sarımsak
          </label>
          <label>
            <input type="checkbox" name="malzeme5" checked={form.malzeme} onChange={handleChange}/> Ananas
          </label>
          <label>
            <input type="checkbox" name="malzeme6" checked={form.malzeme} onChange={handleChange}/> Sosis
          </label>
          <label>
            <input type="checkbox" name="malzeme7" checked={form.malzeme} onChange={handleChange}/> Soğan
          </label>
          <label>
            <input type="checkbox" name="malzeme8" checked={form.malzeme} onChange={handleChange}/> Biber
          </label>
          <label>
            <input type="checkbox" name="malzeme9" checked={form.malzeme} onChange={handleChange}/> Kabak
          </label>
          <label>
            <input type="checkbox" name="malzeme10" checked={form.malzeme} onChange={handleChange}/> Kanada Jambonu
          </label>
          <label>
            <input type="checkbox" name="malzeme11" checked={form.malzeme} onChange={handleChange}/> Domates
          </label>
          <label>
            <input type="checkbox" name="malzeme12" checked={form.malzeme} onChange={handleChange}/> Jalepeno
          </label>

          <p>İsminiz ?</p>
          <label>
            <input type="text" name="isim" placeholder="İsminizi girin" />
          </label>

          <p>Sipariş Notu</p>
          <label>
            <textarea
              name="note"
              placeholder="Siparişine eklemek istediğin bir not var mı ?"
            ></textarea>
          </label>

          <button type="submit">Sipariş Ver</button>
        </form>
      </main>
    </>
  );
}
