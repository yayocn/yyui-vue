<template>
  <div>
    <masthead-component>
      <h1>全局样式</h1>
      <h4>设置CSS全局样式；<br>对HTML元素的样式进行重置并可以通过Class进行增强；<br>还有不可缺少的栅格系统等。</h4>
    </masthead-component>

    <div class="container">
      <div id="sidebar_top_marker"></div>
      <div class="row">
        <div class="col-md-9">
          <section class="yyui-docs-section" id="grid">
            <h2 class="m-b-6">栅格系统
              <small><code>_grid.scss</code></small>
            </h2>
            <p>栅格系统对于布局尤其是响应式来说至关重要，它随着屏幕或者窗口视口的大小自动调整。</p>

            <h3 id="grid_introduce">简介</h3>
            <p>栅格系统用于通过一系列的行（row）与列（column）的组合来创建页面布局，你的内容就可以放入这些创建好的布局中。
              下面就介绍一下 YY UI 栅格系统的工作原理：
            </p>
            <ol>
              <li>“行（row）”必须包含在 <code>.container</code>（固定宽度）或<code>.container-full</code>（100% 宽度）中，以便为其赋予合适的排列（aligment）和内补（padding）。
              </li>
              <li>通过“行（row）”在水平方向创建一组“列（column）”。</li>
              <li>内容应当放置于“列（column）”内，并且，只有“列（column）”可以作为行（row）”的直接子元素。</li>
              <li>类似<code>.row</code>和<code>.col-xs-4</code> 这种预定义的类，可以用来快速创建栅格布局。</li>
              <li>通过为“列（column）”设置 padding 属性，从而创建列与列之间的间隔（gutter）。</li>
              <li>栅格系统中的列是通过指定1到12的值来表示其跨越的范围。例如，三个等宽的列可以使用三个 <code>.col-xs-4</code> 来创建。</li>
              <li>如果一“行（row）”中包含了的“列（column）”大于 12，多余的“列（column）”所在的元素将被作为一个整体另起一行排列。</li>
              <li>栅格类适用于与屏幕宽度大于或等于分界点大小的设备 ， 并且针对小屏幕设备覆盖栅格类。 因此，在元素上应用任何 <code>.col-md-*</code> 栅格类适用于
                与屏幕宽度大于或等于分界点大小的设备 ， 并且针对小屏幕设备覆盖栅格类。 因此，在元素上应用任何 <code>.col-lg-*</code> 不存在， 也影响大屏幕设备。
              </li>
            </ol>

            <div class="yyui-docs-note">
              <p>针对上面的第一点，其实你不必严格按照格式来，只要你记住：<code>.container, .container-full, .col-*-*</code>有<code>15px</code>的水平内补。
                而 <code>.row</code> 有 <code>-15px</code> 的水平外间距。
              </p>
            </div>

            <p class="text-info">yayo在使用了Bootstrap、Foundation、Amaze UI、Semantic UI后，决定使用Bootstrap的栅格结构。原因如下：</p>
            <p>此栅格系统的精巧之处</p>
            <ul>
              <li>根据工作原理可知此栅格系统是锯齿状，默认的锯齿深度是 <code>15px</code>。</li>
              <li><code>.container</code>和<code>.container-full</code>类有<code>15px</code>的 <code>padding</code>值。

              </li>
              <li><code>.row</code>类有<code>-15px</code>的 <code>margin</code>值，抵消掉<code>.container</code>的<code>padding</code>值。

              </li>
              <li><code>.col-*-*</code>类有<code>15px</code>的 <code>padding</code>值，这样<code>.col-*-*</code>有相当于一个新的<code>.container</code>，
                里面可以继续放<code>.row</code>。

              </li>
            </ul>


            <h3 id="grid_options">参数</h3>
            <p>参看下表可以查看栅格系统在不同设备的表现。</p>
            <div class="table-responsive">
              <table class="table font-sm">
                <thead>
                <tr>
                  <th></th>
                  <th>超小屏幕

                    <small>手机<code>(<768px)</code></small>
                  </th>
                  <th>小屏幕

                    <small>ipad<code>(≥768px)</code></small>
                  </th>
                  <th>中等屏幕

                    <small>桌面显示器<code>(≥992px)</code></small>
                  </th>
                  <th>大屏幕

                    <small>桌面显示器<code>(≥1360px)</code></small>
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row"><code>.container</code>最大宽度</th>
                  <td><code>auto</code></td>
                  <td><code>720px</code></td>
                  <td><code>960px</code></td>
                  <td><code>1280px</code></td>
                </tr>
                <tr>
                  <th scope="row">列数</th>
                  <td colspan="4" class="text-center"><code>12</code></td>
                </tr>
                <tr>
                  <th scope="row">间距</th>
                  <td colspan="4" class="text-center"><code>30px</code></td>
                </tr>
                <tr>
                  <th scope="row">偏移</th>
                  <td><code>col-xs-offset-*</code></td>
                  <td><code>col-sm-offset-*</code></td>
                  <td><code>col-md-offset-*</code></td>
                  <td><code>col-lg-offset-*</code></td>
                </tr>
                <tr>
                  <th scope="row">向左移动<code>(1 ~ 12)</code></th>
                  <td><code>col-xs-lt-*</code></td>
                  <td><code>col-sm-lt-*</code></td>
                  <td><code>col-md-lt-*</code></td>
                  <td><code>col-lg-lt-*</code></td>
                </tr>
                <tr>
                  <th scope="row">向右移动<code>(1 ~ 12)</code></th>
                  <td><code>col-xs-rt-*</code></td>
                  <td><code>col-sm-rt-*</code></td>
                  <td><code>col-md-rt-*</code></td>
                  <td><code>col-lg-rt-*</code></td>
                </tr>
                </tbody>
              </table>
            </div>
          </section>

          <div class="divider-lg"></div>

          <section class="yyui-docs-section" id="type">
            <h2 class="m-b-6">调整

              <small><code>_type.scss</code></small>
            </h2>

            <h3 id="type_head">标题</h3>
            <p>对HTML中的标题标签<code>&lt;h1> ~ &lt;h6></code>进行了字体大小的调整，并对其内部的 <code>&lt;small></code>标签进行了特殊处理，大小为 <span
                class="text-info">60%</span>。</p>
            <p>YY UI 对<code>html</code> 做了一步处理： <code>font-size: 10px;</code>。便于计算。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <h1>h1. YY UI heading

                  <small>font-size: 3.4rem</small>
                </h1>
                <h2>h2. YY UI heading

                  <small>font-size: 3rem</small>
                </h2>
                <h3>h3. YY UI heading

                  <small>font-size: 2.6rem</small>
                </h3>
                <h4>h4. YY UI heading

                  <small>font-size: 2.2rem</small>
                </h4>
                <h5>h5. YY UI heading

                  <small>font-size: 1.8rem</small>
                </h5>
                <h6>h6. YY UI heading

                  <small>font-size: 1.4rem</small>
                </h6>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;h1>h1. YY UI heading&lt;small>font-size: 3.4rem&lt;/small>&lt;/h1>
                </code></pre>
              </div>
            </div>

            <h3 id="type_mark">突出文本</h3>
            <p><code>&lt;mark></code>突出显示部分文本。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                如果能从来，我要选
                <mark>李白</mark>
                。
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    如果能从来，我要选&lt;mark>李白&lt;/mark>。
                </code></pre>
              </div>
            </div>

            <h3 id="type_del_ins">更新和修正</h3>
            <p><code>&lt;del>、&lt;ins></code>配合使用，来描述文档中的更新和修正。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                如果能从来，我要选
                <del>杜甫</del>
                <ins>李白</ins>
                。
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    如果能从来，我要选&lt;del>杜甫&lt;/del>&lt;ins>李白&lt;/ins>。
                </code></pre>
              </div>
            </div>

            <h3 id="type_abbr">缩写</h3>
            <p><code>&lt;abbr></code>指示简称或缩写，比如 "WWW" 或 "NATO"。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <abbr title="World Wide Web">WWW</abbr>是环球信息网的缩写，中文名字为“万维网”，“环球网”等，常简称为Web。
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;abbr title="World Wide Web"&gt;WWW&lt;/abbr>是环球信息网的缩写，中文名字为“万维网”，“环球网”等，常简称为Web。
                </code></pre>
              </div>
            </div>

            <h3 id="type_address">地址</h3>
            <p><code>&lt;address></code>定义文档或文章的yayo/拥有者的联系信息。如果它位于<code>&lt;body></code>元素内，则它表示文档联系信息。
              如果它位于<code>&lt;article></code>元素内，则它表示文章的联系信息。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <address>
                  <strong>Yayo, Inc.</strong><br>
                  天府大道，中段<br>
                  中国，四川，成都<br>
                  <abbr title="电话号码">P:</abbr> (028) 909-0950
                </address>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;address>
      &lt;strong>YY UI, Inc.&lt;/strong>&lt;br/>
      天府大道，中段&lt;br/>
      中国，四川，成都&lt;br/>
      &lt;abbr title="电话号码"&gt;P:&lt;/abbr>(028) 909-0950
    &lt;/address>
                </code></pre>
              </div>
            </div>

            <h3 id="type_blockquote">引用</h3>
            <p><code>&lt;blockquote></code>定义块引用。它之间的所有文本都会从常规文本中分离出来，经常会在左、右两边进行缩进（增加外边距），
              而且有时会使用斜体。也就是说，块引用拥有它们自己的空间。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <blockquote>
                  <p>爱生活，爱老婆。</p>
                  <footer>出自 <cite title="Source Title">杨氏语录</cite></footer>
                </blockquote>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;blockquote>
      &lt;p>爱生活，爱老婆。&lt;/p>
      &lt;footer>出自 &lt;cite title="Source Title">杨氏语录&lt;/cite>&lt;/footer>
    &lt;/blockquote>
                </code></pre>
              </div>
            </div>

            <h4>反向引用</h4>
            <p>给<code>&lt;blockquote></code>加上<code>.blockquote-reverse</code>类。此时，引用会出现在右侧。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <blockquote class="blockquote-reverse">
                  <p>爱生活，爱老婆。</p>
                  <footer>出自 <cite title="Source Title">杨氏语录</cite></footer>
                </blockquote>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;blockquote class="blockquote-reverse">
      &lt;p>爱生活，爱老婆。&lt;/p>
      &lt;footer>出自 &lt;cite title="Source Title">杨氏语录&lt;/cite>&lt;/footer>
    &lt;/blockquote>
                </code></pre>
              </div>
            </div>

            <div class="yyui-docs-note">
              <p>yayo在写反向引用时遇到了一个纠结的问题，用<span class="text-danger"> inverse </span>还是<span
                  class="text-danger"> reverse </span>。<br/></p>
              它哥俩的解释分别是：<br/>
              <p><span class="text-danger"> inverse </span>：反面，相反的事物；反向的；倒数，反选。</p>
              <p><span class="text-danger"> reverse </span>：反面，背面，倒退；颠倒，倒车，撤销；相反的，反面的。</p>
              <p>有没有一种日了狗的感觉？</p>
              <p>
                最后决定在<span class="text-danger"> 空间 </span>上的相反用reverse，比如这里的反向引用，左右位置的互换。至于inverse，它和数学的关系更加接近，
                比如反函数，反比等等，适合抽象的相反。
              </p>
            </div>

            <h3 id="type_dl">描述</h3>
            <p><code>&lt;dl></code>定义了“定义列表”，即带有描述的短语列表。它用于结合<code>&lt;dt></code>（定义列表中的项目）和<code>&lt;dd></code>（描述列表中的项目）。
            </p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <dl>
                  <dt>描述列表</dt>
                  <dd>描述列表适合用来定义</dd>
                  <dt>打烊</dt>
                  <dd>商店晚上关门停止营业。</dd>
                  <dd>引申为歇业。</dd>
                </dl>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;dl>
      &lt;dt>描述列表&lt;/dt>
      &lt;dd>描述列表适合用来定义&lt;/dd>
      &lt;dt>打烊&lt;/dt>
      &lt;dd>商店晚上关门停止营业。&lt;/dd>
      &lt;dd>引申为歇业。&lt;/dd>
    &lt;/dl>
                </code></pre>
              </div>
            </div>
            <h4>水平描述</h4>
            <p>在<code>&lt;dl></code>上添加<code>.dl-hz</code>类。描述会水平显示。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <dl class="dl-hz">
                  <dt>描述列表 160px</dt>
                  <dd>描述列表适合用来定义</dd>
                  <dt>打烊</dt>
                  <dd>商店晚上关门停止营业。</dd>
                  <dd>引申为歇业。</dd>
                </dl>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;dl class="dl-hz">
      &lt;dt>描述列表 160px&lt;/dt>
      &lt;dd>描述列表适合用来定义&lt;/dd>
      &lt;dt>打烊&lt;/dt>
      &lt;dd>商店晚上关门停止营业。&lt;/dd>
      &lt;dd>引申为歇业。&lt;/dd>
    &lt;/dl>
                </code></pre>
              </div>
            </div>
          </section>

          <div class="divider-lg"></div>

          <section class="yyui-docs-section" id="code">
            <h2 class="m-b-6">代码
              <small><code>_code.scss</code></small>
            </h2>

            <h3 id="code_code">内联代码</h3>
            <p><code>&lt;code></code>包裹内联样式的代码片段。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <code>var a = 1234;</code>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;code>var a = 1234;&lt;/code>
                </code></pre>
              </div>
            </div>

            <h3 id="code_kbd">键盘文本</h3>
            <p><code>&lt;kbd></code>定义键盘文本。它表示文本是从键盘上键入的。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                同时按住 <kbd>Alt</kbd> + <kbd>Print Screen</kbd>，我们可以截取当前运行窗口。
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    同时按住 &lt;kbd>Alt&lt;/kbd> + &lt;kbd>Print Screen&lt;/kbd>，我们可以截取当前运行窗口。
                </code></pre>
              </div>
            </div>
          </section>

          <div class="divider-lg"></div>

          <section class="yyui-docs-section" id="table">
            <h2 class="m-b-6">表格
              <small><code>_tables.scss</code></small>
            </h2>
            <p>想要和栗子保持一致，就别偷懒把<code>&lt;thead>、&lt;tbody></code>这些元素给落下了哦。</p>

            <h3 id="table_default">默认表格</h3>
            <p>在<code>&lt;table></code>标签上添加<code>.table</code>类，为其添加默认样式。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <table class="table">
                  <caption>默认样式表格</caption>
                  <thead>
                  <tr>
                    <th>#</th>
                    <th>First</th>
                    <th>Second</th>
                    <th>Third</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <th scope="row">First</th>
                    <td>first</td>
                    <td>second</td>
                    <td>third</td>
                  </tr>
                  <tr>
                    <th scope="row">First</th>
                    <td>first</td>
                    <td>second</td>
                    <td>third</td>
                  </tr>
                  <tr>
                    <th scope="row">First</th>
                    <td>first</td>
                    <td>second</td>
                    <td>third</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;table class="table">
      &lt;caption>默认样式表格&lt;/caption>
      &lt;thead>
        &lt;tr>
          &lt;th>#&lt;/th>
          &lt;th>First&lt;/th>
          &lt;th>Second&lt;/th>
          &lt;th>Third&lt;/th>
        &lt;/tr>
      &lt;/thead>

      &lt;tbody>
        &lt;tr>
          &lt;th scope="row">First&lt;/th>
          &lt;td>first&lt;/td>
          &lt;td>second&lt;/td>
          &lt;td>third&lt;/td>
        &lt;/tr>
      &lt;/tbody>
    &lt;/table>
                </code></pre>
              </div>
            </div>

            <h3 id="table_responsive">响应式表格</h3>
            <p>
              在<code>&lt;table></code>标签外面包裹一层类为<code>.table-responsive</code>的<code>&lt;div></code>。此时如果表格超过宽度会在此<code>&lt;div></code>
              上产生水平滚动条，而不会在浏览器窗口产生滚动条。
            </p>
            <p class="text-info">只针对于很长的连续的字符串。如果是中文的话，会自动换行，都不会产生滚动条，可以不使用这种表格。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="table-responsive">
                  <table class="table">
                    <caption>响应式表格</caption>
                    <thead>
                    <tr>
                      <th>#</th>
                      <th>First</th>
                      <th>Second</th>
                      <th>Third</th>
                      <th>Fourth</th>
                      <th>Fifth</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <th scope="row">First</th>
                      <td>abcdefghijklmnopqrstuvwxyz</td>
                      <td>abcdefghijklmnopqrstuvwxyz</td>
                      <td>abcdefghijklmnopqrstuvwxyz</td>
                      <td>abcdefghijklmnopqrstuvwxyz</td>
                      <td>abcdefghijklmnopqrstuvwxyz</td>
                    </tr>
                    <tr>
                      <th scope="row">First</th>
                      <td>abcdefghijklmnopqrstuvwxyz</td>
                      <td>abcdefghijklmnopqrstuvwxyz</td>
                      <td>abcdefghijklmnopqrstuvwxyz</td>
                      <td>abcdefghijklmnopqrstuvwxyz</td>
                      <td>abcdefghijklmnopqrstuvwxyz</td>
                    </tr>
                    <tr>
                      <th scope="row">First</th>
                      <td>abcdefghijklmnopqrstuvwxyz</td>
                      <td>abcdefghijklmnopqrstuvwxyz</td>
                      <td>abcdefghijklmnopqrstuvwxyz</td>
                      <td>abcdefghijklmnopqrstuvwxyz</td>
                      <td>abcdefghijklmnopqrstuvwxyz</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="table-responsive">
      &lt;table class="table">
      &lt;/table>
    &lt;/div>
                </code></pre>
              </div>
            </div>

            <h3 id="table_sm">紧凑型表格</h3>
            <p>在<code>&lt;table></code>标签添加<code>.table-sm</code>类。表格会显示得更为紧凑。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <table class="table table-sm">
                  <caption>紧凑型表格</caption>
                  <thead>
                  <tr>
                    <th>#</th>
                    <th>First</th>
                    <th>Second</th>
                    <th>Third</th>
                    <th>Fourth</th>
                    <th>Fifth</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <th scope="row">First</th>
                    <td>abcdef</td>
                    <td>abcdef</td>
                    <td>abcdef</td>
                    <td>abcdef</td>
                    <td>abcdef</td>
                  </tr>
                  <tr>
                    <th scope="row">First</th>
                    <td>abcdef</td>
                    <td>abcdef</td>
                    <td>abcdef</td>
                    <td>abcdef</td>
                    <td>abcdef</td>
                  </tr>
                  <tr>
                    <th scope="row">First</th>
                    <td>abcdef</td>
                    <td>abcdef</td>
                    <td>abcdef</td>
                    <td>abcdef</td>
                    <td>abcdef</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;table class="table table-sm">
      
    &lt;/table>
                </code></pre>
              </div>
            </div>

            <h3 id="table_striped">带条纹表格</h3>
            <p>在<code>&lt;table></code>标签添加<code>.table-striped</code>类。表格会隔行显示背景，便于区分行。</p>
            <p class="text-danger">必须要有<code>&lt;tbody></code>标签。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <table class="table table-striped">
                  <caption>条纹表格</caption>
                  <thead>
                  <tr>
                    <th>#</th>
                    <th>First</th>
                    <th>Second</th>
                    <th>Third</th>
                    <th>Fourth</th>
                    <th>Fifth</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <th scope="row">First</th>
                    <td>abcdef</td>
                    <td>abcdef</td>
                    <td>abcdef</td>
                    <td>abcdef</td>
                    <td>abcdef</td>
                  </tr>
                  <tr>
                    <th scope="row">First</th>
                    <td>abcdef</td>
                    <td>abcdef</td>
                    <td>abcdef</td>
                    <td>abcdef</td>
                    <td>abcdef</td>
                  </tr>
                  <tr>
                    <th scope="row">First</th>
                    <td>abcdef</td>
                    <td>abcdef</td>
                    <td>abcdef</td>
                    <td>abcdef</td>
                    <td>abcdef</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;table class="table table-striped">
      
    &lt;/table>
                </code></pre>
              </div>
            </div>

            <h3 id="table_border">带边框表格</h3>
            <p>在<code>&lt;table></code>标签添加<code>.table-border</code>类。表格每一项之间都有边框。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <table class="table table-border">
                  <caption>边框表格</caption>
                  <thead>
                  <tr>
                    <th>#</th>
                    <th>First</th>
                    <th>Second</th>
                    <th>Third</th>
                    <th>Fourth</th>
                    <th>Fifth</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <th scope="row">First</th>
                    <td>abcdef</td>
                    <td>abcdef</td>
                    <td>abcdef</td>
                    <td>abcdef</td>
                    <td>abcdef</td>
                  </tr>
                  <tr>
                    <th scope="row">First</th>
                    <td>abcdef</td>
                    <td>abcdef</td>
                    <td>abcdef</td>
                    <td>abcdef</td>
                    <td>abcdef</td>
                  </tr>
                  <tr>
                    <th scope="row">First</th>
                    <td>abcdef</td>
                    <td>abcdef</td>
                    <td>abcdef</td>
                    <td>abcdef</td>
                    <td>abcdef</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;table class="table table-border">
      
    &lt;/table>
                </code></pre>
              </div>
            </div>

            <h3 id="table_row_status">表格行状态</h3>
            <p>在<code>&lt;tr></code>标签上添加相应的类，让该行区别于其他行。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <table class="table">
                  <caption>This is border tables</caption>
                  <thead>
                  <tr>
                    <th>#</th>
                    <th>First</th>
                    <th>Second</th>
                    <th>Third</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr class="row-bg-active">
                    <th scope="row">First</th>
                    <td>first</td>
                    <td>second</td>
                    <td>third</td>
                  </tr>
                  <tr class="row-bg-primary">
                    <th scope="row">First</th>
                    <td>first</td>
                    <td>second</td>
                    <td>third</td>
                  </tr>
                  <tr class="row-bg-secondary">
                    <th scope="row">First</th>
                    <td>first</td>
                    <td>second</td>
                    <td>third</td>
                  </tr>
                  <tr class="row-bg-success">
                    <th scope="row">First</th>
                    <td>first</td>
                    <td>second</td>
                    <td>third</td>
                  </tr>
                  <tr class="row-bg-info">
                    <th scope="row">First</th>
                    <td>first</td>
                    <td>second</td>
                    <td>third</td>
                  </tr>
                  <tr class="row-bg-warning">
                    <th scope="row">First</th>
                    <td>first</td>
                    <td>second</td>
                    <td>third</td>
                  </tr>
                  <tr class="row-bg-danger">
                    <th scope="row">First</th>
                    <td>first</td>
                    <td>second</td>
                    <td>third</td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;table class="table">
      &lt;caption>This is border tables&lt;/caption>
      &lt;thead>
        &lt;tr>
          &lt;th>#&lt;/th>
          &lt;th>First&lt;/th>
          &lt;th>Second&lt;/th>
          &lt;th>Third&lt;/th>
        &lt;/tr>
      &lt;/thead>
                  
      &lt;tbody>
        &lt;tr class="row-bg-active">
          &lt;th scope="row">First&lt;/th>
          &lt;td>first&lt;/td>
          &lt;td>second&lt;/td>
          &lt;td>third&lt;/td>
        &lt;/tr>
        &lt;tr class="row-bg-primary">
          &lt;th scope="row">First&lt;/th>
          &lt;td>first&lt;/td>
          &lt;td>second&lt;/td>
          &lt;td>third&lt;/td>
        &lt;/tr>
        &lt;tr class="row-bg-secondary">
          &lt;th scope="row">First&lt;/th>
          &lt;td>first&lt;/td>
          &lt;td>second&lt;/td>
          &lt;td>third&lt;/td>
        &lt;/tr>
        &lt;tr class="row-bg-success">
          &lt;th scope="row">First&lt;/th>
          &lt;td>first&lt;/td>
          &lt;td>second&lt;/td>
          &lt;td>third&lt;/td>
        &lt;/tr>
        &lt;tr class="row-bg-info">
          &lt;th scope="row">First&lt;/th>
          &lt;td>first&lt;/td>
          &lt;td>second&lt;/td>
          &lt;td>third&lt;/td>
        &lt;/tr>
        &lt;tr class="row-bg-warning">
          &lt;th scope="row">First&lt;/th>
          &lt;td>first&lt;/td>
          &lt;td>second&lt;/td>
          &lt;td>third&lt;/td>
        &lt;/tr>
        &lt;tr class="row-bg-danger">
          &lt;th scope="row">First&lt;/th>
          &lt;td>first&lt;/td>
          &lt;td>second&lt;/td>
          &lt;td>third&lt;/td>
        &lt;/tr>
      &lt;/tbody>
    &lt;/table>
                </code></pre>
              </div>
            </div>

            <p class="text-info">当然，你也可以把上面集中样式搭配使用，只要在<code>&lt;table></code>标签上添加相应的类即可。</p>
          </section>

          <div class="divider-lg"></div>

          <section class="yyui-docs-section" id="form">
            <h2 class="m-b-6">表单
              <small><code>_forms.scss</code></small>
            </h2>
            <p>
              YY UI 对表单进行系列的优化。其中的<code>.form-control</code>是<code>&lt;input>, &lt;textarea>, &lt;select></code>的重要类。
            </p>

            <h3 id="form_example">基本实例</h3>
            <p>建议每一个表单项用<code>.form-group</code>类进行修饰。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <form>
                  <fieldset class="form-group">
                    <label>Input</label>
                    <input type="text" class="form-control" placeholder="user name"/>
                  </fieldset>

                  <fieldset class="form-group">
                    <label>Textarea</label>
                    <textarea class="form-control" rows="5"></textarea>
                  </fieldset>

                  <fieldset class="form-group">
                    <label>Select</label>
                    <div class="select">
                      <select class="form-control">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                      </select>
                      <div class="triangle-down"></div>
                    </div>
                  </fieldset>

                  <fieldset class="form-group">
                    <label>Checkbox</label>
                    <div class="checkbox">
                      <input id="checkbox_example" type="checkbox" name="checkboxExample"/>
                      <label for="checkbox_example">复选框</label>
                    </div>
                  </fieldset>

                  <fieldset class="form-group">
                    <label>Radio</label>
                    <br/>
                    <div class="radio radio-inline">
                      <input id="radio_example_1" type="radio" name="radioExample"/>
                      <label for="radio_example_1">单选框</label>
                    </div>
                    <div class="radio radio-inline">
                      <input id="radio_example_2" type="radio" name="radioExample"/>
                      <label for="radio_example_2">单选框</label>
                    </div>
                  </fieldset>

                  <fieldset class="form-group">
                    <label>Input File</label>
                    <div class="form-file">
                      <input type="file" class="form-control" name="upload"/>
                      <label class="file-surface">点击上传</label>
                    </div>
                  </fieldset>
                </form>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;form>
      &lt;fieldset class="form-group">
        &lt;label>Input&lt;/label>
        &lt;input type="text" class="form-control" placeholder="user name"/>
      &lt;/fieldset>

      &lt;fieldset class="form-group">
        &lt;label>Textarea&lt;/label>
        &lt;textarea class="form-control" rows="5">&lt;/textarea>
      &lt;/fieldset>

      &lt;fieldset class="form-group">
        &lt;label>Select&lt;/label>
        &lt;div class="select">
          &lt;select class="form-control">
            &lt;option value="">1&lt;/option>
            &lt;option value="">2&lt;/option>
            &lt;option value="">3&lt;/option>
          &lt;/select>
          &lt;div class="triangle-down">&lt;/div>
        &lt;/div>
      &lt;/fieldset>

      &lt;fieldset class="form-group">
        &lt;label>Checkbox&lt;/label>
        &lt;div class="checkbox">
          &lt;input id="checkbox_example" type="checkbox" name="checkboxExample"/>
          &lt;label for="checkbox_example">复选框&lt;/label>
        &lt;/div>
      &lt;/fieldset>

      &lt;fieldset class="form-group">
        &lt;label>Radio&lt;/label>
        &lt;br/>
        &lt;div class="radio radio-inline">
          &lt;input id="radio_example_1" type="radio" name="radioExample"/>
          &lt;label for="radio_example_1">单选框&lt;/label>
        &lt;/div>
        &lt;div class="radio radio-inline">
          &lt;input id="radio_example_2" type="radio" name="radioExample"/>
          &lt;label for="radio_example_2">单选框&lt;/label>
        &lt;/div>
      &lt;/fieldset>

      &lt;fieldset class="form-group">
        &lt;label>Input File&lt;/label>
        &lt;div class="form-file">
          &lt;input type="file" class="form-control" name="upload"/>
          &lt;label class="file-surface">点击上传&lt;/label>
        &lt;/div>
      &lt;/fieldset>
    &lt;/form>
                </code></pre>
              </div>
            </div>

            <h3 id="form_size">尺寸</h3>
            <p>YY UI 为<code>.form-group</code>预设了3中尺寸。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <fieldset class="form-group form-group-lg">
                  <label>Large</label>
                  <input type="text" class="form-control" placeholder="user name"/>
                </fieldset>
                <fieldset class="form-group">
                  <label>Default</label>
                  <input type="text" class="form-control" placeholder="user name"/>
                </fieldset>
                <fieldset class="form-group form-group-sm">
                  <label>Small</label>
                  <input type="text" class="form-control" placeholder="user name"/>
                </fieldset>
              </div>
              <div class="yyui-docs-code">
              <pre v-hljs><code class="html">
    &lt;fieldset class="form-group form-group-lg">
      &lt;label>Large&lt;/label>
      &lt;input type="text" class="form-control" placeholder="user name"/>
    &lt;/fieldset>

    &lt;fieldset class="form-group">
      &lt;label>Default&lt;/label>
      &lt;input type="text" class="form-control" placeholder="user name"/>
    &lt;/fieldset>
                
    &lt;fieldset class="form-group form-group-sm">
      &lt;label>Small&lt;/label>
      &lt;input type="text" class="form-control" placeholder="user name"/>
    &lt;/fieldset>
              </code></pre>
              </div>
            </div>

            <h3 id="form_hz">水平排列的表单</h3>
            <p>为<code>&lt;form></code>标签添加<code>.form-hz</code>类，并结合<a @click.stop.prevent="toAnchor('grid')" href="#grid">栅格系统</a>，将表单项的标题和内容水平排列。</p>
            <p>标题<code>&lt;label></code>需要添加<code>.form-control-label</code>类。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <form class="form-hz">
                  <fieldset class="form-group">
                    <label class="col-xs-3 form-control-label">User Name</label>
                    <div class="col-xs-9">
                      <input type="text" class="form-control" placeholder="enter user name"/>
                    </div>
                  </fieldset>
                  <fieldset class="form-group">
                    <label class="col-xs-3 form-control-label">password</label>
                    <div class="col-xs-9">
                      <input type="password" class="form-control" placeholder="enter password"/>
                    </div>
                  </fieldset>
                </form>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;form class="form-hz">
      &lt;fieldset class="form-group">
        &lt;label class="col-xs-3 form-control-label">User Name&lt;/label>
        &lt;div class="col-xs-9">
          &lt;input type="text" class="form-control" placeholder="enter user name"/>
        &lt;/div>
      &lt;/fieldset>
                  
      &lt;fieldset class="form-group">
        &lt;label class="col-xs-3 form-control-label">password&lt;/label>
        &lt;div class="col-xs-9">
          &lt;input type="password" class="form-control" placeholder="enter password"/>
        &lt;/div>
      &lt;/fieldset>
    &lt;/form>
                </code></pre>
              </div>
            </div>

            <h3 id="form_inline">内联表单</h3>
            <p>为<code>&lt;form></code>标签添加<code>.form-inline</code>类，表单项将水平排列。</p>
            <p><a @click.stop.prevent="toAnchor('form_hz')" href="#form_hz">水平排列表单</a>是针对表单项内部，而内联表单是针对表单项。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <form class="form-inline">
                  <fieldset class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" placeholder="user name"/>
                  </fieldset>

                  <fieldset class="form-group">
                    <label>Pwd</label>
                    <input type="password" class="form-control" placeholder="password"/>
                  </fieldset>
                  
                  <button class="btn btn-default" type="button">submit</button>
                </form>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;form class="form-inline">
      &lt;fieldset class="form-group">
        &lt;label>Name&lt;/label>
        &lt;input type="text" class="form-control" placeholder="user name"/>
      &lt;/fieldset>

      &lt;fieldset class="form-group">
        &lt;label>Pwd&lt;/label>
        &lt;input type="password" class="form-control" placeholder="password"/>
      &lt;/fieldset>
                  
      &lt;button class="btn btn-default" type="button">submit&lt;/button>
    &lt;/form>
                </code></pre>
              </div>
            </div>

            <h3 id="form_validate">验证</h3>
            <p>为<code>&lt;form-group></code>标签添加<code>.form-group-success, .form-group-warning, .form-group-error</code>类，添加验证状态。
            </p>
            <p><code>.form-control-feedback</code>是可选项。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <fieldset class="form-group form-group-success">
                  <label>success</label>
                  <input type="text" class="form-control" placeholder="user name"/>
                </fieldset>

                <fieldset class="form-group form-group-warning">
                  <label>warning</label>
                  <input type="text" class="form-control" placeholder="user name"/>
                  <span class="form-control-feedback">给你一个小小的警告</span>
                </fieldset>

                <fieldset class="form-group form-group-error">
                  <label>error</label>
                  <input type="text" class="form-control" placeholder="user name"/>
                  <span class="form-control-feedback">这里输入有错哦</span>
                </fieldset>
              </div>
              <div class="yyui-docs-code">
              <pre v-hljs><code class="html">
    &lt;fieldset class="form-group form-group-success">
      &lt;label>success&lt;/label>
      &lt;input type="text" class="form-control" placeholder="user name"/>
    &lt;/fieldset>

    &lt;fieldset class="form-group form-group-warning">
      &lt;label>warning&lt;/label>
      &lt;input type="text" class="form-control" placeholder="user name"/>
      &lt;span class="form-control-feedback">给你一个小小的警告&lt;/span>
    &lt;/fieldset>

    &lt;fieldset class="form-group form-group-error">
      &lt;label>error&lt;/label>
      &lt;input type="text" class="form-control" placeholder="user name"/>
      &lt;span class="form-control-feedback">这里输入有错哦&lt;/span>
    &lt;/fieldset>
              </code></pre>
              </div>
            </div>

            <h3 id="form_select">Select</h3>
            <p>
              你可以在<code>&lt;select></code>外面包裹一层<code>.select</code>，并且为<code>&lt;select></code>添加<code>.form-control</code>类。当然，如果不考虑样式，直接使用标签就行了。
            </p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <fieldset class="form-group">
                  <label>Select</label>
                  <div class="select">
                    <select class="form-control" name="" id="33">
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                    </select>
                    <div class="triangle-down"></div>
                  </div>
                </fieldset>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;fieldset class="form-group">
      &lt;label>Select&lt;/label>
      &lt;div class="select">
        &lt;select class="form-control" name="" id="33">
          &lt;option value="">1&lt;/option>
          &lt;option value="">2&lt;/option>
          &lt;option value="">3&lt;/option>
        &lt;/select>
        &lt;div class="triangle-down">&lt;/div>
      &lt;/div>
    &lt;/fieldset>
                </code></pre>
              </div>
            </div>

            <h3 id="form_checkbox">Checkbox</h3>
            <p><code>.checkbox</code>的结构要求比较严格。不要轻易增加、删除、更改元素。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="checkbox">
                  <input id="checkbox_1_1" type="checkbox" name="checkbox1"/>
                  <label for="checkbox_1_1">复选框</label>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="checkbox">
      &lt;input id="checkbox_1_1" type="checkbox" name="checkbox1"/>
      &lt;label for="checkbox_1_1">复选框&lt;/label>
    &lt;/div>
                </code></pre>
              </div>
            </div>

            <h4>选中状态</h4>
            <p>给<code>&lt;input></code>添加<code>checked</code>属性。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="checkbox">
                  <input id="checkbox_2_1" type="checkbox" name="checkbox1" checked/>
                  <label for="checkbox_2_1">复选框</label>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="checkbox">
      &lt;input id="checkbox_2_1" type="checkbox" name="checkbox1" checked/>
      &lt;label for="checkbox_2_1">复选框&lt;/label>
    &lt;/div>
                </code></pre>
              </div>
            </div>

            <h4>禁用状态</h4>
            <p>禁用复选框需要给<code>.checkbox</code>添加<code>.disabled</code>类，并且给<code>&lt;input></code>添加<code>disabled</code>属性。一个主外，一个主内。
            </p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="checkbox disabled">
                  <input id="checkbox_3_1" type="checkbox" name="checkbox1" disabled/>
                  <label for="checkbox_3_1">复选框</label>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="checkbox disabled">
      &lt;input id="checkbox_3_1" type="checkbox" name="checkbox1" disabled/>
      &lt;label for="checkbox_3_1">复选框&lt;/label>
    &lt;/div>
                </code></pre>
              </div>
            </div>

            <h4>水平排列</h4>
            <p>将<code>.checkbox</code>变为<code>.checkbox-inline</code>，复选框将水平排列</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="checkbox-inline">
                  <input id="checkbox_4_1" type="checkbox" name="checkbox2" checked/>
                  <label for="checkbox_4_1">默认checkbox</label>
                </div>
                <div class="checkbox-inline">
                  <input id="checkbox_4_2" type="checkbox" name="checkbox2"/>
                  <label for="checkbox_4_2">默认checkbox</label>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="checkbox-inline">
      &lt;input id="checkbox_4_1" type="checkbox" name="checkbox2" checked/>
      &lt;label for="checkbox_4_1">默认checkbox&lt;/label>
    &lt;/div>
                  
    &lt;div class="checkbox-inline">
      &lt;input id="checkbox_4_2" type="checkbox" name="checkbox2"/>
      &lt;label for="checkbox_4_2">默认checkbox&lt;/label>
    &lt;/div>
                </code></pre>
              </div>
            </div>

            <h4>情境</h4>
            <p><code>.checkbox</code>有 7 种情境，下面介绍其他6种。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="checkbox checkbox-primary">
                  <input id="checkbox_5_1" type="checkbox" name="checkbox1" checked/>
                  <label for="checkbox_5_1">复选框</label>
                </div>
                <div class="checkbox checkbox-secondary">
                  <input id="checkbox_5_2" type="checkbox" name="checkbox1" checked/>
                  <label for="checkbox_5_2">复选框</label>
                </div>
                <div class="checkbox checkbox-success">
                  <input id="checkbox_5_3" type="checkbox" name="checkbox1" checked/>
                  <label for="checkbox_5_3">复选框</label>
                </div>
                <div class="checkbox checkbox-info">
                  <input id="checkbox_5_4" type="checkbox" name="checkbox1" checked/>
                  <label for="checkbox_5_4">复选框</label>
                </div>
                <div class="checkbox checkbox-warning">
                  <input id="checkbox_5_5" type="checkbox" name="checkbox1" checked/>
                  <label for="checkbox_5_5">复选框</label>
                </div>
                <div class="checkbox checkbox-danger">
                  <input id="checkbox_5_6" type="checkbox" name="checkbox1" checked/>
                  <label for="checkbox_5_6">复选框</label>
                </div>
              </div>
              <div class="yyui-docs-code">
              <pre v-hljs><code class="html">
    &lt;div class="checkbox checkbox-primary">
      &lt;input id="checkbox_5_1" type="checkbox" name="checkbox1" checked/>
      &lt;label for="checkbox_5_1">复选框&lt;/label>
    &lt;/div>
                
    &lt;div class="checkbox checkbox-secondary">
      &lt;input id="checkbox_5_2" type="checkbox" name="checkbox1" checked/>
      &lt;label for="checkbox_5_2">复选框&lt;/label>
    &lt;/div>

    &lt;div class="checkbox checkbox-success">
      &lt;input id="checkbox_5_3" type="checkbox" name="checkbox1" checked/>
      &lt;label for="checkbox_5_3">复选框&lt;/label>
    &lt;/div>

    &lt;div class="checkbox checkbox-info">
      &lt;input id="checkbox_5_4" type="checkbox" name="checkbox1" checked/>
      &lt;label for="checkbox_5_4">复选框&lt;/label>
    &lt;/div>

    &lt;div class="checkbox checkbox-warning">
      &lt;input id="checkbox_5_5" type="checkbox" name="checkbox1" checked/>
      &lt;label for="checkbox_5_5">复选框&lt;/label>
    &lt;/div>

    &lt;div class="checkbox checkbox-danger">
      &lt;input id="checkbox_5_6" type="checkbox" name="checkbox1" checked/>
      &lt;label for="checkbox_5_6">复选框&lt;/label>
    &lt;/div>
              </code></pre>
              </div>
            </div>

            <h3 id="form_switch">Switch</h3>
            <p>将<code>.checkbox</code>变为<code>.checkbox-switch</code>。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="checkbox-switch">
                  <input id="checkbox_switch_1_1" type="checkbox">
                  <label for="checkbox_switch_1_1"></label>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="checkbox-switch">
      &lt;input id="checkbox_switch_1_1" type="checkbox">
      &lt;label for="checkbox_switch_1_1">&lt;/label>
    &lt;/div>
                </code></pre>
              </div>
            </div>

            <h4>选中状态</h4>
            <p>给<code>&lt;input></code>标签添加<code>checked</code>属性。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="checkbox-switch">
                  <input id="checkbox_switch_2_1" type="checkbox" checked>
                  <label for="checkbox_switch_2_1"></label>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="checkbox-switch">
      &lt;input id="checkbox_switch_2_1" type="checkbox" checked>
      &lt;label for="checkbox_switch_2_1">&lt;/label>
    &lt;/div>
                </code></pre>
              </div>
            </div>

            <h5>禁用状态</h5>
            <p>禁用Switch需要给<code>.checkbox-switch</code>添加<code>.disabled</code>类，并且给<code>&lt;input></code>添加<code>disabled</code>属性。一个主外，一个主内。
            </p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="checkbox-switch disabled">
                  <input id="checkbox_switch_3_1" type="checkbox" disabled>
                  <label for="checkbox_switch_3_1"></label>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="checkbox-switch disabled">
      &lt;input id="checkbox_switch_3_1" type="checkbox" disabled>
      &lt;label for="checkbox_switch_3_1">&lt;/label>
    &lt;/div>
                </code></pre>
              </div>
            </div>

            <h4>尺寸</h4>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="checkbox-switch checkbox-switch-lg">
                  <input id="checkbox_switch_4_1" type="checkbox" checked>
                  <label for="checkbox_switch_4_1"></label>
                </div>
                <br/>
                <div class="checkbox-switch">
                  <input id="checkbox_switch_4_2" type="checkbox" checked>
                  <label for="checkbox_switch_4_2"></label>
                </div>
                <br/>
                <div class="checkbox-switch checkbox-switch-sm">
                  <input id="checkbox_switch_4_3" type="checkbox" checked>
                  <label for="checkbox_switch_4_3"></label>
                </div>
              </div>
              <div class="yyui-docs-code">
              <pre v-hljs><code class="html">
    &lt;div class="checkbox-switch checkbox-switch-lg">
      &lt;input id="checkbox_switch_4_1" type="checkbox" checked>
      &lt;label for="checkbox_switch_4_1">&lt;/label>
    &lt;/div>

    &lt;div class="checkbox-switch">
      &lt;input id="checkbox_switch_4_2" type="checkbox" checked>
      &lt;label for="checkbox_switch_4_2">&lt;/label>
    &lt;/div>

    &lt;div class="checkbox-switch checkbox-switch-sm">
      &lt;input id="checkbox_switch_4_3" type="checkbox" checked>
      &lt;label for="checkbox_switch_4_3">&lt;/label>
    &lt;/div>
              </code></pre>
              </div>
            </div>

            <h5>情境</h5>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="checkbox-switch">
                  <input id="checkbox_switch_5_1" type="checkbox" checked>
                  <label for="checkbox_switch_5_1"></label>
                </div>
                <br/>
                <div class="checkbox-switch checkbox-switch-secondary">
                  <input id="checkbox_switch_5_2" type="checkbox" checked>
                  <label for="checkbox_switch_5_2"></label>
                </div>
                <br/>
                <div class="checkbox-switch checkbox-switch-success">
                  <input id="checkbox_switch_5_3" type="checkbox" checked>
                  <label for="checkbox_switch_5_3"></label>
                </div>
                <br/>
                <div class="checkbox-switch checkbox-switch-info">
                  <input id="checkbox_switch_5_4" type="checkbox" checked>
                  <label for="checkbox_switch_5_4"></label>
                </div>
                <br/>
                <div class="checkbox-switch checkbox-switch-warning">
                  <input id="checkbox_switch_5_5" type="checkbox" checked>
                  <label for="checkbox_switch_5_5"></label>
                </div>
                <br/>
                <div class="checkbox-switch checkbox-switch-danger">
                  <input id="checkbox_switch_5_6" type="checkbox" checked>
                  <label for="checkbox_switch_5_6"></label>
                </div>
              </div>
              <div class="yyui-docs-code">
              <pre v-hljs><code class="html">
    &lt;div class="checkbox-switch">
      &lt;input id="checkbox_switch_5_1" type="checkbox" checked>
      &lt;label for="checkbox_switch_5_1">&lt;/label>
    &lt;/div>

    &lt;div class="checkbox-switch checkbox-switch-secondary">
      &lt;input id="checkbox_switch_5_2" type="checkbox" checked>
      &lt;label for="checkbox_switch_5_2">&lt;/label>
    &lt;/div>

    &lt;div class="checkbox-switch checkbox-switch-success">
      &lt;input id="checkbox_switch_5_3" type="checkbox" checked>
      &lt;label for="checkbox_switch_5_3">&lt;/label>
    &lt;/div>

    &lt;div class="checkbox-switch checkbox-switch-info">
      &lt;input id="checkbox_switch_5_4" type="checkbox" checked>
      &lt;label for="checkbox_switch_5_4">&lt;/label>
    &lt;/div>

    &lt;div class="checkbox-switch checkbox-switch-warning">
      &lt;input id="checkbox_switch_5_5" type="checkbox" checked>
      &lt;label for="checkbox_switch_5_5">&lt;/label>
    &lt;/div>
    
    &lt;div class="checkbox-switch checkbox-switch-danger">
      &lt;input id="checkbox_switch_5_6" type="checkbox" checked>
      &lt;label for="checkbox_switch_5_6">&lt;/label>
    &lt;/div>
              </code></pre>
              </div>
            </div>

            <h3 id="form_radio">radio</h3>
            <p><code>.radio</code>的结构要求比较严格。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="radio">
                  <input id="radio_1_1" type="radio" name="radio1"/>
                  <label for="radio_1_1">单选框</label>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="radio">
      &lt;input id="radio_1_1" type="radio" name="radio1"/>
      &lt;label for="radio_1_1">单选框&lt;/label>
    &lt;/div>
                </code></pre>
              </div>
            </div>

            <h4>选中状态</h4>
            <p>给<code>&lt;input></code>标签添加<code>checked</code>属性。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="radio">
                  <input id="radio_2_1" type="radio" checked>
                  <label for="radio_2_1">单选框</label>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="radio">
      &lt;input id="radio_2_1" type="radio" checked>
      &lt;label for="radio_2_1">单选框&lt;/label>
    &lt;/div>
                </code></pre>
              </div>
            </div>

            <h5>禁用状态</h5>
            <p>给<code>&lt;input></code>标签添加<code>disabled</code>属性。</p>
            <p><code>.radio</code>的<code>.disabled</code>类可选，它只是为鼠标添加手势样式。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="radio">
                  <input id="radio_3_1" type="radio" disabled>
                  <label for="radio_3_1">单选框</label>
                </div>
                <div class="radio disabled">
                  <input id="radio_3_2" type="radio" disabled>
                  <label for="radio_3_2">单选框</label>
                </div>
              </div>
              <div class="yyui-docs-code">
              <pre v-hljs><code class="html">
    &lt;div class="radio">
      &lt;input id="radio_3_1" type="radio" disabled>
      &lt;label for="radio_3_1">单选框&lt;/label>
    &lt;/div>

    &lt;div class="radio disabled">
      &lt;input id="radio_3_2" type="radio" disabled>
      &lt;label for="radio_3_2">单选框&lt;/label>
    &lt;/div>
              </code></pre>
              </div>
            </div>

            <h4>水平排列</h4>
            <p>将<code>.radio</code>变为<code>.radio-inline</code>，复选框将水平排列</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="radio-inline">
                  <input id="radio_4_1" type="radio" name="radio2" checked/>
                  <label for="radio_4_1">单选框</label>
                </div>
                <div class="radio-inline">
                  <input id="radio_4_2" type="radio" name="radio2"/>
                  <label for="radio_4_2">单选框</label>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="radio-inline">
      &lt;input id="radio_4_1" type="radio" name="radio2" checked/>
      &lt;label for="radio_4_1">单选框&lt;/label>
    &lt;/div>
                  
    &lt;div class="radio-inline">
      &lt;input id="radio_4_2" type="radio" name="radio2"/>
      &lt;label for="radio_4_2">单选框&lt;/label>
    &lt;/div>
                </code></pre>
              </div>
            </div>

            <h4>情境</h4>
            <p><code>.radio</code>有 7 种情境，下面介绍其他6种。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="radio radio-primary">
                  <input id="radio_5_1" type="radio" name="radio1" checked/>
                  <label for="radio_5_1">单选框</label>
                </div>
                <div class="radio radio-secondary">
                  <input id="radio_5_2" type="radio" name="radio2" checked/>
                  <label for="radio_5_2">单选框</label>
                </div>
                <div class="radio radio-success">
                  <input id="radio_5_3" type="radio" name="radio3" checked/>
                  <label for="radio_5_3">单选框</label>
                </div>
                <div class="radio radio-info">
                  <input id="radio_5_4" type="radio" name="radio4" checked/>
                  <label for="radio_5_4">单选框</label>
                </div>
                <div class="radio radio-warning">
                  <input id="radio_5_5" type="radio" name="radio5" checked/>
                  <label for="radio_5_5">单选框</label>
                </div>
                <div class="radio radio-danger">
                  <input id="radio_5_6" type="radio" name="radio6" checked/>
                  <label for="radio_5_6">单选框</label>
                </div>
              </div>
              <div class="yyui-docs-code">
              <pre v-hljs><code class="html">
    &lt;div class="radio radio-primary">
      &lt;input id="radio_5_1" type="radio" name="radio1" checked/>
      &lt;label for="radio_5_1">单选框&lt;/label>
    &lt;/div>

    &lt;div class="radio radio-secondary">
      &lt;input id="radio_5_2" type="radio" name="radio2" checked/>
      &lt;label for="radio_5_2">单选框&lt;/label>
    &lt;/div>

    &lt;div class="radio radio-success">
      &lt;input id="radio_5_3" type="radio" name="radio3" checked/>
      &lt;label for="radio_5_3">单选框&lt;/label>
    &lt;/div>

    &lt;div class="radio radio-info">
      &lt;input id="radio_5_4" type="radio" name="radio4" checked/>
      &lt;label for="radio_5_4">单选框&lt;/label>
    &lt;/div>

    &lt;div class="radio radio-warning">
      &lt;input id="radio_5_5" type="radio" name="radio5" checked/>
      &lt;label for="radio_5_5">单选框&lt;/label>
    &lt;/div>
                
    &lt;div class="radio radio-danger">
      &lt;input id="radio_5_6" type="radio" name="radio6" checked/>
      &lt;label for="radio_5_6">单选框&lt;/label>
    &lt;/div>
              </code></pre>
              </div>
            </div>

            <h3 id="form_file">文件上传</h3>
            <p>在<code>file</code>外面包裹一层<code>.form-file</code>，实现样式优化。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="form-file">
                  <input type="file" class="form-control" name="upload"/>
                  <label class="file-surface">点击上传</label>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="form-file">
      &lt;input type="file" class="form-control" name="upload"/>
      &lt;label class="file-surface">点击上传&lt;/label>
    &lt;/div>
                </code></pre>
              </div>
            </div>

            <h3 id="form_control">form-control</h3>
            <p><code>.form-control</code>是一个比较重要的类，在任何地方都可以使用。</p>

            <h4>实例</h4>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <input type="text" class="form-control" placeholder="user name"/>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;input type="text" class="form-control" placeholder="user name"/>
                </code></pre>
              </div>
            </div>

            <h4>尺寸</h4>
            <p>YY UI 为<code>.form-control</code>提供了3种尺寸。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <input type="text" class="form-control form-control-lg" placeholder="form-control-lg"/>
                <br/>
                <input type="text" class="form-control" placeholder="default"/>
                <br/>
                <input type="text" class="form-control form-control-sm" placeholder="form-control-sm"/>
              </div>
              <div class="yyui-docs-code">
              <pre v-hljs><code class="html">
    &lt;input type="text" class="form-control form-control-lg" placeholder="form-control-lg"/>

    &lt;input type="text" class="form-control" placeholder="default"/>

    &lt;input type="text" class="form-control form-control-sm" placeholder="form-control-sm"/>
              </code></pre>
              </div>
            </div>

            <h4>验证</h4>
            <p>
              为<code>.form-control</code>添加<code>.form-control-success, .form-control-warning, .form-control-error</code>表达验证状态。
            </p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <input type="text" class="form-control form-control-success" placeholder="form-control-success"/>
                <br/>
                <input type="text" class="form-control form-control-warning" placeholder="form-control-warning"/>
                <br/>
                <input type="text" class="form-control form-control-error" placeholder="form-control-error"/>
              </div>
              <div class="yyui-docs-code">
              <pre v-hljs><code class="html">
    &lt;input type="text" class="form-control form-control-success" placeholder="form-control-success"/>
  
    &lt;input type="text" class="form-control form-control-warning" placeholder="form-control-warning"/>

    &lt;input type="text" class="form-control form-control-error" placeholder="form-control-error"/>
              </code></pre>
              </div>
            </div>
          </section>

          <div class="divider-lg"></div>

          <section class="yyui-docs-section" id="button">
            <h2 class="m-b-6">按钮

              <small><code>_buttons.scss</code></small>
            </h2>
            <p>可以为<code>&lt;a>、&lt;button>、&lt;input></code>添加样式。所有按钮都要添加<code>.btn</code>基类。</p>

            <h3 id="button_brand">基本按钮</h3>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <button type="button" class="btn btn-default">Default</button>
                <button type="button" class="btn btn-primary">Primary</button>
                <button type="button" class="btn btn-secondary">Secondary</button>
                <button type="button" class="btn btn-info">Info</button>
                <button type="button" class="btn btn-success">Success</button>
                <button type="button" class="btn btn-warning">Warning</button>
                <button type="button" class="btn btn-danger">Danger</button>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;button type="button" class="btn btn-default">Default&lt;/button>

    &lt;button type="button" class="btn btn-primary">Primary&lt;/button>

    &lt;button type="button" class="btn btn-secondary">Secondary&lt;/button>

    &lt;button type="button" class="btn btn-info">Info&lt;/button>

    &lt;button type="button" class="btn btn-success">Success&lt;/button>

    &lt;button type="button" class="btn btn-warning">Warning&lt;/button>
                  
    &lt;button type="button" class="btn btn-danger">Danger&lt;/button>
                </code></pre>
              </div>
            </div>

            <h3 id="button_outline">轮廓按钮</h3>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <button type="button" class="btn btn-default-outline">Default</button>
                <button type="button" class="btn btn-primary-outline">Primary</button>
                <button type="button" class="btn btn-secondary-outline">Secondary</button>
                <button type="button" class="btn btn-info-outline">Info</button>
                <button type="button" class="btn btn-success-outline">Success</button>
                <button type="button" class="btn btn-warning-outline">Warning</button>
                <button type="button" class="btn btn-danger-outline">Danger</button>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;button type="button" class="btn btn-default-outline">Default&lt;/button>
                  
    &lt;button type="button" class="btn btn-primary-outline">Primary&lt;/button>
                  
    &lt;button type="button" class="btn btn-secondary-outline">Secondary&lt;/button>
                  
    &lt;button type="button" class="btn btn-info-outline">Info&lt;/button>
                  
    &lt;button type="button" class="btn btn-success-outline">Success&lt;/button>
                  
    &lt;button type="button" class="btn btn-warning-outline">Warning&lt;/button>
                  
    &lt;button type="button" class="btn btn-danger-outline">Danger&lt;/button>
                </code></pre>
              </div>
            </div>

            <h3 id="button_link">链接按钮</h3>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <button type="button" class="btn btn-link">link</button>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;button type="button" class="btn btn-link">link&lt;/button>
                </code></pre>
              </div>
            </div>

            <h3 id="button_assist">增强样式</h3>
            <h4>按钮大小</h4>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <button type="button" class="btn btn-primary btn-xs">极小</button>
                <button type="button" class="btn btn-info btn-sm">小</button>
                <button type="button" class="btn btn-success">默认大小</button>
                <button type="button" class="btn btn-warning btn-lg">大按钮</button>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;button type="button" class="btn btn-primary btn-xs">极小&lt;/button>

    &lt;button type="button" class="btn btn-info btn-sm">小&lt;/button>

    &lt;button type="button" class="btn btn-success">默认大小&lt;/button>

    &lt;button type="button" class="btn btn-warning btn-lg">大按钮&lt;/button>
                </code></pre>
              </div>
            </div>

            <h4>按钮圆角</h4>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <button type="button" class="btn btn-primary btn-round">小圆角按钮</button>
                <button type="button" class="btn btn-info btn-circle">圆形按钮</button>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;button type="button" class="btn btn-primary btn-round">小圆角按钮&lt;/button>
                  
    &lt;button type="button" class="btn btn-info btn-circle">圆形按钮&lt;/button>
                </code></pre>
              </div>
            </div>

            <h4>块按钮</h4>
            <p>块按钮的宽度是<code>100%</code>。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <button type="button" class="btn btn-primary btn-block">块级按钮</button>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;button type="button" class="btn btn-primary btn-block">块级按钮&lt;/button>
                </code></pre>
              </div>
            </div>
          </section>

          <div class="divider-lg"></div>

          <section class="yyui-docs-section" id="image">
            <h2 class="m-b-6">图片
              <small><code>_images.scss</code></small>
            </h2>

            <h3 id="image_responsive">响应式图片</h3>
            <p>
              <code>.img-responsive</code>类可以让图片支持响应式布局。其实质是为图片设置了<code>display: block; max-width: 100%; height: auto;</code>属性，从而让图片在其父元素中更好的缩放。
            </p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <img class="img-responsive" src="../assets/image/haimian.jpg" alt=""/>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;img class="img-responsive" src="..." alt=""/>
                </code></pre>
              </div>
            </div>

            <h3 id="image_style">图片样式</h3>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <img class="img-round" src="../assets/image/haimian.jpg" alt=""/>
                <img class="img-circle" src="../assets/image/haimian.jpg" alt=""/>
                <img class="img-thumbnail" src="../assets/image/haimian.jpg" alt=""/>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;img class="img-round" src="..." alt=""/>

    &lt;img class="img-circle" src="..." alt=""/>

    &lt;img class="img-thumbnail" src="..." alt=""/>
                </code></pre>
              </div>
            </div>
          </section>

          <div class="divider-lg"></div>

          <section class="yyui-docs-section" id="assist">
            <h2 class="m-b-6">辅助类</h2>
            <p>辅助类设定了一些在任何地方都可以使用的类。</p>

            <h3 id="assist_font_size">文字大小</h3>
            <p>YY UI 可以快速设置9种大小的文字。</p>
            <ul>
              <li><code>.font-20:</code>20px</li>
              <li><code>.font-19:</code>19px</li>
              <li><code>.font-18:</code>18px</li>
              <li><code>.font-17:</code>17px</li>
              <li><code>.font-16:</code>16px</li>
              <li><code>.font-15:</code>15px</li>
              <li><code>.font-14:</code>14px</li>
              <li><code>.font-13:</code>13px</li>
              <li><code>.font-12:</code>12px</li>
            </ul>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <p class="font-20">快速设置文字大小</p>
                <p class="font-19">快速设置文字大小</p>
                <p class="font-18">快速设置文字大小</p>
                <p class="font-17">快速设置文字大小</p>
                <p class="font-16">快速设置文字大小</p>
                <p class="font-15">快速设置文字大小</p>
                <p class="font-14">快速设置文字大小</p>
                <p class="font-13">快速设置文字大小</p>
                <p class="font-12">快速设置文字大小</p>
              </div>
              <div class="yyui-docs-code">
              <pre v-hljs><code class="html">
    &lt;p class="font-20">快速设置文字大小&lt;/p>

    &lt;p class="font-19">快速设置文字大小&lt;/p>

    &lt;p class="font-18">快速设置文字大小&lt;/p>

    &lt;p class="font-17">快速设置文字大小&lt;/p>

    &lt;p class="font-16">快速设置文字大小&lt;/p>

    &lt;p class="font-15">快速设置文字大小&lt;/p>

    &lt;p class="font-14">快速设置文字大小&lt;/p>

    &lt;p class="font-13">快速设置文字大小&lt;/p>

    &lt;p class="font-12">快速设置文字大小&lt;/p>
              </code></pre>
              </div>
            </div>


            <h3 id="assist_text_alignment">排列方式</h3>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <p class="text-left">左对齐</p>
                <div class="divider-sm"></div>
                <p class="text-center">居中</p>
                <div class="divider-sm"></div>
                <p class="text-right">右对齐</p>
                <div class="divider-sm"></div>
                <p class="text-justify">值 justify 可以使文本的两端都对齐。在两端对齐文本中，文本行的左右两端都放在父元素的内边界上。然后，调整单词和字母间的
                  间隔，使各行的长度恰好相等。您也许已经注意到了，两端对齐文本在打印领域很常见。不过在 CSS 中，还需要多做些考虑。<br/>
                  要由用户代理（而不是 CSS）来确定两端对齐文本如何拉伸，以填满父元素左右边界之间的空间。例如，有些浏览器可能只在单词之间增加额外的空间，
                  而另外一些浏览器可能会平均分布字母间的额外空间（不过 CSS 规范特别指出，如果 letter-spacing 属性指定为一个长度值，“用户代理不能进一步增加或
                  减少字符间的空间”）。还有一些用户代理可能会减少某些行的空间，使文本挤得更紧密。所有这些做法都会影响元素的外观，甚至改变其高度，这取决于用户代理
                  的对齐选择影响了多少文本行。<br/>
                  CSS 也没有指定应当如何处理连字符。大多数两端对齐文本都使用连字符将长单词分开放在两行上，从而缩小单词之间的间隔，改善文本行的外观。不过，由于 CSS
                  没有定义连字符行为，用户代理不太可能自动加连字符。因此，在 CSS 中，两端对齐文本看上去没有打印出来好看，特别是元素可能太窄，以至于每行只能放下几个
                  单词。当然，使用窄设计元素是可以的，不过要当心相应的缺点。
                </p>
                <div class="divider-sm"></div>
                <p class="text-nowrap text-muted bg-success" style="width: 100px;">
                  这是不碰到 “br” 不换行的犟驴子，本段宽度只有100px，但是弄死不换行。</p>
                <div class="divider-sm"></div>
                <p class="text-truncate" style="width: 100px;">超出了截断文本的宽度会用省略号显示。</p>
              </div>
              <div class="yyui-docs-code">
              <pre v-hljs><code class="html">
    &lt;p class="text-left">&lt;/p>

    &lt;p class="text-center">&lt;/p>

    &lt;p class="text-right">&lt;/p>

    &lt;p class="text-justify">&lt;/p>

    &lt;p class="text-nowrap">&lt;/p>

    &lt;p class="text-truncate">&lt;/p>
              </code></pre>
              </div>
            </div>

            <h3 id="assist_text_indent">文本缩进</h3>
            <p>添加<code>.text-indent</code>类，为段落添加缩进。默认缩进<code>2em</code>。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <p class="text-indent">值 justify 可以使文本的两端都对齐。在两端对齐文本中，文本行的左右两端都放在父元素的内边界上。然后，调整单词和字母间的
                  间隔，使各行的长度恰好相等。您也许已经注意到了，两端对齐文本在打印领域很常见。不过在 CSS 中，还需要多做些考虑。</p>
                <p class="text-indent">要由用户代理（而不是 CSS）来确定两端对齐文本如何拉伸，以填满父元素左右边界之间的空间。例如，有些浏览器可能只在单词之间增加额外的空间，
                  而另外一些浏览器可能会平均分布字母间的额外空间（不过 CSS 规范特别指出，如果 letter-spacing 属性指定为一个长度值，“用户代理不能进一步增加或
                  减少字符间的空间”）。还有一些用户代理可能会减少某些行的空间，使文本挤得更紧密。所有这些做法都会影响元素的外观，甚至改变其高度，这取决于用户代理
                  的对齐选择影响了多少文本行。</p>
                <p class="text-indent">CSS 也没有指定应当如何处理连字符。大多数两端对齐文本都使用连字符将长单词分开放在两行上，从而缩小单词之间的间隔，改善文本行的外观。不过，由于 CSS
                  没有定义连字符行为，用户代理不太可能自动加连字符。因此，在 CSS 中，两端对齐文本看上去没有打印出来好看，特别是元素可能太窄，以至于每行只能放下几个
                  单词。当然，使用窄设计元素是可以的，不过要当心相应的缺点。
                </p>
              </div>
              <div class="yyui-docs-code">
              <pre v-hljs><code class="html">
    &lt;p class="text-indent">&lt;/p>
              </code></pre>
              </div>
            </div>

            <h3 id="assist_text_case">大小写转换</h3>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <p class="text-uppercase">It will switch text to upper case.</p>
                <p class="text-lowercase">It will switch text to lower case.</p>
                <p class="text-capitalize">It will switch the first letter of everyone words to uppper case.</p>
              </div>
              <div class="yyui-docs-code">
              <pre v-hljs><code class="html">
    &lt;p class="text-uppercase"> &lt;/p>

    &lt;p class="text-lowercase"> &lt;/p>

    &lt;p class="text-capitalize"> &lt;/p>
              </code></pre>
              </div>
            </div>

            <h3 id="assist_text_color">文本颜色</h3>
            <p>为标签添加<code>.text-*</code>类，设置文本颜色。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <p class="text-primary m-b-0">primary</p>
                <p class="text-secondary m-b-0">secondary</p>
                <p class="text-info m-b-0">info</p>
                <p class="text-success m-b-0">success</p>
                <p class="text-warning m-b-0">warning</p>
                <p class="text-danger m-b-0">danger</p>
                <p class="text-dark m-b-0">dark</p>
                <p class="text-light bg-dark">light</p>
              </div>
              <div class="yyui-docs-code">
              <pre v-hljs><code class="html">
    &lt;p class="text-primary">primary&lt;/p>

    &lt;p class="text-secondary">secondary&lt;/p>

    &lt;p class="text-info">info&lt;/p>

    &lt;p class="text-success">success&lt;/p>

    &lt;p class="text-warning">warning&lt;/p>

    &lt;p class="text-danger">danger&lt;/p>

    &lt;p class="text-dark">dark&lt;/p>

    &lt;p class="text-light">light&lt;/p>
              </code></pre>
              </div>
            </div>

            <h3 id="assist_text_family">文本字体</h3>
            <p>为标签添加<code>.text-*</code>类，设置文本字体。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <p class="text-web m-b-0">网页字体，web typeface</p>
                <p class="text-paper m-b-0">印刷字体，paper print typeface</p>
                <p class="text-letter m-b-0">字母，letter</p>
              </div>
              <div class="yyui-docs-code">
              <pre v-hljs><code class="html">
    &lt;p class="text-web"> &lt;/p>

    &lt;p class="text-paper"> &lt;/p>

    &lt;p class="text-letter"> &lt;/p>
              </code></pre>
              </div>
            </div>

            <h3 id="assist_border">边框</h3>
            <p>为标签添加<code>.border-*</code>类，设置盒子边框样式。预设了4种样式。</p>
            <ul>
              <li><code>.border-none:</code>无边框。</li>
              <li><code>.border-square:</code>直角边框。</li>
              <li><code>.border-round:</code>圆角边框。</li>
              <li><code>.border-circle:</code>圆形边框。</li>
            </ul>

            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="row">
                  <div class="col-sm-3">
                    <div class="bg-success border-none" style="width: 100px; height: 100px;"></div>
                  </div>
                  <div class="col-sm-3">
                    <div class="bg-info border-square" style="width: 100px; height: 100px;"></div>
                  </div>
                  <div class="col-sm-3">
                    <div class="bg-warning border-round" style="width: 100px; height: 100px;"></div>
                  </div>
                  <div class="col-sm-3">
                    <div class="bg-danger border-circle" style="width: 100px; height: 50px;"></div>
                  </div>
                </div>
              </div>
              <div class="yyui-docs-code">
              <pre v-hljs><code class="html">
    &lt;div class="border-none"> &lt;/div>

    &lt;div class="border-square"> &lt;/div>

    &lt;div class="border-round"> &lt;/div>

    &lt;div class="border-circle"> &lt;/div>
              </code></pre>
              </div>
            </div>

            <h3 id="assist_bg">背景</h3>
            <p>为标签添加<code>.text-*</code>类，设置背景。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <p class="bg-primary m-b-2">primary</p>
                <p class="bg-secondary m-b-2">secondary</p>
                <p class="bg-info m-b-2">info</p>
                <p class="bg-success m-b-2">success</p>
                <p class="bg-warning m-b-2">warning</p>
                <p class="bg-danger m-b-2">danger</p>
                <p class="bg-dark text-light m-b-2">dark</p>
                <p class="bg-light m-b-2">light</p>
                <p class="bg-perspective m-b-2">perspective</p>
              </div>
              <div class="yyui-docs-code">
              <pre v-hljs><code class="html">
    &lt;p class="bg-primary"> &lt;/p>

    &lt;p class="bg-secondary"> &lt;/p>

    &lt;p class="bg-info"> &lt;/p>

    &lt;p class="bg-success"> &lt;/p>

    &lt;p class="bg-warning"> &lt;/p>

    &lt;p class="bg-danger"> &lt;/p>

    &lt;p class="bg-dark"> &lt;/p>

    &lt;p class="bg-light"> &lt;/p>

    &lt;p class="bg-perspective"> &lt;/p>
              </code></pre>
              </div>
            </div>

            <h3 id="assist_list">列表</h3>
            <p>设置了无样式列表和内联列表。</p>

            <h4>无样式列表</h4>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <ul class="list-none">
                  <li>无样式列表</li>
                  <li>无样式列表</li>
                  <li>无样式列表</li>
                </ul>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;ul class="list-none">
      &lt;li>无样式列表&lt;/li>
      &lt;li>无样式列表&lt;/li>
      &lt;li>无样式列表&lt;/li>
    &lt;/ul>
                </code></pre>
              </div>
            </div>

            <h4>内联列表</h4>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <ul class="list-inline">
                  <li>内联列表</li>
                  <li>内联列表</li>
                  <li>内联列表</li>
                </ul>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;ul class="list-inline">
      &lt;li>内联列表&lt;/li>
      &lt;li>内联列表&lt;/li>
      &lt;li>内联列表&lt;/li>
    &lt;/ul>
                </code></pre>
              </div>
            </div>

            <h3 id="assist_float">浮动</h3>
            <h4>快速浮动</h4>
            <p>通过添加一个类，可以将任意元素向左或向右浮动。<code>!important</code>被用来明确 CSS 样式的优先级。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface clearfix">
                <div class="bg-success text-white p-hz-2 p-vt-2 f-l" style="width: 400px;">
                  float 属性定义元素在哪个方向浮动。以往这个属性总应用于图像，使文本围绕在图像周围，不过在 CSS 中，任何元素都可以浮动。浮动元素会生成一个块级框，
                  而不论它本身是何种元素。如果浮动非替换元素，则要指定一个明确的宽度；否则，它们会尽可能地窄。注释：假如在一行之上只有极少的空间可供浮动元素，
                  那么这个元素会跳至下一行，这个过程会持续到某一行拥有足够的空间为止。
                </div>
                <div class="bg-success text-white p-hz-2 p-vt-2 f-r" style="width: 400px;">
                  float 属性定义元素在哪个方向浮动。以往这个属性总应用于图像，使文本围绕在图像周围，不过在 CSS 中，任何元素都可以浮动。浮动元素会生成一个块级框，
                  而不论它本身是何种元素。如果浮动非替换元素，则要指定一个明确的宽度；否则，它们会尽可能地窄。注释：假如在一行之上只有极少的空间可供浮动元素，
                  那么这个元素会跳至下一行，这个过程会持续到某一行拥有足够的空间为止。
                </div>
              </div>
              <div class="yyui-docs-code">
              <pre v-hljs><code class="html">
    &lt;div class="f-l">
      左浮动
    &lt;/div>

    &lt;div class="f-r">
      右浮动
    &lt;/div>
              </code></pre>
              </div>
            </div>

            <h3 id="assist_position">定位方式</h3>
            <p>通过添加一个类，可以快速设置元素的定位方式。只针对相对定位和粘性定位（css3）。</p>
            <p>粘性定位，它就像是relative和fixed的合体，当在屏幕中时按常规流排版，当卷动到屏幕外时则表现如fixed。该属性只被高版本的谷歌和火狐浏览器支持。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-code">
              <pre v-hljs><code class="html">
    &lt;div class="pt-relative">
      相对定位
    &lt;/div>

    &lt;div class="pt-sticky">
      粘性定位，fixed的升级版
    &lt;/div>
              </code></pre>
              </div>
            </div>

            <h4>清除浮动</h4>
            <p>子元素设置了浮动过后，父元素会塌陷，即没有高度，除了设置父元素<code>overflow: hidden;</code>属性以外，还可以给父元素添加<code>.clearfix</code>类。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="bg-success text-white p-hz-2 p-vt-2">
                  子元素含有浮动元素，在父元素上添加<code>.clearfix</code>类
                </div>
              </div>
            </div>

            <h3 id="assist_close">关闭按钮</h3>
            <p>一个象征关闭的图标。在<code>&lt;button></code>标签上添加<code>.close</code>类。</p>
            <p class="text-danger">这里的“×”是乘号，不是字母x，而是转义字符"&amp;times;" 或者 "&amp;#215;"</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface clearfix">
                <button type="button" class="close">&times;</button>
              </div>
              <div class="yyui-docs-code">
              <pre v-hljs><code class="html">
    &lt;button type="button" class="close">&times;&lt;/button>
              </code></pre>
              </div>
            </div>

            <h3 id="assist_triangle">三角符号</h3>
            <p>显示三角符号。在<code>&lt;div></code>标签上添加<code>.triangle-*</code>类。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface clearfix">
                <div class="triangle-up"></div>
                <div class="triangle-down"></div>
                <div class="triangle-left"></div>
                <div class="triangle-right"></div>
              </div>
              <div class="yyui-docs-code">
              <pre v-hljs><code class="html">
    &lt;div class="triangle-up">&lt;/div>

    &lt;div class="triangle-down">&lt;/div>

    &lt;div class="triangle-left">&lt;/div>

    &lt;div class="triangle-right">&lt;/div>
              </code></pre>
              </div>
            </div>

            <h3 id="assist_margin">外边距</h3>
            <p>辅助标签设置外边距，YY UI 预设了6种类型的外边距。</p>
            <ul>
              <li><code>.m-0: </code>清除外边距。</li>
              <li><code>.m-t-*: </code>上外边距。</li>
              <li><code>.m-r-*: </code>右外边距。</li>
              <li><code>.m-b-*: </code>下外边距。</li>
              <li><code>.m-l-*: </code>左外边距。</li>
              <li><code>.m-hz-*: </code>水平方向外边距。</li>
              <li><code>.m-vt-*: </code>垂直方向外边距。</li>
              <li>以上<code>*</code>为 <span class="text-info">0 ~ 10</span>。</li>
            </ul>
            <p><code>*</code>以 <span class="text-info">5px</span>
              为基准。如：<code>.m-t-5</code>表示为<code>margin-top: 25px;</code>。</p>

            <h3 id="assist_padding">内边距</h3>
            <p>辅助标签设置内边距，YY UI 预设了6种类型的内边距。</p>
            <ul>
              <li><code>.p-0: </code>清除内边距。</li>
              <li><code>.p-t-*: </code>上内边距。</li>
              <li><code>.p-r-*: </code>右内边距。</li>
              <li><code>.p-b-*: </code>下内边距。</li>
              <li><code>.p-l-*: </code>左内边距。</li>
              <li><code>.p-hz-*: </code>水平方向内边距。</li>
              <li><code>.p-vt-*: </code>垂直方向内边距。</li>
              <li>以上<code>*</code>为 <span class="text-info">0 ~ 10</span>。</li>
            </ul>
            <p><code>*</code>以 <span class="text-info">5px</span>
              为基准。如：<code>.p-t-5</code>表示为<code>padding-top: 25px;</code>。</p>

          </section>
        </div>

        <div class="col-md-3">
          <div class="sidebar" id="sidebar">
            <ul class="nav nav-vt">
              <li>
                <a class="nav-link" @click.stop.prevent="toAnchor('grid')" href="#grid">栅格系统</a>
                <ul class="nav">
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('grid_introduce')" href="#grid_introduce">简介</a>
                  </li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('grid_options')" href="#grid_options">参数</a>
                  </li>
                </ul>
              </li>
              <li>
                <a class="nav-link" @click.stop.prevent="toAnchor('type')" href="#type">调整</a>
                <ul class="nav">
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('type_head')" href="#type_head">标题</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('type_mark')" href="#type_mark">突出文本</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('type_del_ins')" href="#type_del_ins">更新和修正</a>
                  </li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('type_abbr')" href="#type_abbr">缩写</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('type_address')" href="#type_address">地址</a>
                  </li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('type_blockquote')"
                         href="#type_blockquote">引用</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('type_dl')" href="#type_dl">描述</a></li>
                </ul>
              </li>
              <li>
                <a class="nav-link" @click.stop.prevent="toAnchor('code')" href="#code">代码</a>
                <ul class="nav">
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('code_code')" href="#code_code">内联代码</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('code_kbd')" href="#code_kbd">键盘文本</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('code_pre')" href="#code_pre">键盘文本</a></li>
                </ul>
              </li>
              <li>
                <a class="nav-link" @click.stop.prevent="toAnchor('table')" href="#table">表格</a>
                <ul class="nav">
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('table_default')" href="#table_default">默认表格</a>
                  </li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('table_responsive')" href="#table_responsive">响应式表格</a>
                  </li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('table_sm')" href="#table_sm">紧凑型表格</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('table_striped')"
                         href="#table_striped">带条纹表格</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('table_border')" href="#table_border">带边框表格</a>
                  </li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('table_row_status')" href="#table_row_status">表格行状态</a>
                  </li>
                </ul>
              </li>
              <li>
                <a class="nav-link" @click.stop.prevent="toAnchor('form')" href="#form">表单</a>
                <ul class="nav">
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('form_example')" href="#form_example">基本实例</a>
                  </li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('form_size')" href="#form_size">尺寸</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('form_hz')" href="#form_hz">水平排列表单</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('form_inline')" href="#form_inline">内联表单</a>
                  </li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('form_validate')" href="#form_validate">验证</a>
                  </li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('form_select')" href="#form_select">select</a>
                  </li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('form_checkbox')"
                         href="#form_checkbox">checkbox</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('form_switch')" href="#form_switch">switch</a>
                  </li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('form_radio')" href="#form_radio">radio</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('form_file')" href="#form_file">文件上传</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('form_control')" href="#form_control">form-control</a>
                  </li>
                </ul>
              </li>
              <li>
                <a class="nav-link" @click.stop.prevent="toAnchor('button')" href="#button">按钮</a>
                <ul class="nav">
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('button_brand')" href="#button_brand">默认按钮</a>
                  </li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('button_outline')"
                         href="#button_outline">轮廓按钮</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('button_link')" href="#button_link">链接按钮</a>
                  </li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('button_assist')" href="#button_assist">增强样式</a>
                  </li>
                </ul>
              </li>
              <li>
                <a class="nav-link" @click.stop.prevent="toAnchor('image')" href="#image">图片</a>
                <ul class="nav">
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('image_responsive')" href="#image_responsive">响应式图片</a>
                  </li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('image_style')" href="#image_style">图片样式</a>
                  </li>
                </ul>
              </li>
              <li>
                <a class="nav-link" @click.stop.prevent="toAnchor('assist')" href="#assist">辅助类</a>
                <ul class="nav">
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('assist_font_size')" href="#assist_font_size">文字大小</a>
                  </li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('assist_text_alignment')"
                         href="#assist_text_alignment">排列方式</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('assist_text_indent')"
                         href="#assist_text_indent">文本缩进</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('assist_text_indent')" href="#assist_text_case">大小写转换</a>
                  </li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('assist_text_color')" href="#assist_text_color">文本颜色</a>
                  </li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('assist_text_color')"
                         href="#assist_text_family">文本字体</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('assist_text_color')"
                         href="#assist_border">边框</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('assist_text_color')" href="#assist_bg">背景</a>
                  </li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('assist_list')" href="#assist_list">列表</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('assist_float')" href="#assist_float">浮动</a>
                  </li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('assist_position')"
                         href="#assist_position">定位方式</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('assist_close')" href="#assist_close">关闭按钮</a>
                  </li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('assist_triangle')"
                         href="#assist_triangle">三角</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('assist_margin')" href="#assist_margin">外边距</a>
                  </li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('assist_padding')"
                         href="#assist_padding">内边距</a></li>
                </ul>
              </li>
            </ul>
            <div class="back-to-top">
              <a class="border-none" @click.stop.prevent="toAnchor('top')" href="#top">&#10140;</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <slogan-component slogan-bg="slogan-global" slogan-text="how fast you can, just go."></slogan-component>
  </div>
</template>

<script>
  import masthead from './common/masthead'
  import slogan from './common/slogan.vue'
  import common from '../assets/js/common'

  export default {
    name: 'global',
    components: {
      'masthead-component': masthead,
      'slogan-component': slogan
    },
    methods: {
      toAnchor: common.toAnchor
    },
    mounted () {
      common.toTop()
    }
  }
</script>