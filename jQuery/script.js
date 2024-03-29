// 要素をふわっと表示する
AOS.init();

// スクロールするとヘッダーを変更（透明から白へ）
$(window).scroll(function() {
    if($(window).scrollTop() > 10) {
        $('#header-top').addClass('scroll-nav')
        $('#header-access').addClass('scroll-nav')
    } else {
        $('#header-top').removeClass('scroll-nav')
        $('#header-access').removeClass('scroll-nav')
    };
});

// ファーストビュー画像を切り替える（スワイパー使用）
let mySwiper1 = new Swiper('.slider1', {
    // 以下はオプション設定
    loop: true, // ループの指定
    effect: "fade", //フェードの指定
    autoplay: {
        delay: 4000, //４秒後に次のスライドへ
        disableOnInteraction: false //ユーザー側で操作してもスライドを止めない
    },
    speed: 1500, //1.5秒かけてフェードで切り替わる
    allowTouchMove: false,//マウスでのスワイプを禁止
});

// ACCESSページの写真スライダー（スワイパー使用）
let mySwiper2 = new Swiper('.slider2', {
    // 以下はオプション設定
    loop: true, // ループの指定
    effect: "slide", //エフェクト＝slideの指定
    autoplay: {
        delay: 2500, //2.5秒後に次のスライドへ
        disableOnInteraction: false,//ユーザーがスライダーを操作した後も自動再生し続ける
    },
    speed: 1000, //1.0秒かけて切り替わる
    centeredSlides:true,// 現在のスライドを中央表示
    slidesPerView: 1.3,
    //ページネーション表示の設定
    pagination: { 
        el: '.swiper-pagination', //ページネーションの要素
        type: 'bullets', //ページネーションの種類
        clickable: true, //クリックに反応させる
    },
    //ナビゲーションボタン（矢印）表示の設定
    navigation: {
        nextEl: '.swiper-button-next', //「次へボタン」要素の指定
        prevEl: '.swiper-button-prev', //「前へボタン」要素の指定
    },
    
    grabCursor: true, // スライダーにマウスが乗った時にカーソルを変更する
});

// ハンバーガーメニューをクリックするとメニューが出てくる(toggleClassでopenclassを付け外し)
$(function() {
    $('#btn__js').on('click' , function() {
      $('.btn__line').toggleClass('open'),
      $('.global-nav').toggleClass('open');
    });
  });

// 出てきたメニューをクリックするとハンバーガーメニューに戻る
$(function() {
    $('#global-nav a').on('click' , function() {
      $('.btn__line').removeClass('open');
      $('.global-nav').removeClass('open');
    });
  });

  // ハイパーリンクの場所へスクロールする
$('a[href*="#"]').click(function () {
    var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
    var pos = $(elmHash).offset().top-140;//idの上部の距離からHeaderの高さを引いた値を取得
    $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
    return false;
});
// 以下は別ページへの移動
$(window).on('load', function() {
	// ページのURLを取得
	const url = $(location).attr('href'),
	// headerの高さを取得してその値をheaderHeightに代入
	headerHeight = $('header').outerHeight();

	// urlに「#」が含まれていれば
	if(url.indexOf("#") != -1){
		// urlを#で分割して配列に格納
		const anchor = url.split("#"),
		// 分割した最後の文字列（#◯◯の部分）をtargetに代入
		target = $('#' + anchor[anchor.length - 1]),
		// リンク先の位置からheaderHeightの高さを引いた値をpositionに代入
		position = Math.floor(target.offset().top) - headerHeight;
		// positionの位置に移動
		$("html, body").animate({scrollTop:position}, 0);
	}
});

  