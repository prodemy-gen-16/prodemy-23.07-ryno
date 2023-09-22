# HTML

## HTML Basic

### HTML Syntax & Structure

Sebuah file HTML terdiri dari serangkaian HTML **element**. Di bawah ini merupakan contoh sebuah element pada HTML.

```html
<h1>Hello World</h1>
```

- `<h1>` merupakan tag pembuka, tag ini wajib dimiliki oleh setiap elemen
- `Hello World` merupakan konten dari elemen, tidak semua element HTML memiliki konten
- `</h1>` merupakan tag penutup, ini juga tidak semua element memilikinya terutama element yang tidak memiliki konten

Umumnya struktur utama sebuah file HTML sebagai berikut.

```html
<!doctype html>
<html>
  <head>
    <!-- head content -->
  </head>
  <body>
    <!-- body content -->
  </body>
</html>
```

- Diawali dengan `<!doctype html>` yang berfungsi sebagai penanda bahwa file ini adalah file HTML 5
- Seluruh isi file akan dibungkus oleh element `html`, kecuali deklarasi doctype tadi
- Di dalam element `html` terdapat 2 child yaitu element `head` dan `body`
- Element `head` umumnya berisikan informasi terkait dari halaman html tersebut seperti title atau meta data
- Element `body` berisikan seluruh element yang akan ditampilkan secara visual pada browser

### Basic Tags

- Heading
  ```html
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  ```
- Paragraph
  ```html
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
    architecto commodi consequatur cum earum et, eveniet fugiat fugit illo in
    ipsa ipsum laborum libero molestias neque nihil quidem reiciendis
    repudiandae.
  </p>
  ```
- Anchor
  ```html
  <a href="https://github.com/">GitHub</a>
  ```
- Image
  ```html
  <img src="https://t.ly/3CNNq" alt="GitHub Logo" />
  ```

### List Tags

- Unordered List
  ```html
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  ```
- Ordered List
  ```html
  <ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ol>
  ```

### Table Tags

- Table Header (th)
  ```html
  <table>
    <thead>
      <tr>
        <th>Month</th>
        <th>Savings</th>
      </tr>
    </thead>
  </table>
  ```
- Table Data (td)
  ```html
  <table>
    <tbody>
      <tr>
        <td>January</td>
        <td>$100</td>
      </tr>
      <tr>
        <td>February</td>
        <td>$80</td>
      </tr>
    </tbody>
  </table>
  ```

### Form Tags

- Input

  ```html
  <form>
    <label for="name">Name:</label><br />
    <input type="text" id="name" name="name" /><br />

    <label for="pwd">Password:</label><br />
    <input type="password" id="pwd" name="pwd" /><br />

    <input type="radio" id="male" name="gender" value="male" />
    <label for="male">Male</label><br />
    <input type="radio" id="female" name="gender" value="female" />
    <label for="female">Female</label><br />

    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
    <label for="vehicle1">I have a bike</label><br />
    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
    <label for="vehicle2">I have a car</label><br />
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Bicycle" />
    <label for="vehicle3">I have a bicycle</label><br />

    <label for="birthday">Birthday:</label><br />
    <input type="date" id="birthday" name="birthday" />
  </form>
  ```

- Text Area
  ```html
  <form>
    <label for="description">Description:</label>
    <textarea
      name="description"
      id="description"
      cols="30"
      rows="10"
    ></textarea>
  </form>
  ```
- Select
  ```html
  <form>
    <select name="cars" id="cars">
      <option value="toyota">Toyota</option>
      <option value="honda">Honda</option>
      <option value="mitsubishi">Mitsubishi</option>
      <option value="hyundai">Hyundai</option>
    </select>
  </form>
  ```
- Submit
  ```html
  <form action="/save" method="post">
    <input type="submit" value="Save" />
    <button type="submit">Save</button>
  </form>
  ```

## HTML Advanced

### Semantic HTML

| Tag            | Description                                               |
|:---------------|:----------------------------------------------------------|
| `<main>`       | Specifies the main content of a document                  |
| `<aside>`      | Defines content aside from the page content               |
| `<section>`    | Defines a section in a document                           |
| `<header>`     | Specifies a header for a document or section              |
| `<nav>`        | Defines navigation links                                  |
| `<article>`    | Defines independent, self-contained content               |
| `<details>`    | Defines additional details that the user can view or hide |
| `<figure>`     | Specifies self-contained content                          |
| `<figcaption>` | Defines a caption for a `<figure>` element                |
| `<footer>`     | Defines a footer for a document or section                |

### Iframe Tag

- `<iframe>` merupakan inline frame yang biasanya digunakan untuk melakukan embed sebuah halaman atau media
  ```html
  <iframe
    src="https://t.ly/ky028"
    width="800"
    height="500"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe>
  ```

### Media Tags

- Video

  ```html
  <video width="320" height="240" autoplay>
    <source src="movie.webm" type="video/webm" />
    <source src="movie.mp4" type="video/mp4" />
  </video>
  ```

- Audio
  ```html
  <audio controls>
    <source src="horse.wav" type="audio/wav" />
    <source src="horse.mp3" type="audio/mpeg" />
  </audio>
  ```

### HTML Entities

- HTML entity selalu diawali dengan `&` dan diakhiri dengan `;` contohnya `&nbsp;`, `&copy;`, `&reg;`
- Untuk list lengkapnya bisa dilihat [disini](https://oinam.github.io/entities/)
