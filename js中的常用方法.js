1-String

字符串
    javascript中的字符串是用''或者""括起来的字符表示的;
    转义字符\可以转义很多字符，比如\n表示换行，\t表示制表符，字符\本身也要转义，所以\\表示的字符就是\

多行串字符
    多行串字符用\n写起来比较费事情,所以在ES6中新增了一种多行串字符的表示方法,用反引号`...`:
    `这是
    一个
    多行串字符`

!!!字符串的方法==========================================================================
    .toUpperCase();全部转换为大写
        var s = "Hello";
        s.toUpperCase(); // 返回"HELLO"
    .toLowerCasse();全部转换为小写
        var s = "Hello";
        var lower = s.toLowerCase(); // 返回"hello"并赋值给变量lower
        lower; // "hello"
    .indexOf();会搜索指定字符串出现的位置
        var s="hello, world";
        s.indexOf("world");//返回7
        s.indexOf("World"); // 没有找到指定的子串，返回-1
    .subString();返回指定区间的字符串
        var s = "hello, world"
        s.substring(0, 5); // 从索引0开始到5（不包括5），返回"hello"
        s.substring(7); // 从索引7开始到结束，返回"world"

2-Array
数组
    JavaScript的Array可以包含任意数据类型，并通过索引来访问每个元素。
    要取得Array的长度，直接访问length属性：
        var arr = [1, 2, 3.14, 'Hello', null, true];
        arr.length; // 6

    !!!请注意，直接给Array的length赋一个新的值会导致Array大小的变化：
        var arr = [1, 2, 3];
        arr.length; // 3
        arr.length = 6;
        arr; // arr变为[1, 2, 3, undefined, undefined, undefined]
        arr.length = 2;
        arr; // arr变为[1, 2]

    Array可以通过索引把对应的元素修改为新的值，因此，对Array的索引进行赋值会直接修改这个Array：
        var arr = ['A', 'B', 'C'];
        arr[1] = 99;
        arr; // arr现在变为['A', 99, 'C']

    !!!请注意，如果通过索引赋值时，索引超过了范围，同样会引起Array大小的变化：
        var arr = [1, 2, 3];
        arr[5] = 'x';
        arr; // arr变为[1, 2, 3, undefined, undefined, 'x']
    
