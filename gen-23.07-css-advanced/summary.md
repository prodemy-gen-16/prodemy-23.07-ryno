# CSS Advanced

### Advanced Selector

#### Pseudo-class

```css
selector:pseudo-class {
  /* declaration */
}
```

| Selector      | Example          | Description                                                        |
|---------------|------------------|--------------------------------------------------------------------|
| :hover        | `a:hover`        | Selects links on mouse over                                        |
| :focus        | `input:focus`    | Selects the `<input>` element that has focus                       |
| :active       | `a:active`       | Selects the active link                                            |
| :first-child  | `p:first-child`  | Selects every `<p>` elements that is the first child of its parent |
| :last-child   | `p:last-child`   | Selects every `<p>` elements that is the last child of its parent  |
| :nth-child(n) | `p:nth-child(2)` | Selects every `<p>` element that is the second child of its parent |

#### Pseudo-element

```css
selector::pseudo-element {
  /* declaration */
}
```

| Selector    | Example        | Example description                                          |
|-------------|----------------|--------------------------------------------------------------|
| ::after     | `p::after`     | Insert something after the content of each `<p>` element     |
| ::before    | `p::before`    | Insert something before the content of each `<p>` element    |
| ::marker    | `::marker`     | Selects the markers of list items                            |
| ::selection | `p::selection` | Selects the portion of an element that is selected by a user |

### Cascading Order and Specificity Hierarchy

<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xxw5qcjgt2y6c6nnxr2h.jpg" width="700">

- Ketika terjadi konflik styling pada suatu element maka browser akan memilih rule yang selectornya lebih spesifik
- Untuk menghitung specificity bisa menggunakan
  bantuan [specificity calculator](https://polypane.app/css-specificity-calculator/)

### Display Flex

```css
.flex-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
```

### Media Query & Responsive Design

<img src="https://willmendesneto.com/static/482053c5941dd46736a74b22bdac1d8a/4b075/screen-with-different-sizes.webp" width="700">

```css
@media (min-width: 480px) {
  body {
    background-color: lightgreen;
  }
}
```

### Shadow Properties

```css
div {
  /* h-offset | v-offset | blur | spread | color */
  box-shadow: 5px 10px 8px 10px #888888;
}

h1 {
  /* h-shadow | v-shadow | blur | color */
  text-shadow: 2px 2px 8px #4d4d4d;
}
```

### Transform Properties

```css
div {
  /* Single values */
  transform: translate(12px, 50%);

  /* Multiple values */
  transform: translateX(10px) rotate(10deg) translateY(5px);
}
```

| Value                 | Description                                                    |
|-----------------------|----------------------------------------------------------------|
| translate(x,y)        | Defines a 2D translation                                       |
| scale(x,y)            | Defines a 2D scale transformation                              |
| rotate(angle)         | Defines a 2D rotation, the angle is specified in the parameter |
| skew(x-angle,y-angle) | Defines a 2D skew transformation along the X- and the Y-axis   |

### Transition Properties

```css
div {
  /* Apply to 1 property */
  /* property name | duration */
  transition: margin-right 4s;

  /* property name | duration | delay */
  transition: margin-right 4s 1s;

  /* property name | duration | easing function */
  transition: margin-right 4s ease-in-out;

  /* property name | duration | easing function | delay */
  transition: margin-right 4s ease-in-out 1s;

  /* Apply to 2 properties */
  transition: margin-right 4s,
  color 1s;

  /* Apply to all changed properties */
  transition: all 0.5s ease-out;
}
```

### Overflow & Opacity Property

```css
div {
  overflow: hidden;
}
```

| Value   | Description                                                                                                                                                 |
|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| visible | The overflow is not clipped. It renders outside the element's box. This is default                                                                          |
| hidden  | The overflow is clipped, and the rest of the content will be invisible. Content can be scrolled programmatically (e.g. by setting scrollLeft or scrollTo()) |
| clip    | The overflow is clipped, and the rest of the content will be invisible. Forbids scrolling, including programmatic scrolling                                 |
| scroll  | The overflow is clipped, but a scroll-bar is added to see the rest of the content                                                                           |
| auto    | If overflow is clipped, a scroll-bar should be added to see the rest of the content                                                                         |

```css
div {
  opacity: 0.5;
  opacity: 50%;
}
```

### Display Grid

```css
.grid-container {
  display: grid;
  gap: 50px 100px;
}
```
