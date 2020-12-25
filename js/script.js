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
new Vue({
    el: '#app', //HTML要素の指定
    data() {
        return {
            count: 0 //データを反映させる
        };
    },
    //メソッドの定義
    methods: {
        increment() {
            this.count++
        }
    }
});