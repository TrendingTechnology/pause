+++
title = "hugo + netlify + GitHub でブログを作った"
date = "2017-02-07T21:38:21+09:00"
tags = ["hugo","netlify","github"]
draft = false
+++

タイトルそのまんまですが、[hugo](https://gohugo.io/) + [netlify](https://www.netlify.com/) + [GitHub](https://github.com/matsuoshi/sound.ml) でブログを作りました。

markdown で書きたいし、ブログそのもののメンテは面倒なので静的サイトジェネレータ+テンプレでOK、サーバ関係のこともできるだけ考えたくない、楽したい、でも GitHub Pages だと選択肢は [Jekyll](http://jekyllrb-ja.github.io/) 一択かなあ…… とそこで netlify を使うと色んな種類のジェネレータが使えそう、ということで今回この組合せを選んでみました。

hugo で構築して、markdown でテキストを書いて、GitHub に push して、netlify でビルド & 公開。SSL対応も超かんたん。ブログ書くと GitHub に緑の草が生えていくのはモチベーション的にもよいかも。

デザインはテンプレです、気が向いたら触るけどまだ気が向いていません。

ドメインは [freenom](http://www.freenom.com/) で無料の .cf をゲット。無料ってことで安心して使えるかどうかはアレですが、途中で使えなくなっても泣かない。覚悟のうえで(記事データは GitHub 上に残るし)。

そんなかんじです。
