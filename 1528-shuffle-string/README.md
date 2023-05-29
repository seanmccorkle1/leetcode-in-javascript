<h2><a href="https://leetcode.com/problems/shuffle-string/">1528. Shuffle String</a></h2><h3>Easy</h3><hr><div><p>You are given a string <code>s</code> and an integer array <code>indices</code> of the <strong>same length</strong>. The string <code>s</code> will be shuffled such that the character at the <code>i<sup>th</sup></code> position moves to <code>indices[i]</code> in the shuffled string.</p>

<p>Return <em>the shuffled string</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/07/09/q1.jpg" style="width: 321px; height: 243px;">
<pre><strong>Input:</strong> s = "codeleet", <code>indices</code> = [4,5,6,7,0,2,1,3]
<strong>Output:</strong> "<em class="Highlight" match="leetcode*" loopnumber="149056083" style="padding: 1px; box-shadow: rgb(229, 229, 229) 1px 1px; border-radius: 3px; -webkit-print-color-adjust: exact; background-color: rgb(255, 255, 102); color: rgb(0, 0, 0); font-style: inherit; --darkreader-inline-boxshadow: #272a2c 1px 1px; --darkreader-inline-bgcolor: #6b6b00; --darkreader-inline-color: #e8e6e3;" data-darkreader-inline-boxshadow="" data-darkreader-inline-bgcolor="" data-darkreader-inline-color="">leetcode</em>"
<strong>Explanation:</strong> As shown, "codeleet" becomes "<em class="Highlight" match="leetcode*" loopnumber="149056083" style="padding: 1px; box-shadow: rgb(229, 229, 229) 1px 1px; border-radius: 3px; -webkit-print-color-adjust: exact; background-color: rgb(255, 255, 102); color: rgb(0, 0, 0); font-style: inherit; --darkreader-inline-boxshadow: #272a2c 1px 1px; --darkreader-inline-bgcolor: #6b6b00; --darkreader-inline-color: #e8e6e3;" data-darkreader-inline-boxshadow="" data-darkreader-inline-bgcolor="" data-darkreader-inline-color="">leetcode</em>" after shuffling.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> s = "abc", <code>indices</code> = [0,1,2]
<strong>Output:</strong> "abc"
<strong>Explanation:</strong> After shuffling, each character remains in its position.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>s.length == indices.length == n</code></li>
	<li><code>1 &lt;= n &lt;= 100</code></li>
	<li><code>s</code> consists of only lowercase English letters.</li>
	<li><code>0 &lt;= indices[i] &lt; n</code></li>
	<li>All values of <code>indices</code> are <strong>unique</strong>.</li>
</ul>
</div>