!!!Array的方法=============================================================================


    .indexOf();与String类似,Array也可以通过indexOf()来搜索一个指定元素的位置
        var arr = [10, 20, '30', 'xyz'];
        arr.indexOf(10); // 元素10的索引为0
        arr.indexOf(20); // 元素20的索引为1
        arr.indexOf(30); // 元素30没有找到，返回-1
        arr.indexOf('30'); // 元素'30'的索引为2
        !!!注意了，数字30和字符串'30'是不同的元素。

    .slice();对应String的subString()截取Array的部分元素然后返回一个新的Array
        var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
        arr.slice(0, 3); // 从索引0开始，到索引3结束，但不包括索引3: ['A', 'B', 'C']
        arr.slice(3); // 从索引3开始到结束: ['D', 'E', 'F', 'G']
        !!!注意到slice()的起止参数包括开始索引，不包括结束索引。

        !!!如果不给slice()传递任何参数，它就会从头到尾截取所有元素。利用这一点，我们可以很容易地复制一个Array：
        var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
        var aCopy = arr.slice();
        aCopy; // ['A', 'B', 'C', 'D', 'E', 'F', 'G']
        aCopy === arr; // false

    .push();和.pop(); push()向Array的末尾添加若干元素，pop()则把Array的最后一个元素删除掉：
        var arr = [1, 2];
        arr.push('A', 'B'); // 返回Array新的长度: 4
        arr; // [1, 2, 'A', 'B']
        arr.pop(); // pop()返回'B'
        arr; // [1, 2, 'A']
        arr.pop(); arr.pop(); arr.pop(); // 连续pop 3次
        arr; // []
        arr.pop(); // 空数组继续pop不会报错，而是返回undefined//相当于只定义没赋值
        arr; // [].

    .unshift()和.shift():如果要往Array的头部添加若干元素，使用unshift()方法，shift()方法则把Array的第一个元素删掉：
        var arr = [1, 2];
        arr.unshift('A', 'B'); // 返回Array新的长度: 4
        arr; // ['A', 'B', 1, 2]
        arr.shift(); // 'A'
        arr; // ['B', 1, 2]
        arr.shift(); arr.shift(); arr.shift(); // 连续shift 3次
        arr; // []
        arr.shift(); // 空数组继续shift不会报错，而是返回undefined
        arr; // []

    .sort():sort()可以对当前Array进行排序，它会直接修改当前Array的元素位置，直接调用时，按照默认顺序排序：
        var arr = ['B', 'C', 'A'];
        arr.sort();
        arr; // ['A', 'B', 'C']
    
    .reverse():reverse()把整个Array的元素给掉个个，也就是反转
        var arr = ['one', 'two', 'three'];
        arr.reverse(); 
        arr; // ['three', 'two', 'one']

    .splice(); splice()方法是修改Array的“万能方法”，它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素：
        var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
        // 从索引2开始删除3个元素,然后再添加两个元素:
        arr.splice(2, 3, 'Google', 'Facebook'); // 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
        arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
        // 只删除,不添加:
        arr.splice(2, 2); // ['Google', 'Facebook']
        arr; // ['Microsoft', 'Apple', 'Oracle']
        // 只添加,不删除:
        arr.splice(2, 0, 'Google', 'Facebook'); // 返回[],因为没有删除任何元素
        arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
    .concat(); concat()方法把当前的Array和另一个Array连接起来，并返回一个新的Array：
        var arr = ['A', 'B', 'C'];
        var added = arr.concat([1, 2, 3]);
        added; // ['A', 'B', 'C', 1, 2, 3]
        arr; // ['A', 'B', 'C']
            
        !!!请注意，concat()方法并没有修改当前Array，而是返回了一个新的Array。
        实际上，concat()方法可以接收任意个元素和Array，并且自动把Array拆开，然后全部添加到新的Array里：
            var arr = ['A', 'B', 'C'];
            arr.concat(1, 2, [3, 4]); // ['A', 'B', 'C', 1, 2, 3, 4]
    .join(); join()方法是一个非常实用的方法，它把当前Array的每个元素都用指定的字符串连接起来，然后返回连接后的字符串：
        var arr = ['A', 'B', 'C', 1, 2, 3];
        arr.join('-'); // 'A-B-C-1-2-3'
        !!!如果Array的元素不是字符串，将自动转换为字符串后再连接。

    多维数组  如果数组的某个元素又是一个Array，则可以形成多维数组，例如：
        var arr = [[1, 2, 3], [400, 500, 600], '-'];
        上述Array包含3个元素，其中头两个元素本身也是Array。


1-String

字符串
    javascript中的字符串是用''或者""括起来的字符表示的;
    转义字符\可以转义很多字符，比如\n表示换行，\t表示制表符，字符\本身也要转义，所以\\表示的字符就是\

多行串字符
    多行串字符用\n写起来比较费事情,所以在ES6中新增了一种多行串字符的表示方法,用反引号`...`:
    `这是
    一个
    多行串字符`

!!!字符串的方法==========================================================================
    .toUpperCase();全部转换为大写
        var s = "Hello";
        s.toUpperCase(); // 返回"HELLO"
    .toLowerCasse();全部转换为小写
        var s = "Hello";
        var lower = s.toLowerCase(); // 返回"hello"并赋值给变量lower
        lower; // "hello"
    .indexOf();会搜索指定字符串出现的位置
        var s="hello, world";
        s.indexOf("world");//返回7
        s.indexOf("World"); // 没有找到指定的子串，返回-1
    .subString();返回指定区间的字符串
        var s = "hello, world"
        s.substring(0, 5); // 从索引0开始到5（不包括5），返回"hello"
        s.substring(7); // 从索引7开始到结束，返回"world"

