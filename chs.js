/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save your game': '保存游戏',
    'Singularity': '奇点',
    'Singularity Level': '奇点等级',
    'Objectives': '目标',
    'Options': '选项',
    'Ordinals': '序数',
    'per second': '每秒',
    'HACKER!!!': '黑客！！！',
    'How to play': '玩法',
    'Infinity': '无限',
    'Infinity Autobuyer: ON': '无限自动购买者：开启',
    'Infinity Autobuyer: LOCKED': '无限自动购买者：已锁定',
    'Challenge': '挑战',
    'Challenges': '挑战',
    'Collapse': '坍塌',
    'Color: OFF': '颜色: 关闭',
    'Colors: ON': '颜色: 开启',
    'Cost': '成本',
    'Currently': '当前',
    'Exit Challenge': '退出挑战',
    'Export your game file': '导出存档',
    'Factor': '因子',
    'Factors': '因子',
    'Extend Incrementy': '增量递增',
    'Import your game file': '导入存档',
    'To Incrementy': '递增',
    'Unlock Challenges': '解锁挑战',
    'Incrementy': '增量式',
    'Unlock autoclicker for maxing all': '解锁自动点击以全部最大',
    'incrementy multiplier': '增量乘数',
    'Increase Ordinal by': '按序增加',
    'Need': '需要',
    'Music: OFF': '音乐: 关闭',
    'Millisecond Interval': '毫秒间隔',
    'Maximize ordinal, but number does not increase': '最大化序数，但数量不增加',
    'Reach Base': '到达基础',
    'Buy ℵ': '购买 ℵ',
    'Hotkeys: ON': '热键: 开',
    'Hotkeys: OFF': '热键: 关',
    'Current Theme: Light': '当前主题:亮',
    'Dark Manifolds': '黑暗阀组',
    'Dark Upgrades': '黑暗升级',
    'Do a Factor Shift (S': '进行因子转换（S',
    'Dynamic Factors': '动态因子',
    'Flashing Incrementy Reminder: ON': '闪烁增量提醒:开',
    'Flashing Incrementy Reminder: OFF': '闪烁增量提醒:关',
    'Factor Shift Autoprestiger: ON': '因子转换自动声望:开',
    'Factor Shift Autoprestiger: OFF': '因子转换自动声望:关',
    'Offline Progress: ON': '离线进度:开',
    'Offline Progress: OFF': '离线进度:关',
    'Perform a Factor Boost': '执行因子增强',
    'Perform a Factor Shift': '执行因子转换',
    'Max All (M': '全部最大 (M',
    'Max Mode: OFF': '最大模式: 关',
    'Max Mode: ON': '最大模式: 开',
    'Max All Autobuyer: LOCKED': '全部最大购买者: 锁定',
    'Max All Autobuyer: ON': '全部最大购买者: 开',
    'Boosters': '助推器',
    'Assign all': '全部分配',
    'Assign': '分配',
    'Autobuyers': '自动购买者',
    'Autoclickers': '自动点击者',
    'Autoprestigers': '自动声望者',
    'Booster Upgrades': '助推器升级',
    'Buy half of max ℵ': '购买最大值一半的 ℵ',
    'Unlock the next layer': '解锁下一层',
    'Unlock the Singularity': '解锁奇点',
    'Upgrades': '升级',
    'When you Factor Shift, you gain a new factor and the base decreases by': '当您进行因子转换时，您将获得一个新因子，并且基数减少了',
    'When this happens, Decrementy increases very rapidly, the "Halve Decrementy Growth"': '发生这种情况时，递减非常迅速地增加，即“减半递减增长”',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    //原样
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^Reach the BHO first to collapse! (.+) in collapse$/, '先到达BHO坍塌! $1 秒后坍塌'],
    [/^Increase Factor (.+) for (.+) OP$/, '增加因子 $1 花费 $2 OP'],
    [/^Reward: Factor (.+) boosts Tier (.+) and$/, '奖励：因子 $1 提升 $2 级并且'],
    [/^You have (.+) boosters$/, '您有$1个助推器'],
    [/^Infinity to gain (.+) Ordinal Points \(I$/, '点击无限，以获得 $1 序数点 \(我'],
    [/^per second\n(.+)$/, '每秒'],
    [/^Cost: (.+) ℵ$/, '成本: $1 ℵ'],
    [/^Goal: (.+) OP$/, '目标：$1 OP'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^(.+) Boosts$/, '$1 提升'],
    [/^(.+) Boosters$/, '$1 助推器'],
    [/^Buy Maximize Autobuyer for (.+)  OP$/, '购买最大自动购买者成本为$1 OP'],
    [/^Buy Maximize Autobuyer for (.+) OP$/, '购买最大自动购买者成本为$1 OP'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);