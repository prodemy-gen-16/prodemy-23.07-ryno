# Javascript Basic

### Variable & Primitive Data Type

#### Variable

- `const` variable yang tidak dapat diubah
    ```javascript
    const PI = 3.14;
    ```
- `let` variable yang dapat diubah
    ```javascript
    let age = 25;
    age = 26;
    ```

#### Primitive Data Type

- Tipe data pada Javascript bersifat dinamis
  ```javascript
  let x;       // Now x is undefined
  x = 5;       // Now x is a Number
  x = "John";  // Now x is a String
  ```
- Tipe data string
  ```javascript
  // Using double quotes:
  let carName1 = "Volvo XC60";
  
  // Using single quotes:
  let carName2 = 'Volvo XC60';
  ```

- Tipe data number
  ```javascript
  // With decimals:
  let x1 = 34.00;
  
  // Without decimals:
  let x2 = 34;
  ```

- Tipe data boolean
  ```javascript
  let x = true;
  let y = false;
  
  let z = x === y; // false
  ```

- Tipe data undefined
  ```javascript
  let a; // Value is undefined, type is undefined
  ```

- Tipe data null
  ```javascript
  const empty = null;
  ```

### Where to write

- External Javascript
  ```javascript
  // hello-world.js
  console.log("Hello World");
  ```
  ```html
  <!-- index.html-->
  <body>
    <!-- content -->
    <script src="hello-world.js"></script>
  </body>
  ```
- Internal Javascript
  ```html
  <body>
    <!-- content -->
    <script>
      console.log("Hello World");
    </script>
  </body>
  ```
- Inline event handler
  ```html
  <button onclick="console.log('Hello World');">
    Say Hello
  </button>
  ```

### Output

- `console.log("Hello")` akan mencetak Hello pada console
- `document.write("Hello")` akan mengganti isi HTML menjadi Hello
- `window.alert("Hello")` akan memunculkan alert dengan tulisan Hello

### Function

```javascript
function jumlah(a, b) {
    return a + b;
}

/* Void Return Function */
function sayHello() {
    console.log("Hello");
}

/* Invoke Function */
sayHello();
console.log(jumlah(1, 2));
```

### Array Data Type

```javascript
const arr = [1, 2.00, "tiga"];
// index:    0    1      2

/* Accessing array */
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

/* With loop */
for (let item of arr) {
    console.log(item);
}

```

### Condition

```javascript
/* If Else */
if (nilai >= 80) {
    status = "LULUS";
} else {
    status = "TIDAK LULUS";
}
console.log(nilai);

/* Ternary Operator */
status = nilai >= 80 ? "LULUS" : "TIDAK LULUS";
console.log(nilai);

/* One Line Logical Operator */
nilai >= 80 && console.log("LULUS");
nilai < 80 && console.log("TIDAK LULUS");

```

### Loop

```javascript
/* For */
for (let i = 0; i < 10; i++) {
    console.log(i);
}

/* While */
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
```

### Built In Method

#### Array Method

- `pop()` menghapus elemen terakhir array
- `push()` menambah elemen baru di akhir
- `splice()` menambah/menghapus elemen array
- `slice()` mengambil sebagian elemen dari array dan menyimpan ke dalam array baru

#### String Method

- `substring()` mirip dengan slice, untuk mengambil bagian dari string
- `replace()` mengganti value tertentu dengan value lain dalam sebuah string
- `toUpperCase()` mengubah string menjadi upper case (huruf kapital)
- `toLowerCase()` mengubah string menjadi lower case (huruf kecil)
- `split()` membagi string menjadi substring dalam bentuk array

#### Number Method

- `toString()` mengubah angka menjadi string
- `toFixed()` membulatkan angka dengan jumlah angka desimal yang telah ditentukan
- `toExponential()` membulatkan angka menggunakan eksponen

### String Template Literal

```javascript
function greet(nama, kota) {
    console.log(`Halo, nama saya ${nama}. Saya tinggal di kota ${kota}`)
}
```

### JS Scope & Hoisting Concept

#### Scope

- Global Scope
  ```javascript
  const number = 1;
  
  function print() {
    console.log(number); // output: 1
  }
  print();
  
  console.log(number); // output: 1
  // Success
  ```
- Local Scope
  ```javascript
  function print() {
    const number = 1;
    console.log(number); // output: 1
  }
  print();
  
  console.log(number); // output: error
  ```

#### Hoisting

```javascript
sayHi(); // Dapat dipanggil padahal belum dideclare

function sayHi() {
    console.log("Hi there!");
}
```