2-Array
数组
    JavaScript的Array可以包含任意数据类型，并通过索引来访问每个元素。
    要取得Array的长度，直接访问length属性：
        var arr = [1, 2, 3.14, 'Hello', null, true];
        arr.length; // 6

    !!!请注意，直接给Array的length赋一个新的值会导致Array大小的变化：
        var arr = [1, 2, 3];
        arr.length; // 3
        arr.length = 6;
        arr; // arr变为[1, 2, 3, undefined, undefined, undefined]
        arr.length = 2;
        arr; // arr变为[1, 2]

    Array可以通过索引把对应的元素修改为新的值，因此，对Array的索引进行赋值会直接修改这个Array：
        var arr = ['A', 'B', 'C'];
        arr[1] = 99;
        arr; // arr现在变为['A', 99, 'C']

    !!!请注意，如果通过索引赋值时，索引超过了范围，同样会引起Array大小的变化：
        var arr = [1, 2, 3];
        arr[5] = 'x';
        arr; // arr变为[1, 2, 3, undefined, undefined, 'x']
    
!!!Array的方法=============================================================================


    .indexOf();与String类似,Array也可以通过indexOf()来搜索一个指定元素的位置
        var arr = [10, 20, '30', 'xyz'];
        arr.indexOf(10); // 元素10的索引为0
        arr.indexOf(20); // 元素20的索引为1
        arr.indexOf(30); // 元素30没有找到，返回-1
        arr.indexOf('30'); // 元素'30'的索引为2
        !!!注意了，数字30和字符串'30'是不同的元素。

    .slice();对应String的subString()截取Array的部分元素然后返回一个新的Array
        var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
        arr.slice(0, 3); // 从索引0开始，到索引3结束，但不包括索引3: ['A', 'B', 'C']
        arr.slice(3); // 从索引3开始到结束: ['D', 'E', 'F', 'G']
        !!!注意到slice()的起止参数包括开始索引，不包括结束索引。

        !!!如果不给slice()传递任何参数，它就会从头到尾截取所有元素。利用这一点，我们可以很容易地复制一个Array：
        var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
        var aCopy = arr.slice();
        aCopy; // ['A', 'B', 'C', 'D', 'E', 'F', 'G']
        aCopy === arr; // false

    .push();和.pop(); push()向Array的末尾添加若干元素，pop()则把Array的最后一个元素删除掉：
        var arr = [1, 2];
        arr.push('A', 'B'); // 返回Array新的长度: 4
        arr; // [1, 2, 'A', 'B']
        arr.pop(); // pop()返回'B'
        arr; // [1, 2, 'A']
        arr.pop(); arr.pop(); arr.pop(); // 连续pop 3次
        arr; // []
        arr.pop(); // 空数组继续pop不会报错，而是返回undefined//相当于只定义没赋值
        arr; // [].

    .unshift()和.shift():如果要往Array的头部添加若干元素，使用unshift()方法，shift()方法则把Array的第一个元素删掉：
        var arr = [1, 2];
        arr.unshift('A', 'B'); // 返回Array新的长度: 4
        arr; // ['A', 'B', 1, 2]
        arr.shift(); // 'A'
        arr; // ['B', 1, 2]
        arr.shift(); arr.shift(); arr.shift(); // 连续shift 3次
        arr; // []
        arr.shift(); // 空数组继续shift不会报错，而是返回undefined
        arr; // []

    .sort():sort()可以对当前Array进行排序，它会直接修改当前Array的元素位置，直接调用时，按照默认顺序排序：
        var arr = ['B', 'C', 'A'];
        arr.sort();
        arr; // ['A', 'B', 'C']
    
    .reverse():reverse()把整个Array的元素给掉个个，也就是反转
        var arr = ['one', 'two', 'three'];
        arr.reverse(); 
        arr; // ['three', 'two', 'one']

    .splice(); splice()方法是修改Array的“万能方法”，它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素：
        var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
        // 从索引2开始删除3个元素,然后再添加两个元素:
        arr.splice(2, 3, 'Google', 'Facebook'); // 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
        arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
        // 只删除,不添加:
        arr.splice(2, 2); // ['Google', 'Facebook']
        arr; // ['Microsoft', 'Apple', 'Oracle']
        // 只添加,不删除:
        arr.splice(2, 0, 'Google', 'Facebook'); // 返回[],因为没有删除任何元素
        arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
    .concat(); concat()方法把当前的Array和另一个Array连接起来，并返回一个新的Array：
        var arr = ['A', 'B', 'C'];
        var added = arr.concat([1, 2, 3]);
        added; // ['A', 'B', 'C', 1, 2, 3]
        arr; // ['A', 'B', 'C']
            
        !!!请注意，concat()方法并没有修改当前Array，而是返回了一个新的Array。
        实际上，concat()方法可以接收任意个元素和Array，并且自动把Array拆开，然后全部添加到新的Array里：
            var arr = ['A', 'B', 'C'];
            arr.concat(1, 2, [3, 4]); // ['A', 'B', 'C', 1, 2, 3, 4]
    .join(); join()方法是一个非常实用的方法，它把当前Array的每个元素都用指定的字符串连接起来，然后返回连接后的字符串：
        var arr = ['A', 'B', 'C', 1, 2, 3];
        arr.join('-'); // 'A-B-C-1-2-3'
        !!!如果Array的元素不是字符串，将自动转换为字符串后再连接。

    多维数组  如果数组的某个元素又是一个Array，则可以形成多维数组，例如：
        var arr = [[1, 2, 3], [400, 500, 600], '-'];
        上述Array包含3个元素，其中头两个元素本身也是Array。




