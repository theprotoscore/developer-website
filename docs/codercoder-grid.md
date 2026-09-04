```html
<section>
    <div class="grid-parent">
        <div class="grid-child">grid child 1</div>
        <div class="grid-child">
            grid child 2 Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Molestias excepturi inventore asperiores possimus laborum
            temporibus ex mollitia quibusdam rem voluptatibus!
        </div>
        <div class="grid-child">grid child 3</div>
        <div class="grid-child">grid child 4</div>
    </div>
</section>
```

```css
/* ===== CSS Grid Defaults Cheat Sheet ===== */

.grid-parent {
    display: grid;
    /* Turns this into a grid container; children become grid items */

    gap: 10px;
    /* Space between rows AND columns */

    grid-auto-flow: row;
    /* DEFAULT — places items one per row (top to bottom).
     Set to "column" to place items side by side instead. */

    grid-auto-rows: auto;
    grid-auto-columns: auto;
    /* DEFAULT — rows/columns size themselves to fit their content
     (no fixed size unless you set one) */

    grid-template-columns: 100px 200px;
    /* EXPLICIT grid: creates exactly 2 columns —
     col 1 = 100px, col 2 = 200px.
     Number of values = number of columns. */

    /* grid-template-rows: 200px 100px; */
    /* Optional — if left out, rows auto-generate (IMPLICIT grid)
     and size themselves to content. Usually only columns
     need to be explicit; rows can be left to auto-size. */
}
```

```css
/* METHOD 1 STYLE */
.grid-parent,
.grid-child {
    padding: 20px;
}

.grid-parent {
    background-color: lightgray;
    display: grid;
    gap: 10px;
    /* what are defaults, what grid-auto-flow means */
    /* grid-auto-flow: column; */
    /* grid-template-columns: 100px 200px; */
    /* grid-template-rows: 200px 100px; */
    /* grid-template-columns: 1fr 1fr; */
    /* grid-template-columns: 1fr 2fr; */

    /* grid-template-columns: 150px 1fr; */
    /* Incase you want sidebar to be static */
    /* while other one grows as viewport width grows */

    /* first arg - no of repeatitions */
    /* Second arg - size of column or row */
    /* grid-template-columns: repeat(2, 1fr); */
    /* repeat(2, 1fr) same as 1fr 1fr */

    /* grid lines */
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
}

.grid-child {
    background-color: turquoise;

    &:nth-child(1) {
        background-color: plum;
        /* grid-column: 1 / 5; same as */
        /* grid-column: 1 / span 4; */
        /* grid-column: 1 / -1; */
        /* take whole first row no matter what */

        /* do same for both first and second row */
        grid-column: 1 / -1;
        grid-row: 1 / 3;
    }

    &:nth-child(2) {
        background-color: deepskyblue;
    }

    &:nth-child(3) {
        background-color: yellow;
        /* Make grid child 3 be in row 4 */
        grid-row: 4;
    }

    &:nth-child(4) {
        /* Make grid child 4 take rest of row 3 */
        /* and take rest of row 4  */
        grid-column: 2 / -1;
        grid-row: 3 / -1;
    }
    /* Note: figured how to set the grid cells for */
    /* grid 3 and 4 */
}
```

```css
/* METHOD 2 TO ACHIEVE SAME DESIGN - LESS CODE */
.grid-parent,
.grid-child {
    padding: 20px;
}

.grid-parent {
    background-color: lightgray;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);

    grid-template-areas:
        'item1 item1 item1 item1'
        'item1 item1 item1 item1'
        'item2 item4 item4 item4'
        'item3 item4 item4 item4';
}

.grid-child {
    background-color: turquoise;

    &:nth-child(1) {
        background-color: plum;
        grid-area: item1;
    }

    &:nth-child(2) {
        background-color: deepskyblue;
        grid-area: item2;
    }

    &:nth-child(3) {
        background-color: yellow;
        grid-area: item3;
    }

    &:nth-child(4) {
        grid-area: item4;
    }
}
```
