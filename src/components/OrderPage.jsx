import "./OrderPage.css";
import Header from "./Header";

export default function Order() {
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
            <input type="checkbox" value="pepperoni" /> Pepperoni
          </label>
          <label>
            <input type="checkbox" value="chicken" /> Tavuk Izgara
          </label>
          <label>
            <input type="checkbox" value="corn" /> Mısır
          </label>
          <label>
            <input type="checkbox" value="garlic" /> Sarımsak
          </label>
          <label>
            <input type="checkbox" value="pineapple" /> Ananas
          </label>
          <label>
            <input type="checkbox" value="sausage" /> Sosis
          </label>
          <label>
            <input type="checkbox" value="onion" /> Soğan
          </label>
          <label>
            <input type="checkbox" value="pepper" /> Biber
          </label>
          <label>
            <input type="checkbox" value="zucchini" /> Kabak
          </label>
          <label>
            <input type="checkbox" value="ham" /> Kanada Jambonu
          </label>
          <label>
            <input type="checkbox" value="tomato" /> Domates
          </label>
          <label>
            <input type="checkbox" value="jalapeno" /> Jalepeno
          </label>

          <p>İsminiz ?</p>
          <label>
            <input type="text" name="name" placeholder="İsminizi girin" />
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
