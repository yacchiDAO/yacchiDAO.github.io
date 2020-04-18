<template>
  <div class="main"n>
  <section class="section" id="about">
    <div class="inner">
      <div class="section-title-block">
        <h2 class="section-title">ABOUT ME</h2>
        <p class="section-desc">
          <b>やっち</b>
        </p>
      </div>
      <div class="two-column-wrapper">
        <div class="two-column-image">
          <img src="/icon.png" alt="">
        </div>
        <div class="two-column-desc">
          <p class="text">
            95年生まれの男性です。身長は180cmで視力が悪いです。
            長野県出身で現在は東京都で生活中です。
            現在は20卒でエンタメ系の会社でエンジニアしてます。
            副業を探していたり探していなかったりしています。<br>
            <b>好き</b><br>
            アニメ、ゲーム、トレーニング、ラーメン<br>
            <b>嫌い</b><br>
            虫、電車、人混み<br>
            <b>人生</b><br>
            プリティーリズム、プリパラ、プリチャン、アイカツ、WUG<br>
            <b>学歴</b><br>
            長野高専 |> 電気通信大学 |> 電気通信大学大学院<br>
            <b>専攻</b><br>
            情報学、修士（工学）<br>
            <b>情報学の中での専門分野</b><br>
            通信、セキュリティ、アルゴリズム、離散数学
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="section" id="skill">
    <div class="inner">
      <div class="section-title-block">
        <h2 class="section-title">SKILL</h2>
        <p class="section-desc">
          主に<b>プログラミング</b>と<B>筋力</b>が自分の武器です。楽しいものを作ることや構造を考えることが好きです。<br>
          toC・toBでの開発経験や、チームでの開発経験があります。<br>
          また、基本情報技術者・応用情報技術者の資格を取得しており、最低限の知識や感覚は持ち合わせています。
        </p>
      </div>
      <div class="card-wrapper">
        <div class="card">
          <div class="skill-desc">
            <h3 class="skill-desc-title">Ruby</h3>
            <div class="rating">
              <p class="rate rate4"></p>
            </div>
            <p class="text">Railsを3年半インターンの業務で使用してきました。アプリのAPI・管理画面の実装や大規模プロジェクトでの使用経験あります。sintraでの開発経験もあります。簡単なスクリプトを組むときにも使用しています。Rspec, Rubocopなどの業務での使用経験あります。</p>
          </div>
        </div>
        <div class="card">
          <div class="skill-desc">
            <h3 class="skill-desc-title">JavaScript</h3>
            <div class="rating">
              <p class="rate rate2"></p>
            </div>
            <p class="text">Railsと合わせてwebページでのjqueryの業務使用経験あります。他にもGoogle Apps Scriptでの社内チャットのbot運用などもあります。</p>
          </div>
        </div>
        <div class="card">
          <div class="skill-desc">
            <h3 class="skill-desc-title">C, C++</h3>
            <div class="rating">
              <p class="rate rate3"></p>
            </div>
            <p class="text">研究での通信アルゴリズムの実装や講義の
            での様々な場面（ゲームなど）で使用しました。ポインタやメモリのことがなんとなく分かっててなんとなく実装できます。PICなどのマイコンなどでの電子工作での使用経験もあります。
            </p>
          </div>
        </div>
        <div class="card">
          <div class="skill-desc">
            <h3 class="skill-desc-title">Python</h3>
            <div class="rating">
              <p class="rate rate1"></p>
            </div>
            <p class="text">講義でのwebサーバ構築や音声データの解析などで使用しました。研究でのデータ解析やグラフ描画に使用しました。</p>
          </div>
        </div>
        <div class="card">
          <div class="skill-desc">
            <h3 class="skill-desc-title">Elixir</h3>
            <div class="rating">
              <p class="rate rate1"></p>
            </div>
            <p class="text">今後の高負荷・並列処理の需要が一層高まることを想定して勉強中です。まだまだ修行中ですがなれてくるとすっきり書けて気持ちがいいです。Phoenixにも少し触っており、CRUDの処理や簡単なwebsockeの実装経験があります。
            </p>
          </div>
        </div>
        <div class="card">
          <div class="skill-desc">
            <h3 class="skill-desc-title">セキュリティ</h3>
            <div class="rating">
              <p class="rate rate2"></p>
            </div>
            <p class="text">ここで指すセキュリティはリテラシーではなく、技術的なものを指しています。
              大学での専攻コースが一応セキュリティで、数学的な知識から実践的な知識までなんとなくあります。具体例を挙げると公開鍵暗号の原理・安全性の数学的評価・CTFの基礎程度の知識などです。暗号理論の研究者を目指していた時代もありました。
            </p>
          </div>
        </div>
        <div class="card">
          <div class="skill-desc">
            <h3 class="skill-desc-title">RDBMS, NoSQL</h3>
            <div class="rating">
              <p class="rate rate2"></p>
            </div>
            <p class="text">基本的なSQLの構文や知識はあります。業務や趣味で設計・運用の経験あります。N+1やインデックスなどの大規模DBの運用に必要な基本的な知識はあります。NoSQLは非同期処理や、簡単なデータ保持での使用経験があります。
            </p>
          </div>
        </div>
        <div class="card">
          <div class="skill-desc">
            <h3 class="skill-desc-title">サーバ, Linux</h3>
            <div class="rating">
              <p class="rate rate3"></p>
            </div>
            <p class="text">物理サーバであればLinuxを用いたwebサーバ・ネットワークの構築経験あり。ついでにLinuxも触れる。クラウドサーバであればAWSでALBやオートスケールなどの使用経験あり。サーバレスアーキテクチャも使用経験あり。herokuでのRailsアプリの運用もしてます。
            </p>
          </div>
        </div>

        <div class="card">
          <div class="skill-desc">
            <h3 class="skill-desc-title">動画編集</h3>
            <div class="rating">
              <p class="rate rate1"></p>
            </div>
            <p class="text">Final Cut Proとmotionでの動画編集の経験があります。
              業務での使用経験はありませんが、趣味での使用程度です。
              できる事としては、動画の切り貼り、切り替えエフェクト、オブジェクトの動き作り、3D空間でのカメラの動きなどです。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section" id="works">
    <div class="inner">
      <div class="section-title-block">
        <h2 class="section-title">WORKS</h2>
        <div class="section-desc">
          <p class="text">
            これまでの制作実績です。</p>
        </div>
      </div>

      <div class="card-wrapper my-gallery">
        <figure class="card">
          <a href="https://pri-image-db.herokuapp.com/" data-size="980x668" class="card-image" target="_blank">
            <img src="/pri.png" alt="" />
          </a>
          <figcaption class="card-caption">
            <p class="card-caption-title">プリティーシリーズキャプ画像DB</p>
            <p class="card-caption-info">アップロードしたプリティーシリーズのアニメのキャプ画像に対して作品・キャラ・セリフなどを紐付けて保存するデータベースです。heroku, Ruby on Rails, S3あたりをよしなに用いて実装しました。
              <a href="http://nishikino3.hatenablog.com/entry/2019/07/25/163610">実装に関する記事です。</a>
            </p>
          </figcaption>
        </figure>

        <figure class="card">
          <a href="https://uectf-result.herokuapp.com/" data-size="980x668" class="card-image" target="_blank">
            <img src="/uectf.png" alt="" />
          </a>
          <figcaption class="card-caption">
            <p class="card-caption-title">陸上部リザルトシステム</p>
            <p class="card-caption-info">大学での陸上の競技結果を保存・閲覧・検索ができるシステムです。
              これまでcsvに直に書いていた作業がwebでの入力になったことで楽になったというフィードバックを頂きました。
            </p>
          </figcaption>
        </figure>

        <figure class="card">
          <a href="https://twitter.com/PriImage" data-size="980x668" class="card-image" target="_blank">
            <img src="/capture.png" alt="" />
          </a>
          <figcaption class="card-caption">
            <p class="card-caption-title">キャプ画像bot</p>
            <p class="card-caption-info">キャプ画像DBで保存された画像をランダムに定期的にツイートするbotです。一部ファンからは好評です。</p>
          </figcaption>
        </figure>

        <figure class="card">
          <a href="https://twitter.com/pribb_bot" data-size="980x668" class="card-image">
            <img src="/bb.png" alt="" />
          </a>
          <figcaption class="card-caption">
            <p class="card-caption-title">BB動画bot</p>
            <p class="card-caption-info">定期的にニコニコAPIを用いて取得した特定のタグがついた動画情報をRedisに保持し、ランダムに動画の投稿を行うbotです。
              <a href="https://qiita.com/protein_wasshoi/items/d8a00e709f2e1b9b5f2b">Qiitaの記事です。</a>
            </p>
          </figcaption>
        </figure>

        <figure class="card">
          <a href="https://ieeexplore.ieee.org/document/8991759" target="_blank" data-size="980x668" class="card-image">
            <img src="/research.png" alt="" />
          </a>
          <figcaption class="card-caption">
            <p class="card-caption-title">Opportunistic Routing for Heterogeneous IoT Networks</p>
            <p class="card-caption-info">通信特性が入り混じったIoTネットワークにおける経路制御に関する研究を行いました。
              Opportunistic Routingという手法を用いることで、ネットワーク全体で強調することで
              同程度の通信性能を維持しながら負荷分散の実現に成功しました。
            </p>
          </figcaption>
        </figure>

        <figure class="card">
          <a href="https://twitter.com/uectf/status/1240984944437944322?s=20" data-size="980x668" class="card-image" target="_blank">
            <img src="/movie.png" alt="" />
          </a>
          <figcaption class="card-caption">
            <p class="card-caption-title">電気通信大学陸上競技部紹介動画</p>
            <p class="card-caption-info">自身が所属していた大学の部活の簡単な紹介動画の制作を行いました。</p>
          </figcaption>
        </figure>

      </div>
    </div>
  </section>
  <section class="section" id="contact">
    <div class="inner">
      <div class="section-title-block">
        <h2 class="section-title">CONTACT,SNS</h2>
        <p class="section-desc">
          主な生息地です。お問合わせがある方は
          twitterからご連絡をください。
        </p>
      </div>
      <div class="contact-wrapper">
        <div class="contact-list">
          <ul>
            <li><a href="https://twitter.com/yacchi_otaku" target="_blank"><img src="/twitter.png" alt=""><span
                  class="contact-list-desc">Twitter</span></a></li>
            <li><a href="https://github.com/yacchiDAO" target="_blank"><img src="/github.png" alt=""><span
                  class="contact-list-desc">github</span></a></li>
            <li><a href="http://nishikino3.hatenablog.com/" target="_blank"><img src="/hatena.png" alt=""><span
                  class="contact-list-desc">はてなブログ</span></a></li>
            <li><a href="https://qiita.com/protein_wasshoi" target="_blank"><img src="/qiita.png" alt=""><span
                  class="contact-list-desc">Qiita</span></a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  </div>
  </template>
<script>

export default {
  components: {
  }


}
</script>

<style>
</style>
