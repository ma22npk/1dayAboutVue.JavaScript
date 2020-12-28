// new Vue ({
//   el:'#app',
//   methods: {
//     changeMsg() {
// //処理を記述する
//     }
//     }
// });
// new Vue ({
//   el:'#app',
//   methods: {
//     changeMsg() {
// //処理を記述する
//     }
//     }
// });
new Vue({
  el: '#app',
  data() {
    return {
      text: 'テキストは変更前です。'
    };
  },
  methods:{
    textChange(){
      this.text = 'テキストが変更されました！！';
    }
  }
});
