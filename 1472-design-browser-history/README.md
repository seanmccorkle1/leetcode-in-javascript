<h2><a href="https://leetcode.com/problems/design-browser-history/">1472. Design Browser History</a></h2><h3>Medium</h3><hr><div><p>You have a <strong>browser</strong> of one tab where you start on the <code>homepage</code> and you can visit another <code>url</code>, get back in the history number of <code>steps</code> or move forward in the history number of <code>steps</code>.</p>

<p>Implement the <code>BrowserHistory</code> class:</p>

<ul>
	<li><code>BrowserHistory(string homepage)</code> Initializes the object with the <code>homepage</code>&nbsp;of the browser.</li>
	<li><code>void visit(string url)</code>&nbsp;Visits&nbsp;<code>url</code> from the current page. It clears up all the forward history.</li>
	<li><code>string back(int steps)</code>&nbsp;Move <code>steps</code> back in history. If you can only return <code>x</code> steps in the history and <code>steps &gt; x</code>, you will&nbsp;return only <code>x</code> steps. Return the current <code>url</code>&nbsp;after moving back in history <strong>at most</strong> <code>steps</code>.</li>
	<li><code>string forward(int steps)</code>&nbsp;Move <code>steps</code> forward in history. If you can only forward <code>x</code> steps in the history and <code>steps &gt; x</code>, you will&nbsp;forward only&nbsp;<code>x</code> steps. Return the current <code>url</code>&nbsp;after forwarding in history <strong>at most</strong> <code>steps</code>.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example:</strong></p>

<pre><b>Input:</b>
["BrowserHistory","visit","visit","visit","back","back","forward","visit","forward","back","back"]
[["<em class="Highlight" match="leetcode" loopnumber="444067865" style="padding: 1px; box-shadow: rgb(229, 229, 229) 1px 1px; border-radius: 3px; -webkit-print-color-adjust: exact; background-color: rgb(255, 255, 102); color: rgb(0, 0, 0); font-style: inherit; --darkreader-inline-boxshadow:#272a2c 1px 1px; --darkreader-inline-bgcolor:#6b6b00; --darkreader-inline-color:#e8e6e3;" data-darkreader-inline-boxshadow="" data-darkreader-inline-bgcolor="" data-darkreader-inline-color="">leetcode</em>.com"],["google.com"],["facebook.com"],["youtube.com"],[1],[1],[1],["linkedin.com"],[2],[2],[7]]
<b>Output:</b>
[null,null,null,null,"facebook.com","google.com","facebook.com",null,"linkedin.com","google.com","<em class="Highlight" match="leetcode" loopnumber="444067865" style="padding: 1px; box-shadow: rgb(229, 229, 229) 1px 1px; border-radius: 3px; -webkit-print-color-adjust: exact; background-color: rgb(255, 255, 102); color: rgb(0, 0, 0); font-style: inherit; --darkreader-inline-boxshadow:#272a2c 1px 1px; --darkreader-inline-bgcolor:#6b6b00; --darkreader-inline-color:#e8e6e3;" data-darkreader-inline-boxshadow="" data-darkreader-inline-bgcolor="" data-darkreader-inline-color="">leetcode</em>.com"]

<b>Explanation:</b>
BrowserHistory browserHistory = new BrowserHistory("<em class="Highlight" match="leetcode" loopnumber="444067865" style="padding: 1px; box-shadow: rgb(229, 229, 229) 1px 1px; border-radius: 3px; -webkit-print-color-adjust: exact; background-color: rgb(255, 255, 102); color: rgb(0, 0, 0); font-style: inherit; --darkreader-inline-boxshadow:#272a2c 1px 1px; --darkreader-inline-bgcolor:#6b6b00; --darkreader-inline-color:#e8e6e3;" data-darkreader-inline-boxshadow="" data-darkreader-inline-bgcolor="" data-darkreader-inline-color="">leetcode</em>.com");
browserHistory.visit("google.com");       // You are in "<em class="Highlight" match="leetcode" loopnumber="444067865" style="padding: 1px; box-shadow: rgb(229, 229, 229) 1px 1px; border-radius: 3px; -webkit-print-color-adjust: exact; background-color: rgb(255, 255, 102); color: rgb(0, 0, 0); font-style: inherit; --darkreader-inline-boxshadow:#272a2c 1px 1px; --darkreader-inline-bgcolor:#6b6b00; --darkreader-inline-color:#e8e6e3;" data-darkreader-inline-boxshadow="" data-darkreader-inline-bgcolor="" data-darkreader-inline-color="">leetcode</em>.com". Visit "google.com"
browserHistory.visit("facebook.com");     // You are in "google.com". Visit "facebook.com"
browserHistory.visit("youtube.com");      // You are in "facebook.com". Visit "youtube.com"
browserHistory.back(1);                   // You are in "youtube.com", move back to "facebook.com" return "facebook.com"
browserHistory.back(1);                   // You are in "facebook.com", move back to "google.com" return "google.com"
browserHistory.forward(1);                // You are in "google.com", move forward to "facebook.com" return "facebook.com"
browserHistory.visit("linkedin.com");     // You are in "facebook.com". Visit "linkedin.com"
browserHistory.forward(2);                // You are in "linkedin.com", you cannot move forward any steps.
browserHistory.back(2);                   // You are in "linkedin.com", move back two steps to "facebook.com" then to "google.com". return "google.com"
browserHistory.back(7);                   // You are in "google.com", you can move back only one step to "<em class="Highlight" match="leetcode" loopnumber="444067865" style="padding: 1px; box-shadow: rgb(229, 229, 229) 1px 1px; border-radius: 3px; -webkit-print-color-adjust: exact; background-color: rgb(255, 255, 102); color: rgb(0, 0, 0); font-style: inherit; --darkreader-inline-boxshadow:#272a2c 1px 1px; --darkreader-inline-bgcolor:#6b6b00; --darkreader-inline-color:#e8e6e3;" data-darkreader-inline-boxshadow="" data-darkreader-inline-bgcolor="" data-darkreader-inline-color="">leetcode</em>.com". return "<em class="Highlight" match="leetcode" loopnumber="444067865" style="padding: 1px; box-shadow: rgb(229, 229, 229) 1px 1px; border-radius: 3px; -webkit-print-color-adjust: exact; background-color: rgb(255, 255, 102); color: rgb(0, 0, 0); font-style: inherit; --darkreader-inline-boxshadow:#272a2c 1px 1px; --darkreader-inline-bgcolor:#6b6b00; --darkreader-inline-color:#e8e6e3;" data-darkreader-inline-boxshadow="" data-darkreader-inline-bgcolor="" data-darkreader-inline-color="">leetcode</em>.com"
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= homepage.length &lt;= 20</code></li>
	<li><code>1 &lt;= url.length &lt;= 20</code></li>
	<li><code>1 &lt;= steps &lt;= 100</code></li>
	<li><code>homepage</code> and <code>url</code> consist of&nbsp; '.' or lower case English letters.</li>
	<li>At most <code>5000</code>&nbsp;calls will be made to <code>visit</code>, <code>back</code>, and <code>forward</code>.</li>
</ul>
</div>