# CSS Basic

### CSS Syntax & Structure

- Sebuah file `.css` terdiri dari kumpulan **rule**
- Dalam satu rule terdapat **selector** dan **declaration**
- **Selector** berfungsi sebagai penunjuk ke bagian HTML mana rule itu akan diaplikasikan
- **Selector** bisa berupa element, id, class, ataupun pseudo class
- Sedangkan **declaration** berisikan nama property beserta valuenya

```css
p {
  color: black;
  background-color: white;
}
```

- `p` merupakan selector, artinya rule tersebut akan diaplikasikan ke seluruh element `<p>` pada html
- Dari `{` hingga `}` merupakan declaration block
- `color: black` merupakan sebuah declaration, `color` adalah propertynya dan `black` adalah valuenya
- Setiap declaration diakhiri dengan `;`

### Basic Selector

#### Element Selector

```css
h1 {
  /* declaration */
}
```

- Untuk menggunakan element selector cukup menuliskan nama tag HTMLnya saja pada selector
- Pada contoh diatas, rule akan diaplikasikan ke seluruh element `<h1>`

#### Class Selector

```css
.card {
  /* declaration */
}
```

- Penulisan class selector adalah menggunakan tanda titik `.` lalu diikuti dengan nama classnya tanpa spasi
- Contoh diatas menunjukan selector untuk seluruh element yang memiliki class `card`

#### ID Selector

```css
#login-button {
  /* declaration */
}
```

- Penulisan id selector hampir mirip dengan class selector, hanya saja menggunakan tanda pagar `#` di depan
  nama IDnya
- Contoh diatas menunjukan selector untuk element yang memiliki id `login-button`
- Karena id pada HTML tidak boleh duplikat, maka rule ini hanya akan diaplikasikan ke satu element saja

### Typography Properties

```css
h1 {
  font-size: 32px; /* 1.5rem, 2em, 50% */
  font-weight: 800; /* 300, bold, lighter */
  font-family: "Courier New", monospace; /* serif, sans-serif */
  font-style: normal; /* italic, oblique */
}
```

### Color Properties

```css
span {
  background-color: mintcream; /* predefined */
  color: #1f1f1f; /* HEX */
  border-color: rgb(206, 198, 111); /* RGB */
  outline-color: hsl(147, 50%, 47%); /* HSL */
}
```

### Box Model

<img width="600" src="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model/box-model.png">

```css
div {
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

<br>

<img width="600" src="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model/standard-box-model.png">

```css
div {
  width: 350px;
  height: 150px;
  box-sizing: content-box; /* default */
}
```

<br>

<img width="600" src="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model/alternate-box-model.png">

```css
div {
  width: 350px;
  height: 150px;
  box-sizing: border-box;
}
```

### Display Properties

```css
div {
  display: block;
}

span {
  display: inline;
}

.container {
  display: inline-block;
}

.hidden {
  display: none;
}
```

- `block` akan membuat width semaksimal mungkin sehingga walaupun masih tersisa ruang, elemen lain tidak dapat
  mengisi ruang disebelahnya
- `inline` akan membuat ukuran box hanya sebesar kontennya saja dan tidak bisa diatur widht dan heightnya, serta margin
  top dan bottom juga akan diabaikan
- `inline-block` samacam gabungan antar keduanya, element akan ditampilkan seperti `block` namun hanya akan mengambil
  width sebesar kontennya seperti `inline`
- `none` menghilangkan element sehingga tidak ditampilkan pada halaman web

### Position Properties

```css
#box1 {
  position: static;
}

#box2 {
  position: relative;
  top: 40px;
  left: 40px;
}

#box3 {
  position: absolute;
  top: 40px;
  left: 40px;
}

#box4 {
  position: fixed;
  top: 0;
  z-index: 10;
}

#box5 {
  position: sticky;
  top: 0;
  z-index: 10;
}
```

- `static` posisi normal, top, right, bottom, left, and z-index akan diabaikan
- `relative` posisi dapat digeser relative terhadap posisi normalnya menggunakan top, right, bottom, dan
  left
- `absolute` posisi tidak mengambil space pada halaman dan akan relative terhadap parent yang memiliki position
  selain static, atau jika tidak ada maka akan relative terhadap document body
- `fixed` posisi akan tetap pada viewport meskipun page discroll, tidak mengambil space pada halaman
- `sticky` posisi sama seperti static, namun pada saat discroll akan menempel pada viewport sesuai dengan property
  top, right, bottom, atau left yang diberikan
- `z-index` merupakan urutan elemen pada dimensi ketiga, semakin tinggi indexnya maka elemen akan ditempatkan
  semakin atas atau semakin depan


