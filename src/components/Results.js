
const Results = ({ countryData, loading ,icon}) => {
    const { date, newConfirmed, totalConfirmed, newRecovered, totalRecovered } = countryData;
    return (

        <div class="wrapper">

            <main><p>新着記事</p>
                <div class="main-content"><img src={icon}/><p>【2023年】おすすめのゲーミングキーボード5選！選び方も解説します。</p></div>
                <div class="main-content"><img src={icon}/><p>テスト</p></div>
                <div class="main-content"></div>
                <div class="main-content"></div>

                <h1> Heading 1 </h1>
                <h6> Heading 6</h6>
            </main>

            <aside><p>カテゴリー</p>
                <div class="side-content"><img src={`${process.env.PUBLIC_URL}/image/logo_seikatu.png`}/><p>生活雑貨</p></div>
                <div class="side-content"><img src={`${process.env.PUBLIC_URL}/image/logo_pc.png`}/><p>パソコン・周辺機器</p></div>
                <div class="side-content"><img src={`${process.env.PUBLIC_URL}/image/logo_camera.png`}/><p>カメラ</p></div>
                <div class="side-content"><img src={`${process.env.PUBLIC_URL}/image/logo_health.png`}/><p>ヘルス</p></div>
                <div class="side-content"><img src={`${process.env.PUBLIC_URL}/image/logo_cosme.png`}/><p>コスメ・化粧品</p></div>
                <div class="side-content"><img src={`${process.env.PUBLIC_URL}/image/logo_food.png`}/><p>食品</p></div>
                <div class="side-content"><img src={`${process.env.PUBLIC_URL}/image/logo_drink.png`}/><p>ドリンク・お酒</p></div>
                <div class="side-content"><img src={`${process.env.PUBLIC_URL}/image/logo_kitchen.png`}/><p>キッチン用品</p></div>
                <div class="side-content"><img src={`${process.env.PUBLIC_URL}/image/logo_watch.png`}/><p>腕時計・アクセサリ</p></div>
                <div class="side-content"><img src={`${process.env.PUBLIC_URL}/image/logo_baby.png`}/><p>ベビー・キッズ</p></div>
                <div class="side-content"><img src={`${process.env.PUBLIC_URL}/image/logo_kagu.png`}/><p>インテリア・家具</p></div>
                <div class="side-content"><img src={`${process.env.PUBLIC_URL}/image/logo_hobby.png`}/><p>趣味・ホビー</p></div>
                <div class="side-content"><img src={`${process.env.PUBLIC_URL}/image/logo_camp.png`}/><p>アウトドア</p></div>
                <div class="side-content"><img src={`${process.env.PUBLIC_URL}/image/logo_spanner.png`}/><p>DIY・工具</p></div>
                <div class="side-content"><img src={`${process.env.PUBLIC_URL}/image/logo_sports.png`}/><p>スポーツ用品</p></div>
                <div class="side-content"><img src={`${process.env.PUBLIC_URL}/image/logo_fishing.png`}/><p>釣り</p></div>
                <div class="side-content"><img src={`${process.env.PUBLIC_URL}/image/logo_petfood.png`}/><p>ペット用品</p></div>
                <div class="side-content"><img src={`${process.env.PUBLIC_URL}/image/logo_book.png`}/><p>本・DVD</p></div>
                <div class="side-content"><img src={`${process.env.PUBLIC_URL}/image/logo_game.png`}/><p>テレビゲーム</p></div>
                <div class="side-content"><img src={`${process.env.PUBLIC_URL}/image/logo_car.png`}/><p>カー用品</p></div>
                <div class="side-content"><img src={`${process.env.PUBLIC_URL}/image/logo_present.png`}/><p>ギフト</p></div>

                <h1>Heading1 </h1> 
                
                {/* <div class="side-content"><img src={`${process.env.PUBLIC_URL}/image/`}/><p>住宅設備</p></div>
                <div class="side-content"><img src={`${process.env.PUBLIC_URL}/image/`}/><p>ファッション</p></div>
                <div class="side-content"><img src={`${process.env.PUBLIC_URL}/image/`}/><p>靴・シューズ</p></div>
                <div class="side-content"><img src={`${process.env.PUBLIC_URL}/image/`}/><p>コンタクトレンズ</p></div> */}
            </aside>

             


        </div>



    );
};

export default Results;