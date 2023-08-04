<h2><a href="https://leetcode.com/problems/word-break/">139. Word Break</a></h2><h3>Medium</h3><hr><div><p>Given a string <code>s</code> and a dictionary of strings <code>wordDict</code>, return <code>true</code> if <code>s</code> can be segmented into a space-separated sequence of one or more dictionary words.</p>

<p><strong>Note</strong> that the same word in the dictionary may be reused multiple times in the segmentation.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> s = "<em class="Highlight ht3b9ffa4e-af42-4d3f-b009-38cfee0be140" highlight="true" match="leet*" loopnumber="808175729" style="font-style: inherit;">leetcode</em>", wordDict = ["<em class="Highlight ht3b9ffa4e-af42-4d3f-b009-38cfee0be140" highlight="true" match="leet*" loopnumber="808175729" style="font-style: inherit;">leet","code</em>"]
<strong>Output:</strong> true
<strong>Explanation:</strong> Return true because "<em class="Highlight ht3b9ffa4e-af42-4d3f-b009-38cfee0be140" highlight="true" match="leet*" loopnumber="808175729" style="font-style: inherit;">leetcode</em>" can be segmented as "<em class="Highlight ht3b9ffa4e-af42-4d3f-b009-38cfee0be140" highlight="true" match="leet*" loopnumber="808175729" style="font-style: inherit;">leet</em> code".
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> s = "applepenapple", wordDict = ["apple","pen"]
<strong>Output:</strong> true
<strong>Explanation:</strong> Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
<strong>Output:</strong> false
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 300</code></li>
	<li><code>1 &lt;= wordDict.length &lt;= 1000</code></li>
	<li><code>1 &lt;= wordDict[i].length &lt;= 20</code></li>
	<li><code>s</code> and <code>wordDict[i]</code> consist of only lowercase English letters.</li>
	<li>All the strings of <code>wordDict</code> are <strong>unique</strong>.</li>
</ul>
</div>