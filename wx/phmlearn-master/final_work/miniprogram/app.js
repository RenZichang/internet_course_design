//app.js
App({
  onLaunch: function () {
    this.globalData = {
      input_fileName: ['data_1114125494258188723.csv',
        'data_1114128127899088574.csv',
        'data_1114130247555932158.csv',
        'data_1114153684991315427.csv',
        'data_1114155724436530724.csv',
        'data_1114157545086881783.csv',
        'data_1114159145016276650.csv',
        'data_1114160430415774284.csv',
        'data_1114161846078734342.csv',
        'data_1114163131369440647.csv',
        'data_1114164509005399285.csv',
        'data_1114166852828000757.csv',
        'data_1114168655248386584.csv',
        'data_1114174155590770699.csv',
        'data_1114180647150210564.csv',
        'data_1114181924725462163.csv',
        'data_1114183241695195160.csv',
        'data_1114184420402359618.csv',
        'data_1114185876910491785.csv',
        'data_1114186923247870713.csv',
        'data_1114188185623352657.csv',
        'data_1114189742492264546.csv',
        'data_1114191911766788125.csv',
        'data_1114201491003204678.csv',
        'data_1114203638972938242.csv',
        'data_1114205626366614347.csv',
        'data_1114206832786715497.csv',
        'data_1114208293926506486.csv',
        'data_1114210008004330692.csv',
        'data_1114211283067687914.csv',
        'data_1114212711179684642.csv',
        'data_1114213980242058196.csv',
        'data_1114215094207411628.csv',
        'data_1114216238058332835.csv',
        'data_1114217515834986471.csv',
        'data_1114218761158990093.csv',
        'data_1114219945396345061.csv',
        'data_111422129490627779.csv',
        'data_1114228073909616669.csv',
        'data_1114229689090581240.csv',
        'data_1114231055463491334.csv',
        'data_1114232351799527761.csv',
        'data_111423371785719719.csv',
        'data_1114236174169757735.csv',
        'data_1114237652248801588.csv',
        'data_1114239106275751054.csv',
        'data_1114240460422654752.csv',
        'data_1116369585126290855.csv',
        'data_1120877065824445286.csv',
        'data_1120879302633179479.csv',
        'data_1120881844873345289.csv',
        'data_1120898367019325965.csv',
        'data_1120901912702263365.csv',
        'data_1120916468850806842.csv',
        'data_1120917660514594796.csv',
        'data_1120920956312536039.csv',
        'data_1120922259548287680.csv',
        'data_1120923884243288262.csv',
        'data_1120925453380995719.csv',
        'data_1120926772203566558.csv',
        'data_1120927952654003364.csv',
        'data_1120929243099926189.csv',
        'data_1120930532053397520.csv',
        'data_112093196482261360.csv',
        'data_1120934442005690318.csv',
        'data_1120942929042172252.csv',
        'data_1120955407767649427.csv',
        'data_1120957408193487967.csv',
        'data_1120958796415513741.csv',
        'data_1120960147884118075.csv',
        'data_1120961661819878799.csv',
        'data_1120964108106571043.csv',
        'data_1120965532736233497.csv',
        'data_1120967011801764087.csv',
        'data_1120968482117446948.csv',
        'data_1120974745336319279.csv',
        'data_1120976130773508399.csv',
        'data_1120977576774571379.csv',
        'data_1120978924734298948.csv',
        'data_112098025927443028.csv',
        'data_1120981919873260789.csv',
        'data_1120983389342871677.csv',
        'data_1120985431751602646.csv',
        'data_1120987727295613458.csv',
        'data_1120989580635590477.csv',
        'data_112099099226171819.csv',
        'data_1120992493575949040.csv',
        'data_112099416735842180.csv',
        'data_1120995627238311850.csv',
        'data_112099711732922130.csv',
        'data_1120998444240625956.csv',
        'data_1120999989988116823.csv',
        'data_1121001615536416085.csv',
        'data_1121003046275879231.csv',
        'data_1114088608739503515.csv',
        'data_1114090999693563717.csv',
        'data_111409302236127458.csv',
        'data_111409588952712046.csv',
        'data_1114102859464442257.csv',
        'data_1114104166303834433.csv',
        'data_111410618983842600.csv',
        'data_1114107170370673326.csv',
        'data_1114108523822252729.csv',
        'data_1114109855289083424.csv',
        'data_1114110711570700282.csv',
        'data_1114134855552651442.csv',
        'data_1114144443463542426.csv',
        'data_1114145464928578730.csv',
        'data_1114146911375098015.csv',
        'data_1114147952345021166.csv',
        'data_1114157404999388431.csv',
        'data_1114158485757587536.csv',
        'data_1114159545780127553.csv',
        'data_111416056225298810.csv',
        'data_1114161434958707361.csv',
        'data_1114162466262377457.csv',
        'data_1114163807858219474.csv',
        'data_1114166045888144087.csv',
        'data_1114167011984667382.csv',
        'data_1114167918105438199.csv',
        'data_111416889776459854.csv',
        'data_111416975135689565.csv',
        'data_1114170581625069165.csv',
        'data_1114171414894743582.csv',
        'data_1114175298968017849.csv',
        'data_1114176293873722629.csv',
        'data_1114177297962878567.csv',
        'data_1114178155864869334.csv',
        'data_1114178947798918534.csv',
        'data_1114180002809109940.csv',
        'data_1114181265309534627.csv',
        'data_1114184408807255828.csv',
        'data_1114185417890852177.csv',
        'data_1114186568761172116.csv',
        'data_1114187491771287769.csv',
        'data_1114188519519841848.csv',
        'data_1114189432771496921.csv',
        'data_1114190452897259527.csv',
        'data_1114191322333787454.csv',
        'data_1114192227441256795.csv',
        'data_1114193158251571435.csv',
        'data_1114194065890283579.csv'], 
      // 这是数据集的存放位置
      access_token: "c56342633b034918aedff3fc0547f247.7e5ee0f675d529eed82a9ad232685170",
      resultArray: [],
      ans_0: [],
      ans_1: [],
      ans_2: [],
      ans_3: []
    }
  }
})