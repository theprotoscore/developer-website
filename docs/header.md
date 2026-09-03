```css
header {
    padding: 10px 0;
    border-bottom: 1px solid #d2d2d2;
    background-color: #151513;

    position: fixed;
    top: 0;
    width: 100%;
}

/*
   Why:
   position: fixed → We want the header to stay visible while scrolling.
   top: 0          → We want it attached to the top of the screen.
   width: 100%     → We want it to stretch across the entire screen.
*/

.header-left {
    gap: 40px;
    align-items: baseline;
}

/*
   Why:
   align-items: baseline → We want different-sized text/items to
                           line up naturally along the same text baseline.
*/
/*
   Why baseline instead of center?

   baseline → Lines up the text along the same baseline.
               This works better when items have different font sizes.

   center   → Centers the entire elements vertically.
               This can make differently-sized text look slightly
               misaligned even though their boxes are centered.
*/
```

```css
body {
    background-color: #000;
    background-repeat: repeat;
    position: relative;

    font-family: 'Geist', 'Segoe UI', sans-serif;
    /* font-family: 'Segoe UI', sans-serif; */

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image: url('/images/noise-light.png');
        opacity: 0.4;
    }

    /*
    Creates a separate pseudo-element for the noise background.

    Using a pseudo-element lets us control the noise image's
    opacity without changing the opacity of the body's content.

    position: absolute + inset: 0 makes the pseudo-element
    cover the body.

    position: relative on the body gives the pseudo-element
    the body as its positioning reference.

    This is applied to the body instead of a specific div because
    the noise effect is intended to cover the entire website.

    Unlike the video's example, the text does not need to be
    explicitly set to position: relative here because we are
    using the pseudo-element as a page-wide background layer.
    */

    /* inset: 0 is shorthand for top: 0, right: 0,
       bottom: 0, and left: 0. */
}
```
