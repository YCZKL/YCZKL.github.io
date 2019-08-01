const ap = new APlayer({
    container: document.getElementById('aplayer'), //播放器容器元素
    mini: false, //迷你模式
    autoplay: true, //自动播放
    theme: '#FADFA3', //主题色
    loop: 'all', //音频循环播放, 可选值: 'all'全部循环, 'one'单曲循环, 'none'不循环
    order: 'random', //音频循环顺序, 可选值: 'list'列表循环, 'random'随机循环
    preload: 'auto', //预加载，可选值: 'none', 'metadata', 'auto'
    volume: 0.7, //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    mutex: true, 
	lrcType: 3,	//互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    listFolded: false, //列表默认折叠
    listMaxHeight: 90, //列表最大高度
    audio: [ //音频信息,包含以下
        {
            name: '我愿意', //音频名称
            artist: '喻超', //音频艺术家
            url: '/img/我愿意.mp3', //音频外链
            cover: '/img/陈晓东.jpg', //音频封面
            theme: '#ebd0c2',
			lrc: '/img/我愿意.lrc'			
        },
       
    ]
});
