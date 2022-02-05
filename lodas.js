const _ = require('lodash')

const items = [1,[2,[3],[4],[5]]]
console.log(items)
console.log(_.flattenDeep(items))