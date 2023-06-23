import{_ as e,o as a,c as r,O as n}from"./chunks/framework.43781440.js";const m=JSON.parse('{"title":"よくある質問","description":"","frontmatter":{},"headers":[],"relativePath":"ja_JP/guide/faq.md","filePath":"ja_JP/guide/faq.md"}'),l={name:"ja_JP/guide/faq.md"},i=n('<h1 id="よくある質問" tabindex="-1">よくある質問 <a class="header-anchor" href="#よくある質問" aria-label="Permalink to &quot;よくある質問&quot;">​</a></h1><h2 id="私のデバイスは-kernelsu-に対応していますか" tabindex="-1">私のデバイスは KernelSU に対応していますか? <a class="header-anchor" href="#私のデバイスは-kernelsu-に対応していますか" aria-label="Permalink to &quot;私のデバイスは KernelSU に対応していますか?&quot;">​</a></h2><p>まず、お使いのデバイスがブートローダーのロックを解除できる必要があります。もしできないのであれば、サポート外です。</p><p>もし KernelSU アプリで「非対応」と表示されたら、そのデバイスは最初からサポートされていないことになりますが、カーネルソースをビルドして KernelSU を組み込むか、<a href="./unofficially-support-devices.html">非公式の対応デバイス</a>で動作させることが可能です。</p><h2 id="kernelsu-を使うにはブートローダーのロックを解除する必要がありますか" tabindex="-1">KernelSU を使うにはブートローダーのロックを解除する必要がありますか？ <a class="header-anchor" href="#kernelsu-を使うにはブートローダーのロックを解除する必要がありますか" aria-label="Permalink to &quot;KernelSU を使うにはブートローダーのロックを解除する必要がありますか？&quot;">​</a></h2><p>はい。</p><h2 id="kernelsu-はモジュールに対応していますか" tabindex="-1">KernelSU はモジュールに対応していますか? <a class="header-anchor" href="#kernelsu-はモジュールに対応していますか" aria-label="Permalink to &quot;KernelSU はモジュールに対応していますか?&quot;">​</a></h2><p>はい。ただし初期バージョンであるためバグがある可能性があります。安定するのをお待ちください。</p><h2 id="kernelsu-は-xposed-に対応していますか" tabindex="-1">KernelSU は Xposed に対応していますか? <a class="header-anchor" href="#kernelsu-は-xposed-に対応していますか" aria-label="Permalink to &quot;KernelSU は Xposed に対応していますか?&quot;">​</a></h2><p>はい。<a href="https://github.com/canyie/Dreamland" target="_blank" rel="noreferrer">Dreamland</a> や <a href="https://taichi.cool" target="_blank" rel="noreferrer">TaiChi</a> が動作します。LSPosed については、<a href="https://github.com/Dr-TSNG/ZygiskOnKernelSU" target="_blank" rel="noreferrer">Zygisk on KernelSU</a> を使うと動作するようにできます。</p><h2 id="kernelsu-は-zygisk-に対応していますか" tabindex="-1">KernelSU は Zygisk に対応していますか? <a class="header-anchor" href="#kernelsu-は-zygisk-に対応していますか" aria-label="Permalink to &quot;KernelSU は Zygisk に対応していますか?&quot;">​</a></h2><p>KernelSU は Zygisk サポートを内蔵していません。<a href="https://github.com/Dr-TSNG/ZygiskOnKernelSU" target="_blank" rel="noreferrer">Zygisk on KernelSU</a> を使ってください。</p><h2 id="kernelsu-は-magisk-と互換性がありますか" tabindex="-1">KernelSU は Magisk と互換性がありますか? <a class="header-anchor" href="#kernelsu-は-magisk-と互換性がありますか" aria-label="Permalink to &quot;KernelSU は Magisk と互換性がありますか?&quot;">​</a></h2><p>KernelSU のモジュールシステムは Magisk のマジックマウントと競合しており、KernelSU で有効になっているモジュールがある場合、Magisk 全体が動作しなくなります。</p><p>しかし、KernelSU の <code>su</code> だけを使うのであれば、Magisk とうまく連携することができます。KernelSU は <code>kernel</code> を、Magisk は <code>ramdisk</code> を修正するため、両者は共存できます。</p><h2 id="kernelsu-は-magisk-の代わりになりますか" tabindex="-1">KernelSU は Magisk の代わりになりますか？ <a class="header-anchor" href="#kernelsu-は-magisk-の代わりになりますか" aria-label="Permalink to &quot;KernelSU は Magisk の代わりになりますか？&quot;">​</a></h2><p>私たちはそうは思っていませんし、それが目標でもありません。Magisk はユーザ空間の root ソリューションとして十分であり、長く使われ続けるでしょう。KernelSU の目標は、ユーザーにカーネルインターフェースを提供することであり、Magisk の代用ではありません。</p><h2 id="kernelsu-は-gki-以外のデバイスに対応できますか" tabindex="-1">KernelSU は GKI 以外のデバイスに対応できますか？ <a class="header-anchor" href="#kernelsu-は-gki-以外のデバイスに対応できますか" aria-label="Permalink to &quot;KernelSU は GKI 以外のデバイスに対応できますか？&quot;">​</a></h2><p>可能です。ただしカーネルソースをダウンロードし、KernelSU をソースツリーに統合して、自分でカーネルをビルドする必要があります。</p><h2 id="kernelsu-は-android-12-以下のデバイスに対応できますか" tabindex="-1">KernelSU は Android 12 以下のデバイスに対応できますか？ <a class="header-anchor" href="#kernelsu-は-android-12-以下のデバイスに対応できますか" aria-label="Permalink to &quot;KernelSU は Android 12 以下のデバイスに対応できますか？&quot;">​</a></h2><p>KernelSU の互換性に影響を与えるのはデバイスのカーネルであり、Android のバージョンとは無関係です。唯一の制限は、Android 12 で発売されたデバイスはカーネル5.10以上（GKI デバイス）でなければならないことです：</p><ol><li>Android 12 をプリインストールして発売された端末は対応しているはずです。</li><li>カーネルが古い端末（一部の Android 12 端末はカーネルも古い）は対応可能ですが、カーネルは自分でビルドする必要があります。</li></ol><h2 id="kernelsu-は古いカーネルに対応できますか" tabindex="-1">KernelSU は古いカーネルに対応できますか？ <a class="header-anchor" href="#kernelsu-は古いカーネルに対応できますか" aria-label="Permalink to &quot;KernelSU は古いカーネルに対応できますか？&quot;">​</a></h2><p>KernelSU は現在カーネル4.14にバックポートされていますが、それ以前のカーネルについては手動でバックポートする必要があります。プルリクエスト歓迎です！</p><h2 id="古いカーネルに-kernelsu-を組み込むには" tabindex="-1">古いカーネルに KernelSU を組み込むには？ <a class="header-anchor" href="#古いカーネルに-kernelsu-を組み込むには" aria-label="Permalink to &quot;古いカーネルに KernelSU を組み込むには？&quot;">​</a></h2><p><a href="./../../guide/how-to-integrate-for-non-gki.html">ガイド</a> を参考にしてください。</p><h2 id="android-のバージョンが13なのに、カーネルは「android12-5-10」と表示されるのはなぜ" tabindex="-1">Android のバージョンが13なのに、カーネルは「android12-5.10」と表示されるのはなぜ？ <a class="header-anchor" href="#android-のバージョンが13なのに、カーネルは「android12-5-10」と表示されるのはなぜ" aria-label="Permalink to &quot;Android のバージョンが13なのに、カーネルは「android12-5.10」と表示されるのはなぜ？&quot;">​</a></h2><p>カーネルのバージョンは Android のバージョンと関係ありません。カーネルを書き込む必要がある場合は、常にカーネルのバージョンを使用してください。Android のバージョンはそれほど重要ではありません。</p><h2 id="kernelsu-に-mount-master-global-のマウント名前空間はありますか" tabindex="-1">KernelSU に-mount-master/global のマウント名前空間はありますか？ <a class="header-anchor" href="#kernelsu-に-mount-master-global-のマウント名前空間はありますか" aria-label="Permalink to &quot;KernelSU に-mount-master/global のマウント名前空間はありますか？&quot;">​</a></h2><p>今はまだありませんが（将来的にはあるかもしれません）、グローバルマウントの名前空間に手動で切り替える方法は、以下のようにたくさんあります：</p><ol><li><code>nsenter -t 1 -m sh</code> でシェルをグローバル名前空間にします。</li><li><code>nsenter --mount=/proc/1/ns/mnt</code> を実行したいコマンドに追加すればグローバル名前空間で実行されます。 KernelSU は <a href="https://github.com/tiann/KernelSU/blob/77056a710073d7a5f7ee38f9e77c9fd0b3256576/manager/app/src/main/java/me/weishu/kernelsu/ui/util/KsuCli.kt#L115" target="_blank" rel="noreferrer">このような使い方</a> もできます。</li></ol><h2 id="gki-1-0-なのですが、使えますか" tabindex="-1">GKI 1.0 なのですが、使えますか？ <a class="header-anchor" href="#gki-1-0-なのですが、使えますか" aria-label="Permalink to &quot;GKI 1.0 なのですが、使えますか？&quot;">​</a></h2><p>GKI1 は GKI2 と全く異なるため、カーネルは自分でビルドする必要があります。</p>',33),o=[i];function t(s,d,h,u,k,c){return a(),r("div",null,o)}const K=e(l,[["render",t]]);export{m as __pageData,K as default};
