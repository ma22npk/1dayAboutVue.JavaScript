
// .once

// はイベントが1回のみ実行されます。

// ・2回目以降同じ動作をしてもイベントは発生しません。
  new Vue({
    el: '#app',
    methods: {
      handler:function(element){
        alert(element + 'が実行されました')
      }
    }
  });
