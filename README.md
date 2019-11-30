<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>README</title>
  <link rel="stylesheet" href="https://stackedit.io/style.css" />
</head>

<body class="stackedit">
  <div class="stackedit__left">
    <div class="stackedit__toc">
      
<ul>
<li><a href="#react-native-multiselect-sortable-flatlist">React Native Multiselect Sortable FlatList</a>
<ul>
<li><a href="#getting-started">Getting started</a></li>
</ul>
</li>
</ul>

    </div>
  </div>
  <div class="stackedit__right">
    <div class="stackedit__html">
      <h1 id="react-native-multiselect-sortable-flatlist">React Native Multiselect Sortable FlatList</h1>
<p>React Native FlatList with the abality to sort and select the list items.</p>
<img src="https://i.imgur.com/4DvHoXY.gif" width="350">
<h2 id="getting-started">Getting started</h2>
<h3 id="install">Install</h3>
<pre><code>npm install react-native-multiselect-sortable-flatlist --save
</code></pre>
<p>or</p>
<pre><code>yarn add @react-native-community/datetimepicker
</code></pre>
<h3 id="usage">Usage</h3>
<pre><code>import MultiSelectSortableFlatlist from 'react-native-multiselect-sortable-flatlist';
</code></pre>
<h3 id="example">Example</h3>
<pre class=" language-js"><code class="prism  language-js"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Alert<span class="token punctuation">,</span> Text<span class="token punctuation">,</span> StyleSheet<span class="token punctuation">,</span> StatusBar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-native'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> widthPercentageToDP <span class="token keyword">as</span> wp<span class="token punctuation">,</span> heightPercentageToDP <span class="token keyword">as</span> hp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-native-responsive-screen'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> SelectableCard <span class="token keyword">from</span> <span class="token string">'./compoenents/SelectableCard'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Header <span class="token keyword">from</span> <span class="token string">'./compoenents/Header'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MultiSelectSortableFlatlist <span class="token keyword">from</span> <span class="token string">'react-native-multiselect-sortable-flatlist'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>PureComponent</span> <span class="token punctuation">{</span>
 <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
     ListData<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">'A'</span><span class="token punctuation">,</span> <span class="token string">'B'</span><span class="token punctuation">,</span> <span class="token string">'C'</span><span class="token punctuation">,</span> <span class="token string">'D'</span><span class="token punctuation">,</span> <span class="token string">'E'</span><span class="token punctuation">,</span> <span class="token string">'F'</span><span class="token punctuation">,</span> <span class="token string">'G'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
     ItemsSelected<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token function">onItemPress</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   Alert<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'Alert'</span><span class="token punctuation">,</span> item <span class="token operator">+</span> <span class="token string">' Pressed'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> text<span class="token punctuation">:</span> <span class="token string">'OK'</span><span class="token punctuation">,</span> onPress<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'OK Pressed'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
     cancelable<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token function">onSelectionChanged</span><span class="token punctuation">(</span>selectedItems<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> ItemsSelected<span class="token punctuation">:</span> selectedItems <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token function">onSort</span><span class="token punctuation">(</span>newListDataArray<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> ListData<span class="token punctuation">:</span> newListDataArray <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token punctuation">(</span>
     <span class="token operator">&lt;</span>MultiSelectSortableFlatlist
       ref<span class="token operator">=</span><span class="token punctuation">{</span>MultiSelectSortableFlatlist <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>MultiSelectSortableFlatlist <span class="token operator">=</span> MultiSelectSortableFlatlist<span class="token punctuation">)</span><span class="token punctuation">}</span>
       contentContainerStyle<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>ListContainer<span class="token punctuation">}</span>
       ListHeaderComponentStyle<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>HeaderStyle<span class="token punctuation">}</span>
       ListHeaderComponent<span class="token operator">=</span><span class="token punctuation">{</span>
         <span class="token operator">&lt;</span>Header
           SelectAll<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>MultiSelectSortableFlatlist<span class="token punctuation">.</span><span class="token function">SelectAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
           DeselectAll<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>MultiSelectSortableFlatlist<span class="token punctuation">.</span><span class="token function">DeselectAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
         <span class="token operator">/</span><span class="token operator">&gt;</span>
       <span class="token punctuation">}</span>
       data<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>ListData<span class="token punctuation">}</span>
       keyExtractor<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">}</span>
       onItemTap<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">{</span> item<span class="token punctuation">,</span> index <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onItemPress</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">}</span>
       onItemSelected<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">{</span> selectedItems<span class="token punctuation">,</span> item<span class="token punctuation">,</span> index <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onSelectionChanged</span><span class="token punctuation">(</span>selectedItems<span class="token punctuation">)</span><span class="token punctuation">}</span>
       onItemDeselected<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">{</span> selectedItems<span class="token punctuation">,</span> item<span class="token punctuation">,</span> index <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onSelectionChanged</span><span class="token punctuation">(</span>selectedItems<span class="token punctuation">)</span><span class="token punctuation">}</span>
       onSort<span class="token operator">=</span><span class="token punctuation">{</span>data <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onSort</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">}</span>
       renderItem<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">{</span> item<span class="token punctuation">,</span> index<span class="token punctuation">,</span> selected <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
         <span class="token comment">//Note: To view selection changes, your component should take a prop that will render changes based on "selected" bool</span>
         <span class="token operator">&lt;</span>SelectableCard Selected<span class="token operator">=</span><span class="token punctuation">{</span>selected<span class="token punctuation">}</span><span class="token operator">&gt;</span>
           <span class="token operator">&lt;</span>Text style<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>CardText<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">&gt;</span>
         <span class="token operator">&lt;</span><span class="token operator">/</span>SelectableCard<span class="token operator">&gt;</span>
       <span class="token punctuation">)</span><span class="token punctuation">}</span>
     <span class="token operator">/</span><span class="token operator">&gt;</span>
   <span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> styles <span class="token operator">=</span> StyleSheet<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
 ListContainer<span class="token punctuation">:</span> <span class="token punctuation">{</span>
   paddingTop<span class="token punctuation">:</span> StatusBar<span class="token punctuation">.</span>currentHeight <span class="token operator">+</span> <span class="token function">hp</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 CardText<span class="token punctuation">:</span> <span class="token punctuation">{</span>
   textAlign<span class="token punctuation">:</span> <span class="token string">'center'</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 HeaderStyle<span class="token punctuation">:</span> <span class="token punctuation">{</span>
   paddingHorizontal<span class="token punctuation">:</span> <span class="token function">wp</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h3 id="api">API</h3>
<h4 id="props">Props</h4>

<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
<th>Default</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>data</td>
<td>Exaxtly like react-native <a href="https://facebook.github.io/react-native/docs/flatlist#data">FlatList data prop</a>. An array of data to pass your rendered components.</td>
<td>None <strong>(Required)</strong></td>
<td>Array</td>
</tr>
<tr>
<td>renderItem</td>
<td><code>renderItem={({ item, index, selected }) =&gt; &lt;YourComponent selected={selected} /&gt;}</code>. Similar to react-native <a href="https://facebook.github.io/react-native/docs/flatlist#renderitem">FlatList renderItem</a>, it provides both the item and index varables along with a new varable called selected (Bool), which allows you to provide <a href="https://reactjs.org/docs/conditional-rendering.html">conditional rendering</a> as you see fit.</td>
<td>None <strong>(Required)</strong></td>
<td>Func</td>
</tr>
<tr>
<td>keyExtractor</td>
<td>Exaxtly like react-native <a href="https://facebook.github.io/react-native/docs/flatlist#keyextractor">FlatList keyExtractor prop</a>. Used to extract a unique key for a given item at the specified index. Also import to give unique key for selection to differentiate each item.</td>
<td>None <strong>(Required)</strong></td>
<td>Func</td>
</tr>
<tr>
<td>onItemTap</td>
<td><code>({ item: object, index: number }) =&gt; void</code> Called when the touch is released.</td>
<td>None</td>
<td>Func</td>
</tr>
<tr>
<td>onItemSelected</td>
<td><code>({ selectedItems: array, item: object, index: number }) =&gt; void</code> Called when items are selected.</td>
<td>None</td>
<td>Func</td>
</tr>
<tr>
<td>onItemDeselected</td>
<td><code>({ selectedItems: array, item: object, index: number }) =&gt; void</code> Called when items are deselected.</td>
<td>None</td>
<td>Func</td>
</tr>
<tr>
<td>onSort</td>
<td><code>(data =&gt; void)</code> Called when list is resorted with same data in new array data.</td>
<td>None</td>
<td>Func</td>
</tr>
<tr>
<td>comparingFactor</td>
<td>If data prop is an array of JSON Objects, you can pass a JSON key that would use the value for uniquely differentiating each item instead of index its index number.</td>
<td>None</td>
<td>String</td>
</tr>
<tr>
<td>selectable</td>
<td>Enable or Disable all list items from being selected.</td>
<td>true</td>
<td>Bool</td>
</tr>
<tr>
<td>sortable</td>
<td>Enable or Disable list sorting ability.</td>
<td>true</td>
<td>Bool</td>
</tr>
<tr>
<td>scrollPercent</td>
<td>Sets where scrolling begins. A value of <code>5</code> will scroll up if the finger is in the top 5% of the FlatList container and scroll down in the bottom 5%.</td>
<td>5</td>
<td>Number</td>
</tr>
</tbody>
</table><h4 id="functions">Functions</h4>

<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
<th>Returns</th>
</tr>
</thead>
<tbody>
<tr>
<td>SelectAll()</td>
<td>Selects all of the items in the list and returns an array.</td>
<td>Array</td>
</tr>
<tr>
<td>DeselectAll()</td>
<td>Deselects all of the items in the list and returns an array.</td>
<td>Array</td>
</tr>
</tbody>
</table><h3 id="mobile-usage">Mobile Usage</h3>
<ul>
<li>Tap on your item to get onItemTap called.</li>
<li>Press and hold on item to start selecting phase.
<ul>
<li>After activating selecting phase, tap on any other item to select.</li>
<li>Tapping on selected item will deselect item.</li>
</ul>
</li>
<li>Press and hold on item and drag to move item.
<ul>
<li>Drop item anywhere to resort.</li>
</ul>
</li>
</ul>
<h3 id="running-the-example-expo-app">Running the example expo app</h3>
<ol>
<li><code>git clone https://github.com/react-native-community/react-native-datetimepicker.git</code></li>
<li><code>cd react-native-multiselect-sortable-flatlist/examples</code></li>
<li><code>npm install or yarn</code></li>
<li><code>npm start or yarn start</code></li>
</ol>
<h3 id="how-to-contribute">How to contribute</h3>
<ol>
<li>Pull request</li>
<li>Make changes</li>
<li>Test Locally</li>
<li>Use prettier to format all code by running <code>yarn run format</code></li>
<li>Request merge</li>
</ol>

    </div>
  </div>
</body>

</html>
