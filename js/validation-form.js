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
      name: 'name',
      email: 'email@email.com',
      tel:'12345678'
    };
  },
  computed:{
    isInValidName(){
      return this.name.length < 4;
    },
    isInValidEmail(){
      const reg = new RegExp(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/);
      return !reg.test(this.email);
    },
    isInValidTel(){
      const tel = this.tel;
      const isErr = tel.length < 8 || isNaN(Number(tel));
      return isErr;
    }
  }
});
