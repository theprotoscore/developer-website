```css
h1 {
    color: #d2d2d2;
    font-size: 7rem;
    letter-spacing: -0.055em;
    line-height: 1;

    /*
    letter-spacing controls the horizontal space between characters.

    A negative value pulls the characters closer together,
    creating a tighter heading.

    em makes the spacing relative to the element's font size.
    */

    /*
    line-height controls the vertical space occupied by each line.

    A value of 1 makes the line height equal to the font size,
    creating a tight heading with minimal space between lines.
    */

    @media (max-width: 1280px) {
        font-size: 5rem;
    }
}
```
