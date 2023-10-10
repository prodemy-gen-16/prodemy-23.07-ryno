# React Events

### Handle Event Using Anonymous Function

```jsx
function Button() {
  return (
    <button onClick={() => console.log("Button Clicked!")}>Trigger</button>
  );
}
```

### Handle Event Using Function Reference

```jsx
function Button() {
  function clickHandler() {
    console.log("Button Clicked!");
  }

  return <button onClick={clickHandler}>Trigger</button>;
}
```

### Pass Parameter Using Function Call Inside Anonymous Function

```jsx
function Button() {
  function clickHandler(message) {
    console.log(message);
  }

  return (
    <button onClick={() => clickHandler("Button Clicked!")}>Trigger</button>
  );
}
```

# React State

### UseState Hooks

```jsx
import { useState } from "react";

const [message, setMessage] = useState("Hello");
```

- State digunakan untuk menyimpan suatu kondisi yang dapat berubah ubah
- Import hook useState dari react untuk menggunakan state
- Dari objek useState dapat dilakukan distructure untuk mendapatkan state dan setState
- Dalam contoh diatas state diberi nama `message` dan setternya `setMessage`
- `message` digunakan sebagai getter, yaitu untuk memperoleh value dari statenya
- Sedangkan `setMessage` digunakan untuk mengubah nilai statenya
- Apabila suatu component menggunakan nilai state maka ketika state berubah, component tersebut akan dirender ulang

### Change State On Event Handler

```jsx
import { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return <button onClick={handleClick}>{count}</button>;
}
```

- Biasanya state bisa berubah karena dipengaruhi sebuah event
- Pada contoh diatas ketika button diclick akan memanggil fungsi `handleClick`
- Dalam fungsi tersebut akan menjalankan `setCount` dengan memeberikan nilai baru

### Get Previous State Value From Callback Function On SetState

```jsx
import { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
  };

  return <button onClick={handleClick}>{count}</button>;
}
```

- Jika saat melakukan setState valuenya relatif terhadap state sebelumnya maka gunakan callback function untuk
  mendapatkan nilai prevState
- Apabila mengambil nilai sebelumnya langsung melaui `count` maka nilai yang direturn bukan benar benar nilai state
  terakhir seperti yang diharapkan

### Object On Inital State Value

```jsx
const [user, setUser] = useState({ firstName: "Peter", lastName: "Parker" });

const handleUserChange = () => {
  setUser((prevState) => ({ ...prevState, lastName: "New lastName" }));
};
```

- Apabila state berbentuk object dan kita ingin mengupdate hanya salah satu property dari objek tersebut maka dapat
  gunakan spread operator dari `prevState` lalu diikuti dengan property yang ingin diubah atau ditambahkan
- Ini berlaku juga apabila state berbentuk array dan hanya ingin mengubah atau menambahkan array pada index tertentu

### Function On Initial State Value

```jsx
import { useState } from "react";

const [user, setUser] = useState(getInitialData);

const getInitialData = () => [
  { firstName: "Peter", lastName: "Parker" },
  { firstName: "Mary", lastName: "Jane" },
  { firstName: "Ned", lastName: "Leeds" },
];
```

- Saat deklarasi state kita dapat memasukan function dalam parameter `useState` untuk menjadikan return dari function
  tersebut sebagai initial state
