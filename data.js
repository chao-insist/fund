// 7月3号沪深300初始值 4419
var start = 4419
var end = 4774

var 日期 = ['07-03', '07-06', '07-07', '07-08', '07-09', '07-10', '07-13', '07-14']
var 指数 = [4419, 4670, 4698, 4774] // 沪深300每天指数
var lzh = [0, 3.26, 2.14, 1.8]
var mzw = [0, 2.48, 1.35, 0.86]
var wc = [0, 0.43, 0.7, 1.57]

var series = [
    {
        name: '沪深300',
        data: 指数,
        type: 'line'
    },
    {
        name: 'lzh',
        data: computed(lzh),
        type: 'line',
        color: '#F1C40F'
    },
    {
        name: 'mzw',
        data: computed(mzw),
        type: 'line'
    },
    {
        name: 'wc',
        data: computed(wc),
        type: 'line',
    }
]


function winR (arr) {
    var s = arr[0]
    var e = arr.slice(-1)
    var win = (e/s - 1) * 100 + ''
    win = win.slice(0, 5) + '%'
    return win
}

function computed(arr) {
    var temp = start    // 开始值
    var newArr = []     // 计算结果
    arr.forEach(item => {
        temp *= (item/100 + 1)  // 计算每日收益后的结果
        temp = parseInt(temp)
        newArr.push(temp)
    })
    return newArr
}