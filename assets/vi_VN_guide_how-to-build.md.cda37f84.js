import{_ as s,o as n,c as a,O as e}from"./chunks/framework.43781440.js";const y=JSON.parse('{"title":"Làm cách nào để build KernelSU ?","description":"","frontmatter":{},"headers":[],"relativePath":"vi_VN/guide/how-to-build.md","filePath":"vi_VN/guide/how-to-build.md"}'),l={name:"vi_VN/guide/how-to-build.md"},o=e(`<h1 id="lam-cach-nao-đe-build-kernelsu" tabindex="-1">Làm cách nào để build KernelSU ? <a class="header-anchor" href="#lam-cach-nao-đe-build-kernelsu" aria-label="Permalink to &quot;Làm cách nào để build KernelSU ?&quot;">​</a></h1><p>Trước tiên, bạn nên đọc tài liệu Chính thức của Android để xây dựng kernel:</p><ol><li><a href="https://source.android.com/docs/setup/build/building-kernels" target="_blank" rel="noreferrer">Building Kernels</a></li><li><a href="https://source.android.com/docs/core/architecture/kernel/gki-release-builds" target="_blank" rel="noreferrer">GKI Release Builds</a></li></ol><blockquote><p>Trang này dành cho thiết bị GKI, nếu bạn dùng kernel cũ, vui lòng tham khảo <a href="./how-to-integrate-for-non-gki.html">Làm thế nào để tích hợp KernelSU vào thiết bị không sử dụng GKI ?</a></p></blockquote><h2 id="build-kernel" tabindex="-1">Build Kernel <a class="header-anchor" href="#build-kernel" aria-label="Permalink to &quot;Build Kernel&quot;">​</a></h2><h3 id="đong-bo-ma-nguon" tabindex="-1">Đồng bộ mã nguồn <a class="header-anchor" href="#đong-bo-ma-nguon" aria-label="Permalink to &quot;Đồng bộ mã nguồn&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">repo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-u</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://android.googlesource.com/kernel/manifest</span></span>
<span class="line"><span style="color:#FFCB6B;">mv</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">kernel_manifest.xm</span><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.repo/manifests</span></span>
<span class="line"><span style="color:#FFCB6B;">repo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">manifest.xml</span></span>
<span class="line"><span style="color:#FFCB6B;">repo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sync</span></span></code></pre></div><p>The <code>&lt;kernel_manifest.xml&gt;</code> is a manifest file which can determine a build uniquely, you can use the manifest to do a re-preducable build. You should download the manifest file from <a href="https://source.android.com/docs/core/architecture/kernel/gki-release-builds" target="_blank" rel="noreferrer">Google GKI release builds</a></p><p><code>&lt;kernel_manifest.xml&gt;</code> là một tệp kê khai có thể xác định duy nhất một bản dựng, bạn có thể sử dụng tệp kê khai để thực hiện một bản dựng có thể tái sản xuất. Bạn nên tải xuống tệp kê khai từ <a href="https://source.android.com/docs/core/architecture/kernel/gki-release-builds" target="_blank" rel="noreferrer">Google GKI release builds</a></p><h3 id="build" tabindex="-1">Build <a class="header-anchor" href="#build" aria-label="Permalink to &quot;Build&quot;">​</a></h3><p>Vui lòng kiểm tra <a href="https://source.android.com/docs/setup/build/building-kernels" target="_blank" rel="noreferrer">tài liệu chính thức</a> trước.</p><p>Ví dụ: Đầu tiên chúng ta cần build một image cho aarch64:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">LTO</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">thin</span><span style="color:#A6ACCD;"> BUILD_CONFIG</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">common/build.config.gki.aarch64</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">build/build.sh</span></span></code></pre></div><p>Đừng quên thêm <code>LTO=thin</code>, nếu không quá trình xây dựng có thể thất bại trong trường hợp bộ nhớ máy tính của bạn nhỏ hơn 24Gb.</p><p>Bắt đầu từ Android 13, kernel được xây dựng bởi <code>bazel</code>:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">tools/bazel</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--config=fast</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">//common:kernel_aarch64_dist</span></span></code></pre></div><h2 id="build-kernel-cung-voi-kernelsu" tabindex="-1">Build kernel cùng với KernelSU <a class="header-anchor" href="#build-kernel-cung-voi-kernelsu" aria-label="Permalink to &quot;Build kernel cùng với KernelSU&quot;">​</a></h2><p>Nếu bạn có thể build được kernel hoàn chỉnh, thì việc tích hợp KernelSU rất dễ dàng, chạy lệnh sau tại thư mục chứa mã nguồn kernel:</p><ul><li>Latest tag(stable)</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-LSs</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://raw.githubusercontent.com/tiann/KernelSU/main/kernel/setup.sh</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">bash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span></span></code></pre></div><ul><li>main branch(dev)</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-LSs</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://raw.githubusercontent.com/tiann/KernelSU/main/kernel/setup.sh</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">bash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">main</span></span></code></pre></div><ul><li>Select tag(Such as v0.5.2)</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-LSs</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://raw.githubusercontent.com/tiann/KernelSU/main/kernel/setup.sh</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">bash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">v0.5.2</span></span></code></pre></div><p>Và rồi build lại, bạn sẽ có được một image chứa KernelSU</p>`,25),t=[o];function r(p,c,i,h,d,u){return n(),a("div",null,t)}const b=s(l,[["render",r]]);export{y as __pageData,b as default};
