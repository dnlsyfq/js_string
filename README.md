

* split string to array 
```
'string'.split(' ')
'string'.chartAt(int)
```

* string properties
```
'string'.length
'string'.toUpperCase()
'string'.startsWith(char)
'string'.toUpperCase()
'string'.trim()
```

### Regex

```

var string1 = 'This is the longest string ever.';
var string2 = 'This is the shortest string ever.';
var string3 = 'Is this the thing called Mount Everest?';
var string4 = 'This is the Sherman on the Mount.';

var regex = /this/;
var regex = /this/i; //incasensitive
var regex = /^this/i; // ^ appear at the begnning
var regex = /this$/i; // $ appear at the end
var regex = /ever.$/i; // . followed by any single character
var regex = /ever\.$/i ; // check for period . in the sentence


console.log(regex.test(string1));
```
