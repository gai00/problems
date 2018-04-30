# problems
all my problems

```
$> webpack
```

```
ERROR in ./main.js
Module not found: Error: Can't resolve 'react' in '/home/ubuntu/mastone/assets'
 @ ./main.js 3:13-29

ERROR in ./main.js
Module not found: Error: Can't resolve 'react-dom' in '/home/ubuntu/mastone/assets'
 @ ./main.js 7:16-36
 ```

解法:
這個造成的錯誤，還在看有啥其他影響...
```
webpack.config.js:21 // modules: ['./'],
```
