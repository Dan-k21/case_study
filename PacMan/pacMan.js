function up() {
    let element = document.getElementById('cheems');
    if (parseInt(element.style.top) >= 1) {
        element.style.top = parseInt(element.style.top) - 5 + 'px'
    }
}

function down() {
    let element = document.getElementById('cheems');
    if (parseInt(element.style.top) <= 449) {
        element.style.top = parseInt(element.style.top) + 5 + 'px'
    }
}

function left() {
    let element = document.getElementById('cheems');
    if (parseInt(element.style.left) >= -4) {
        element.style.left = parseInt(element.style.left) - 5 + 'px'
    }
}

function right() {
    let element = document.getElementById('cheems');
    if (parseInt(element.style.left) <= 452) {
        element.style.left = parseInt(element.style.left) + 5 + 'px'
    }
}

function move(evt) {
    switch (evt.keyCode) {
        case 38:
            up();
            break
        case 40:
            down();
            break
        case 37:
            left();
            break
        case 39:
            right();
            break
    }
}

function docReady() {
    window.addEventListener('keydown', move)
}

// function food() {
//     // let food = document.getElementById('food');
//     // food.style.left = Math.random() * 500 + 'px';
//     // food.style.top = Math.random() * 500 + 'px';
//     let x = Math.round(Math.random() * (window.innerWidth - 1500));
//     let y = Math.round(Math.random() * (window.innerHeight - 520));
//     document.getElementById('food').style.top = y + 'px';
//     document.getElementById('food').style.left = x + 'px';
// }
//
// food()

// class Rect {
//     constructor(x, y, width, height) {
//         this.x = x;
//         this.y = y;
//         this.w = width;
//         this.h = height;
//     }
// }
//
// // xác định va chạm giữa 2 hình chữ nhật (đối tượng Rect)
// function isCollision(rect1, rect2) {
//     let distX = (rect1.x + (rect1.w/2)) - (rect2.x + (rect2.w)/2);
//     if (distX < 0)
//         distX = -distX;
//
//     const distW = (rect1.w + rect2.w)/2;
//
//     let distY =(rect1.y + (rect1.h/2)) - (rect2.y + (rect2.h)/2);
//     if(distY < 0)
//         distY = -distY;
//
//     const distH = (rect1.h + rect2.h)/2;
//
//     return (distX <= distW && distY <= distH);
// }
// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
// }
//
// class Circle {
//     constructor(_o, _r) {
//         this.o = _o;
//         this.r = _r;
//     }
// }
//
// function distance2( A,  B) {
//     return (A.x - B.x) * (A.x - B.x) + (A.y - B.y) * (A.y - B.y);
// }
//
// function checkCollision( c1,  c2) {
//     return ((c1.r + c2.r) * (c1.r + c2.r) < distance2(c1.o, c2.o));
// }
//
// function main() {
//     let p1 = new Point(2.5, 6.6);
//     let p2 = new Point(3.7, 7.3);
//
//     let c1 = new Circle(p1, 2.5);
//     let c2 = new Circle(p2, 3.4);
//
//     if (checkCollision(c1, c2))
//         console.log("AB");
//     else
//         console.log("A   B");
//
//     return 0;
// }
// class Circle {
//     constructor(x, y, radius) {
//         this.x = x;
//         this.y = y;
//         this.radius = radius;
//     }
// }
//
// class Rect {
//     constructor(x, y, width, height) {
//         this.x = x;
//         this.y = y;
//         this.w = width;
//         this.h = height;
//     }
// }
//
// function checkCollision(cir, rect) {
//     let Ax = cir.x;
//     let Ay = cir.y;
//
//     let rect_left = rect.x;
//     let rect_top = rect.y;
//     let rect_right = rect.x + rect.w;
//     let rect_bottom = rect.y + rect.h;
//
//     if (cir.x < rect_left)
//         Ax = rect_left;
//     else if (cir.x > rect_right)
//         Ax = rect_right;
//
//     if (cir.y < rect_top)
//         Ay = rect_top;
//     else if (cir.y > rect_bottom)
//         Ay = rect_bottom;
//
//     let dx = cir.x - Ax;
//     let dy = cir.y - Ay;
//
//     return (dx * dx + dy * dy) <= cir.radius * cir.radius;
// }