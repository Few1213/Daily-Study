var content = document.querySelector('.content')
    // 监听hashchange事件
    window.addEventListener('hashchange', function() {
      console.log('hash值发生了改变')
      if (location.hash === '#/home') {
        // 加载home.json文件
        axios({
          method: 'get',
          url: './home.json'
        }).then(res => {
          content.innerHTML = res.data.content
        })
      } else if (location.hash === '#/music') {
        // 加载home.json文件
        axios({
          method: 'get',
          url: './music.json'
        }).then(res => {
          content.innerHTML = res.data.content
        })
      } else {
        axios({
          method: 'get',
          url: './friend.json'
        }).then(res => {
          content.innerHTML = res.data.content
        })
      }
    })