1-String

字符串
    javascript中的字符串是用''或者""括起来的字符表示的;
    转义字符\可以转义很多字符，比如\n表示换行，\t表示制表符，字符\本身也要转义，所以\\表示的字符就是\

多行串字符
    多行串字符用\n写起来比较费事情,所以在ES6中新增了一种多行串字符的表示方法,用反引号`...`:
    `这是
    一个
    多行串字符`

!!!字符串的方法==========================================================================
    .toUpperCase();全部转换为大写
        var s = "Hello";
        s.toUpperCase(); // 返回"HELLO"
    .toLowerCasse();全部转换为小写
        var s = "Hello";
        var lower = s.toLowerCase(); // 返回"hello"并赋值给变量lower
        lower; // "hello"
    .indexOf();会搜索指定字符串出现的位置
        var s="hello, world";
        s.indexOf("world");//返回7
        s.indexOf("World"); // 没有找到指定的子串，返回-1
    .subString();返回指定区间的字符串
        var s = "hello, world"
        s.substring(0, 5); // 从索引0开始到5（不包括5），返回"hello"
        s.substring(7); // 从索引7开始到结束，返回"world"

2-Array
数组
    JavaScript的Array可以包含任意数据类型，并通过索引来访问每个元素。
    要取得Array的长度，直接访问length属性：
        var arr = [1, 2, 3.14, 'Hello', null, true];
        arr.length; // 6

    !!!请注意，直接给Array的length赋一个新的值会导致Array大小的变化：
        var arr = [1, 2, 3];
        arr.length; // 3
        arr.length = 6;
        arr; // arr变为[1, 2, 3, undefined, undefined, undefined]
        arr.length = 2;
        arr; // arr变为[1, 2]

    Array可以通过索引把对应的元素修改为新的值，因此，对Array的索引进行赋值会直接修改这个Array：
        var arr = ['A', 'B', 'C'];
        arr[1] = 99;
        arr; // arr现在变为['A', 99, 'C']

    !!!请注意，如果通过索引赋值时，索引超过了范围，同样会引起Array大小的变化：
        var arr = [1, 2, 3];
        arr[5] = 'x';
        arr; // arr变为[1, 2, 3, undefined, undefined, 'x']
    
