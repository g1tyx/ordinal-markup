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
    'Collapse': '坍缩',
    'Color: OFF': '颜色: 关闭',
    'Colors: ON': '颜色: 开启',
    'Colors: OFF': '颜色: 关闭',
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
    'Unlock autoclicker for maxing all': '解锁自动点击全部最大',
    'incrementy multiplier': '增量乘数',
    'Increase Ordinal by': '按序增加',
    'Need': '需要',
    'Music: OFF': '音乐: 关闭',
    'Millisecond Interval': '毫秒间隔',
    'Maximize ordinal, but number does not increase': '最大化序数，但数量不增加',
    'Reach Base': '购买序数进位',
    'Buy ℵ': '购买 ℵ',
    'Hotkeys: ON': '热键: 开',
    'Hotkeys: OFF': '热键: 关',
    'Current Theme: Light': '当前主题:亮',
    'Dark Manifolds': '黑暗歧管',
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
    'When you Factor Shift, you gain a new factor and the base decreases by': '当您进行因子转换时，您将获得一个新因子，并且序数进位减少了',
    'When this happens, Decrementy increases very rapidly, the "Halve Decrementy Growth"': '发生这种情况时，递减非常迅速地增加，即“减半递减增长”',
    'RESET YOUR GAME': '删除存档',
    'Game autosaves every ten seconds': '游戏每十秒自动保存',
    'Each Factor is twice as powerful': '每个因子效果提升两倍',
    'Gain 5x as much OP': '序数点获取提高5倍',
    'Unlock Infinity autoclicker': '解锁自动点击无限',
    'Gain 20 OP per second': '每秒获得20序数点',
    'Boosters boost Tier 1 and 2 automation by x': '使T1和T2的自动化提高',
    'You\'re currently not in a challenge': '你现在不在挑战内',
    'Autoclicker costs scales a lot worse, and you gain 125x the passive OP if you have the 5x OP upgrade': '自动点击价格大幅上涨,如果你购买了5倍序数点升级,你的自动生产序数点可以获得125倍效果',
    'You can\'t buy factors, Challenge 1 multiplier is useless': '你不能购买因子,挑战1的加成无效',
    'The base is 5 higher, all free factors are doubled (doesn\'t affect challenge mults': '基础序数进位提高5,所有免费因子都被翻倍(不受挑战加成',
    'Factor Shifts don\'t reduce the base': '因子转换不会降低序数进位',
    'You can do a maximum of 2 factor shifts': '你只能进行两次因子转换',
    'Dynamic drops by 1.00e300 per second, keep no OP on Infinity, you can\'t buy Booster Upgrades, and you can do a maximum of 1000 manual successor clicks per infinity': '增量每秒减少1e300,无限没有序数点,你不能购买助推器升级,你每次无限只能进行一千次序数点击',
    'ALL PREVIOUS CHALLENGES AT ONCE,': '同时进行之前的所有挑战,',
    'and Challenge 6 Completions boost OP gain from Infinities': '但挑战6的加成同时也作用于无限获得的序数点',
    'There\'s exponentially rising decrementy dividing Tier 1 production, immediately Refund if you have any Booster Upgrades, all challenge effects are disabled, Challenge 7 completions boost OP, keep no OP on Infinity, you can do a maximum of 1000 manual successor clicks per infinity': 'T1的产量以指数级递减,购买任何助推器升级都会使因子转换重置,所有挑战加成无效,挑战7加成作用于序数点,无限没有序数点,每次无限只能进行一千次序数点击',
    'Complete a Challenge': '完成一次挑战',
    'Unlock Incrementy': '解锁增量',
    'Get four Extended Incrementy Upgrades': '获得增量递增升级',
    'Reach 10240 to Infinity': '到达10240以无限',
    'Autobuy Booster Upgrades: ON': '自动购买助推器升级：开',
    'Autobuy Booster Upgrades: OFF': '自动购买助推器升级：关',
    'Aleph Power': '阿列夫功率',
    'Collapse Autoprestiger: OFF': '坍缩自动声望者：关闭',
    'Collapse Autoprestiger: ON': '坍缩自动声望者：开启',
    'Cost: ??': '成本：??',
    'Current Theme: Dark': '当前主题：黑暗',
    'Current Theme: Space (https://wallpaperplay.com/page-terms': '当前主题：太空（https://wallpaperplay.com/page-terms',
    'Music: Going Down by Jake Chudnow': '音乐:杰克·查德诺的《沉沦》',
    'Music: Horizon by Scott Buckley (': '音乐:斯科特·巴克利的《地平线》(',
    'Music: Hypnothis by Kevin Macleod': '音乐:凯文·麦克劳德的《催眠》',
    'Power (+': '能量 (+',
    'Unlock Darkness': '解锁黑暗',
    'Get a Dark Manifold': '得到一个黑暗歧管',
    'Halve decrementy growth below ω^(ω3), otherwise double it': '将递减增长减半到ω^（ω3）以下，否则将其增加一倍',
    'Ignore the 73 Booster Upgrade unless in Challenge 4, 6, or 7: ON': '忽略73助推器升级，除非在挑战4,6或7：开启',
    'Ignore the 73 Booster Upgrade unless in challenge 4, 6, or 7: ON': '忽略73助推器升级，除非在挑战4,6或7：开启',
    'Reset incrementy for a manifold.': '重置歧管的增量。',
    'REMEMBER TO CHECK INCREMENTY UPGRADES!!!': '记得检查增量升级!!',
    'Redacted': '修订',
    'Reach the BHO to Collapse!': '达到BHO坍缩!',
    'Obtain one of each Aleph': '每个字母都有一个',
    'boosts Tier 2 by': '提升T2',
    'Complete the challenge!': '完成这个挑战!',
    'Complete all of the sluggish milestones': '完成所有缓慢的里程碑',
    'Translated to a x51 multiplier to Factor Boosts and a raise of cap to psi(w^w^w': '转换一个 x51 的倍数到因子的增加和提高上限到psi(w^w^w)',
    'Reach Level 20 Singularity': '达到20级奇点',
    'Reach level 20 Singularity': '达到20级奇点',
    'However, this started to end on a fateful day,': '然而，这一切开始在决定性的一天结束，',
    'However climbing the tower had a twist,': '然而，爬上塔顶有一个转折，',
    'Manifold': '歧管',
    'The Tower of Infinity: a tale told throughout the lands,': '无限之塔：一个传遍整个土地的故事，',
    'The World is upon for a crude awakening': '这个世界正在经历一场残酷的觉醒',
    'There is 1 decrementy': '衰减1',
    'Unlock Dark Upgrades in the Infinity Tab': '在无限选项卡中解锁黑暗升级',
    'This work is licensed under the': '该作品是根据',
    'This feature isn\'t implemented yet though': '该功能尚未实现',
    'Autocomplete Challenges: ON': '自动完成挑战：开启',
    'Autocomplete Challenges: OFF': '自动完成挑战：关闭',
    'Buy Successor Autobuyer for': '购买继任自动购买者',
    'Buy Maximize Autobuyer for': '购买最大化自动购买者',
    'Subscribe to Superspruce!': '订阅Superspruce !',
    'Sluggish Milestones': '缓慢的里程碑',
    'You are currently bulking in a set of': '您目前正在以一组 ',
    'YOU HAVE COLLAPSED!': '你已经坍缩！',
    'Upgrade with': '升级',
    'Reach g': '达到 g',
    ' ON': ' 开启',
    ' OFF': ' 关闭',
    ', Currently': ', 目前',
    'Your Dynamic Multiplier is': '您的动态倍数为',
    'Dynamic Factors reset on Infinities': '动态因子在无限时重置',
    'You\'re currently running Challenge': '您当前正在运行挑战',
    'Refund Confirmation: ON': '回退确认：开启',
    'Refund Confirmation: OFF': '回退确认：关闭',
    'Factor Boost if possible on Refund: OFF': '如果可能的话，提高因子回退：关闭',
    'Factor Boost if possible on Refund: ON': '如果可能的话，提高因子回退：开启',
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
    '\nYet over hundreds of years, undefeated it still stands.': '然而几百年过去了，它仍然屹立不倒。',
    '\nAnd the amount of layers ever so tall.': '以及如此之多的层次。',
    '\nOnly to find the exact same climb once more.': '只为再次找到完全相同的攀登。',
    '\nSoon seen by any who entered its mist;': '很快就被任何进入雾中的人看见;',
    '\nThe reward at the end is infinite power,': '最终的回报是无限的力量，',
    '\nThe stairs on each floor were far too small,': '每层楼的楼梯都太小了，',
    '\nThey started climbing and reached the second floor,': '他们开始往上爬，来到二楼，',
    '\nWhen there was a visitor who would come to stay.': '当有客人要来的时候。',

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
    'Maximum Ordinal Length above': '上方最长数组数',
    'Maximum Ordinal Length below': '下方最长数组数',
    'Current Ordinal Notation:': '数组显示方式：',
    'Your factors are multiplying Tier 1 Automation by': '你的因子使你的T1自动化倍数提高',
    'Your Max All Autobuyer is clicking the Max All button': '你的自动购买全部最大将会以每秒',
    'Your Infinity Autobuyer is clicking the Infinity button': '你的自动无限将会以每秒',
    'You have no factors. Perform a Factor Shift to get one!': '你还没有因子，进行一次因子转换来获得一个！',
    'Your 0 challenge completions have multiplied Tier 1 and 2 Automation by': '你完成的0次挑战使你的T1和T2自动化提高',
    'Your 1 challenge completions have multiplied Tier 1 and 2 Automation by': '你完成的1次挑战使你的T1和T2自动化提高',
    'Your 2 challenge completions have multiplied Tier 1 and 2 Automation by': '你完成的2次挑战使你的T1和T2自动化提高',
    'Your 3 challenge completions have multiplied Tier 1 and 2 Automation by': '你完成的3次挑战使你的T1和T2自动化提高',
    'Your 4 challenge completions have multiplied Tier 1 and 2 Automation by': '你完成的4次挑战使你的T1和T2自动化提高',
    'Your 5 challenge completions have multiplied Tier 1 and 2 Automation by': '你完成的5次挑战使你的T1和T2自动化提高',
    'Your 6 challenge completions have multiplied Tier 1 and 2 Automation by': '你完成的6次挑战使你的T1和T2自动化提高',
    'Your 7 challenge completions have multiplied Tier 1 and 2 Automation by': '你完成的7次挑战使你的T1和T2自动化提高',
    'Your 8 challenge completions have multiplied Tier 1 and 2 Automation by': '你完成的8次挑战使你的T1和T2自动化提高',
    'Your 9 challenge completions have multiplied Tier 1 and 2 Automation by': '你完成的9次挑战使你的T1和T2自动化提高',
    'Your 10 challenge completions have multiplied Tier 1 and 2 Automation by': '你完成的10次挑战使你的T1和T2自动化提高',
    'Your 11 challenge completions have multiplied Tier 1 and 2 Automation by': '你完成的11次挑战使你的T1和T2自动化提高',
    'Your 12 challenge completions have multiplied Tier 1 and 2 Automation by': '你完成的12次挑战使你的T1和T2自动化提高',
    'Your 13 challenge completions have multiplied Tier 1 and 2 Automation by': '你完成的13次挑战使你的T1和T2自动化提高',
    'Your 14 challenge completions have multiplied Tier 1 and 2 Automation by': '你完成的14次挑战使你的T1和T2自动化提高',
    'Your 15 challenge completions have multiplied Tier 1 and 2 Automation by': '你完成的15次挑战使你的T1和T2自动化提高',
    'Your 16 challenge completions have multiplied Tier 1 and 2 Automation by': '你完成的16次挑战使你的T1和T2自动化提高',
    'Your 17 challenge completions have multiplied Tier 1 and 2 Automation by': '你完成的17次挑战使你的T1和T2自动化提高',
    'Your 18 challenge completions have multiplied Tier 1 and 2 Automation by': '你完成的18次挑战使你的T1和T2自动化提高',
    'Your 19 challenge completions have multiplied Tier 1 and 2 Automation by': '你完成的19次挑战使你的T1和T2自动化提高',
    'Your 20 challenge completions have multiplied Tier 1 and 2 Automation by': '你完成的20次挑战使你的T1和T2自动化提高',
    'Your 21 challenge completions have multiplied Tier 1 and 2 Automation by': '你完成的21次挑战使你的T1和T2自动化提高',
    'Your 22 challenge completions have multiplied Tier 1 and 2 Automation by': '你完成的22次挑战使你的T1和T2自动化提高',
    'Your 23 challenge completions have multiplied Tier 1 and 2 Automation by': '你完成的23次挑战使你的T1和T2自动化提高',
    'Your 24 challenge completions have multiplied Tier 1 and 2 Automation by': '你完成的24次挑战使你的T1和T2自动化提高',
    'Challenge Confirmation:': '挑战确认:',
    'Factor Boost if possible on entering a Challenge:': '挑战中自动购买因子转换:',
    'Reward: Dynamic Factor Cap boosts Tier 1 and 2': '奖励:动态因子上限增强自动化T1和T2',
    'Challenges can be completed up to 3 times, each one giving a bigger reward.': '每个挑战最多可以完成三次,每次完成都会提供更大的加成',
    'Factor Shift (0): Requires 200 OP': '因子转换(0):需要200序数点',
    'Factor Shift (1): Requires 1000 OP': '因子转换(1):需要1000序数点',
    'Factor Shift (3): Requires 350000 OP': '因子转换(3):需要350000序数点',
    'Factor Shift (4): Requires 1.000e12 OP': '因子转换(4):需要1.000e12序数点',
    'Factor Shift (5): Requires 1.000e21 OP': '因子转换(5):需要1.000e21序数点',
    'Factor Shift (6): Requires 1.000e100 OP': '因子转换(6):需要1.000e100序数点',
    'Factor Shift (2): Requires 10000 OP': '因子转换(2):需要10000序数点',
    'Factor Shift (7): Requires Infinity OP': '因子转换(7):需要Infinity序数点',
    'Factor Boost (1): Requires': '因子增强(1):需要',
    'Factor Boost (2): Requires': '因子增强(2):需要',
    'Factor Boost (3): Requires': '因子增强(3):需要',
    'Factor Boost (4): Requires': '因子增强(4):需要',
    'Factor Boost (5): Requires': '因子增强(5):需要',
    'Factor Boost (6): Requires': '因子增强(6):需要',
    'Factor Boost (7): Requires': '因子增强(5):需要',
    'Factor Boost (8): Requires': '因子增强(8):需要',
    'Factor Boost (9): Requires': '因子增强(9):需要',
    'Factor Boost Confirmation:': '因子增强自动购买：',
    'Factor Boost if possible on Challenge:': '挑战中因子增强自动购买：',
    'Buy 3 Booster Upgrades': '购买3个助推器升级',
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
    'Get your ordinal to ω^ω^ω': '使你的序数达到ω^ω^ω',
    'Reach the number': '达到序数',
    'Perform an Infinity': '进行一次无限',
    'Buy a Factor': '购买一个因子',
    'You are getting': '你可以获得',
    'You have': '你有',
    'Need': '需要',
    'Goal:': '目标:',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
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
    'incrementy per second': '增幅每秒',
    'times per second, but only if you can\'t Factor Shift': '次的速度点击,只会在你无法进行因子转换时启动',
    'times per second, but only if you\'re past ψ(Ω×1': '次的速度点击,只会启动当你序数点超过ψ(Ω×1',
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
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    'times per second': '次每秒',
    'Ordinal Points': '序数点',
    'OP': '序数点',
    '': '',
    '': '',
    '': '',
    '': '',
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
    [/^Reach the BHO first to collapse! (.+) in collapse$/, '先到达BHO坍缩! $1 秒后坍塌'],
    [/^Increase Factor (.+) for (.+) OP$/, '增加因子 $1 花费 $2 OP'],
    [/^Reward: Factor (.+) boosts Tier (.+) and$/, '奖励：因子 $1 增强自动化T $2 和T'],
    [/^You have (.+) boosters$/, '您有$1个助推器'],
    [/^Infinity to gain (.+) Ordinal Points \(I$/, '点击无限，以获得 $1 序数点 \(I'],
    [/^Unlock Distribute All and upgrades for Tier (.+) automation$/, '解锁全部分发并升级 T$1 自动化'],
    [/^Unlock Tier (.+) automation, the (.+) booster upgrade is improved$/, '解锁 T$1 自动化，$2 助推器升级被改进'],
    [/^Increase Factor (.+) for$/, '提升因子 $1 '],
    [/^Tier (.+) Automation$/, 'T$1 自动化'],
    [/^Ignore in challenge (.+): ON$/, '忽略挑战$1：开启'],
    [/^Ignore in Challenge (.+): ON$/, '忽略挑战$1：开启'],
    [/^per second\n(.+)$/, '每秒'],
    [/^\n(.+)Your Decrementy is multiplying by$/, '你的衰减乘以'],
    [/^\n(.+)You have$/, '你有'],
    [/^\n(.+)Challenges can be completed up to 3 times, each one giving a bigger reward.$/, '挑战最多可以完成3次，每次挑战都会获得更大的奖励。'],
    [/^\n(.+)For the one who is able to ascend this tower.$/, '对于能够登上这座塔的人。'],
    [/^x multiplier to Dynamic Factor output and cap\n(.+)$/, 'x 倍数以动态因子输出和上限'],
    [/^Translated to a\n(.+)$/, '转换为一个'],
    [/^Gain (.+) Boosters \(B$/, '成获得 $1 助推器 \(B'],
    [/^Cost: (.+) ℵ$/, '成本: $1 ℵ'],
    [/^Goal: (.+) OP$/, '目标：$1 OP'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^ (.+) times per second, but only if you're past ψ\($/, '$1 次数每秒，但仅当您经过 ψ\('],
    [/^ (.+) cardinal$/, '$1 基数'],
    [/^ (.+) successor autobuyers$/, '$1 继任自动购买者'],
    [/^ (.+) maximize autobuyers$/, '$1 最大化自动购买者'],
    [/^ (.+) boosters$/, '$1 推进器'],
    [/^ (.+) ℵ$/, '$1 ℵ'],
    [/^Refund back (.+) boosters, but reset all factor shifts$/, '退还 $1 助推器，但重置所有因子转移'],
    [/^Refund back (.+) boosters, but reset all factor shifts \(R$/, '退还 $1 助推器，但重置所有因子转移 \(R'],
    [/^You\'re currently in Challenge (.+).$/, '您目前正在挑战 $1。'],
    [/^It is increasing by (.+) per second$/, '每秒增加 $1'],
    [/^It is increasing by (.+) per second and caps at$/, '每秒增加 $1 并且上限为'],
    [/^Factor Boost (.+): Requires g$/, '因子提升 $1：需要 g'],
    [/^(.+) to see when you can boost!$/, '$1 看看什么时候可以提升！'],
    [/^ (.+)  maximize autoclickers, clicking the maximize button$/, '$1 最大化自动点击者，点击最大化按钮'],
    [/^ (.+) successor autoclickers, clicking the successor button$/, '$1 后继自动点击者，点击后继按钮'],
    [/^(.+) Boosts$/, '$1 提升'],
    [/^(.+) Boost$/, '$1 提升'],
    [/^(.+) Boosters$/, '$1 助推器'],
    [/^(.+) Booster$/, '$1 助推器'],
    [/^Buy Maximize Autobuyer for (.+)  OP$/, '购买最大化自动购买者成本为$1 OP'],
    [/^Buy Maximize Autobuyer for (.+) OP$/, '购买最大化自动购买者成本为$1 OP'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);