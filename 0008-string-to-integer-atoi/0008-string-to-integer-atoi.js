

var myAtoi = function (str) {
  str = str.trim();
  if (!str) return 0;
  var sign = 1;
  var i = 0;
  var answer = 0;
  if (str[i] == '+') {
    sign = 1;
    i++;
  } else if (str[i] == '-') {
    sign = -1;
    i++;
  }

  for (; i < str.length; i++) {
    var temp = str.charCodeAt(i) - 48;
    if (temp > 9 || temp < 0) break;
    if (answer > 2147483647 / 10 || answer > (2147483647 - temp) / 10)
      return sign == 1 ? 2147483647 : -2147483648;
    else answer = answer * 10 + temp;
  }
  return answer * sign;
};
    