!!!Array的方法=============================================================================


    .indexOf();与String类似,Array也可以通过indexOf()来搜索一个指定元素的位置
        var arr = [10, 20, '30', 'xyz'];
        arr.indexOf(10); // 元素10的索引为0
        arr.indexOf(20); // 元素20的索引为1
        arr.indexOf(30); // 元素30没有找到，返回-1
        arr.indexOf('30'); // 元素'30'的索引为2
        !!!注意了，数字30和字符串'30'是不同的元素。

    .slice();对应String的subString()截取Array的部分元素然后返回一个新的Array
        var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
        arr.slice(0, 3); // 从索引0开始，到索引3结束，但不包括索引3: ['A', 'B', 'C']
        arr.slice(3); // 从索引3开始到结束: ['D', 'E', 'F', 'G']
        !!!注意到slice()的起止参数包括开始索引，不包括结束索引。

        !!!如果不给slice()传递任何参数，它就会从头到尾截取所有元素。利用这一点，我们可以很容易地复制一个Array：
        var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
        var aCopy = arr.slice();
        aCopy; // ['A', 'B', 'C', 'D', 'E', 'F', 'G']
        aCopy === arr; // false

    .push();和.pop(); push()向Array的末尾添加若干元素，pop()则把Array的最后一个元素删除掉：
        var arr = [1, 2];
        arr.push('A', 'B'); // 返回Array新的长度: 4
        arr; // [1, 2, 'A', 'B']
        arr.pop(); // pop()返回'B'
        arr; // [1, 2, 'A']
        arr.pop(); arr.pop(); arr.pop(); // 连续pop 3次
        arr; // []
        arr.pop(); // 空数组继续pop不会报错，而是返回undefined//相当于只定义没赋值
        arr; // [].

    .unshift()和.shift():如果要往Array的头部添加若干元素，使用unshift()方法，shift()方法则把Array的第一个元素删掉：
        var arr = [1, 2];
        arr.unshift('A', 'B'); // 返回Array新的长度: 4
        arr; // ['A', 'B', 1, 2]
        arr.shift(); // 'A'
        arr; // ['B', 1, 2]
        arr.shift(); arr.shift(); arr.shift(); // 连续shift 3次
        arr; // []
        arr.shift(); // 空数组继续shift不会报错，而是返回undefined
        arr; // []

    .sort():sort()可以对当前Array进行排序，它会直接修改当前Array的元素位置，直接调用时，按照默认顺序排序：
        var arr = ['B', 'C', 'A'];
        arr.sort();
        arr; // ['A', 'B', 'C']
    
    .reverse():reverse()把整个Array的元素给掉个个，也就是反转
        var arr = ['one', 'two', 'three'];
        arr.reverse(); 
        arr; // ['three', 'two', 'one']

    .splice(); splice()方法是修改Array的“万能方法”，它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素：
        var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
        // 从索引2开始删除3个元素,然后再添加两个元素:
        arr.splice(2, 3, 'Google', 'Facebook'); // 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
        arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
        // 只删除,不添加:
        arr.splice(2, 2); // ['Google', 'Facebook']
        arr; // ['Microsoft', 'Apple', 'Oracle']
        // 只添加,不删除:
        arr.splice(2, 0, 'Google', 'Facebook'); // 返回[],因为没有删除任何元素
        arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
    .concat(); concat()方法把当前的Array和另一个Array连接起来，并返回一个新的Array：
        var arr = ['A', 'B', 'C'];
        var added = arr.concat([1, 2, 3]);
        added; // ['A', 'B', 'C', 1, 2, 3]
        arr; // ['A', 'B', 'C']
            
        !!!请注意，concat()方法并没有修改当前Array，而是返回了一个新的Array。
        实际上，concat()方法可以接收任意个元素和Array，并且自动把Array拆开，然后全部添加到新的Array里：
            var arr = ['A', 'B', 'C'];
            arr.concat(1, 2, [3, 4]); // ['A', 'B', 'C', 1, 2, 3, 4]
    .join(); join()方法是一个非常实用的方法，它把当前Array的每个元素都用指定的字符串连接起来，然后返回连接后的字符串：
        var arr = ['A', 'B', 'C', 1, 2, 3];
        arr.join('-'); // 'A-B-C-1-2-3'
        !!!如果Array的元素不是字符串，将自动转换为字符串后再连接。

    多维数组  如果数组的某个元素又是一个Array，则可以形成多维数组，例如：
        var arr = [[1, 2, 3], [400, 500, 600], '-'];
        上述Array包含3个元素，其中头两个元素本身也是Array。


