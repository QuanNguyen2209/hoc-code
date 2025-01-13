// function a() {
//     console.log('a');
// }

// function b() {
//     setTimeout(() => {
//         console.log('b');
//     }, 1000);
// }

// function c() {
//     console.log('c');
// }

//callback: hàm được truyền qua đối số và được gọi lại sau khi một hàm khác thực thi xong
// function a(callback) {
//     console.log('a');
//     callback();
// }

// function b(callback) {
//     setTimeout(() => {
//         console.log('b');
//         callback();
//     }, 1000);
// }

// function c(callback) {
//     console.log('c');
//     callback();
// }

// a(() => {
//     b(() => {
//         c(() => {

//         });
//     });
// });

// // promise: đại diện cho một giá trị chưa được xác định tại thời điểm gọi hàm

// function a() {
//     return new Promise((resolve, reject) => {
//         console.log('a');
//         resolve();
//     });
// }

// function b() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('b');
//             resolve();
//         }, 1000);
//     });
// }

// function c() {
//     return new Promise((resolve, reject) => {
//         console.log('c');
//         resolve();
//     });
// }

// // a().then(() => { return b(); }).then(() => { c(); });

// a().then(() => b()).then(() => c());

//async/await: giúp viết code bất đồng bộ dễ đọc hơn

function a() {
    console.log('a');
}

function b() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('b');
            resolve();
        }, 1000);
    });
}

function c() {
    console.log('c');
}

async function main() {
    a();
    await b();
    c();
}

main();