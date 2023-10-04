# Javascript Object

### Object Data Type

```javascript
const cat = {
    name: "Oreo",
    age: 2,
    color: "Black and white"
};

console.log(cat.name);
```

- Object berisi data berupa key & value yang disebut property
- Sebuah object dapat menyimpan banyak property dengan tipe data yang berbeda-beda
- Untuk mengakses property pada object bisa dengan cara `variable.key` atau `variable["key"]`

### Method Inside Object

```javascript
const operasi = {
    penjumlahan: function (a, b) {
        return a + b;
    },
    pengurangan: function (a, b) {
        return a - b;
    }
}

console.log(operasi.penjumlahan(2, 3));
console.log(operasi.pengurangan(7, 2));
```

- Method merupakan property yang berupa sebuah function
- Memanggil method dalam object `variable.key()`

### THIS Keyword

```javascript
const user = {
    username: "admin",
    password: "1234",
    changePassword: function (newPassword) {
        this.password = newPassword;
    }
}
console.log(user.password)

user.changePassword("4321");
console.log(user.password)

```

- Dalam sebuah method, this akan merujuk ke object yang menampung method tersebut
- Biasanya this pada method digunakan untuk mengakses property lain pada object itu sendiri

| This Reference                                                                    |
|-----------------------------------------------------------------------------------|
| In an object method, `this` refers to the **object**                              |
| Alone, `this` refers to the **global object**                                     |
| In a function, `this` refers to the **global object**                             |
| In a function, in strict mode, `this` is **undefined**                            |
| In an event, `this` refers to the **element** that received the event             |
| Methods like `call()`, `apply()`, and `bind()` can refer `this` to **any object** |

### Array Of Object

```javascript
const students = [
    {
        name: "Peter",
        age: 16
    },
    {
        name: "MJ",
        age: 15
    },
    {
        name: "Ned",
        age: 16
    },
]
```

- Sebuah array dapat berisi beberapa object
- Struktur data seperti ini sering ditemui ketika melakukan get list data dari API

### Spread Operator & Rest Parameter

```javascript
const numArray = [1, 5, 3, 6, 8, 2];

// Rest Parameter
function sum(...numbers) {
    let total = 0;
    for (let number of numbers) total += number;
    console.log(total);
}

// Spread Operator
sum(...numArray);
```

- Rest parameter digunakan ketika jumlah suatu parameter tidak tentu
- Pada contoh diatas rest parameter berupa `...numbers` artinya saat memanggil function dapat diisi dengan 1 atau
  lebih angka, lalu sejumlah angka tersebut akan disimpan dalam array yang bernama numbers
- Rest parameter hanya dapat diletakan di posisi terakhir dan tidak boleh ada lebih dari satu rest parameter
- Spread operator digunakan untuk mengeluarkan value dari sebuah array

### Object Destructure

```javascript
const person = {
    firstName: "Ada",
    lastName: "Lovelace"
}

// Ambil value dari property firstName pada objek person lalu simpan dalam variable firstName juga
const {firstName} = person;

// Ambil value dari property lastName pada objek person lalu simpan dalam variable namaBelakang
const {lastName: namaBelakang} = person;
```

- Destructure biasanya digunakan untuk mengekstrak beberapa property dari sebuah object
- Dengan melakukan destructure kita dapat mengakses data langsung menggunakan variable yang dibuat, tanpa harus
  melalui nama objectnya

### Optional Chaining

```javascript
const adventurer = {
    name: "Alice",
    cat: {
        name: "Dinah",
    },
};

const dogName = adventurer.dog?.name; // return undefined
console.log(dogName);

/*
const dogName = adventurer.dog.name;
Jika tanpa optional chaining, program akan error dan berhenti
*/
```

### Copy By Reference vs Copy By Value

```javascript
const car1 = {
    brand: "Honda",
    model: "HR-V"
}

const car2 = car1;
console.log({car1}); // { car1: { brand: 'Honda', model: 'HR-V' } }

car2.model = "Civic";
console.log({car2}); // { car2: { brand: 'Honda', model: 'Civic' } }

// car1 ikut terganti
console.log({car1}); // { car1: { brand: 'Honda', model: 'Civic' } }
```

- Tipe data object dan array pada javascript akan menerapkan copy by refence
- Copy by reference maksudnya yang dicopy adalah reference dari data tersebut pada memory
- Sehingga apabila salah satu variable berubah maka yang lain juga akan berubah karena merefer ke data yang sama
  pada memory
- Untuk menghindari hal ini bisa gunakan spread operator untuk mengcopy value array atau object
- Lain halnya jika tipe data primitive di copy maka akan menerapkan copy by value
- Copy by value hanya akan menyalin isi datanya saja namun akan mengalokasikan block baru pada memory sehingga tidak
  saling mempengaruhi