1-String

字符串
    javascript中的字符串是用''或者""括起来的字符表示的;
    转义字符\可以转义很多字符，比如\n表示换行，\t表示制表符，字符\本身也要转义，所以\\表示的字符就是\

多行串字符
    多行串字符用\n写起来比较费事情,所以在ES6中新增了一种多行串字符的表示方法,用反引号`...`:
    `这是
    一个
    多行串字符`

!!!字符串的方法==========================================================================
    .toUpperCase();全部转换为大写
        var s = "Hello";
        s.toUpperCase(); // 返回"HELLO"
    .toLowerCasse();全部转换为小写
        var s = "Hello";
        var lower = s.toLowerCase(); // 返回"hello"并赋值给变量lower
        lower; // "hello"
    .indexOf();会搜索指定字符串出现的位置
        var s="hello, world";
        s.indexOf("world");//返回7
        s.indexOf("World"); // 没有找到指定的子串，返回-1
    .subString();返回指定区间的字符串
        var s = "hello, world"
        s.substring(0, 5); // 从索引0开始到5（不包括5），返回"hello"
        s.substring(7); // 从索引7开始到结束，返回"world"

2-Array
数组
    JavaScript的Array可以包含任意数据类型，并通过索引来访问每个元素。
    要取得Array的长度，直接访问length属性：
        var arr = [1, 2, 3.14, 'Hello', null, true];
        arr.length; // 6

    !!!请注意，直接给Array的length赋一个新的值会导致Array大小的变化：
        var arr = [1, 2, 3];
        arr.length; // 3
        arr.length = 6;
        arr; // arr变为[1, 2, 3, undefined, undefined, undefined]
        arr.length = 2;
        arr; // arr变为[1, 2]

    Array可以通过索引把对应的元素修改为新的值，因此，对Array的索引进行赋值会直接修改这个Array：
        var arr = ['A', 'B', 'C'];
        arr[1] = 99;
        arr; // arr现在变为['A', 99, 'C']

    !!!请注意，如果通过索引赋值时，索引超过了范围，同样会引起Array大小的变化：
        var arr = [1, 2, 3];
        arr[5] = 'x';
        arr; // arr变为[1, 2, 3, undefined, undefined, 'x']
    
