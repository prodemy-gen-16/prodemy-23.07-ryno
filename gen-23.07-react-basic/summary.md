# React Installation

### CDN

```html
<head>
  <script
    crossorigin
    src="https://unpkg.com/react@18/umd/react.development.js"
  ></script>
  <script
    crossorigin
    src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
  ></script>
</head>
```

### CRA

```shell
npx create-react-app <project-name>
```

### Vite

```shell
npm create vite@latest
```

- Select a framework: **React**
- Run `npm install`

# React JSX

### JSX Curly Braces

```jsx
const sum = (a, b) => a + b;
const myElement = <h1>Result is {sum(2, 3)}</h1>;

console.log(myElement); // <h1>Result is 5</h1>
```

- Pada JSX kita bisa menuliskan syntax HTML
- Ketika kita ingin memasukan sebuah value dari variable atau return dari expression bisa menggunakan curly braces `{ }`

### Conditional Rendering

```jsx
// if else
function Greet1({ user }) {
  if (user) {
    return <p>Welcome {user}</p>;
  } else {
    return <p>Please Login</p>;
  }
}

// ternary operator
function Greet2({ user }) {
  return <>{user ? <p>Welcome {user}</p> : <p>Please Login</p>}</>;
}

// logical operator
function Greet3({ user }) {
  return <>{user && <p>Welcome {user}</p>} </>;
}
```

### List Rendering

```jsx
function List() {
  const students = ["Peter", "MJ", "Ned"];

  return (
    <ul>
      {students.map((student) => (
        <li key={student}>student</li>
      ))}
    </ul>
  );
}
```

# React Component

### Component Type

- Class Component

  ```jsx
  class Car extends React.Component {
    render() {
      return <h2>Hi, I am a Car!</h2>;
    }
  }
  ```

- Function Component

  ```jsx
  function Car() {
    return <h2>Hi, I am a Car!</h2>;
  }
  ```

### Props

```jsx
function App() {
  return <Hello name={"Peter"} />;
}

function Hello(props) {
  const { name } = props;
  return <p>Hello my name is {name}</p>;
}
```

### Component Separation

Contoh pembagian component dalam sebuah aplikasi React

<img src="https://react.dev/images/docs/s_thinking-in-react_ui_outline.png" width="800">

1. `FilterableProductTable` berisi seluruh aplikasi
2. `SearchBar` menerima masukan dari pengguna
3. `ProductTable` menampilkan dan memfilter list sesuai dengan masukan pengguna
4. `ProductCategoryRow` menampilkan judul untuk setiap kategori
5. `ProductRow` menampilkan baris untuk setiap produk
