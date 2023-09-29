# Tailwind CSS

### Installation from CDN and NPM

#### CDN

Untuk instalasi Tailwind menggunakan CDN cukup import script dari <https://cdn.tailwindcss.com> lalu Tailwind bisa
langsung digunakan.

```html
<!doctype html>
<html>
  <head>
    <!--  Masukan script dari CDN  -->
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
    <!--  Class Tailwind dapat langsung digunakan -->
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
  </body>
</html>
```

> Instalasi melalui CDN dirancang hanya untuk tahap development saja, untuk production disarankan mengguanakan NPM

#### NPM

1. Install `tailwindcss` dari NPM, lalu lakukan init untuk membuat file konfigurasi `tailwind.config.js`
    ```shell
    npm install -D tailwindcss
    npx tailwindcss init
    ```
2. Masukan path file template pada `tailwind.config.js`
    ```js
    /** @type {import('tailwindcss').Config} */
    module.exports = {
        content: ["./src/**/*.{html,js}"],
        theme: {
            extend: {},
        },
        plugins: [],
    }
    ```
3. Tambahkan `@tailwind` pada file CSS utama
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
4. Jika konfigurasi sudah selesai, jalankan build untuk mengenerate file CSS dari Tailwind
    ```shell
    npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
    ```
5. Import file CSS hasil build tadi ke HTML
    ```html
    <!doctype html>
    <html>
      <head>
        <!--  Masukan style dari hasil build  -->
        <link href="/dist/output.css" rel="stylesheet">
      </head>
      <body>
        <!--  Class Tailwind sudah dapat digunakan -->
        <h1 class="text-3xl font-bold underline">
          Hello world!
        </h1>
      </body>
    </html>
    ```

### Basic Concept

- Tailwind menggunakan pendekatan **Utility First**
- Class yang disediakan Tailwind memiliki fungsi untuk mengatur utility tertentu seperti width, height, font size, atau
  font weight
- Berbeda dengan framework yang menyediakan template component yang sudah jadi seperti Bootstrap, Tailwind lebih memberi
  kebebasan kepada penggunanya
- Tailwind menawarkan solusi dari permasalahan yang muncul ketika menggunakan CSS, diantaranya:
    - Tidak perlu lagi menghabiskan waktu untuk menentukan nama class dari suatu elemen hanya karena ingin memberikan
      satu baris rule CSS
    - File CSS yang semakin lama semakin membesar karena harus menuliskan rule setiap kali membuat element baru
    - Tidak perlu khawatir tidak sengaja mengacaukan styling dari element element yang sudah ada ketika merubah rule
      pada CSS
- Sedikit yang menjadi kelemahan Tailwind adalah karena kita menuliskan styling menggunakan nama class, maka jika suatu
  element memiliki banyak style akan memiliki jumlah class yang banyak pula.

### Box Model Utility Class