!!!Array的方法=============================================================================


    .indexOf();与String类似,Array也可以通过indexOf()来搜索一个指定元素的位置
        var arr = [10, 20, '30', 'xyz'];
        arr.indexOf(10); // 元素10的索引为0
        arr.indexOf(20); // 元素20的索引为1
        arr.indexOf(30); // 元素30没有找到，返回-1
        arr.indexOf('30'); // 元素'30'的索引为2
        !!!注意了，数字30和字符串'30'是不同的元素。

    .slice();对应String的subString()截取Array的部分元素然后返回一个新的Array
        var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
        arr.slice(0, 3); // 从索引0开始，到索引3结束，但不包括索引3: ['A', 'B', 'C']
        arr.slice(3); // 从索引3开始到结束: ['D', 'E', 'F', 'G']
        !!!注意到slice()的起止参数包括开始索引，不包括结束索引。

        !!!如果不给slice()传递任何参数，它就会从头到尾截取所有元素。利用这一点，我们可以很容易地复制一个Array：
        var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
        var aCopy = arr.slice();
        aCopy; // ['A', 'B', 'C', 'D', 'E', 'F', 'G']
        aCopy === arr; // false

    .push();和.pop(); push()向Array的末尾添加若干元素，pop()则把Array的最后一个元素删除掉：
        var arr = [1, 2];
        arr.push('A', 'B'); // 返回Array新的长度: 4
        arr; // [1, 2, 'A', 'B']
        arr.pop(); // pop()返回'B'
        arr; // [1, 2, 'A']
        arr.pop(); arr.pop(); arr.pop(); // 连续pop 3次
        arr; // []
        arr.pop(); // 空数组继续pop不会报错，而是返回undefined//相当于只定义没赋值
        arr; // [].

    .unshift()和.shift():如果要往Array的头部添加若干元素，使用unshift()方法，shift()方法则把Array的第一个元素删掉：
        var arr = [1, 2];
        arr.unshift('A', 'B'); // 返回Array新的长度: 4
        arr; // ['A', 'B', 1, 2]
        arr.shift(); // 'A'
        arr; // ['B', 1, 2]
        arr.shift(); arr.shift(); arr.shift(); // 连续shift 3次
        arr; // []
        arr.shift(); // 空数组继续shift不会报错，而是返回undefined
        arr; // []

    .sort():sort()可以对当前Array进行排序，它会直接修改当前Array的元素位置，直接调用时，按照默认顺序排序：
        var arr = ['B', 'C', 'A'];
        arr.sort();
        arr; // ['A', 'B', 'C']
    
    .reverse():reverse()把整个Array的元素给掉个个，也就是反转
        var arr = ['one', 'two', 'three'];
        arr.reverse(); 
        arr; // ['three', 'two', 'one']

    .splice(); splice()方法是修改Array的“万能方法”，它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素：
        var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
        // 从索引2开始删除3个元素,然后再添加两个元素:
        arr.splice(2, 3, 'Google', 'Facebook'); // 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
        arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
        // 只删除,不添加:
        arr.splice(2, 2); // ['Google', 'Facebook']
        arr; // ['Microsoft', 'Apple', 'Oracle']
        // 只添加,不删除:
        arr.splice(2, 0, 'Google', 'Facebook'); // 返回[],因为没有删除任何元素
        arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
    .concat(); concat()方法把当前的Array和另一个Array连接起来，并返回一个新的Array：
        var arr = ['A', 'B', 'C'];
        var added = arr.concat([1, 2, 3]);
        added; // ['A', 'B', 'C', 1, 2, 3]
        arr; // ['A', 'B', 'C']
            
        !!!请注意，concat()方法并没有修改当前Array，而是返回了一个新的Array。
        实际上，concat()方法可以接收任意个元素和Array，并且自动把Array拆开，然后全部添加到新的Array里：
            var arr = ['A', 'B', 'C'];
            arr.concat(1, 2, [3, 4]); // ['A', 'B', 'C', 1, 2, 3, 4]
    .join(); join()方法是一个非常实用的方法，它把当前Array的每个元素都用指定的字符串连接起来，然后返回连接后的字符串：
        var arr = ['A', 'B', 'C', 1, 2, 3];
        arr.join('-'); // 'A-B-C-1-2-3'
        !!!如果Array的元素不是字符串，将自动转换为字符串后再连接。

    多维数组  如果数组的某个元素又是一个Array，则可以形成多维数组，例如：
        var arr = [[1, 2, 3], [400, 500, 600], '-'];
        上述Array包含3个元素，其中头两个元素本身也是Array。




