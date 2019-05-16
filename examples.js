var myFullpage = new fullpage('#fullpage', {
    anchors: ['Page1', 'Page2', 'Page3', 'Page4', 'Page5', 'Page6'],
    sectionsColor: ['#F4E8DA', '#7AA9AA', '#6F9495', '#678788', '#5E7678', '#556B6B'],
    keyboardScrlling:true,  //鍵盤方向導航
    scrollingSpeed:700,  //滾動速度默認700毫秒

    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['主頁', '透光帶', '中層帶', '半深海', '深海帶', '關於我們'],

});
