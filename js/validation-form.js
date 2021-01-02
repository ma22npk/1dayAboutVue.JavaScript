// const peaple = new Vue ({
//   el: '#app',
//   data:{
//       age : '10'
//   },

//   // computed:{
//   //   check_age: function(){
//   //     return this.age >= 20;
//   //   }
//   // }
//   computed:{
//     check_age(){
//       return this.age >= 20;
//     }
//   }
// });
new Vue({
  el: '#app',
  data(){
    return {
      name: 'name'
    };
  },
  computed:{
    isInValidName(){
      return this.name.length < 4;
    }
  }
});
