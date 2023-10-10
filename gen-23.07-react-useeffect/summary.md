# React Lifecycle

### Functional Component Lifecycle

<img src="https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ogimage.png" width="800">

#### Mounting

- Pada fase mounting pertama React akan menjalankan **constructor** dari class component
- Setelah itu component akan menjalankan method **render**
- Ketika render sudah selesai dan DOM sudah berhasil diupdate, maka akan dijalankan method **componentDidMount**
- Setelah componentDidMount dijalankan maka component akan masuk ke fase selanjutnya yaitu Updating

#### Updating

- Fase updating dapat ditrigger oleh adanya perubahan pada props, melakukan setState, ataupun forceUpdate
- Selanjutnya proses yang dijalankan akan sama seperti saat di fase mounting
- Yang berbeda adalah dibagian akhir saat update berhasil, component akan menjalankan method **componentDidUpdate**
- Fase ini akan terus berulang setiap trigger terjadi sampai ketika component sudah tidak lagi ditampilkan dan akan
  masuk ke fase Unmounting

#### Unmounting

- Pada fase unmounting hanya menjalankan method **componentWillUnmount** saja karena tidak ada yang perlu
  ditampilkan

### UseEffect Hooks

```jsx
// componentDidMount
useEffect(() => {
  console.log("componentDidMount");
}, []);

// componentDidMount + componentDidUpdate
useEffect(() => {
  console.log("componentDidMount");
}, [state]);

// componentWillUnmount
useEffect(() => {
  return () => {
    console.log("componentDidUnmount");
  };
}, []);
```

- Ketika menggunakan functional component peran lifecycle yang ada pada class component dapat digantikan dengan
  menggunakan hooks useEffect dan useState
- Dependency array diisi dengan variable yang ingin melakukan trigger terhadap useEffect, jadi ketika variable
  tersebut berubah maka useEffect itu akan terpanggil
- Jika dependency berupa array kosong maka hanya akan terpanggil satu kali saja saat mounting
- Tapi jika parameter dependency tidak dituliskan maka useEffect akan terpanggil setiap kali proses render
  dijalankan dan dapat membuat infinite loop apabila effect tersebut merubah nilai state

### Multiple UseEffect In One Component

```jsx
function Button() {
  const [state1, setState1] = useState();
  const [state2, setState2] = useState();

  useEffect(() => {
    console.log("state1 is changed");
  }, [state1]);

  useEffect(() => {
    console.log("state2 is changed");
  }, [state2]);
}
```
