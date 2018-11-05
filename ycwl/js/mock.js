var Conf = (function () {
  var conf = {
    arbiList: [
      {
        name: '丁良成',
        specialty: '建设工程、房地产、国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '丁雨尧',
        specialty: '国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '丁郁华',
        specialty: '知识产权',
        workPlace: '江苏盐城'
      },
      {
        name: '万光德',
        specialty: '建设工程、房地产、国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '马　琳',
        specialty: '金融、知识产权、国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '王　华',
        specialty: '国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '王　羽',
        specialty: '国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '王　峥',
        specialty: '建设工程、国内经贸、金融',
        workPlace: '江苏南通'
      },
      {
        name: '王　胜',
        specialty: '房地产、建设工程、国土管理',
        workPlace: '江苏盐城'
      },
      {
        name: '王　莉',
        specialty: '金融、国内经贸',
        workPlace: '江苏南京'
      },
      {
        name: '王　晶',
        specialty: '金融',
        workPlace: '江苏盐城'
      },
      {
        name: '王　曙',
        specialty: '金融、法学',
        workPlace: '江苏盐城'
      },
      {
        name: '王广忠',
        specialty: '国内经贸 公司法',
        workPlace: '江苏盐城'
      },
      {
        name: '王云云',
        specialty: '房地产',
        workPlace: '江苏盐城'
      },
      {
        name: '王凤毅',
        specialty: '建设工程、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '王永忠',
        specialty: '房地产、建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '王有志',
        specialty: '金融',
        workPlace: '江苏盐城'
      },
      {
        name: '王曲凡',
        specialty: '建设工程、房地产、国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '王兆贵',
        specialty: '建设工程、房地产、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '王国祥',
        specialty: '建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '王昌来',
        specialty: '建设工程、房地产、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '王树东',
        specialty: '金融',
        workPlace: '江苏盐城'
      },
      {
        name: '王继飞',
        specialty: '国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '王领章',
        specialty: '国内经贸、建设工程、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '王登科',
        specialty: '房地产、建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '王德松',
        specialty: '国内经贸',
        workPlace: '广东深圳'
      },
      {
        name: '韦月斌',
        specialty: '金融、国内经济、房地产',
        workPlace: '江苏盐城'
      },
      {
        name: '毛者友',
        specialty: '建设工程、房地产、国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '仇志富',
        specialty: '建设工程、房地产、国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '卞卫东',
        specialty: '国内经贸、房地产、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '卞拥军',
        specialty: '建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '方玲玲',
        specialty: '房地产、建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '方雁林',
        specialty: '国内经贸、民商法、合同法',
        workPlace: '上海'
      },
      {
        name: '尹兰兵',
        specialty: '建设工程、金融',
        workPlace: '江苏连云港'
      },
      {
        name: '左　兵',
        specialty: '房地产、金融、国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '石　月',
        specialty: '房地产、建设工程、金融',
        workPlace: '江苏徐州'
      },
      {
        name: '卢瑞中',
        specialty: '建设工程、房地产',
        workPlace: '江苏盐城'
      },
      {
        name: '卢增宽',
        specialty: '国内经贸、房地产、建设工程',
        workPlace: '江苏南京'
      },
      {
        name: '叶　波',
        specialty: '建设工程、房地产、国内经贸',
        workPlace: '上海'
      },
      {
        name: '叶仁文',
        specialty: '民商法',
        workPlace: '江苏盐城'
      },
      {
        name: '田　凌',
        specialty: '建设工程、房地产、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '吉　波',
        specialty: '金融、国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '吉粉巧',
        specialty: '金融',
        workPlace: '江苏盐城'
      },
      {
        name: '吕士彬',
        specialty: '建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '吕文宾',
        specialty: '知识产权、国内贸易',
        workPlace: '江苏盐城'
      },
      {
        name: '朱　明',
        specialty: '建设工程、国内经贸、房地产',
        workPlace: '江苏镇江'
      },
      {
        name: '朱　珊',
        specialty: '建设工程、房地产、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '朱　栋',
        specialty: '国内经贸、房地产、建设工程',
        workPlace: '江苏南京'
      },
      {
        name: '朱广东',
        specialty: '国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '朱月明',
        specialty: '国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '朱军华',
        specialty: '国内经贸、知识产权',
        workPlace: '江苏盐城'
      },
      {
        name: '朱志勇',
        specialty: '房地产、建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '朱荣进',
        specialty: '房地产、建设工程、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '朱桂勤',
        specialty: '房地产、建设工程、知识产权',
        workPlace: '江苏盐城'
      },
      {
        name: '朱爱国',
        specialty: '国内经贸 公司法',
        workPlace: '江苏盐城'
      },
      {
        name: '朱梅芳',
        specialty: '房地产、建设工程、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '朱银锋',
        specialty: '金融 房地产 建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '朱鸿根',
        specialty: '国内经贸、房地产',
        workPlace: '江苏盐城'
      },
      {
        name: '任满军',
        specialty: '房地产、建设工程、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '庄春良',
        specialty: '国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '刘　净',
        specialty: '涉外经贸、国内经贸、金融',
        workPlace: '北京'
      },
      {
        name: '刘　玲',
        specialty: '建设工程、房地产、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '刘　勇',
        specialty: '知识产权',
        workPlace: '江苏盐城'
      },
      {
        name: '刘　勇',
        specialty: '金融',
        workPlace: '江苏盐城'
      },
      {
        name: '刘　桐',
        specialty: '建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '刘　健',
        specialty: '国内经贸、建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '刘　辉',
        specialty: '建设工程、房地产、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '刘长森',
        specialty: '金融',
        workPlace: '江苏盐城'
      },
      {
        name: '刘亚东',
        specialty: '国内经贸、房地产、建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '刘志伟',
        specialty: '建设工程、金融、涉外经贸',
        workPlace: '上海'
      },
      {
        name: '刘茂林',
        specialty: '民事、房地产、知识产权',
        workPlace: '江苏盐城'
      },
      {
        name: '刘咏桦',
        specialty: '建设工程、房地产、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '刘建兵',
        specialty: '国内经贸 公司法',
        workPlace: '江苏盐城'
      },
      {
        name: '刘春档',
        specialty: '房地产、建设工程、国内经贸',
        workPlace: '江苏泰州'
      },
      {
        name: '刘胜香',
        specialty: '建设工程、房地产、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '刘爱君',
        specialty: '建设工程、房地产、国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '刘景胜',
        specialty: '房地产、国内经贸、知识产权',
        workPlace: '江苏盐城'
      },
      {
        name: '刘景夏',
        specialty: '国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '刘智彤',
        specialty: '房地产、建设工程、国内经贸',
        workPlace: '江苏扬州'
      },
      {
        name: '刘德秀',
        specialty: '建设工程、房地产、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '刘德林',
        specialty: '国内经贸、房地产、建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '刘耀彬',
        specialty: '国内经贸、涉外经贸',
        workPlace: '江苏南京'
      },
      {
        name: '许　亮',
        specialty: '房地产',
        workPlace: '江苏盐城'
      },
      {
        name: '许　斌',
        specialty: '建设工程、房地产、知识产权',
        workPlace: '江苏盐城'
      },
      {
        name: '阮绍荣',
        specialty: '房屋征收',
        workPlace: '江苏盐城'
      },
      {
        name: '孙仁荣',
        specialty: '建设工程、房地产、国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '孙迎富',
        specialty: '建设工程、保险金融、买卖',
        workPlace: '江苏盐城'
      },
      {
        name: '孙罗中',
        specialty: '国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '孙学荣',
        specialty: '建设工程、房地产、国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '孙信之',
        specialty: '国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '孙鸿亮',
        specialty: '国内经贸 公司法',
        workPlace: '江苏盐城'
      },
      {
        name: '孙森林',
        specialty: '建设工程、房地产、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '孙德林',
        specialty: '工程管理',
        workPlace: '江苏盐城'
      },
      {
        name: '纪恒玉',
        specialty: '国内经贸、涉外经贸、知识产权',
        workPlace: '江苏盐城'
      },
      {
        name: '苍永东',
        specialty: '国内经贸、建设工程、知识产权',
        workPlace: '江苏盐城'
      },
      {
        name: '严文龙',
        specialty: '国内经贸、房地产、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '严晓勤',
        specialty: '房地产',
        workPlace: '江苏盐城'
      },
      {
        name: '严爱斌',
        specialty: '房地产、国内经贸、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '杜观超',
        specialty: '建设工程、房地产',
        workPlace: '江苏盐城'
      },
      {
        name: '杜红蕾',
        specialty: '建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '李　刚',
        specialty: '公司股权、投资并购、知识产权',
        workPlace: '上海'
      },
      {
        name: '李　宇',
        specialty: '房地产、建设工程、金融',
        workPlace: '江苏常州'
      },
      {
        name: '李　林',
        specialty: '公司法',
        workPlace: '江苏盐城'
      },
      {
        name: '李　勇',
        specialty: '房地产、金融、国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '李　祥',
        specialty: '建设工程、房地产、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '李　强',
        specialty: '建设工程、房地产、国内经贸',
        workPlace: '江苏南京'
      },
      {
        name: '李文广',
        specialty: '建设工程、房地产',
        workPlace: '江苏盐城'
      },
      {
        name: '李文忠',
        specialty: '国内经贸、房地产、建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '李龙梅',
        specialty: '产品质量、国内经贸、房地产',
        workPlace: '江苏盐城'
      },
      {
        name: '李叶青',
        specialty: '国际贸易',
        workPlace: '江苏盐城'
      },
      {
        name: '李加超',
        specialty: '建设工程、房地产、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '李圣鸣',
        specialty: '建设工程、房地产、国内经贸',
        workPlace: '江苏南京'
      },
      {
        name: '李光华',
        specialty: '建设工程、房地产',
        workPlace: '江苏盐城'
      },
      {
        name: '李传江',
        specialty: '建设工程、房地产、国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '李名渊',
        specialty: '国内经贸、建设工程、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '李志敏',
        specialty: '建设工程、国内经贸、金融',
        workPlace: '江苏扬州'
      },
      {
        name: '李良功',
        specialty: '建设工程、房地产',
        workPlace: '江苏盐城'
      },
      {
        name: '李祥渊',
        specialty: '合同、建设工程、房地产',
        workPlace: '广东深圳'
      },
      {
        name: '李晨辉',
        specialty: '金融',
        workPlace: '江苏盐城'
      },
      {
        name: '杨　岚',
        specialty: '国内经贸 公司法',
        workPlace: '江苏盐城'
      },
      {
        name: '杨义宽',
        specialty: '建设工程 房地产',
        workPlace: '江苏盐城'
      },
      {
        name: '杨加宽',
        specialty: '建设工程、房地产、国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '杨国新',
        specialty: '建设工程、房地产',
        workPlace: '江苏盐城'
      },
      {
        name: '杨咏梅',
        specialty: '建设工程、房地产、金融',
        workPlace: '江苏南通'
      },
      {
        name: '杨桂琪',
        specialty: '建设工程、房地产',
        workPlace: '江苏盐城'
      },
      {
        name: '时卫东',
        specialty: '食品药品、知识产权、国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '吴一平',
        specialty: '房地产、国内经贸、知识产权',
        workPlace: '江苏盐城'
      },
      {
        name: '吴发红',
        specialty: '建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '吴先国',
        specialty: '房地产、国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '吴兆丰',
        specialty: '涉外经贸、知识产权',
        workPlace: '上海'
      },
      {
        name: '吴秀华',
        specialty: '金融、建设工程、房地产',
        workPlace: '江苏扬州'
      },
      {
        name: '吴相成',
        specialty: '建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '何云飞',
        specialty: '房地产、建设工程、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '何贤书',
        specialty: '建设工程、房地产',
        workPlace: '江苏盐城'
      },
      {
        name: '余帮喜',
        specialty: '房地产、金融、建设工程',
        workPlace: '江苏南京'
      },
      {
        name: '邹　荣',
        specialty: '房地产、建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '邹应杰',
        specialty: '房地产、建设工程',
        workPlace: '广东深圳'
      },
      {
        name: '辛立东',
        specialty: '房地产',
        workPlace: '江苏盐城'
      },
      {
        name: '汪红新',
        specialty: '国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '沃　近',
        specialty: '国内经贸、房地产、建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '沈中军',
        specialty: '国内经贸、建设工程、知识产权',
        workPlace: '江苏盐城'
      },
      {
        name: '沈玉林',
        specialty: '国内经贸 公司法',
        workPlace: '江苏盐城'
      },
      {
        name: '沈加国',
        specialty: '建设工程、房地产、国内经贸	',
        workPlace: '江苏盐城'
      },
      {
        name: '沈爱军',
        specialty: '建设工程、国内经贸、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '宋海鹏',
        specialty: '国内经贸 公司法',
        workPlace: '江苏盐城'
      },
      {
        name: '张　明',
        specialty: '建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '张　忠',
        specialty: '建设工程、房地产、国内经贸',
        workPlace: '上海'
      },
      {
        name: '张　荔',
        specialty: '保险',
        workPlace: '江苏盐城'
      },
      {
        name: '张　峰',
        specialty: '建设工程、房地产、国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '张　猛',
        specialty: '国内经贸、房地产、建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '张　磊',
        specialty: '建设工程、房地产、国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '张　蕾',
        specialty: '国内经贸、知识产权',
        workPlace: '江苏盐城'
      },
      {
        name: '张长连',
        specialty: '建设工程、房地产、国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '张文耀',
        specialty: '房地产',
        workPlace: '江苏盐城'
      },
      {
        name: '张世星',
        specialty: '建设工程',
        workPlace: '北京'
      },
      {
        name: '张亚仿',
        specialty: '建设工程、房地产',
        workPlace: '江苏盐城'
      },
      {
        name: '张成杰',
        specialty: '国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '张志阳',
        specialty: '建设工程、房地产、国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '张步照',
        specialty: '建设工程、房地产、国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '张国印',
        specialty: '建设工程、房地产、合同',
        workPlace: '北京'
      },
      {
        name: '张国华',
        specialty: '建设工程、金融、国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '张佳娜',
        specialty: '房地产、建设工程',
        workPlace: '江苏无锡'
      },
      {
        name: '张学凡',
        specialty: '建设工程、金融、涉外经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '张建夫',
        specialty: '国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '张晓岚',
        specialty: '金融',
        workPlace: '江苏盐城'
      },
      {
        name: '张海波',
        specialty: '建设工程、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '张锦忠',
        specialty: '建设工程、房地产、国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '张群力',
        specialty: '建设工程、国内经贸、知识产权',
        workPlace: '北京'
      },
      {
        name: '陆广文',
        specialty: '房地产、国内经贸、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '陆立根',
        specialty: '建设工程、房地产、国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '陆志强',
        specialty: '建设工程、房地产、国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '陆建国',
        specialty: '建设工程、房地产、国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '陆建春',
        specialty: '建设工程、房地产、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '陆荣柏',
        specialty: '国内经贸、房地产、建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '陈　军',
        specialty: '国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '陈　劲',
        specialty: '建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '陈　明',
        specialty: '国内经贸 公司法',
        workPlace: '江苏盐城'
      },
      {
        name: '陈　健',
        specialty: '国内经贸、建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '陈　彬',
        specialty: '建设工程、房地产',
        workPlace: '江苏盐城'
      },
      {
        name: '陈　惠',
        specialty: '国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '陈　群',
        specialty: '国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '陈云德',
        specialty: '建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '陈军羊',
        specialty: '国内经贸、建设工程、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '陈进之',
        specialty: '国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '陈志洲',
        specialty: '国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '陈劲松',
        specialty: '建设工程、国内贸易、涉外经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '陈茂春',
        specialty: '国内经贸 公司法',
        workPlace: '江苏盐城'
      },
      {
        name: '陈跃祥',
        specialty: '建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '陈辉芳',
        specialty: '国内经贸、房地产、建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '陈慈明',
        specialty: '知识产权',
        workPlace: '江苏盐城'
      },
      {
        name: '陈巍炜',
        specialty: '建设工程、公司法、合同法',
        workPlace: '江苏盐城'
      },
      {
        name: '范仁铸',
        specialty: '公司法、国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '林　晟',
        specialty: '国内经贸 建筑工程 房地产',
        workPlace: '江苏盐城'
      },
      {
        name: '林宪民',
        specialty: '国内经贸',
        workPlace: '上海'
      },
      {
        name: '杭建华',
        specialty: '房地产、国内经贸、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '季　风',
        specialty: '建设工程、金融、知识产权',
        workPlace: '江苏盐城'
      },
      {
        name: '季　峰',
        specialty: '房地产、建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '季友泉',
        specialty: '房地产、国内经贸、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '侍干霞',
        specialty: '建设工程、房地产',
        workPlace: '江苏盐城'
      },
      {
        name: '金　科',
        specialty: '建设工程、房地产、金融',
        workPlace: '江苏淮安'
      },
      {
        name: '周　鑫',
        specialty: '建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '周广志',
        specialty: '国内经贸 公司法',
        workPlace: '江苏盐城'
      },
      {
        name: '周扣林',
        specialty: '国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '周应青',
        specialty: '建设工程、国内经贸、知识产权',
        workPlace: '江苏盐城'
      },
      {
        name: '周宏彬',
        specialty: '金融、民商事、建设工程',
        workPlace: '北京'
      },
      {
        name: '周启兆',
        specialty: '建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '周语芳',
        specialty: '房地产、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '周振宇',
        specialty: '国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '郑加宏',
        specialty: '建设工程、房地产',
        workPlace: '江苏盐城'
      },
      {
        name: '郑国胜',
        specialty: '国内经贸、房地产、建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '宗益道',
        specialty: '国内经贸、房地产、建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '居云金',
        specialty: '房地产',
        workPlace: '江苏盐城'
      },
      {
        name: '赵志刚',
        specialty: '保险',
        workPlace: '江苏盐城'
      },
      {
        name: '赵铁桥',
        specialty: '建设工程、房地产、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '胡成红',
        specialty: '建设工程、房地产、商事交易',
        workPlace: '江苏盐城'
      },
      {
        name: '胡志安',
        specialty: '国内经贸、房地产',
        workPlace: '江苏盐城'
      },
      {
        name: '胡改蓉',
        specialty: '国内经贸、金融、房地产',
        workPlace: '上海'
      },
      {
        name: '钟华东',
        specialty: '金融 国内经贸 知识产权',
        workPlace: '江苏盐城'
      },
      {
        name: '禹建民',
        specialty: '国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '饶景丽',
        specialty: '国内经贸、房地产、财务税务',
        workPlace: '江苏盐城'
      },
      {
        name: '施　斌',
        specialty: '建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '姜　烨',
        specialty: '国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '姜军荣',
        specialty: '建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '姜学军',
        specialty: '国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '姜海生',
        specialty: '国内经贸、房地产、知识产权',
        workPlace: '江苏盐城'
      },
      {
        name: '胥江华',
        specialty: '国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '姚学明',
        specialty: '国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '秦国臣',
        specialty: '房地产、建设工程',
        workPlace: '江苏连云港'
      },
      {
        name: '袁为国',
        specialty: '国内经贸、建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '耿青根',
        specialty: '金融',
        workPlace: '江苏盐城'
      },
      {
        name: '夏伯宏',
        specialty: '建设工程、房地产',
        workPlace: '江苏盐城'
      },
      {
        name: '夏建林',
        specialty: '知识产权、国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '夏爱军',
        specialty: '国内经贸、建设工程、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '顾　兵',
        specialty: '建设工程、房地产、金融',
        workPlace: '江苏南京'
      },
      {
        name: '顾亚云',
        specialty: '国内经贸 公司法',
        workPlace: '江苏盐城'
      },
      {
        name: '顾亚平',
        specialty: '建设工程、房地产、国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '倪夕朝',
        specialty: '金融',
        workPlace: '江苏盐城'
      },
      {
        name: '倪同珠',
        specialty: '建设工程、国内经贸、房地产',
        workPlace: '江苏盐城'
      },
      {
        name: '倪晓峰',
        specialty: '知识产权',
        workPlace: '江苏盐城'
      },
      {
        name: '皋德馨',
        specialty: '建设工程 房地产',
        workPlace: '江苏盐城'
      },
      {
        name: '徐　伟',
        specialty: '金融、建设工程、房地产',
        workPlace: '江苏苏州'
      },
      {
        name: '徐　荣',
        specialty: '国内经贸、房地产、建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '徐　聘',
        specialty: '建设工程 房地产',
        workPlace: '江苏盐城'
      },
      {
        name: '徐丰成',
        specialty: '金融、房地产、建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '徐文海',
        specialty: '建设工程、房地产、国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '徐永生',
        specialty: '建设工程、房地产',
        workPlace: '江苏盐城'
      },
      {
        name: '徐永杰',
        specialty: '国内经贸、涉外经贸、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '徐松红',
        specialty: '房地产',
        workPlace: '江苏盐城'
      },
      {
        name: '徐建明',
        specialty: '国内经贸、房地产、建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '高　扬',
        specialty: '金融',
        workPlace: '江苏盐城'
      },
      {
        name: '高　明',
        specialty: '建设工程、房地产',
        workPlace: '江苏盐城'
      },
      {
        name: '高登军',
        specialty: '建设工程、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '郭建春',
        specialty: '房地产',
        workPlace: '江苏盐城'
      },
      {
        name: '郭霞普',
        specialty: '建设工程、房地产',
        workPlace: '江苏盐城'
      },
      {
        name: '唐　卫',
        specialty: '国内经贸、房地产、建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '唐卫华',
        specialty: '建设工程、房地产、涉外经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '唐雨华',
        specialty: '建设工程、房地产',
        workPlace: '江苏盐城'
      },
      {
        name: '涂正隆',
        specialty: '房地产、国内经贸、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '谈　宁',
        specialty: '国内经贸、房地产、建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '陶　硕',
        specialty: '房地产、建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '黄士标',
        specialty: '建设工程、房地产、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '黄步斌',
        specialty: '建设工程、金融、国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '黄厚国',
        specialty: '建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '黄海明',
        specialty: '国内经贸、房地产、建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '黄旖旎',
        specialty: '金融、国内经贸',
        workPlace: '江苏常州'
      },
      {
        name: '曹　雷',
        specialty: '房地产',
        workPlace: '江苏盐城'
      },
      {
        name: '盛　俊',
        specialty: '建设工程、房地产、金融',
        workPlace: '江苏南通'
      },
      {
        name: '崔　健',
        specialty: '国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '崔红娟',
        specialty: '金融 房地产 建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '崔晓明',
        specialty: '金融、房地产',
        workPlace: '江苏盐城'
      },
      {
        name: '梁庆忠',
        specialty: '建设工程、金融、国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '梁兴来',
        specialty: '国内经贸 建筑工程',
        workPlace: '江苏盐城'
      },
      {
        name: '梁泽泉',
        specialty: '建设工程、房地产、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '梁秋娜',
        specialty: '建设工程、投资并购、金融',
        workPlace: '上海'
      },
      {
        name: '彭大岳',
        specialty: '房地产、财税、建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '葛红梅',
        specialty: '国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '葛荣贵',
        specialty: '房地产、国内经贸、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '蒋　同',
        specialty: '国内经贸、涉外经贸、知识产权',
        workPlace: '江苏盐城'
      },
      {
        name: '蒋海平',
        specialty: '知识产权、金融',
        workPlace: '浙江杭州'
      },
      {
        name: '曾　浩',
        specialty: '金融、房地产、建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '楼向阳',
        specialty: '建设工程、房地产、国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '虞银春',
        specialty: '建设工程、房地产、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '窦保平',
        specialty: '建设工程、房地产',
        workPlace: '江苏盐城'
      },
      {
        name: '窦高林',
        specialty: '建设工程、国内经贸、金融',
        workPlace: '江苏镇江'
      },
      {
        name: '蔡　云',
        specialty: '建设工程、房地产、金融',
        workPlace: '江苏南京'
      },
      {
        name: '蔡　艳',
        specialty: '国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '蔡　祥',
        specialty: '国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '蔡卫民',
        specialty: '建设工程、房地产、国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '蔡中源',
        specialty: '国内经贸、金融、知识产权',
        workPlace: '江苏盐城'
      },
      {
        name: '蔡江春',
        specialty: '国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '蔡锦源',
        specialty: '国内经贸、房地产、建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '裴　琰',
        specialty: '国内经贸 公司法',
        workPlace: '江苏盐城'
      },
      {
        name: '熊　伟',
        specialty: '国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '熊良志',
        specialty: '房地产、建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '滕　跃',
        specialty: '建设工程、房地产、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '潘　刚',
        specialty: '房地产、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '潘　剑',
        specialty: '国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '潘云春',
        specialty: '建设工程、房地产、国内经贸',
        workPlace: '江苏南京'
      },
      {
        name: '潘文生',
        specialty: '国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '潘顺良',
        specialty: '国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '潘晓霞',
        specialty: '国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '潘爱国',
        specialty: '国内经贸、房地产、建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '潘道春',
        specialty: '房地产',
        workPlace: '江苏盐城'
      },
      {
        name: '薛为开',
        specialty: '建设工程 房地产',
        workPlace: '江苏盐城'
      },
      {
        name: '薛为民',
        specialty: '国内经贸、建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '薛秀兰',
        specialty: '国内经贸 公司法',
        workPlace: '江苏盐城'
      },
      {
        name: '薛鹏玲',
        specialty: '房地产、建设工程、金融',
        workPlace: '江苏盐城'
      },
      {
        name: '戴　斌',
        specialty: '国内经贸 公司法',
        workPlace: '江苏盐城'
      },
      {
        name: '戴红春',
        specialty: '国内经贸、建设工程',
        workPlace: '江苏盐城'
      },
      {
        name: '戴进虎',
        specialty: '建设工程、金融、国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '戴晓健',
        specialty: '建设工程、房地产、国内经贸',
        workPlace: '江苏盐城'
      },
      {
        name: '魏　迪',
        specialty: '建设工程、房地产',
        workPlace: '浙江杭州'
      },
      {
        name: '魏　然',
        specialty: '知识产权、产品质量',
        workPlace: '江苏盐城'
      }
    ]
  }
  return {
    get: function (name) {
      return conf[name] ? conf[name] : null;
    }
  }
})()

String.prototype.trim = function() {
  return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}

function resAjax(type) {
  return new Promise(function (resolve, reject) {
    var _d = Conf.get(type)
    if (_d === null) {
      reject({
        message: '暂无此数据'
      })
    } else {
      resolve({
        data: _d
      })
    }
  })
}