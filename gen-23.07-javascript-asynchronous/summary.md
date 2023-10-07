# Javascript Asynchronous

### Callback function

```javascript
function print(callback) {
    callback();
}
```

- Callback function merupakan fucntion yang dikirimkan sebagai parameter pada function yang lain, lalu akan
  dipanggil pada function tersebut
- Contoh diatas sebuah function bernama `print` memiliki satu parameter yaitu `callback`
- Di dalam function print akan menginvoke function `callback`, dengan begitu function yang dijalankan di dalamnya
  dapat berubah-ubah sesuai function yang dijadikan argumen pada saat memanggil function `print`
- Callback fucntion juga bisa menjadi proses asynchronous karena untuk menjalankan function `print` maka program
  harus menunggu function `callback` selesai terlebih dahulu

### Asynchronous Concept

<img src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*hRDfyiYqOCh_-N0t8E-9PA.png" width="800">

- Javascript merupakan single threaded yang berarti dia hanya bisa menjalankan satu proses saja dalam satu waktu
- Code javascript dijalankan secara synchronous dari paling atas ke paling bawah
- Hal ini menimbulkan masalah karena apabila ada satu baris code yang membutuhkan waktu pemrosesan yang lama, dia
  akan membuat code-code dibawahnya jadi harus menunggu code itu selesai
- Untuk itu kita harus menulis code secara asynchronous untuk baris code yang membutuhkan waktu pemrosesan tidak menentu
- Dengan menuliskan code secara async maka javascript akan menjalankan code tersebut, lalu sambil menunggu proses
  selesai dia akan melanjutkan ke baris berikutnya terlebih dahulu
- Ketika proses async sudah selesai baru javascript akan kembali ke baris tersebut

```javascript
console.log("start")

setTimeout(() => {
    console.log("hello")
}, 3000);

console.log("end")
```

- Contoh diatas code akan menjalankan `console.log("start")` lalu akan menampilkan output "start" pada console
- Lalu ketika memanggil setTimeout, karena function ini bersifat async maka javascript tidak akan menunggunya hingga
  selesai melainkan akan melanjutkan ke baris berikutnya
- Code `console.log("end")` dipanggil dan menghasilkan "end" pada console
- Setelah 3000ms setelah memanggil setTimeout barulah javascript kembali ke function tersebut dan menjalankan
  `console.log("hello")` dan menghasilkan "hello" pada console

### Promise Data Type

```javascript
let myPromise = new Promise(function (myResolve, myReject) {
    // "Producing Code" (May take some time)

    myResolve(); // when successful
    myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
    function (value) {
        /* code if successful */
    },
    function (error) {
        /* code if some error */
    }
);
```

- Promise adalah object yang merepresentasikan keberhasilan/kegagalan sebuah event asynchronous
- Untuk membuat promise cukup dengan memanggil constructornya
- Constructor promise akan menerima argument sebuah fungsi dengan 2 parameter yaitu resolve dan reject
- Promise menyelesaikan masalah callback hell apabila melakukan asynchronous proses menggunakan callback function

| **myPromise.state** | **myPromise.result** |
|---------------------|----------------------|
| "pending"           | undefined            |
| "fulfilled"         | a result value       |
| "rejected"          | an error object      |

### Async Await

```javascript
function resolveAfter2Seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // Expected output: "resolved"
}

asyncCall();
```

- Async-await adalah salah satu fitur baru dari javascript yang di gunakan untuk menangani hasil dari sebuah promise
- Untuk membuat async function tambahkan kata ‘async’ di depan sebuah fungsi untuk mengubahnya menjadi asynchronous
- Await berfungsi untuk menunda sebuah kode dijalankan, sehingga code berikutnya harus menunggu hasil await diselesaikan
- Dengan async await kita bisa menuliskan code mirip dengan code synchronous biasanya

### Callback vs Promise vs Async Await

<img src="https://www.bram.us/wordpress/wp-content/uploads/2017/05/js-callbacks-promises-asyncawait.gif" width="600">

### Try Catch Finally Block

```javascript
try {
    // tryStatements
} catch (exceptionVar) {
    // catchStatements
} finally {
    // finallyStatements
}
```

- Pertama block try akan dijalankan
- Apabila terdapat exception pada block try, maka akan langsung dihentikan dan langsung masuk ke block catch
- Apabila seluruh code pada block try berhasil dijalankan, maka block catch tidak akan dijalankan
- Terakhir block finally akan dijalankan, baik itu terjadi exception ataupun tidak
