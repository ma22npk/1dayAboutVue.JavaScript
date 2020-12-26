Vue.config.devtools = true;
// const app = new Vue({
//     el: '#app',
//     data: {
//         helloVal: 'Hello Vue.js'
//     }
// });
// new Vue({
//     el: '#app'
// });
// const car = new Vue({
//     el: '#car',
//     data: {
//         bodyType: 'ワゴン'
//     }
// });
// car.bodyType = 'セダン'; //セダンを代入
// console.log(car.bodyType); //ワゴンと表示

// console.log(car.bodyType); //セダンと表示される変数carに代入する。
// new Vue({
//     el: '#app', //HTML要素の指定
//     data() {
//         return {
//             count: 0 //データを反映させる
//         };
//     },
//     //メソッドの定義
//     methods: {
//         increment() {
//             this.count++
//         }
//     }
// });
// var value = '文字'; //変数valueに文字列を代入
// var num = 1000; //変数numに数値を代入

// const func = sunction() {
//     //処理
// };
// func(); //処理の実行

// const hello = 'hello'; //定数なので再代入不可能
// hello = 'こんにちわ'; //エラーになる。

// let goodMorning = 'Good morning'; //変数なので再代入荷脳
// goodMorning = 'おはよう'; //問題なし

//Vueクラスのインスタンス化
// const app = new Vue({
//     el: '#app',
//     data() { //前行にカンマ「,」を追加し、データ関数を定義する
//         return { //オブジェクトをreturnで返却する
//             text: 'hello Vue.js' //textプロパティに文字列を設定
//         };
//     }
// });
// const data = {
//     text: "hello"
// };
// const $el = document.querySelector("#text"); //HTMLの取得
// data.text = "hello world"; //データの変更
// $el.innerText = data.text; //HTMLへの反映

const app = new Vue({
    el: '#app',
    data() {
        return {
            text: 'hello world'
        };
    }
});

app.text = 'hello Vue.js'; //データの変更
