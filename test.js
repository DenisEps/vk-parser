const mergedResults = require('./count-activity/mergeActivity');

const test = {
  likes: {
    '194289': 1,
    '306511': 1,
    '402356': 1,
    '825953': 1,
    '891936': 1,
    '923178': 1,
    '1040029': 1,
    '1600165': 1,
    '1686925': 1,
    '1709778': 1,
    '2001224': 1,
    '2360942': 1,
    '2752346': 1,
    '3144695': 1,
    '3412332': 1,
    '3600639': 1,
    '4418758': 1,
    '5092090': 1,
    '6689561': 1,
    '7798823': 1,
    '7817454': 1,
    '8119598': 1,
    '9894189': 1,
    '11739095': 1,
    '13270767': 1,
    '15767665': 1,
    '16974250': 1,
    '17069060': 1,
    '20136009': 1,
    '20777063': 1,
    '21624251': 1,
    '26598117': 1,
    '27146204': 1,
    '30679560': 1,
    '34383859': 1,
    '36397659': 1,
    '37863943': 1,
    '43364236': 1,
    '47884283': 1,
    '57417041': 1,
    '58540433': 1,
    '68333281': 1,
    '75052919': 1,
    '78318503': 1,
    '84510374': 1,
    '86883852': 1,
    '100204792': 1,
    '109345802': 1,
    '112365129': 1,
    '130656579': 1,
    '132888016': 1,
    '138138066': 1,
    '144057883': 1,
    '144818606': 1,
    '144882337': 1,
    '147712611': 1,
    '155908295': 1,
    '158964862': 1,
    '162537133': 1,
    '167540373': 1,
    '170661529': 1,
    '180976675': 1,
    '181667865': 1,
    '197314101': 1,
    '212263941': 1,
    '224422740': 1,
    '227381835': 1,
    '231620657': 1,
    '277011714': 1,
    '278516429': 1,
    '289183381': 1,
    '299471171': 1,
    '311022637': 1,
    '312047527': 1,
    '314333542': 1,
    '321152399': 1,
    '324132985': 1,
    '329438506': 1,
    '361619334': 1,
    '397554463': 1,
    '401492246': 1,
    '404753397': 1,
    '405139689': 1,
    '420428282': 1,
    '436204186': 1,
    '498406633': 1,
    '562511681': 1
  },
  comments: {
    '402356': 1,
    '1046695': 1,
    '1686925': 1,
    '2001224': 1,
    '2752346': 1,
    '11742336': 1,
    '13109873': 1,
    '14575766': 1,
    '23850555': 1,
    '34383859': 1,
    '40138712': 1,
    '56619200': 1,
    '95954710': 1,
    '104457963': 1,
    '132910639': 1,
    '171572620': 1,
    '181667865': 1,
    '208403304': 1,
    '378132142': 1,
    '419473632': 1,
    '558068973': 1,
    '-78323378': 2
  },
}

const obj1 = {
  1: 2,
  2: 3,
}

const obj2 = {
  1: 1,
  2: 5,
  3: 1
}

const array = [obj1, obj2];