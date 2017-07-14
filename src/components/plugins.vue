<template>
  <div>

    <masthead-component>
      <h1>插件</h1>
      <h4>YY UI 提供了一些常用的组件，可以进行快速的模块构建。</h4>
    </masthead-component>

    <div class="container">
      <div id="sidebar_top_marker"></div>
      <div class="row">
        <div class="col-sm-9">
          <section class="yyui-docs-section" id="dropdown">
            <h2 class="m-b-6">下拉菜单
              <small><code>dropdown.js</code></small>
            </h2>

            <h3 id="dropdown_example">实例</h3>
            <p>将下拉菜单触发器和下拉菜单都包裹在<code>.dropdown</code>里。然后加入组成菜单的HTML代码。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="dropdown">
                  <button type="button" class="btn btn-default dropdown-toggle">dropdown</button>
                  <ul class="dropdown-menu">
                    <li class="dropdown-item"><a href="javascript:;">Action</a></li>
                    <li class="dropdown-item"><a href="javascript:;">Action</a></li>
                    <li class="dropdown-item"><a href="javascript:;">Action</a></li>
                  </ul>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="dropdown">
      &lt;button type="button" class="btn btn-default dropdown-toggle">dropdown&lt;/button>
      &lt;ul class="dropdown-menu">
        &lt;li class="dropdown-item">&lt;a href="javascript:;">Action&lt;/a>&lt;/li>
        &lt;li class="dropdown-item">&lt;a href="javascript:;">Action&lt;/a>&lt;/li>
        &lt;li class="dropdown-item">&lt;a href="javascript:;">Action&lt;/a>&lt;/li>
      &lt;/ul>
    &lt;/div>
                </code></pre>
              </div>
            </div>

            <h3 id="dropdown_usage">用法</h3>
            <p><code>.dropdown</code>中的<code>.dropdown-toggle</code>是下拉菜单的开关，或者用<code>data-toggle="dropdown"</code>，也可以控制下拉菜单。
            </p>
          </section>

          <div class="divider-lg"></div>

          <section class="yyui-docs-section" id="modal">
            <h2 class="m-b-6">模态框
              <small><code>modal.js</code></small>
            </h2>
            <p class="lead">
              模态框由三层三部分组成。<code>.modal</code>是最外层，<code>.modal-dialog</code>是对话框层，<code>.modal-content</code>
              是内容层。内容层由头部、主体、脚部组成。</p>

            <h3 id="modal_example">实例</h3>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <button type="button" class="btn btn-theme" data-toggle="modal" data-target="#modal_1">模态框</button>
                <div class="modal fade" id="modal_1">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">标题</h4>
                      </div>
                      <div class="modal-body">
                        <p>内容...</p>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                        <button type="button" class="btn btn-primary">保存</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;button type="button" class="btn btn-theme" data-toggle="modal" data-target="#modal_1">模态框&lt;/button>
                  
    &lt;div class="modal fade" id="modal_1">
      &lt;div class="modal-dialog">
        &lt;div class="modal-content">
          &lt;div class="modal-header">
            &lt;button type="button" class="close" data-dismiss="modal">&times;&lt;/button>
            &lt;h4 class="modal-title">标题&lt;/h4>
          &lt;/div>
          &lt;div class="modal-body">
            &lt;p>内容...&lt;/p>
          &lt;/div>
          &lt;div class="modal-footer">
            &lt;button type="button" class="btn btn-default" data-dismiss="modal">关闭&lt;/button>
            &lt;button type="button" class="btn btn-primary">保存&lt;/button>
          &lt;/div>
        &lt;/div>
      &lt;/div>
    &lt;/div>
                </code></pre>
              </div>
            </div>

            <h3 id="modal_usage">用法</h3>
            <p>模态框三层不能少，内容层的部分可以酌情考虑。</p>
            <p>模态框默认是隐藏的，需要通过第三方让其显示出来。</p>
            <p>上面给出的例子是通过点击按钮打开模态框。按钮需要设置<code>data-toggle="modal"</code>声明打开的是模态框，<code>data-target="#id"</code>匹配模态框的id。
            </p>
            <p>如果你不需要动画，去掉<code>.fade</code>即可。</p>

            <h3 id="modal_size">尺寸</h3>
            <p>模态框有三种尺寸，实例中是默认大小，还有大模态框和小模态框。</p>
            <p>模态框尺寸只需要在<code>.modal-dialog</code>上添加<code>.modal-lg</code>或<code>.modal-sm</code>类。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <button type="button" class="btn btn-theme" data-toggle="modal" data-target="#modal_2">大模态框</button>
                <button type="button" class="btn btn-theme" data-toggle="modal" data-target="#modal_3">小模态框</button>
                <div class="modal fade" id="modal_3">
                  <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">标题</h4>
                      </div>
                      <div class="modal-body">
                        <p>内容...</p>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                        <button type="button" class="btn btn-primary">保存</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal fade" id="modal_2">
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">标题</h4>
                      </div>
                      <div class="modal-body">
                        <p>内容...</p>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                        <button type="button" class="btn btn-primary">保存</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 id="modal_function">方法</h3>
            <p class="lead"><code>$('...').modal('toggle')</code></p>
            <p>手动打开或关闭模态框。在模态框显示或隐藏之前返回到主调函数中（也就是，在触发 shown.yyui.modal 或 hidden.yyui.modal 事件之前）。</p>
            <div class="divider-sm"></div>
            <p class="lead"><code>$('...').modal('show')</code></p>
            <p>手动打开模态框。在模态框显示之前返回到主调函数中 （也就是，在触发 shown.yyui.modal 事件之前）。</p>
            <div class="divider-sm"></div>
            <p class="lead"><code>$('...').modal('hide')</code></p>
            <p>手动关闭模态框。在模态框显示之前返回到主调函数中 （也就是，在触发 hidden.yyui.modal 事件之前）。</p>

            <h3 id="modal_event">事件</h3>
            <p>YY UI 的模态框类提供了一些事件用于监听并执行你自己的代码。</p>
            <div class="table-responsive">
              <table class="table">
                <thead>
                <tr>
                  <th>事件类型</th>
                  <th>描述</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td><code>show.yyui.modal</code></td>
                  <td><code>show</code> 方法调用之后立即触发该事件。</td>
                </tr>
                <tr>
                  <td><code>shown.yyui.modal</code></td>
                  <td>此事件在模态框已经显示出来（并且同时在 CSS 过渡效果完成）之后被触发。</td>
                </tr>
                <tr>
                  <td><code>hide.yyui.modal</code></td>
                  <td><code>hide</code> 方法调用之后立即触发该事件。</td>
                </tr>
                <tr>
                  <td><code>hidden.yyui.modal</code></td>
                  <td>此事件在模态框被隐藏（并且同时在 CSS 过渡效果完成）之后被触发。</td>
                </tr>
                </tbody>
              </table>
            </div>
          </section>

          <div class="divider-lg"></div>

          <section class="yyui-docs-section" id="scrollspy">
            <h2 class="m-b-6">滚动监听
              <small><code>scrollspy.js</code></small>
            </h2>
            <p>滚动监听主要有两个对象，被监听元素和导航。</p>
            <p>被监听对象有3个属性。</p>
            <ul>
              <li><code>data-spy:</code>将该元素设置为监听元素。</li>
              <li><code>data-target:</code>设置目标导航ID。</li>
              <li><code>data-offset:</code>设置监听的ID到窗口顶部的偏移量。（可选）</li>
            </ul>
            <p>被监听元素中的每一个ID必须与导航中的ID一一对应。</p>
          </section>

          <div class="divider-lg"></div>

          <section class="yyui-docs-section" id="tab">
            <h2 class="m-b-6">标签页
              <small><code>tab.js</code></small>
            </h2>
            <p>标签页的样式在组件的<a href="components.html#nav_tabs" target="_blank">标签页</a>中。</p>

            <h3 id="tab_example">实例</h3>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <ul class="nav nav-tabs">
                  <li class="active"><a href="#baidu1" data-toggle="tab">百度</a></li>
                  <li><a href="#ali1" data-toggle="tab">阿里</a></li>
                  <li><a href="#tengxun1" data-toggle="tab">腾讯</a></li>
                </ul>
                <div class="tab-content">
                  <div class="tab-pane active" id="baidu1">
                    <p>
                      百度（Nasdaq：BIDU）是全球最大的中文搜索引擎、最大的中文网站。2000年1月由李彦宏创立于北京中关村，致力于向人们提供“简单，可依赖”的信息获取方式。“百度”二字源于中国宋朝词人辛弃疾的《青玉案·元夕》词句“众里寻他千百度”，象征着百度对中文信息检索技术的执著追求。</p>
                    <p>
                      2015年1月24日，百度创始人、董事长兼CEO李彦宏在百度2014年会暨十五周年庆典上发表的主题演讲中表示，十五年来，百度坚持相信技术的力量，始终把简单可依赖的文化和人才成长机制当成最宝贵的财富，他号召百度全体员工，向连接人与服务的战略目标发起进攻。2015年11月18日，百度与中信银行发起设立百信银行。</p>
                  </div>
                  <div class="tab-pane" id="ali1">
                    <p>
                      阿里巴巴网络技术有限公司（简称：阿里巴巴集团）是以曾担任英语教师的马云为首的18人，于1999年在中国杭州创立，他们相信互联网能够创造公平的竞争环境，让小企业通过创新与科技扩展业务，并在参与国内或全球市场竞争时处于更有利的位置。</p>
                    <p>
                      阿里巴巴集团经营多项业务，另外也从关联公司的业务和服务中取得经营商业生态系统上的支援。业务和关联公司的业务包括：淘宝网、天猫、聚划算、全球速卖通、阿里巴巴国际交易市场、1688、阿里妈妈、阿里云、蚂蚁金服、菜鸟网络等。2014年9月19日，阿里巴巴集团在纽约证券交易所正式挂牌上市，股票代码“BABA”，创始人和董事局主席为马云。2015年全年，阿里巴巴总营收943.84亿元人民币，净利润688.44亿元人民币。</p>
                  </div>
                  <div class="tab-pane" id="tengxun1">
                    <p>
                      深圳市腾讯计算机系统有限公司成立于1998年11月，由马化腾、张志东、许晨晔、陈一丹、曾李青五位创始人共同创立，是中国最大的互联网综合服务提供商之一，也是中国服务用户最多的互联网企业之一。</p>
                    <p>腾讯多元化的服务包括：社交和通信服务QQ及微信/WeChat、社交网络平台QQ空间、腾讯游戏旗下QQ游戏平台、门户网站腾讯网、腾讯新闻客户端和网络视频服务腾讯视频等。</p>
                  </div>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;ul class="nav nav-tabs">
      &lt;li class="active">&lt;a href="#baidu1" data-toggle="tab">百度&lt;/a>&lt;/li>
      &lt;li>&lt;a href="#ali1" data-toggle="tab">阿里&lt;/a>&lt;/li>
      &lt;li>&lt;a href="#tengxun1" data-toggle="tab">腾讯&lt;/a>&lt;/li>
    &lt;/ul>
    &lt;div class="tab-content">
      &lt;div class="tab-pane active" id="baidu1">
        &lt;p>
          百度（Nasdaq：BIDU）是全球最大的中文搜索引擎、最大的中文网站。
        &lt;/p>
      &lt;/div>
      &lt;div class="tab-pane" id="ali1">
        &lt;p>
          阿里巴巴网络技术有限公司（简称：阿里巴巴集团）是以曾担任英语教师的马云为首的18人，于1999年在中国杭州创立。
        &lt;/p>
      &lt;/div>
      &lt;div class="tab-pane" id="tengxun1">
        &lt;p>
          深圳市腾讯计算机系统有限公司成立于1998年11月，由马化腾、张志东、许晨晔、陈一丹、曾李青五位创始人共同创立。
        &lt;/p>
      &lt;/div>
    &lt;/div>
                </code></pre>
              </div>
            </div>

            <h3 id="tab_usage">用法</h3>
            <p>标签页利用的是<code>jQuery</code>的<code>fade()</code>方法实现的。</p>
            <p>你需要在<code>nav</code>中的<code>&lt;a></code>标签中设置<code>href</code>属性，与<code>.tab-content</code>中的id对应起来。</p>
            <p><code>&lt;a></code>还需要设置<code>data-toggle="tab"</code>来标明标签。</p>
          </section>

          <div class="divider-lg"></div>

          <section class="yyui-docs-section" id="alert">
            <h2 class="m-b-6">警告框
              <small><code>alert.js</code></small>
            </h2>
            <p>警告框的样式在组件的<a href="components.html#alert" target="_blank">警告框</a>中。</p>
            <p>警告框涉及的交互只有关闭效果。</p>

            <h3 id="alert_example">实例</h3>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="alert alert-info alert-dismissible">
                  这是警告框
                  <button type="button" class="close" data-dismiss="alert">×</button>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="alert alert-info alert-dismissible">
      这是警告框
      &lt;button type="button" class="close" data-dismiss="alert">×&lt;/button>
    &lt;/div>
                </code></pre>
              </div>
            </div>

            <h3 id="alert_usage">用法</h3>
            <p>为警告框<code>.alert</code>添加<code>.alert-dismissible</code>类。</p>
            <p>在警告框内部添加关闭按钮。并且为关闭按钮添加<code>data-dismiss="alert"</code>属性。</p>
          </section>

          <div class="divider-lg"></div>

          <section class="yyui-docs-section" id="carousel">
            <h2 class="m-b-6">轮播
              <small><code>carousel.js</code></small>
            </h2>


            <h3 id="carousel_example">实例</h3>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div id="carousel_1" class="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators">
                    <li data-target="#carousel_1" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel_1" data-slide-to="1"></li>
                    <li data-target="#carousel_1" data-slide-to="2"></li>
                  </ol>

                  <div class="carousel-content">
                    <div class="carousel-item active">
                      <img src="../assets/image/daojian01.jpg" alt="First slide">
                      <div class="container">
                        <div class="carousel-caption text-left">
                          <h1>结城明日奈</h1>
                          <p>本作女主角。SAO系统下拥有排名前五名美貌的美女玩家，实力之强可以担任最强公会「血盟骑士团」的副团长，在SAO中几乎是无人不晓的名人。</p>
                          <p><a class="btn btn-lg btn-primary" href="#" role="button">亚斯娜</a></p>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img src="../assets/image/daojian02.jpg" alt="Second slide">
                      <div class="container">
                        <div class="carousel-caption">
                          <h1>桐谷和人</h1>
                          <p>主角桐谷和人是使用世界首款完全潜行游戏“刀剑神域（Sword Art Online）”的玩家。</p>
                          <p><a class="btn btn-lg btn-primary" href="#" role="button">桐人</a></p>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img src="../assets/image/daojian03.jpg" alt="Third slide">
                      <div class="container">
                        <div class="carousel-caption text-right">
                          <h1>刀剑神域</h1>
                          <p>这虽然是游戏，但可不是闹着玩的。”——“刀剑神域（Sword Art Online）”设计者茅场晶彦。</p>
                          <p><a class="btn btn-lg btn-primary" href="#" role="button">刀剑神域 </a></p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a class="left carousel-control" href="#carousel_1" data-slide="prev">
                    <span class="icon-prev">&#139;</span>
                  </a>
                  <a class="right carousel-control" href="#carousel_1" data-slide="next">
                    <span class="icon-next">&#155;</span>
                  </a>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div id="carousel_1" class="carousel slide" data-ride="carousel">
      &lt;ol class="carousel-indicators">
        &lt;li data-target="#carousel_1" data-slide-to="0" class="active">&lt;/li>
        &lt;li data-target="#carousel_1" data-slide-to="1">&lt;/li>
        &lt;li data-target="#carousel_1" data-slide-to="2">&lt;/li>
      &lt;/ol>

      &lt;div class="carousel-content">
        &lt;div class="carousel-item active">
          &lt;img src="../assets/image/daojian01.jpg" alt="First slide">
          &lt;div class="container">
            &lt;div class="carousel-caption text-left">
              &lt;h1>结城明日奈&lt;/h1>
              &lt;p>本作女主角。SAO系统下拥有排名前五名美貌的美女玩家。&lt;/p>
              &lt;p>&lt;a class="btn btn-lg btn-primary" href="#" role="button">亚斯娜&lt;/a>&lt;/p>
            &lt;/div>
          &lt;/div>
        &lt;/div>
        &lt;div class="carousel-item">
          &lt;img src="../assets/image/daojian02.jpg" alt="Second slide">
          &lt;div class="container">
            &lt;div class="carousel-caption">
              &lt;h1>桐谷和人&lt;/h1>
              &lt;p>主角桐谷和人是使用世界首款完全潜行游戏“刀剑神域（Sword Art Online）”的玩家。&lt;/p>
              &lt;p>&lt;a class="btn btn-lg btn-primary" href="#" role="button">桐人&lt;/a>&lt;/p>
            &lt;/div>
          &lt;/div>
        &lt;/div>
        &lt;div class="carousel-item">
          &lt;img src="../assets/image/daojian03.jpg" alt="Third slide">
          &lt;div class="container">
            &lt;div class="carousel-caption text-right">
              &lt;h1>刀剑神域&lt;/h1>
              &lt;p>这虽然是游戏，但可不是闹着玩的。”——“刀剑神域（Sword Art Online）”设计者茅场晶彦。&lt;/p>
              &lt;p>&lt;a class="btn btn-lg btn-primary" href="#" role="button">刀剑神域 &lt;/a>&lt;/p>
            &lt;/div>
          &lt;/div>
        &lt;/div>
      &lt;/div>

      &lt;a class="left carousel-control" href="#carousel_1" data-slide="prev">
        &lt;span class="icon-prev">&#139;&lt;/span>
      &lt;/a>
      &lt;a class="right carousel-control" href="#carousel_1" data-slide="next">
        &lt;span class="icon-next">&#155;&lt;/span>
      &lt;/a>
    &lt;/div>
                </code></pre>
              </div>
            </div>

            <h3 id="carousel_usage">用法</h3>
            <p>在轮播图的最外层设置 id，<code>data-ride="carousel"</code>能让页面加载后就开始轮播。</p>
            <p>在<code>.carousel-indicators</code>中，每一项需要设置目标，<code>data-slide-to</code>也可以用<code>data-slide</code>代替。
            </p>
            <p><code>.carousel-control</code>需要设置<code>href</code>和<code>data-slide</code>。</p>

            <h3 id="carousel_function">方法</h3>
            <p class="lead"><code>$('...').carousel(options)</code></p>
            <p><code>options</code>是一个对象字面量。它有以下属性：</p>
            <div class="table-responsive">
              <table class="table">
                <thead>
                <tr>
                  <th>名称</th>
                  <th>类型</th>
                  <th>默认值</th>
                  <th>描述</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td><code>interval</code></td>
                  <td><code>number</code></td>
                  <td><code>5000</code></td>
                  <td>每一个轮播项停留的时间. 如果值为<code>0</code>，那么就不会自动轮播。</td>
                </tr>
                <tr>
                  <td><code>pause</code></td>
                  <td><code>string</code></td>
                  <td><code>"hover"</code></td>
                  <td>鼠标移到轮播项上时暂停轮播，移走时重新开始轮播。</td>
                </tr>
                <tr>
                  <td><code>wrap</code></td>
                  <td><code>boolean</code></td>
                  <td><code>true</code></td>
                  <td>是否循环。</td>
                </tr>
                <tr>
                  <td><code>keyboard</code></td>
                  <td><code>boolean</code></td>
                  <td><code>true</code></td>
                  <td>是否支持方向键控制轮播。</td>
                </tr>
                </tbody>
              </table>
            </div>
            <p>此外，你也可以通过<code>data-*</code>的方式进行设置。例如：<code>data-interval="2000"</code>。</p>

            <div class="divider-sm"></div>
            <p class="lead"><code>$('...').carousel('cycle')</code></p>
            <p>从左到右循环轮播。</p>

            <div class="divider-sm"></div>
            <p class="lead"><code>$('...').carousel('pause')</code></p>
            <p>暂停轮播。</p>

            <div class="divider-sm"></div>
            <p class="lead"><code>$('...').carousel(number)</code></p>
            <p>轮播项停留的时间。</p>

            <div class="divider-sm"></div>
            <p class="lead"><code>$('...').carousel('prev')</code></p>
            <p>上一项。</p>

            <div class="divider-sm"></div>
            <p class="lead"><code>$('...').carousel('next')</code></p>
            <p>下一项。</p>

            <h3 id="carousel_event">事件</h3>
            <div class="table-responsive">
              <table class="table">
                <thead>
                <tr>
                  <th>事件类型</th>
                  <th>描述</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td><code>slide.yyui.carousel</code></td>
                  <td>滑动开始时触发。即调用<code>slide</code>时触发。</td>
                </tr>
                <tr>
                  <td><code>slid.yyui.carousel</code></td>
                  <td>滑动结束时触发。即<code>slide</code>动画结束时触发。</td>
                </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <div class="col-sm-3">
          <div class="sidebar" id="sidebar">
            <ul class="nav nav-vt">
              <li>
                <a class="nav-link" @click.stop.prevent="toAnchor('dropdown')" href="#dropdown">下拉菜单</a>
                <ul class="nav">
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('dropdown_example')" href="#dropdown_example">实例</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('dropdown_usage')" href="#dropdown_usage">用法</a></li>
                </ul>
              </li>
              <li>
                <a class="nav-link" @click.stop.prevent="toAnchor('modal')" href="#modal">模态框</a>
                <ul class="nav">
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('modal_example')" href="#modal_example">实例</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('modal_usage')" href="#modal_usage">用法</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('modal_size')" href="#modal_size">尺寸</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('modal_function')" href="#modal_function">方法</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('modal_event')" href="#modal_event">事件</a></li>
                </ul>
              </li>
              <li>
                <a class="nav-link" @click.stop.prevent="toAnchor('scrollspy')" href="#scrollspy">滚动监听</a>
              </li>
              <li>
                <a class="nav-link" @click.stop.prevent="toAnchor('tab')" href="#tab">标签页</a>
                <ul class="nav">
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('tab_example')" href="#tab_example">实例</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('tab_usage')" href="#tab_usage">用法</a></li>
                </ul>
              </li>
              <li>
                <a class="nav-link" @click.stop.prevent="toAnchor('alert')" href="#alert">警告框</a>
                <ul class="nav">
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('alert_example')" href="#alert_example">实例</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('alert_usage')" href="#alert_usage">用法</a></li>
                </ul>
              </li>
              <li>
                <a class="nav-link" @click.stop.prevent="toAnchor('carousel')" href="#carousel">轮播</a>
                <ul class="nav">
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('carousel_example')" href="#carousel_example">实例</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('carousel_usage')" href="#carousel_usage">用法</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('carousel_function')" href="#carousel_function">方法</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('carousel_event')" href="#carousel_event">事件</a></li>
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
  </div>
</template>

<script>
  import masthead from './common/masthead'
  import common from '../assets/js/common'

  export default {
    name: 'plugins',
    components: {
      'masthead-component': masthead
    },
    methods: {
      toAnchor: common.toAnchor
    }
  }
</script>