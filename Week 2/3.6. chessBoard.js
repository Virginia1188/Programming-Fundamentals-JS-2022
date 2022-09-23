function solve(n) {
    console.log(`<div class="chessboard">`);

    for (i = 1; i <= n; i++) {
        console.log(`  <div>`);
        for (j = 1; j <= n; j++) {
            if (n % 2 != 0) {
                if (i % 2 != 0) {
                    if (j % 2 != 0) {
                        console.log(`    <span class="black"></span>`);
                    } else {
                        console.log(`    <span class="white"></span>`);
                    }
                } else if (i % 2 == 0) {
                    if (j % 2 != 0) {
                        console.log(`    <span class="white"></span>`);
                    } else {
                        console.log(`    <span class="black"></span>`);
                    }
                }
            } else if (n % 2 == 0) {
                if (i % 2 != 0) {
                    if (j % 2 != 0) {
                        console.log(`    <span class="black"></span>`);
                    } else {
                        console.log(`    <span class="white"></span>`);
                    }
                } else if (i % 2 == 0) {
                    if (j % 2 != 0) {
                        console.log(`    <span class="white"></span>`);
                    } else {
                        console.log(`    <span class="black"></span>`);
                    }
                }
            }
        }
        console.log(`  </div>`);
    }

    console.log(`</div>`);
}
solve(3)