| Property                                        |                         Class                         | Example |
|-------------------------------------------------|:-----------------------------------------------------:|:-------:|
| [Width](https://tailwindcss.com/docs/width)     |                         `w- `                         |  w-1/2  |
| [Height](https://tailwindcss.com/docs/height)   |                         `h- `                         |  h-20   |
| [Padding](https://tailwindcss.com/docs/padding) | `p- `, `px- `, `py- `, `pt- `, `pb- `, `pl- `, `pr- ` |  my-1   |
| [Margin](https://tailwindcss.com/docs/margin)   | `m- `, `mx- `, `my- `, `mt- `, `mb- `, `ml- `, `mr- ` |  px-2   |

### Tailwind Modifier for Pseudo Class & Element

| Selector                                                                                  |      Class      |          Example          |
|-------------------------------------------------------------------------------------------|:---------------:|:-------------------------:|
| [Hover](https://tailwindcss.com/docs/hover-focus-and-other-states#hover)                  |    `hover: `    |      hover:bg-white       |
| [Focus](https://tailwindcss.com/docs/hover-focus-and-other-states#focus)                  |    `focus: `    |   focus:border-blue-400   |
| [Active](https://tailwindcss.com/docs/hover-focus-and-other-states#active)                |   `active: `    |    active:bg-blue-600     |
| [Before](https://tailwindcss.com/docs/hover-focus-and-other-states#before-and-after)      |   `before: `    |      before:absolute      |
| [After](https://tailwindcss.com/docs/hover-focus-and-other-states#before-and-after)       |    `after: `    | <br/>after:ml-0.5   <br/> |
| [Placeholder](https://tailwindcss.com/docs/hover-focus-and-other-states#placeholder-text) | `placeholder: ` |    placeholder:italic     |

### Tailwind Responsive Modifier

| Prefix  | Minimum width | CSS                        |
|---------|---------------|----------------------------|
| `sm: `  | 640px         | @media (min-width: 640px)  |
| `md: `  | 768px         | @media (min-width: 768px)  |
| `lg: `  | 1024px        | @media (min-width: 1024px) |
| `xl: `  | 1280px        | @media (min-width: 1280px) |
| `2xl: ` | 1536px        | @media (min-width: 1536px) |

### Color

| Property                                                          | Class      | Example                              |
|-------------------------------------------------------------------|------------|--------------------------------------|
| [Color](https://tailwindcss.com/docs/text-color)                  | `text- `   | text-sky-400, text-sky-400/50        |
| [Background Color](https://tailwindcss.com/docs/background-color) | `bg- `     | bg-slate-500, bg-slate-500/75        |
| [Border Color](https://tailwindcss.com/docs/border-color)         | `border- ` | border-rose-500, border-rose-500/100 |

### Display Flex & Grid Class

```html

<div class="flex flex-row flex-wrap justify-between items-center">
  <div class="basis-1/4">01</div>
  <div class="basis-1/4">02</div>
  <div class="basis-1/2">03</div>
</div>
```

```html

<div class="grid grid-cols-4 gap-4">
  <div>01</div>
  <!-- ... -->
  <div>09</div>
</div>
```

### Customization

1. [Arbitrary Values](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values)
    ```html
    <div class="bg-[#bada55] text-[22px] before:content-['Festivus']">
      <!-- ... -->
    </div>
    <div class="[mask-type:luminance]">
      <!-- ... -->
    </div>
    ```
2. [CSS @layer](https://tailwindcss.com/docs/adding-custom-styles#using-css-and-layer)
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    
    @layer base {
      h1 {
        @apply text-2xl;
      }
    
      h2 {
        @apply text-xl;
      }
    
      /* ... */
    }
    
    @layer components {
      .select2-dropdown {
        @apply rounded-b-lg shadow-md;
      }
    
      .select2-search {
        @apply border border-gray-300 rounded;
      }
    
      .select2-results__group {
        @apply text-lg font-bold text-gray-900;
      }
    
      /* ... */
    }
    
    @layer utilities {
      .content-auto {
        content-visibility: auto;
      }
    }
    ```
3. Config (tailwind.config.js)
    ```javascript
    /** @type {import('tailwindcss').Config} */
    module.exports = {
        content: ['./src/**/*.{html,js}'],
        theme: {
            colors: {
                'blue': '#1fb6ff',
                'purple': '#7e5bef',
                'pink': '#ff49db',
                'orange': '#ff7849',
                'green': '#13ce66',
                'yellow': '#ffc82c',
                'gray-dark': '#273444',
                'gray': '#8492a6',
                'gray-light': '#d3dce6',
            },
            fontFamily: {
                sans: ['Graphik', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
            },
            extend: {
                spacing: {
                    '8xl': '96rem',
                    '9xl': '128rem',
                },
                borderRadius: {
                    '4xl': '2rem',
                }
            }
        },
    }
    
    ```

### Style Reusable using @apply

```css
.select2-dropdown {
  @apply rounded-b-lg shadow-md;
}

.select2-search {
  @apply border border-gray-300 rounded;
}

.select2-results__group {
  @apply text-lg font-bold text-gray-900;
}
```

### Tailwind Plugin

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
    // ...
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography'),
        require('tailwindcss-children'),
    ],
}
```

### Build for production

```shell
npx tailwindcss -o build.css --minify
```
