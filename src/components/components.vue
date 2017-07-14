<template>
  <div>
    <masthead-component>
      <h1>组件</h1>
      <h4>YY UI 提供了一些常用的组件，可以进行快速的模块构建。</h4>
    </masthead-component>

    <div class="container">
      <div id="sidebar_top_marker"></div>
      <div class="row">
        <div class="col-md-9">
          <section class="yyui-docs-section" id="dropdown">
            <h2 class="m-b-6">下拉菜单

              <small><code>_dropdown.scss</code></small>
            </h2>
            <p class="lead">用于有子菜单或者上下文的的菜单项。<code>dropdown.js</code>使其有了交互。</p>

            <h3 id="dropdown_default">默认下拉菜单</h3>
            <p class="">将下拉菜单触发器和下拉菜单都包裹在<code>.dropdown</code>里。然后加入组成菜单的HTML代码。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="dropdown">
                  <button type="button" class="btn btn-default dropdown-toggle">dropdown</button>
                  <ul class="dropdown-menu">
                    <li class="dropdown-item"><a href="javascript:;">action</a></li>
                    <li class="dropdown-item"><a href="javascript:;">Another action</a></li>
                    <li class="dropdown-item"><a href="javascript:;">Another action</a></li>
                  </ul>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="dropdown">
      &lt;button type="button" class="btn btn-default dropdown-toggle">dropdown&lt;/button>
      &lt;ul class="dropdown-menu">
        &lt;li class="dropdown-item">&lt;a href="javascript:;">action&lt;/a>&lt;/li>
        &lt;li class="dropdown-item">&lt;a href="javascript:;">Another action&lt;/a>&lt;/li>
        &lt;li class="dropdown-item">&lt;a href="javascript:;">Another action&lt;/a>&lt;/li>
      &lt;/ul>
    &lt;/div>
                </code></pre>
              </div>
            </div>

            <h3 id="dropdown_up">上拉菜单</h3>
            <p class="">为<code>.dropdown</code>添加<code>.up</code>类。子菜单会出现在上方</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="dropdown up">
                  <button type="button" class="btn btn-default dropdown-toggle">dropdown</button>
                  <ul class="dropdown-menu">
                    <li class="dropdown-item"><a href="javascript:;">action</a></li>
                    <li class="dropdown-item"><a href="javascript:;">Another action</a></li>
                    <li class="dropdown-item"><a href="javascript:;">Another action</a></li>
                  </ul>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="dropdown up">
      &lt;button type="button" class="btn btn-default dropdown-toggle">dropdown&lt;/button>
      &lt;ul class="dropdown-menu">
        &lt;li class="dropdown-item">&lt;a href="javascript:;">action&lt;/a>&lt;/li>
        &lt;li class="dropdown-item">&lt;a href="javascript:;">Another action&lt;/a>&lt;/li>
        &lt;li class="dropdown-item">&lt;a href="javascript:;">Another action&lt;/a>&lt;/li>
      &lt;/ul>
    &lt;/div>
                </code></pre>
              </div>
            </div>

            <h3 id="dropdown_header">子菜单标题</h3>
            <p>通过添加标题对子菜单进行分组。给<code>li</code>添加<code>.dropdown-header</code>类。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="dropdown">
                  <button type="button" class="btn btn-default dropdown-toggle">dropdown</button>
                  <ul class="dropdown-menu">
                    <li class="dropdown-header">section1</li>
                    <li class="dropdown-item"><a href="javascript:;">action</a></li>
                    <li class="dropdown-item"><a href="javascript:;">Another action</a></li>
                    <li class="dropdown-header">section2</li>
                    <li class="dropdown-item"><a href="javascript:;">action</a></li>
                    <li class="dropdown-item"><a href="javascript:;">Another action</a></li>
                  </ul>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="dropdown">
      &lt;button type="button" class="btn btn-default dropdown-toggle">dropdown&lt;/button>
      &lt;ul class="dropdown-menu">
        &lt;li class="dropdown-header">section1&lt;/li>
        &lt;li class="dropdown-item">&lt;a href="javascript:;">action&lt;/a>&lt;/li>
        &lt;li class="dropdown-item">&lt;a href="javascript:;">Another action&lt;/a>&lt;/li>
        &lt;li class="dropdown-header">section2&lt;/li>
        &lt;li class="dropdown-item">&lt;a href="javascript:;">action&lt;/a>&lt;/li>
        &lt;li class="dropdown-item">&lt;a href="javascript:;">Another action&lt;/a>&lt;/li>
      &lt;/ul>
    &lt;/div>
                </code></pre>
              </div>
            </div>

            <h3 id="dropdown_divider">分割线</h3>
            <p>分割子菜单。给<code>li</code>添加<code>.dropdown-divider</code>类。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="dropdown">
                  <button type="button" class="btn btn-default dropdown-toggle">dropdown</button>
                  <ul class="dropdown-menu">
                    <li class="dropdown-item"><a href="javascript:;">action</a></li>
                    <li class="dropdown-item"><a href="javascript:;">Another action</a></li>
                    <li class="dropdown-divider"></li>
                    <li class="dropdown-item"><a href="javascript:;">action</a></li>
                    <li class="dropdown-item"><a href="javascript:;">Another action</a></li>
                  </ul>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="dropdown">
      &lt;button type="button" class="btn btn-default dropdown-toggle">dropdown&lt;/button>
      &lt;ul class="dropdown-menu">
        &lt;li class="dropdown-item">&lt;a href="javascript:;">action&lt;/a>&lt;/li>
        &lt;li class="dropdown-item">&lt;a href="javascript:;">Another action&lt;/a>&lt;/li>
        &lt;li class="dropdown-divider">&lt;/li>
        &lt;li class="dropdown-item">&lt;a href="javascript:;">action&lt;/a>&lt;/li>
        &lt;li class="dropdown-item">&lt;a href="javascript:;">Another action&lt;/a>&lt;/li>
      &lt;/ul>
    &lt;/div>
                </code></pre>
              </div>
            </div>

            <h3 id="dropdown_disabled">禁用子菜单</h3>
            <p>禁用子菜单。给<code>.dropdown-item</code>添加<code>.disabled</code>类。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="dropdown">
                  <button type="button" class="btn btn-default dropdown-toggle">dropdown</button>
                  <ul class="dropdown-menu">
                    <li class="dropdown-item disabled"><a href="javascript:;">action</a></li>
                    <li class="dropdown-item"><a href="javascript:;">Another action</a></li>
                    <li class="dropdown-item"><a href="javascript:;">Another action</a></li>
                  </ul>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="dropdown">
      &lt;button type="button" class="btn btn-default dropdown-toggle">dropdown&lt;/button>
      &lt;ul class="dropdown-menu">
        &lt;li class="dropdown-item disabled">&lt;a href="javascript:;">action&lt;/a>&lt;/li>
        &lt;li class="dropdown-item">&lt;a href="javascript:;">Another action&lt;/a>&lt;/li>
        &lt;li class="dropdown-item">&lt;a href="javascript:;">Another action&lt;/a>&lt;/li>
      &lt;/ul>
    &lt;/div>
                </code></pre>
              </div>
            </div>

            <p class="text-info"><code>.dropdown-toggle</code>是按钮，可以使用所有和按钮相关的类。</p>
          </section>

          <div class="divider-lg"></div>

          <section id="btn_group">
            <h2 class="m-b-6">按钮组
              <small><code>_button-group.scss</code></small>
            </h2>
            <p class="lead">通过按钮组容器把一组按钮放在同一行里。按钮组中的<code>button</code>的样式可以随意组合。</p>

            <h3 id="btn_group_example">实例</h3>
            <p>将一组<code>&lt;button</code>包裹在<code>.btn-group</code>中形成按钮组。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="btn-group">
                  <button type="button" class="btn btn-default">left</button>
                  <button type="button" class="btn btn-default">center</button>
                  <button type="button" class="btn btn-default">right</button>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="btn-group">
      &lt;button type="button" class="btn btn-default">left&lt;/button>
      &lt;button type="button" class="btn btn-default">center&lt;/button>
      &lt;button type="button" class="btn btn-default">right&lt;/button>
    &lt;/div>
                </code></pre>
              </div>
            </div>

            <h3 id="btn_group_size">尺寸</h3>
            <p>按钮组有3中尺寸可供选择，你可以在<code>.btn-group</code>上添加尺寸类。也可以直接在<code>&lt;button></code>上添加按钮尺寸类，这样就有4中尺寸了（多了<code>.btn-xs</code>）。
            </p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="btn-group btn-group-lg">
                  <button type="button" class="btn btn-primary">left</button>
                  <button type="button" class="btn btn-primary">center</button>
                  <button type="button" class="btn btn-primary">right</button>
                </div>
                <br/>
                <div class="btn-group">
                  <button type="button" class="btn btn-success">left</button>
                  <button type="button" class="btn btn-success">center</button>
                  <button type="button" class="btn btn-success">right</button>
                </div>
                <br/>
                <div class="btn-group btn-group-sm">
                  <button type="button" class="btn btn-warning-outline">left</button>
                  <button type="button" class="btn btn-warning-outline">center</button>
                  <button type="button" class="btn btn-warning-outline">right</button>
                </div>
                <br/>
                <div class="btn-group">
                  <button type="button" class="btn btn-danger btn-xs">left</button>
                  <button type="button" class="btn btn-danger btn-xs">center</button>
                  <button type="button" class="btn btn-danger btn-xs">right</button>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="btn-group btn-group-lg">
      &lt;button type="button" class="btn btn-primary">left&lt;/button>
      &lt;button type="button" class="btn btn-primary">center&lt;/button>
      &lt;button type="button" class="btn btn-primary">right&lt;/button>
    &lt;/div>

    &lt;div class="btn-group">
      &lt;button type="button" class="btn btn-success">left&lt;/button>
      &lt;button type="button" class="btn btn-success">center&lt;/button>
      &lt;button type="button" class="btn btn-success">right&lt;/button>
    &lt;/div>

    &lt;div class="btn-group btn-group-sm">
      &lt;button type="button" class="btn btn-warning-outline">left&lt;/button>
      &lt;button type="button" class="btn btn-warning-outline">center&lt;/button>
      &lt;button type="button" class="btn btn-warning-outline">right&lt;/button>
    &lt;/div>

    &lt;div class="btn-group">
      &lt;button type="button" class="btn btn-danger btn-xs">left&lt;/button>
      &lt;button type="button" class="btn btn-danger btn-xs">center&lt;/button>
      &lt;button type="button" class="btn btn-danger btn-xs">right&lt;/button>
    &lt;/div>
                </code></pre>
              </div>
            </div>

            <h3 id="btn_group_block">块组</h3>
            <p>给<code>.btn-group</code>添加<code>.btn-group-block</code>类，按钮组将占满父元素的宽。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="btn-group btn-group-block">
                  <button type="button" class="btn btn-default">left</button>
                  <button type="button" class="btn btn-default">center</button>
                  <button type="button" class="btn btn-default">right</button>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="btn-group btn-group-block">
      &lt;button type="button" class="btn btn-default">left&lt;/button>
      &lt;button type="button" class="btn btn-default">center&lt;/button>
      &lt;button type="button" class="btn btn-default">right&lt;/button>
    &lt;/div>
                </code></pre>
              </div>
            </div>

            <h3 id="btn_group_vt">垂直组</h3>
            <p>给<code>.btn-group</code>添加<code>.btn-group-vt</code>类，按钮组将垂直排列。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="btn-group btn-group-vt">
                  <button type="button" class="btn btn-default">top</button>
                  <button type="button" class="btn btn-default">middle</button>
                  <button type="button" class="btn btn-default">bottom</button>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="btn-group btn-group-vt">
      &lt;button type="button" class="btn btn-default">top&lt;/button>
      &lt;button type="button" class="btn btn-default">middle&lt;/button>
      &lt;button type="button" class="btn btn-default">bottom&lt;/button>
    &lt;/div>
                </code></pre>
              </div>
            </div>

            <h3 id="btn_group_dropdown">带下拉框的按钮组</h3>
            <p>在<code>.dropdown</code>上添加</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="btn-group">
                  <button type="button" class="btn btn-default">left</button>
                  <button type="button" class="btn btn-default">center</button>
                  <div class="dropdown">
                    <button type="button" class="btn btn-default dropdown-toggle">right</button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript:;">Action</a></li>
                      <li><a class="dropdown-item" href="javascript:;">Action</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="btn-group">
      &lt;button type="button" class="btn btn-default">left&lt;/button>
      &lt;button type="button" class="btn btn-default">center&lt;/button>
      &lt;div class="dropdown">
        &lt;button type="button" class="btn btn-default dropdown-toggle">right&lt;/button>
        &lt;ul class="dropdown-menu">
          &lt;li>&lt;a class="dropdown-item" href="javascript:;">Action&lt;/a>&lt;/li>
          &lt;li>&lt;a class="dropdown-item" href="javascript:;">Action&lt;/a>&lt;/li>
        &lt;/ul>
      &lt;/div>
    &lt;/div>
                </code></pre>
              </div>
            </div>
          </section>

          <div class="divider-lg"></div>

          <section class="yyui-docs-section" id="input_group">
            <h2 class="m-b-6">输入框组
              <small><code>_input-group.scss</code></small>
            </h2>
            <p class="lead">
              通过在文本输入框<code>&lt;input></code>前面、后面或是两边加上文字或按钮，可以实现对表单控件的扩展。为<code>.input-group</code>赋予<code>.input-group-addon</code>类，可以给<code>.form-control</code>的前面或后面添加额外的元素。
            </p>

            <h3 id="input_group_example">实例</h3>
            <p>在输入框的任意一侧添加额外元素。你还可以在输入框的两侧同时添加额外元素。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="input-group">
                  <span class="input-group-addon">$</span>
                  <input type="text" class="form-control"/>
                  <span class="input-group-addon">.00</span>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="input-group">
      &lt;span class="input-group-addon">$&lt;/span>
      &lt;input type="text" class="form-control"/>
      &lt;span class="input-group-addon">.00&lt;/span>
    &lt;/div>
                </code></pre>
              </div>
            </div>

            <h3 id="input_group_size">尺寸</h3>
            <p>输入框组分三种大小。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="input-group input-group-lg">
                  <span class="input-group-addon">$</span>
                  <input type="text" class="form-control"/>
                </div>
                <br/>
                <div class="input-group">
                  <span class="input-group-addon">$</span>
                  <input type="text" class="form-control"/>
                </div>
                <br/>
                <div class="input-group input-group-sm">
                  <span class="input-group-addon">$</span>
                  <input type="text" class="form-control"/>
                </div>
              </div>
              <div class="yyui-docs-code">
              <pre v-hljs><code class="html">
    &lt;div class="input-group input-group-lg">
      &lt;span class="input-group-addon">$&lt;/span>
      &lt;input type="text" class="form-control"/>
    &lt;/div>

    &lt;div class="input-group">
      &lt;span class="input-group-addon">$&lt;/span>
      &lt;input type="text" class="form-control"/>
    &lt;/div>

    &lt;div class="input-group input-group-sm">
      &lt;span class="input-group-addon">$&lt;/span>
      &lt;input type="text" class="form-control"/>
    &lt;/div>
              </code></pre>
              </div>
            </div>

            <h3 id="input_group_btn">按钮输入框组</h3>
            <p>在输入框的任意一侧添加按钮。按钮需要处于<code>.input-group-btn</code>内部，并且添加<code>.btn btn-default</code>类。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="input-group">
                  <input type="text" class="form-control"/>
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-default">search</button>
                  </div>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="input-group">
      &lt;input type="text" class="form-control"/>
      &lt;div class="input-group-btn">
        &lt;button type="button" class="btn btn-default">search&lt;/button>
      &lt;/div>
    &lt;/div>
                </code></pre>
              </div>
            </div>

            <h3 id="input_group_situations">情境</h3>
            <p>
              YY UI 内置了 7 种情境，下面介绍其他6种。如果是按钮输入框组，需要对按钮添加相应的类（例如：<code>.btn-primary</code>或者<code>btn-primary-outline</code>）。
            </p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="input-group input-group-primary">
                  <span class="input-group-addon">$</span>
                  <input type="text" class="form-control"/>
                </div>
                <br/>
                <div class="input-group input-group-secondary">
                  <span class="input-group-addon">$</span>
                  <input type="text" class="form-control"/>
                </div>
                <br/>
                <div class="input-group input-group-success">
                  <span class="input-group-addon">$</span>
                  <input type="text" class="form-control"/>
                </div>
                <br/>
                <div class="input-group input-group-info">
                  <span class="input-group-addon">$</span>
                  <input type="text" class="form-control"/>
                </div>
                <br/>
                <div class="input-group input-group-warning">
                  <span class="input-group-addon">$</span>
                  <input type="text" class="form-control"/>
                </div>
                <br/>
                <div class="input-group input-group-danger">
                  <span class="input-group-addon">$</span>
                  <input type="text" class="form-control"/>
                </div>
              </div>
              <div class="yyui-docs-code">
              <pre v-hljs><code class="html">
    &lt;div class="input-group input-group-primary">
      &lt;span class="input-group-addon">$&lt;/span>
      &lt;input type="text" class="form-control"/>
    &lt;/div>

    &lt;div class="input-group input-group-secondary">
      &lt;span class="input-group-addon">$&lt;/span>
      &lt;input type="text" class="form-control"/>
    &lt;/div>

    &lt;div class="input-group input-group-success">
      &lt;span class="input-group-addon">$&lt;/span>
      &lt;input type="text" class="form-control"/>
    &lt;/div>

    &lt;div class="input-group input-group-info">
      &lt;span class="input-group-addon">$&lt;/span>
      &lt;input type="text" class="form-control"/>
    &lt;/div>

    &lt;div class="input-group input-group-warning">
      &lt;span class="input-group-addon">$&lt;/span>
      &lt;input type="text" class="form-control"/>
    &lt;/div>

    &lt;div class="input-group input-group-danger">
      &lt;span class="input-group-addon">$&lt;/span>
      &lt;input type="text" class="form-control"/>
    &lt;/div>
              </code></pre>
              </div>
            </div>

            <h3 id="input_group_dropdown">含下拉框的输入框组</h3>
            <p>在输入框的任意一侧添加<code>dropdown</code>。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="input-group">
                  <div class="input-group-btn">
                    <div class="dropdown">
                      <button type="button" class="btn btn-default dropdown-toggle dropdown-toggle-hover">dropdown</button>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="javascript:;">Action</a></li>
                        <li><a class="dropdown-item" href="javascript:;">Action</a></li>
                        <li><a class="dropdown-item" href="javascript:;">Action</a></li>
                      </ul>
                    </div>
                  </div>
                  <input type="text" class="form-control"/>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="input-group">
      &lt;div class="input-group-btn">
        &lt;div class="dropdown">
          &lt;button type="button" class="btn btn-default dropdown-toggle dropdown-toggle-hover">dropdown&lt;/button>
          &lt;ul class="dropdown-menu">
            &lt;li>&lt;a class="dropdown-item" href="javascript:;">Action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:;">Action&lt;/a>&lt;/li>
            &lt;li>&lt;a class="dropdown-item" href="javascript:;">Action&lt;/a>&lt;/li>
          &lt;/ul>
        &lt;/div>
      &lt;/div>
      &lt;input type="text" class="form-control"/>
    &lt;/div>
                </code></pre>
              </div>
            </div>

            <h3 id="input_group_adv">增强样式</h3>
            <p>通过一些特定的类为输入框组进行样式增强。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="input-group input-group-underline">
                  <input type="text" class="form-control"/>
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-default-outline">search</button>
                  </div>
                </div>
                <br/>
                <div class="input-group input-group-round">
                  <input type="text" class="form-control"/>
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-default">search</button>
                  </div>
                </div>
                <br/>
                <div class="input-group input-group-circle">
                  <input type="text" class="form-control"/>
                  <div class="input-group-btn">
                    <button type="button" class="btn btn-default">search</button>
                  </div>
                </div>
              </div>
              <div class="yyui-docs-code">
              <pre v-hljs><code class="html">
    &lt;div class="input-group input-group-underline">
      &lt;input type="text" class="form-control"/>
      &lt;div class="input-group-btn">
        &lt;button type="button" class="btn btn-default-outline">search&lt;/button>
      &lt;/div>
    &lt;/div>

    &lt;div class="input-group input-group-round">
      &lt;input type="text" class="form-control"/>
      &lt;div class="input-group-btn">
        &lt;button type="button" class="btn btn-default">search&lt;/button>
      &lt;/div>
    &lt;/div>

    &lt;div class="input-group input-group-circle">
      &lt;input type="text" class="form-control"/>
      &lt;div class="input-group-btn">
        &lt;button type="button" class="btn btn-default">search&lt;/button>
      &lt;/div>
    &lt;/div>
              </code></pre>
              </div>
            </div>
          </section>

          <div class="divider-lg"></div>

          <section class="yyui-docs-section" id="nav">
            <h2 class="m-b-6">导航
              <small><code>_nav.scss</code></small>
            </h2>
            <p class="lead">导航组件都依赖<code>.nav</code>类。</p>

            <h3 id="nav_example">实例</h3>
            <p>YY UI 只提供了默认的样式。例子中展现了<code>.active</code>、<code>.disabled</code>状态。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <ul class="nav">
                  <li class="active"><a href="javascript:;">Item</a></li>
                  <li class="disabled"><a href="javascript:;">Item</a></li>
                  <li><a href="javascript:;">Item</a></li>
                  <li><a href="javascript:;">Item</a></li>
                </ul>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;ul class="nav">
      &lt;li class="active">&lt;a href="javascript:;">Item&lt;/a>&lt;/li>
      &lt;li class="disabled">&lt;a href="javascript:;">Item&lt;/a>&lt;/li>
      &lt;li>&lt;a href="javascript:;">Item&lt;/a>&lt;/li>
      &lt;li>&lt;a href="javascript:;">Item&lt;/a>&lt;/li>
    &lt;/ul>
                </code></pre>
              </div>
            </div>

            <h3 id="nav_pills">胶囊式导航</h3>
            <p>为<code>.nav</code>添加<code>.nav-pills</code>类。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <ul class="nav nav-pills">
                  <li class="active"><a href="javascript:;">Item</a></li>
                  <li class="disabled"><a href="javascript:;">Item</a></li>
                  <li><a href="javascript:;">Item</a></li>
                  <li><a href="javascript:;">Item</a></li>
                </ul>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;ul class="nav nav-pills">
      &lt;li class="active">&lt;a href="javascript:;">Item&lt;/a>&lt;/li>
      &lt;li class="disabled">&lt;a href="javascript:;">Item&lt;/a>&lt;/li>
      &lt;li>&lt;a href="javascript:;">Item&lt;/a>&lt;/li>
      &lt;li>&lt;a href="javascript:;">Item&lt;/a>&lt;/li>
    &lt;/ul>
                </code></pre>
              </div>
            </div>

            <h3 id="nav_dropdown">带下拉框的导航</h3>
            <p>结合下拉菜单插件即可。为了使结构一致，<code>.dropdown-toggle</code>的载体要用<code>&lt;a></code>标签。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <ul class="nav">
                  <li><a href="javascript:;">Item</a></li>
                  <li><a href="javascript:;">Item</a></li>
                  <li><a href="javascript:;">Item</a></li>
                  <li class="dropdown">
                    <a class="btn dropdown-toggle" href="javascript:;">dropdown</a>
                    <ul class="dropdown-menu">
                      <li class="dropdown-item"><a href="javascript:;">item</a></li>
                      <li class="dropdown-item"><a href="javascript:;">item</a></li>
                      <li class="dropdown-item"><a href="javascript:;">item</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;ul class="nav">
      &lt;li>&lt;a href="javascript:;">Item&lt;/a>&lt;/li>
      &lt;li>&lt;a href="javascript:;">Item&lt;/a>&lt;/li>
      &lt;li>&lt;a href="javascript:;">Item&lt;/a>&lt;/li>
      &lt;li class="dropdown">
        &lt;a class="btn dropdown-toggle" href="javascript:;">dropdown&lt;/a>
        &lt;ul class="dropdown-menu">
          &lt;li class="dropdown-item">&lt;a href="javascript:;">item&lt;/a>&lt;/li>
          &lt;li class="dropdown-item">&lt;a href="javascript:;">item&lt;/a>&lt;/li>
          &lt;li class="dropdown-item">&lt;a href="javascript:;">item&lt;/a>&lt;/li>
        &lt;/ul>
      &lt;/li>
    &lt;/ul>
                </code></pre>
              </div>
            </div>

            <h3 id="nav_vt">垂直导航</h3>
            <p>为<code>.nav</code>添加<code>.nav-vt</code>类，导航将垂直排列。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <ul class="nav nav-vt">
                  <li><a href="javascript:;">Item</a></li>
                  <li><a href="javascript:;">Item</a></li>
                  <li><a href="javascript:;">Item</a></li>
                  <li><a href="javascript:;">Item</a></li>
                </ul>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;ul class="nav nav-vt">
      &lt;li>&lt;a href="javascript:;">Item&lt;/a>&lt;/li>
      &lt;li>&lt;a href="javascript:;">Item&lt;/a>&lt;/li>
      &lt;li>&lt;a href="javascript:;">Item&lt;/a>&lt;/li>
      &lt;li>&lt;a href="javascript:;">Item&lt;/a>&lt;/li>
    &lt;/ul>
                </code></pre>
              </div>
            </div>

            <h3 id="nav_tabs">标签页导航</h3>
            <p>标签页导航依赖<a href="javascript:;"><code>tab.js</code></a>插件。</p>
            <p>标签页导航需要在<code>&lt;li></code>标签上添加<code>.nav-item</code>类实现交互。<code>.nav-tabs</code>中的<code>&lt;a></code>标签的<code>href</code>属性要和
              <code>.tab-content</code>中的<code>id</code>一一对应，并且要添加<code>data-toggle="tab"</code>属性进行标注。</p>
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
          阿里巴巴网络技术有限公司（简称：阿里巴巴集团）是以曾担任英语教师的马云为首的18人，于1999年在中国杭州创立。&lt;/p>
        &lt;/p>
      &lt;/div>
      &lt;div class="tab-pane" id="tengxun1">
        &lt;p>
          深圳市腾讯计算机系统有限公司成立于1998年11月，由马化腾、张志东、许晨晔、陈一丹、曾李青五位创始人共同创立。&lt;/p>
        &lt;/p>
      &lt;/div>
    &lt;/div>
                </code></pre>
              </div>
            </div>

            <h3 id="nav_tabs_vt">垂直标签页导航</h3>
            <p>在标签页导航的基础上添加<code>.nav-vt</code>类，并且结合栅格系统实现。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="row">
                  <div class="col-sm-3">
                    <ul class="nav nav-tabs nav-vt">
                      <li class="active"><a href="#baidu2" data-toggle="tab">百度</a></li>
                      <li><a href="#ali2" data-toggle="tab">阿里</a></li>
                      <li><a href="#tengxun2" data-toggle="tab">腾讯</a></li>
                    </ul>
                  </div>
                  <div class="col-sm-9">
                    <div class="tab-content">
                      <div class="tab-pane active" id="baidu2">
                        <p>
                          百度（Nasdaq：BIDU）是全球最大的中文搜索引擎、最大的中文网站。2000年1月由李彦宏创立于北京中关村，致力于向人们提供“简单，可依赖”的信息获取方式。“百度”二字源于中国宋朝词人辛弃疾的《青玉案·元夕》词句“众里寻他千百度”，象征着百度对中文信息检索技术的执著追求。</p>
                        <p>
                          2015年1月24日，百度创始人、董事长兼CEO李彦宏在百度2014年会暨十五周年庆典上发表的主题演讲中表示，十五年来，百度坚持相信技术的力量，始终把简单可依赖的文化和人才成长机制当成最宝贵的财富，他号召百度全体员工，向连接人与服务的战略目标发起进攻。2015年11月18日，百度与中信银行发起设立百信银行。</p>
                      </div>
                      <div class="tab-pane" id="ali2">
                        <p>
                          阿里巴巴网络技术有限公司（简称：阿里巴巴集团）是以曾担任英语教师的马云为首的18人，于1999年在中国杭州创立，他们相信互联网能够创造公平的竞争环境，让小企业通过创新与科技扩展业务，并在参与国内或全球市场竞争时处于更有利的位置。</p>
                        <p>
                          阿里巴巴集团经营多项业务，另外也从关联公司的业务和服务中取得经营商业生态系统上的支援。业务和关联公司的业务包括：淘宝网、天猫、聚划算、全球速卖通、阿里巴巴国际交易市场、1688、阿里妈妈、阿里云、蚂蚁金服、菜鸟网络等。2014年9月19日，阿里巴巴集团在纽约证券交易所正式挂牌上市，股票代码“BABA”，创始人和董事局主席为马云。2015年全年，阿里巴巴总营收943.84亿元人民币，净利润688.44亿元人民币。</p>
                      </div>
                      <div class="tab-pane" id="tengxun2">
                        <p>
                          深圳市腾讯计算机系统有限公司成立于1998年11月，由马化腾、张志东、许晨晔、陈一丹、曾李青五位创始人共同创立，是中国最大的互联网综合服务提供商之一，也是中国服务用户最多的互联网企业之一。</p>
                        <p>腾讯多元化的服务包括：社交和通信服务QQ及微信/WeChat、社交网络平台QQ空间、腾讯游戏旗下QQ游戏平台、门户网站腾讯网、腾讯新闻客户端和网络视频服务腾讯视频等。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="row">
      &lt;div class="col-sm-3">
        &lt;ul class="nav nav-tabs nav-vt">
          &lt;li class="active">&lt;a href="#baidu2" data-toggle="tab">百度&lt;/a>&lt;/li>
          &lt;li>&lt;a href="#ali2" data-toggle="tab">阿里&lt;/a>&lt;/li>
          &lt;li>&lt;a href="#tengxun2" data-toggle="tab">腾讯&lt;/a>&lt;/li>
        &lt;/ul>
      &lt;/div>
      &lt;div class="col-sm-9">
        &lt;div class="tab-content">
          &lt;div class="tab-pane active" id="baidu2">
            &lt;p>
              百度（Nasdaq：BIDU）是全球最大的中文搜索引擎、最大的中文网站。
            &lt;/p>
          &lt;/div>
          &lt;div class="tab-pane" id="ali2">
            &lt;p>
              阿里巴巴网络技术有限公司（简称：阿里巴巴集团）是以曾担任英语教师的马云为首的18人，于1999年在中国杭州创立。
            &lt;/p>
          &lt;/div>
          &lt;div class="tab-pane" id="tengxun2">
            &lt;p>
              深圳市腾讯计算机系统有限公司成立于1998年11月，由马化腾、张志东、许晨晔、陈一丹、曾李青五位创始人共同创立。&lt;/p>
            &lt;p>
          &lt;/div>
        &lt;/div>
      &lt;/div>
    &lt;/div>
                </code></pre>
              </div>
            </div>
          </section>

          <div class="divider-lg"></div>

          <section class="yyui-docs-section" id="navbar">
            <h2 class="m-b-6">导航条
              <small><code>_navbar.scss</code></small>
            </h2>
            <p class="lead">导航条是在您的应用或网站中作为导航页头的响应式基础组件。它们在移动设备上可以折叠（并且可开可关），且在视口（viewport）宽度增加时逐渐变为水平展开模式。</p>

            <h3 id="navbar_default">默认导航条</h3>
            <p>默认的导航条是白色的背景，暗色的文字。</p>
            <p><code>.container</code>可以在<code>.navbar</code>的外部，栅格系统很灵活。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <nav class="navbar">
                  <div class="container">
                    <button type="button" class="navbar-toggle collapse" data-toggle="collapse" data-target="#navbar1">
                      <i class="fa fa-bars"></i>
                    </button>
                    <a class="navbar-brand" href="javascript:;">商标</a>
                    <div class="navbar-collapse collapse" id="navbar1">
                      <ul class="nav navbar-nav f-r">
                        <li><a href="javascript:;">项目</a></li>
                        <li><a href="javascript:;">项目</a></li>
                        <li><a href="javascript:;">项目</a></li>
                        <li><a href="javascript:;">项目</a></li>
                        <li><a href="javascript:;">项目</a></li>
                        <li class="dropdown">
                          <a class="dropdown-toggle" href="javascript:;">项目</a>
                          <ul class="dropdown-menu">
                            <li class="dropdown-item"><a href="javascript:;">项目</a></li>
                            <li class="dropdown-item"><a href="javascript:;">项目</a></li>
                            <li class="dropdown-item"><a href="javascript:;">项目</a></li>
                          </ul>
                        </li>
                      </ul>
                      <div class="f-r">
                        <input class="form-control f-l" type="text" placeholder="搜索..."/>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;nav class="navbar">
      &lt;div class="container">
        &lt;button type="button" class="navbar-toggle collapse" data-toggle="collapse" data-target="#navbar1">
          &lt;i class="fa fa-bars">&lt;/i>
        &lt;/button>
        &lt;a class="navbar-brand" href="javascript:;">商标&lt;/a>
        &lt;div class="navbar-collapse collapse" id="navbar1">
          &lt;ul class="nav navbar-nav f-r">
            &lt;li>&lt;a href="javascript:;">项目&lt;/a>&lt;/li>
            &lt;li>&lt;a href="javascript:;">项目&lt;/a>&lt;/li>
            &lt;li>&lt;a href="javascript:;">项目&lt;/a>&lt;/li>
            &lt;li>&lt;a href="javascript:;">项目&lt;/a>&lt;/li>
            &lt;li>&lt;a href="javascript:;">项目&lt;/a>&lt;/li>
            &lt;li class="dropdown">
              &lt;a class="dropdown-toggle" href="javascript:;">项目&lt;/a>
              &lt;ul class="dropdown-menu">
                &lt;li class="dropdown-item">&lt;a href="javascript:;">项目&lt;/a>&lt;/li>
                &lt;li class="dropdown-item">&lt;a href="javascript:;">项目&lt;/a>&lt;/li>
                &lt;li class="dropdown-item">&lt;a href="javascript:;">项目&lt;/a>&lt;/li>
              &lt;/ul>
            &lt;/li>
          &lt;/ul>
          &lt;div class="f-r">
            &lt;input class="form-control f-l" type="text" placeholder="搜索..."/>
          &lt;/div>
        &lt;/div>
      &lt;/div>
    &lt;/nav>
                </code></pre>
              </div>
            </div>

            <h3 id="navbar_fixed">固定位置</h3>
            <p>导航条可以固定在顶部和底部，但是，在设置了固定位置后，为了避免导航条将正文内容遮盖，要进行一些设置。导航条的高度是<span class="text-info">50px;</span>，正文部分要把它的位置留出来。
            </p>
            <ul>
              <li><code>.navbar-fixed-top:</code>固定在顶部。</li>
              <li><code>.navbar-fixed-bottom:</code>固定在底部。</li>
              <li><code>.navbar-sticky-top:</code><code>body</code>的滚动条位置没有超过导航条时，导航条在它本来的位置；超过了导航条的位置，导条就固定在底部。</li>
            </ul>
            <div class="yyui-docs-example">
              <div class="yyui-docs-code">
              <pre v-hljs><code class="html">
    &lt;nav class="navbar navbar-fixed-top">&lt;/nav>
                
    &lt;nav class="navbar navbar-fixed-bottom">&lt;/nav>
                
    &lt;nav class="navbar navbar-sticky-top">&lt;/nav>
              </code></pre>
              </div>
            </div>

            <h3 id="navbar_dark">黑色导航条</h3>
            <p>通过添加<code>.navbar-dark</code>将导航条外观变为黑色系。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-code">
              <pre v-hljs><code class="html">
    &lt;nav class="navbar navbar-dark">&lt;/nav>
              </code></pre>
              </div>
            </div>

            <h3 id="navbar_theme">主题导航条</h3>
            <p>主题导航条需要用户自己定制。在源文件的<code>_variables.scss</code>文件中，修改下面的值进行定制：</p>
            <ul>
              <li><code>$navbar-theme-bg:</code>背景色。</li>
              <li><code>$navbar-theme-color:</code>文字颜色。</li>
              <li><code>$navbar-theme-hover-color:</code>鼠标移动到导航项上时的文字颜色。</li>
              <li><code>$navbar-theme-active-bg:</code>鼠标移动到导航项上时的背景色。</li>
              <li><code>$navbar-dark-disabled-color:</code>禁用项的文字颜色。</li>
            </ul>
            <div class="yyui-docs-example">
              <div class="yyui-docs-code">
              <pre v-hljs><code class="html">
    &lt;nav class="navbar navbar-theme">&lt;/nav>
              </code></pre>
              </div>
            </div>

            <h3 id="navbar_perspective">透明导航条</h3>
            <p>通过添加<code>.navbar-perspective</code>类设置透明导航条。透明导航条的背景是透明色。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-code">
              <pre v-hljs><code class="html">
    &lt;nav class="navbar navbar-perspective">&lt;/nav>
              </code></pre>
              </div>
            </div>

            <h3 id="navbar_collapse">折叠</h3>
            <p>导航条在在视口（viewport）宽度小于<code>768px</code>时，会折叠成一个按钮，点击按钮可以显示/隐藏导航的内容；增加视口宽度时逐渐变为展开模式。</p>
            <p>折叠依赖<code>collapse.js</code>插件。如果 JavaScript 被禁用，并且视口（viewport）足够窄，致使导航条折叠起来，导航条将不能被打开，.navbar-collapse 内所包含的内容也将不可见。
            </p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-code">
              <pre v-hljs><code class="html">
    &lt;nav class="navbar">
    &lt;div class="container">
      &lt;button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#nav_bar">
        &#8645;
      &lt;/button>

      &lt;li class="navbar-brand">YY UI&lt;/li>

      &lt;div id="nav_bar" class="navbar-collapse collapse">
        &lt;ul class="nav navbar-nav">
          &lt;li>&lt;a>简介&lt;/a>&lt;/li>
          &lt;li>&lt;a>开始&lt;/a>&lt;/li>
          &lt;li>&lt;a>全局样式&lt;/a>&lt;/li>
          &lt;li>&lt;a>组件&lt;/a>&lt;/li>
          &lt;li>&lt;a>插件&lt;/a>&lt;/li>
        &lt;/ul>
      &lt;/div>
    &lt;/div>
  &lt;/nav>            
              </code></pre>
              </div>
            </div>
          </section>

          <div class="divider-lg"></div>

          <section class="yyui-docs-section" id="nav_path">
            <h2 class="m-b-6">路径导航
              <small><code>_breadcrumb.scss</code></small>
            </h2>
            <p class="lead">在一个带有层次的导航结构中标明当前页面的位置。</p>
            <p>各路径间的分隔符已经自动通过<code>:before</code>和<code>content</code>属性添加了。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <ol class="breadcrumb">
                  <li><a href="javascript:;">item</a></li>
                  <li><a href="javascript:;">item</a></li>
                  <li><a href="javascript:;">item</a></li>
                </ol>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;ol class="breadcrumb">
      &lt;li>&lt;a href="javascript:;">item&lt;/a>&lt;/li>
      &lt;li>&lt;a href="javascript:;">item&lt;/a>&lt;/li>
      &lt;li>&lt;a href="javascript:;">item&lt;/a>&lt;/li>
    &lt;/ol>
                </code></pre>
              </div>
            </div>
            <div class="yyui-docs-note">
              为什么要用<span class="text-danger">breadcrumb</span>来作类名呢？<br/>
              Because:
              <p>歪果仁们喜欢用有象征意义的名字，breadcrumb 的意思是面包屑。想想大家吃的切片面包，再看看导航路径的样式，嘿嘿嘿。。。</p>
            </div>
          </section>

          <div class="divider-lg"></div>

          <section class="yyui-docs-section" id="pagination">
            <h2 class="m-b-6">分页
              <small><code>_paginations.scss</code></small>
            </h2>
            <p class="lead">提供带有展示页码的分页组件和翻页组件。</p>
            <p><code>&laquo;</code>用<code>&amp;#171;</code>或<code>&amp;laquo;</code>表示，
              <code>&raquo;</code>用<code>&amp;#187;</code>或<code>&amp;raquo;</code>表示。
            </p>

            <h3 id="pagination_default">默认分页</h3>
            <p>给<code>&lt;ul></code>添加<code>.pagination</code>类，将其变为一个分页组件。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <ul class="pagination">
                  <li><a href="javascript:;">&laquo;</a></li>
                  <li><a href="javascript:;">1</a></li>
                  <li><a href="javascript:;">2</a></li>
                  <li><a href="javascript:;">3</a></li>
                  <li><a href="javascript:;">4</a></li>
                  <li><a href="javascript:;">&raquo;</a></li>
                </ul>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;ul class="pagination">
      &lt;li>&lt;a href="javascript:;">&laquo;&lt;/a>&lt;/li>
      &lt;li>&lt;a href="javascript:;">1&lt;/a>&lt;/li>
      &lt;li>&lt;a href="javascript:;">2&lt;/a>&lt;/li>
      &lt;li>&lt;a href="javascript:;">3&lt;/a>&lt;/li>
      &lt;li>&lt;a href="javascript:;">4&lt;/a>&lt;/li>
      &lt;li>&lt;a href="javascript:;">&raquo;&lt;/a>&lt;/li>
    &lt;/ul>
                </code></pre>
              </div>
            </div>

            <h3 id="pagination_border">带边框的分页</h3>
            <p>给<code>.pagination</code>分页组件添加<code>.pagination-border</code>类，使组件有边框。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <ul class="pagination pagination-border">
                  <li><a href="javascript:;">&laquo;</a></li>
                  <li><a href="javascript:;">1</a></li>
                  <li><a href="javascript:;">2</a></li>
                  <li><a href="javascript:;">3</a></li>
                  <li><a href="javascript:;">4</a></li>
                  <li><a href="javascript:;">&raquo;</a></li>
                </ul>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;ul class="pagination pagination-border">
      
    &lt;/ul>
                </code></pre>
              </div>
            </div>

            <h3 id="pagination_status">激活和禁用状态</h3>
            <p>给<code>&lt;li></code>添加<code>.active、.disabled</code>类，让其处于激活和禁用状态。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <ul class="pagination">
                  <li class="disabled"><a href="javascript:;">&laquo;</a></li>
                  <li class="active"><a href="javascript:;">1</a></li>
                  <li><a href="javascript:;">2</a></li>
                  <li><a href="javascript:;">3</a></li>
                  <li><a href="javascript:;">4</a></li>
                  <li><a href="javascript:;">&raquo;</a></li>
                </ul>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;ul class="pagination">
      &lt;li class="disabled">&lt;a href="javascript:;">&laquo;&lt;/a>&lt;/li>
      &lt;li class="active">&lt;a href="javascript:;">1&lt;/a>&lt;/li>
      &lt;li>&lt;a href="javascript:;">2&lt;/a>&lt;/li>
      &lt;li>&lt;a href="javascript:;">3&lt;/a>&lt;/li>
      &lt;li>&lt;a href="javascript:;">4&lt;/a>&lt;/li>
      &lt;li>&lt;a href="javascript:;">&raquo;&lt;/a>&lt;/li>
    &lt;/ul>
                </code></pre>
              </div>
            </div>

            <h3 id="pagination_size">尺寸</h3>
            <p>分页组件有三种尺寸。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <ul class="pagination pagination-lg">
                  <li><a href="javascript:;">&laquo;</a></li>
                  <li><a href="javascript:;">1</a></li>
                  <li><a href="javascript:;">2</a></li>
                  <li><a href="javascript:;">3</a></li>
                  <li><a href="javascript:;">4</a></li>
                  <li><a href="javascript:;">&raquo;</a></li>
                </ul>
                <br/>
                <ul class="pagination">
                  <li><a href="javascript:;">&laquo;</a></li>
                  <li><a href="javascript:;">1</a></li>
                  <li><a href="javascript:;">2</a></li>
                  <li><a href="javascript:;">3</a></li>
                  <li><a href="javascript:;">4</a></li>
                  <li><a href="javascript:;">&raquo;</a></li>
                </ul>
                <br/>
                <ul class="pagination pagination-sm">
                  <li><a href="javascript:;">&laquo;</a></li>
                  <li><a href="javascript:;">1</a></li>
                  <li><a href="javascript:;">2</a></li>
                  <li><a href="javascript:;">3</a></li>
                  <li><a href="javascript:;">4</a></li>
                  <li><a href="javascript:;">&raquo;</a></li>
                </ul>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;ul class="pagination pagination-lg">

    &lt;/ul>

    &lt;ul class="pagination">

    &lt;/ul>

    &lt;ul class="pagination pagination-sm">

    &lt;/ul>
                </code></pre>
              </div>
            </div>

            <h3 id="pagination_pager">翻页</h3>
            <p>两种翻页样式。当然也可以在<code>&lt;li></code>上添加<code>.disabled</code>类禁用。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <ol class="pager">
                  <li><a href="javascript:;">prev</a></li>
                  <li><a href="javascript:;">next</a></li>
                </ol>
                <ol class="pager">
                  <li class="pager-prev disabled"><a href="javascript:;">prev</a></li>
                  <li class="pager-next"><a href="javascript:;">next</a></li>
                </ol>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;ol class="pager">
      &lt;li>&lt;a href="javascript:;">prev&lt;/a>&lt;/li>
      &lt;li>&lt;a href="javascript:;">next&lt;/a>&lt;/li>
    &lt;/ol>
                  
    &lt;ol class="pager">
      &lt;li class="pager-prev disabled">&lt;a href="javascript:;">prev&lt;/a>&lt;/li>
      &lt;li class="pager-next">&lt;a href="javascript:;">next&lt;/a>&lt;/li>
    &lt;/ol>
                </code></pre>
              </div>
            </div>
          </section>

          <div class="divider-lg"></div>

          <section class="yyui-docs-section" id="label">
            <h2 class="m-b-6">标签
              <small><code>_labels.scss</code></small>
            </h2>
            <p class="lead">标签的字体大小为父元素的75%;</p>

            <h3 id="label_style">样式</h3>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <span class="label label-default">default</span>
                <span class="label label-primary">primary</span>
                <span class="label label-secondary">secondary</span>
                <span class="label label-success">success</span>
                <span class="label label-info">info</span>
                <span class="label label-warning">warning</span>
                <span class="label label-danger">danger</span>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;span class="label label-default">default&lt;/span>
                  
    &lt;span class="label label-primary">primary&lt;/span>
                  
    &lt;span class="label label-secondary">secondary&lt;/span>
                  
    &lt;span class="label label-success">success&lt;/span>
                  
    &lt;span class="label label-info">info&lt;/span>
                  
    &lt;span class="label label-warning">warning&lt;/span>
                  
    &lt;span class="label label-danger">danger&lt;/span>
                </code></pre>
              </div>
            </div>

            <h3 id="label_badge">徽章</h3>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <span class="label label-default label-badge">徽章</span>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;span class="label label-default label-badge">徽章&lt;/span>
                </code></pre>
              </div>
            </div>
          </section>

          <div class="divider-lg"></div>

          <section class="yyui-docs-section" id="jumbotron">
            <h2 class="m-b-6">巨幕
              <small><code>_jumbotron.scss</code></small>
            </h2>
            <p class="lead">这是一个轻量、灵活的组件，它能延伸至整个浏览器视口来展示网站上的关键内容。</p>

            <h3 id="jumbotron_example">实例</h3>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="jumbotron">
                  <h1>这是超大巨幕</h1>
                  <p>
                    On Friday night, London sought to distinguish itself from Beijing's 2008 spectacular by joining spectators
                    and technology into an unusual team for the opening ceremony of the 2012 Olympics: the human Jumbotron.
                    <br/>
                    周五晚上，为了显示出自己有别于2008年北京奥运会盛大开幕式的独具一格的一面，2012年伦敦奥运会开幕式罕见地将现场观众和现代科技融为一体，由真人元素构成了一面超大屏幕。</p>
                  <button type="button" class="btn btn-success btn-lg">大按钮</button>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="jumbotron">
      &lt;h1>这是超大巨幕&lt;/h1>
      &lt;p>
        On Friday night, London sought to distinguish itself from Beijing's 2008 spectacular by joining spectators
        and technology into an unusual team for the opening ceremony of the 2012 Olympics: the human Jumbotron.
        &lt;br/>
        周五晚上，为了显示出自己有别于2008年北京奥运会盛大开幕式的独具一格的一面。&lt;/p>
      &lt;button type="button" class="btn btn-success btn-lg">大按钮&lt;/button>
    &lt;/div>
                </code></pre>
              </div>
            </div>

            <h3 id="jumbotron_hr">分隔符</h3>
            <p>在<code>&lt;div></code>添加<code>.jumbotron-hr</code>类，为巨幕添加分隔符。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="jumbotron">
                  <h1>这是超大巨幕</h1>
                  <p>On Friday night, London sought to distinguish itself from Beijing's 2008 spectacular.</p>
                  <div class="jumbotron-hr"></div>
                  <button type="button" class="btn btn-success btn-lg">大按钮</button>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="jumbotron">
      &lt;h1>这是超大巨幕&lt;/h1>
      &lt;p>On Friday night, London sought to distinguish itself from Beijing's 2008 spectacular.&lt;/p>
      &lt;div class="jumbotron-hr">&lt;/div>
      &lt;button type="button" class="btn btn-success btn-lg">大按钮&lt;/button>
    &lt;/div>
                </code></pre>
              </div>
            </div>
          </section>

          <div class="divider-lg"></div>

          <section class="yyui-docs-section" id="thumbnail">
            <h2 class="m-b-6">缩略图
              <small><code>_thumbnail.scss</code></small>
            </h2>
            <p class="lead">通过缩略图组件扩展 YY UI 的 <a href="global.htmlrid">栅格系统</a>，可以很容易地展示栅格样式的图像、视频、文本等内容。</p>
            <p>如果你想实现一个瀑布流，你需要使用一个第三方插件，比如
              <a href="http://masonry.desandro.com">Masonry</a>、<a href="http://isotope.metafizzy.co">Isotope</a> 或
              <a href="http://salvattore.com">Salvattore</a>。
            </p>

            <h3 id="thumbnail_example">实例</h3>
            <p><code>.thumbnail</code>中的图片宽度始终是<span class="text-danger">100%</span>。可以在<code>&lt;img></code>外面包裹<code>&lt;a></code>
            </p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="row">
                  <div class="col-sm-3">
                    <div class="thumbnail">
                      <img src="../assets/image/tl.png" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="thumbnail">
      &lt;img src="..." alt=""/>
    &lt;/div>
                </code></pre>
              </div>
            </div>

            <h3 id="thumbnail_caption">名片</h3>
            <p>在<code>.thumbnail</code>内部添加<code>.caption></code>，制作简易名片。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="row">
                  <div class="col-sm-3">
                    <div class="thumbnail">
                      <a href="javascript:;">
                        <img src="../assets/image/tl.png" alt=""/>
                      </a>
                      <div class="caption">
                        <h4>奇幻森林</h4>
                        <p>
                          毛克利（尼尔·塞西 Neel Sethi 饰）是一个由狼群养大的人类男孩，影片围绕他的森林冒险徐徐展开。谢利·可汗，一只受过人类伤害的老虎（伊德里斯·艾尔巴 Idris Elba 配音），
                          发誓要将毛克利铲除。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="thumbnail">
      &lt;a href="javascript:;">
        &lt;img src="../assets/image/tl.png" alt=""/>
      &lt;/a>
      &lt;div class="caption">
        &lt;h4>奇幻森林&lt;/h4>
        &lt;p>
          毛克利（尼尔·塞西 Neel Sethi 饰）是一个由狼群养大的人类男孩，影片围绕他的森林冒险徐徐展开。谢利·可汗，一只受过人类伤害的老虎（伊德里斯·艾尔巴 Idris Elba 配音），
          发誓要将毛克利铲除。&lt;/p>
      &lt;/div>
    &lt;/div>
                </code></pre>
              </div>
            </div>
          </section>

          <div class="divider-lg"></div>

          <section class="yyui-docs-section" id="alert">
            <h2 class="m-b-6">警告框
              <small><code>_alert.scss</code></small>
            </h2>
            <p class="lead">警告框组件通过提供一些灵活的预定义消息，为常见的用户动作提供反馈消息。警告框中的消息一般比较重要，自带背景醒目。</p>

            <h3 id="alert_example">实例</h3>
            <p>将任意文本放在警告框中，<code>.alert</code>类是必须要设置的，警告框没有默认样式，需要添加特定样式类，代表不同的警告信息。YY UI 设置了四种状态。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="alert alert-success">这是警告框，只有四种状态</div>
                <div class="alert alert-info">这是警告框，只有四种状态</div>
                <div class="alert alert-warning">这是警告框，只有四种状态</div>
                <div class="alert alert-danger">这是警告框，只有四种状态</div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="alert alert-success">这是警告框，只有四种状态&lt;/div>
                  
    &lt;div class="alert alert-info">这是警告框，只有四种状态&lt;/div>
                  
    &lt;div class="alert alert-warning">这是警告框，只有四种状态&lt;/div>
                  
    &lt;div class="alert alert-danger">这是警告框，只有四种状态&lt;/div>
                </code></pre>
              </div>
            </div>

            <h3 id="alert_size">尺寸</h3>
            <p>YY UI 有三种尺寸。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="alert alert-info alert-lg">大警告框</div>
                <div class="alert alert-info">默认警告框</div>
                <div class="alert alert-info alert-sm">小警告框</div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="alert alert-info alert-lg">大警告框&lt;/div>

    &lt;div class="alert alert-info">默认警告框&lt;/div>

    &lt;div class="alert alert-info alert-sm">小警告框&lt;/div>
                </code></pre>
              </div>
            </div>

            <h3 id="alert_dismissible">可关闭的警告框</h3>
            <p>为警告框添加<code>.alert-dismissible</code>类，并在内部添加关闭按钮。按钮需要添加<code>data-dismiss="alert"</code>标识，并且依赖<a
                href="javascript:;">alert.js插件</a>。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="alert alert-info alert-dismissible">
                  这是警告框，只有四种状态
                  <button type="button" class="close" data-dismiss="alert">×</button>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="alert alert-info alert-dismissible">
      这是警告框，只有四种状态
      &lt;button type="button" class="close" data-dismiss="alert">×&lt;/button>
    &lt;/div>
                </code></pre>
              </div>
            </div>

            <h3 id="alert_link">链接</h3>
            <p>为警告框内部的<code>&lt;a></code>标签添加<code>.alert-link</code>类。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="alert alert-success">
                  这是警告框，只有四种状态,<a class="alert-link" href="javascript:;">链接</a>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="alert alert-success">
      这是警告框，只有四种状态,&lt;a class="alert-link" href="javascript:;">链接&lt;/a>
    &lt;/div>
                </code></pre>
              </div>
            </div>
          </section>

          <div class="divider-lg"></div>

          <section class="yyui-docs-section" id="progress">
            <h2 class="m-b-6">进度条
              <small><code>_progress.scss</code></small>
            </h2>
            <p class="lead">通过这些简单、灵活的进度条，为当前工作流程或动作提供实时反馈。</p>

            <h3 id="progress_default">默认进度条</h3>
            <p class="text-danger">
              直接使用H5<code>&lt;progress></code>标签是一种十分棒的体验，但是兼容性不好，而且里面无法显示文字，推荐使用<code>.progress</code>模拟的进度条，在<a
                href="#progress_shutdown">高兼容性进度条</a>中有详细介绍。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <progress value="10" max="100"></progress>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;progress value="10" max="100">&lt;/progress>
                </code></pre>
              </div>
            </div>

            <h3 id="progress_situation">情境</h3>
            <p>YY UI 有7种情境进度条。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <progress value="10" max="100"></progress>
                <progress class="progress-secondary" value="20" max="100"></progress>
                <progress class="progress-gray" value="30" max="100"></progress>
                <progress class="progress-success" value="40" max="100"></progress>
                <progress class="progress-info" value="50" max="100"></progress>
                <progress class="progress-warning" value="60" max="100"></progress>
                <progress class="progress-danger" value="70" max="100"></progress>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;progress value="10" max="100">&lt;/progress>

    &lt;progress class="progress-secondary" value="20" max="100">&lt;/progress>

    &lt;progress class="progress-gray" value="30" max="100">&lt;/progress>

    &lt;progress class="progress-success" value="40" max="100">&lt;/progress>

    &lt;progress class="progress-info" value="50" max="100">&lt;/progress>

    &lt;progress class="progress-warning" value="60" max="100">&lt;/progress>
                  
    &lt;progress class="progress-danger" value="70" max="100">&lt;/progress>
                </code></pre>
              </div>
            </div>

            <h3 id="progress_striped">条纹</h3>
            <p>条纹进度条结合了<code>background-image</code>和<code>linear-gradient</code>。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <progress class="progress-striped" value="10" max="100"></progress>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;progress class="progress-striped" value="10" max="100">&lt;/progress>
                </code></pre>
              </div>
            </div>

            <h3 id="progress_shutdown">高兼容性进度条</h3>
            <p>用<code>.progress</code>和<code>.progress-value</code>模拟进度条。通过<code>style="width: 10%;"</code>给<code>.progress-value</code>设置宽度来表示进度。
            </p>
            <p>模拟的进度条也可以使用情境和条纹样式。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="progress">
                  <div class="progress-value" style="width: 10%;">10%</div>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="progress">
      &lt;div class="progress-value" style="width: 10%;">10%&lt;/div>
    &lt;/div>
                </code></pre>
              </div>
            </div>

            <h3 id="progress_animated">动画</h3>
            <p>动画进度条在条纹进度条的基础上运用了<code>animation</code>。动画效果只能使用模拟的进度条，无法使用<code>&lt;progress></code>标签。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="progress progress-striped progress-animated">
                  <div class="progress-value" style="width: 20%;">20%</div>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="progress progress-striped progress-animated">
      &lt;div class="progress-value" style="width: 20%;">20%&lt;/div>
    &lt;/div>
                </code></pre>
              </div>
            </div>
          </section>

          <div class="divider-lg"></div>

          <section class="yyui-docs-section" id="list_group">
            <h2 class="m-b-6">列表组
              <small><code>_list-group.scss</code></small>
            </h2>
            <p class="lead">列表组能用于显示一组简单的元素，还能用于复杂的定制的内容。</p>

            <h3 id="list_group_default">默认列表</h3>
            <p>最简单的列表组仅仅是一个带有多个列表条目的无序列表，另外还需要设置适当的类。我们提供了一些预定义的样式，你可以根据自身的需求通过 CSS 自己定制。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <ul class="list-group">
                  <li class="list-group-item">百度</li>
                  <li class="list-group-item">阿里</li>
                  <li class="list-group-item">腾讯</li>
                </ul>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;ul class="list-group">
      &lt;li class="list-group-item">百度&lt;/li>
      &lt;li class="list-group-item">阿里&lt;/li>
      &lt;li class="list-group-item">腾讯&lt;/li>
    &lt;/ul>
                </code></pre>
              </div>
            </div>

            <h3 id="list_group_flush">无左右边框的列表</h3>
            <p>为列表添加<code>.list-group-flush</code>类，消除列表左右边框。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">百度</li>
                  <li class="list-group-item">阿里</li>
                  <li class="list-group-item">腾讯</li>
                </ul>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;ul class="list-group list-group-flush">
      &lt;li class="list-group-item">百度&lt;/li>
      &lt;li class="list-group-item">阿里&lt;/li>
      &lt;li class="list-group-item">腾讯&lt;/li>
    &lt;/ul>
                </code></pre>
              </div>
            </div>

            <h3 id="list_group_noborder">无边框的列表</h3>
            <p>为列表添加<code>.list-group-noborder</code>类，消除列表边框。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <ul class="list-group list-group-noborder">
                  <li class="list-group-item">百度</li>
                  <li class="list-group-item">阿里</li>
                  <li class="list-group-item">腾讯</li>
                </ul>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;ul class="list-group list-group-noborder">
      &lt;li class="list-group-item">百度&lt;/li>
      &lt;li class="list-group-item">阿里&lt;/li>
      &lt;li class="list-group-item">腾讯&lt;/li>
    &lt;/ul>
                </code></pre>
              </div>
            </div>

            <h3 id="list_group_link">链接</h3>
            <p>在<code>&lt;li></code>中添加一层<code>&lt;a></code>标签。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <ul class="list-group list-group-link">
                  <li class="list-group-item"><a href="javascript:;">百度</a></li>
                  <li class="list-group-item"><a href="javascript:;">阿里</a></li>
                  <li class="list-group-item"><a href="javascript:;">腾讯</a></li>
                </ul>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;ul class="list-group list-group-link">
      &lt;li class="list-group-item">&lt;a href="javascript:;">百度&lt;/a>&lt;/li>
      &lt;li class="list-group-item">&lt;a href="javascript:;">阿里&lt;/a>&lt;/li>
      &lt;li class="list-group-item">&lt;a href="javascript:;">腾讯&lt;/a>&lt;/li>
    &lt;/ul>
                </code></pre>
              </div>
            </div>

            <h3 id="list_group_status">激活和禁用状态</h3>
            <p>为<code>.list-group-item</code>添加<code>.active、.disabled</code>类，为其添加激活和禁用状态。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <ul class="list-group">
                  <li class="list-group-item active">百度</li>
                  <li class="list-group-item disabled">阿里</li>
                  <li class="list-group-item">腾讯</li>
                </ul>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;ul class="list-group">
      &lt;li class="list-group-item active">百度&lt;/li>
      &lt;li class="list-group-item disabled">阿里&lt;/li>
      &lt;li class="list-group-item">腾讯&lt;/li>
    &lt;/ul>
                </code></pre>
              </div>
            </div>

            <h3 id="list_group_situation">情境</h3>
            <p>YY UI 提供了6种情境。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="row">
                  <div class="col-sm-4 col-md-3">
                    <ul class="list-group list-group-primary">
                      <li class="list-group-item active">百度</li>
                      <li class="list-group-item disabled">阿里</li>
                      <li class="list-group-item">腾讯</li>
                    </ul>
                  </div>
                  <div class="col-sm-4 col-md-3">
                    <ul class="list-group list-group-secondary">
                      <li class="list-group-item active">百度</li>
                      <li class="list-group-item disabled">阿里</li>
                      <li class="list-group-item">腾讯</li>
                    </ul>
                  </div>
                  <div class="col-sm-4 col-md-3">
                    <ul class="list-group list-group-success">
                      <li class="list-group-item active">百度</li>
                      <li class="list-group-item disabled">阿里</li>
                      <li class="list-group-item">腾讯</li>
                    </ul>
                  </div>
                  <div class="col-sm-4 col-md-3">
                    <ul class="list-group list-group-info">
                      <li class="list-group-item active">百度</li>
                      <li class="list-group-item disabled">阿里</li>
                      <li class="list-group-item">腾讯</li>
                    </ul>
                  </div>
                  <div class="col-sm-4 col-md-3">
                    <ul class="list-group list-group-warning">
                      <li class="list-group-item active">百度</li>
                      <li class="list-group-item disabled">阿里</li>
                      <li class="list-group-item">腾讯</li>
                    </ul>
                  </div>
                  <div class="col-sm-4 col-md-3">
                    <ul class="list-group list-group-danger">
                      <li class="list-group-item active">百度</li>
                      <li class="list-group-item disabled">阿里</li>
                      <li class="list-group-item">腾讯</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="yyui-docs-code">
              <pre v-hljs><code class="html">
    &lt;ul class="list-group list-group-primary">
      &lt;li class="list-group-item active">百度&lt;/li>
      &lt;li class="list-group-item disabled">阿里&lt;/li>
      &lt;li class="list-group-item">腾讯&lt;/li>
    &lt;/ul>

    &lt;ul class="list-group list-group-secondary">
      &lt;li class="list-group-item active">百度&lt;/li>
      &lt;li class="list-group-item disabled">阿里&lt;/li>
      &lt;li class="list-group-item">腾讯&lt;/li>
    &lt;/ul>

    &lt;ul class="list-group list-group-success">
      &lt;li class="list-group-item active">百度&lt;/li>
      &lt;li class="list-group-item disabled">阿里&lt;/li>
      &lt;li class="list-group-item">腾讯&lt;/li>
    &lt;/ul>

    &lt;ul class="list-group list-group-info">
      &lt;li class="list-group-item active">百度&lt;/li>
      &lt;li class="list-group-item disabled">阿里&lt;/li>
      &lt;li class="list-group-item">腾讯&lt;/li>
    &lt;/ul>

    &lt;ul class="list-group list-group-warning">
      &lt;li class="list-group-item active">百度&lt;/li>
      &lt;li class="list-group-item disabled">阿里&lt;/li>
      &lt;li class="list-group-item">腾讯&lt;/li>
    &lt;/ul>

    &lt;ul class="list-group list-group-danger">
      &lt;li class="list-group-item active">百度&lt;/li>
      &lt;li class="list-group-item disabled">阿里&lt;/li>
      &lt;li class="list-group-item">腾讯&lt;/li>
    &lt;/ul>
              </code></pre>
              </div>
            </div>

            <h3 id="list_group_row">行状态</h3>
            <p>行状态用于标识特殊行。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <ul class="list-group">
                  <li class="list-group-item list-group-item-primary">百度</li>
                  <li class="list-group-item list-group-item-secondary">阿里</li>
                  <li class="list-group-item list-group-item-success">腾讯</li>
                  <li class="list-group-item list-group-item-info">盛大</li>
                  <li class="list-group-item list-group-item-warning">新浪</li>
                  <li class="list-group-item list-group-item-danger">人人</li>
                </ul>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;ul class="list-group">
      &lt;li class="list-group-item list-group-item-primary">百度&lt;/li>
      &lt;li class="list-group-item list-group-item-secondary">阿里&lt;/li>
      &lt;li class="list-group-item list-group-item-success">腾讯&lt;/li>
      &lt;li class="list-group-item list-group-item-info">盛大&lt;/li>
      &lt;li class="list-group-item list-group-item-warning">新浪&lt;/li>
      &lt;li class="list-group-item list-group-item-danger">人人&lt;/li>
    &lt;/ul>
                </code></pre>
              </div>
            </div>


            <h3 id="list_group_content">详细列表</h3>
            <p>列表元素为<code>&lt;div></code>，为其添加<code>.list-group</code>类。</p>
            <p>当然也可以为其添加不同的<a href="#list_group_situation">情境</a>，<a href="#list_group_status">激活禁用状态</a>，<a
                href="#list_group_row">行状态</a>等。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <ul class="list-group">
                  <li class="list-group-item active">
                    <a href="javascript:;">
                      <h4 class="list-group-item-heading">百度</h4>
                      <p class="list-group-item-text">
                        百度（Nasdaq：BIDU）是全球最大的中文搜索引擎、最大的中文网站。2000年1月由李彦宏创立于北京中关村，致力于向人们提供“简单，可依赖”的信息获取方式。</p>
                    </a>
                  </li>
                  <li class="list-group-item disabled">
                    <a href="javascript:;">
                      <h4 class="list-group-item-heading">阿里</h4>
                      <p class="list-group-item-text">
                        阿里巴巴网络技术有限公司（简称：阿里巴巴集团）是以曾担任英语教师的马云为首的18人，于1999年在中国杭州创立，他们相信互联网能够创造公平的竞争环境，让小企业通过创新与科技扩展业务，并在参与国内或全球市场竞争时处于更有利的位置。</p>
                    </a>
                  </li>
                  <li class="list-group-item">
                    <a href="javascript:;">
                      <h4 class="list-group-item-heading">腾讯</h4>
                      <p class="list-group-item-text">
                        深圳市腾讯计算机系统有限公司成立于1998年11月，由马化腾、张志东、许晨晔、陈一丹、曾李青五位创始人共同创立。[1]  是中国最大的互联网综合服务提供商之一，也是中国服务用户最多的互联网企业之一。</p>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;ul class="list-group">
      &lt;li class="list-group-item active">
        &lt;a href="javascript:;">
          &lt;h4 class="list-group-item-heading">百度&lt;/h4>
          &lt;p class="list-group-item-text">
            百度（Nasdaq：BIDU）是全球最大的中文搜索引擎、最大的中文网站。&lt;/p>
        &lt;/a>
      &lt;/li>
      &lt;li class="list-group-item disabled">
        &lt;a href="javascript:;">
          &lt;h4 class="list-group-item-heading">阿里&lt;/h4>
          &lt;p class="list-group-item-text">
            阿里巴巴网络技术有限公司（简称：阿里巴巴集团）是以曾担任英语教师的马云为首的18人，于1999年在中国杭州创立。&lt;/p>
        &lt;/a>
      &lt;/li>
      &lt;li class="list-group-item">
        &lt;a href="javascript:;">
          &lt;h4 class="list-group-item-heading">腾讯&lt;/h4>
          &lt;p class="list-group-item-text">
            深圳市腾讯计算机系统有限公司成立于1998年11月，由马化腾、张志东、许晨晔、陈一丹、曾李青五位创始人共同创立。&lt;/p>
        &lt;/a>
      &lt;/li>
    &lt;/ul>
                </code></pre>
              </div>
            </div>
          </section>

          <div class="divider-lg"></div>

          <section class="yyui-docs-section" id="media">
            <h2 class="m-b-6">媒体对象
              <small><code>_media.scss</code></small>
            </h2>
            <p class="lead">媒体对像主要用于评论等互动模块。</p>

            <h3 id="media_example">实例</h3>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="media">
                  <div class="media-left">
                    <img src="../assets/image/haimian.jpg" alt="..."/>
                  </div>
                  <div class="media-body">
                    <h5 class="media-heading"><a href="javascript:;">海绵宝宝</a>
                      <small class="f-r">2016-4-4</small>
                    </h5>
                    <p>
                      这是一个抽象的样式，用以构建不同类型的组件，这些组件都具有在文本内容的左或右侧对齐的图片（就像博客评论或 Twitter 消息等）。
                      允许在一个内容块的左边或右边展示一个多媒体内容（图像、视频、音频）。
                    </p>
                  </div>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="media">
      &lt;div class="media-left">
        &lt;img src="../assets/image/haimian.jpg" alt="..."/>
      &lt;/div>
      &lt;div class="media-body">
        &lt;h5 class="media-heading">&lt;a href="javascript:;">海绵宝宝&lt;/a>
          &lt;small class="f-r">2016-4-4&lt;/small>
        &lt;/h5>
        &lt;p>
          这是一个抽象的样式，用以构建不同类型的组件。
        &lt;/p>
      &lt;/div>
    &lt;/div>
                </code></pre>
              </div>
            </div>

            <h3 id="media_right">头像在右侧</h3>
            <p>
              要想实现头像在右侧，包裹头像的<code>&lt;div></code>的类要由<code>.media-left</code>切换为<code>.meida-right</code>，并且要将其放在<code>.media-body</code>的后面。
            </p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="media">
                  <div class="media-body">
                    <h5 class="media-heading"><a href="javascript:;">海绵宝宝</a>
                      <small class="f-r">2016-4-4</small>
                    </h5>
                    <p>
                      这是一个抽象的样式，用以构建不同类型的组件，这些组件都具有在文本内容的左或右侧对齐的图片（就像博客评论或 Twitter 消息等）。
                      允许在一个内容块的左边或右边展示一个多媒体内容（图像、视频、音频）。
                    </p>
                  </div>

                  <div class="media-right">
                    <img src="../assets/image/haimian.jpg" alt="..."/>
                  </div>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="media">
      &lt;div class="media-body">
        &lt;h5 class="media-heading">&lt;a href="javascript:;">海绵宝宝&lt;/a>
          &lt;small class="f-r">2016-4-4&lt;/small>
        &lt;/h5>
        &lt;p>
          这是一个抽象的样式，用以构建不同类型的组件。
        &lt;/p>
      &lt;/div>

      &lt;div class="media-right">
        &lt;img src="..." alt="..."/>
      &lt;/div>
    &lt;/div>
                </code></pre>
              </div>
            </div>

            <h3 id="media_mixin">嵌套</h3>
            <p>在<code>.media-body</code>中再嵌套一个<a href="#media">媒体对象</a>可以实现评论效果。</p>
            <div class="yyui-docs-example">
              <div class="yyui-docs-surface">
                <div class="media">
                  <div class="media-left">
                    <img src="../assets/image/haimian.jpg" alt="..."/>
                  </div>
                  <div class="media-body">
                    <h5 class="media-heading"><a href="javascript:;">海绵宝宝</a>
                      <small class="f-r">2016-4-4</small>
                    </h5>
                    <p>
                      这是一个抽象的样式，用以构建不同类型的组件，这些组件都具有在文本内容的左或右侧对齐的图片（就像博客评论或 Twitter 消息等）。
                      允许在一个内容块的左边或右边展示一个多媒体内容（图像、视频、音频）。
                    </p>

                    <div class="media">
                      <div class="media-left">
                        <img src="../assets/image/haimian.jpg" alt="..."/>
                      </div>
                      <div class="media-body">
                        <h5 class="media-heading"><a href="javascript:;">海绵宝宝</a>
                          <small class="f-r">2016-4-4</small>
                        </h5>
                        <p>
                          这是一个抽象的样式，用以构建不同类型的组件，这些组件都具有在文本内容的左或右侧对齐的图片（就像博客评论或 Twitter 消息等）。
                          允许在一个内容块的左边或右边展示一个多媒体内容（图像、视频、音频）。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="yyui-docs-code">
                <!--<i class="fa fa-file-code-o yyui-docs-copy"></i>-->
                <pre v-hljs><code class="html">
    &lt;div class="media">
      &lt;div class="media-left">
        &lt;img src="..." alt="..."/>
      &lt;/div>
      &lt;div class="media-body">
        &lt;h5 class="media-heading">&lt;a href="javascript:;">海绵宝宝&lt;/a>
          &lt;small class="f-r">2016-4-4&lt;/small>
        &lt;/h5>
        &lt;p>
          这是一个抽象的样式，用以构建不同类型的组件。
        &lt;/p>

        &lt;div class="media">
          &lt;div class="media-left">
            &lt;img src="..." alt="..."/>
          &lt;/div>
          &lt;div class="media-body">
            &lt;h5 class="media-heading">&lt;a href="javascript:;">海绵宝宝&lt;/a>
              &lt;small class="f-r">2016-4-4&lt;/small>
            &lt;/h5>
            &lt;p>
              这是一个抽象的样式，用以构建不同类型的组件。
            &lt;/p>
          &lt;/div>
        &lt;/div>
      &lt;/div>
    &lt;/div>
                </code></pre>
              </div>
            </div>
            <p class="text-info">头像是使用的<code>&lt;img></code>元素，因此，你可以为其设置<code>&lt;img></code>的<a
                href="global.html#image">图片类</a>。</p>
          </section>
        </div>

        <div class="col-md-3">
          <div class="sidebar" id="sidebar">
            <ul class="nav nav-vt">
              <li>
                <a class="nav-link" @click.stop.prevent="toAnchor('dropdown')" href="#dropdown">下拉菜单</a>
                <ul class="nav">
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('dropdown_default')" href="#dropdown_default">默认下拉菜单</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('dropdown_up')" href="#dropdown_up">上拉菜单</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('dropdown_header')" href="#dropdown_header">子菜单标题</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('dropdown_divider')" href="#dropdown_divider">分割线</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('dropdown_disabled')" href="#dropdown_disabled">禁用子菜单</a></li>
                </ul>
              </li>
              <li>
                <a class="nav-link" @click.stop.prevent="toAnchor('btn_group')" href="#btn_group">按钮组</a>
                <ul class="nav">
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('btn_group_example')" href="#btn_group_example">实例</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('btn_group_size')" href="#btn_group_size">尺寸</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('btn_group_block')" href="#btn_group_block">块组</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('btn_group_vt')" href="#btn_group_vt">垂直组</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('btn_group_dropdown')" href="#btn_group_dropdown">带下拉框的按钮组</a></li>
                </ul>
              </li>
              <li>
                <a class="nav-link" @click.stop.prevent="toAnchor('input_group')" href="#input_group">输入框组</a>
                <ul class="nav">
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('input_group_example')" href="#input_group_example">实例</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('input_group_size')" href="#input_group_size">尺寸</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('input_group_btn')" href="#input_group_btn">按钮输入框组</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('input_group_situations')" href="#input_group_situations">情境</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('input_group_dropdown')" href="#input_group_dropdown">含下拉框的输入框组</a></li>
                </ul>
              </li>
              <li>
                <a class="nav-link" @click.stop.prevent="toAnchor('nav')" href="#nav">导航</a>
                <ul class="nav">
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('nav_example')" href="#nav_example">实例</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('nav_pills')" href="#nav_pills">胶囊式导航</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('nav_dropdown')" href="#nav_dropdown">带下拉框的导航</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('nav_vt')" href="#nav_vt">垂直导航</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('nav_tabs')" href="#nav_tabs">标签页导航</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('nav_tabs_vt')" href="#nav_tabs_vt">垂直标签导航</a></li>
                </ul>
              </li>
              <li>
                <a class="nav-link" @click.stop.prevent="toAnchor('navbar')" href="#navbar">导航条</a>
                <ul class="nav">
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('navbar_default')" href="#navbar_default">默认导航条</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('navbar_default')" href="#navbar_fixed">固定位置</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('navbar_dark')" href="#navbar_dark">黑色导航条</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('navbar_theme')" href="#navbar_theme">主题导航条</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('navbar_perspective')" href="#navbar_perspective">透明导航条</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('navbar_college')" href="#navbar_college">折叠</a></li>
                </ul>
              </li>
              <li>
                <a class="nav-link" @click.stop.prevent="toAnchor('nav_path')" href="#nav_path">路径导航</a>
              </li>
              <li>
                <a class="nav-link" @click.stop.prevent="toAnchor('pagination')" href="#pagination">分页</a>
                <ul class="nav">
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('pagination_default')" href="#pagination_default">默认分页</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('pagination_border')" href="#pagination_border">带边框的分页</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('pagination_status')" href="#pagination_status">激活和禁用状态</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('pagination_size')" href="#pagination_size">尺寸</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('pagination_pager')" href="#pagination_pager">翻页</a></li>
                </ul>
              </li>
              <li>
                <a class="nav-link" @click.stop.prevent="toAnchor('label')" href="#label">标签</a>
                <ul class="nav">
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('label_style')" href="#label_style">样式</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('label_badge')" href="#label_badge">徽章</a></li>
                </ul>
              </li>
              <li>
                <a class="nav-link" @click.stop.prevent="toAnchor('jumbotron')" href="#jumbotron">巨幕</a>
                <ul class="nav">
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('jumbotron_example')" href="#jumbotron_example">实例</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('jumbotron_hr')" href="#jumbotron_hr">分隔符</a></li>
                </ul>
              </li>
              <li>
                <a class="nav-link" @click.stop.prevent="toAnchor('thumbnail')" href="#thumbnail">缩略图</a>
                <ul class="nav">
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('thumbnail_example')" href="#thumbnail_example">实例</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('thumbnail_caption')" href="#thumbnail_caption">名片</a></li>
                </ul>
              </li>
              <li>
                <a class="nav-link" @click.stop.prevent="toAnchor('alert')" href="#alert">警告框</a>
                <ul class="nav">
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('alert_example')" href="#alert_example">实例</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('alert_example')" href="#alert_size">尺寸</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('alert_dismissible')" href="#alert_dismissible">可关闭的警告框</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('alert_dismissible')" href="#alert_link">链接</a></li>
                </ul>
              </li>
              <li>
                <a class="nav-link" @click.stop.prevent="toAnchor('progress')" href="#progress">进度条</a>
                <ul class="nav">
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('progress_default')" href="#progress_default">默认进度条</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('progress_situation')" href="#progress_situation">情境</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('progress_striped')" href="#progress_striped">条纹</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('progress_shutdown')" href="#progress_shutdown">高兼容性进度条</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('progress_animated')" href="#progress_animated">动画</a></li>
                </ul>
              </li>
              <li>
                <a class="nav-link" @click.stop.prevent="toAnchor('list_group')" href="#list_group">列表组</a>
                <ul class="nav">
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('list_group_default')" href="#list_group_default">默认列表</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('list_group_flush')" href="#list_group_flush">无左右边框的列表</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('list_group_noborder')" href="#list_group_noborder">无边框的列表</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('list_group_link')" href="#list_group_link">链接</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('list_group_status')" href="#list_group_status">激活禁用状态</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('list_group_situation')" href="#list_group_situation">情境</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('list_group_row')" href="#list_group_row">行状态</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('list_group_content')" href="#list_group_content">详细列表</a></li>
                </ul>
              </li>
              <li>
                <a class="nav-link" @click.stop.prevent="toAnchor('media')" href="#media">媒体对象</a>
                <ul class="nav">
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('media_example')" href="#media_example">实例</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('media_right')" href="#media_right">头像在右侧</a></li>
                  <li><a class="nav-link" @click.stop.prevent="toAnchor('media_mixin')" href="#media_mixin">嵌套</a></li>
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
    name: 'components',
    components: {
      'masthead-component': masthead
    },
    methods: {
      toAnchor: common.toAnchor
    }
  }
</script>