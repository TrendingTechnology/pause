---
title: "Mac でコマンドラインから、WAV → mp3 など音声ファイルの形式を変換"
date: "2018-02-03T14:00:00+09:00"
tags: ["music","mac"]
draft: false
---

毎回ググってるから自分メモ。

Mac で、コマンドライン、CLI から、WAV やら m4a やらを mp3化したい。ビットレートも指定しつつ。

ffmepg を使う。

homebrew でインストールしておいて、

```
ffmpeg -i <input-file> -f mp3 -b:a 192k <output-file>
```

`-b:a 192k` のところがビットレート。

音声ファイルの形式変換は iTunes とかでもできるけど、さくっとやるにはやっぱり CLI が便利だ。
