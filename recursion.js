var list = [
    {
    label: "primary",
    value: "1",
    parentId: 0
    },
    {
    label: "CURENT ASSETS",
    value: "9",
    parentId: 1
    },
    {
    label: "BANK ACCOUNT",
    value: "10",
    parentId: 9
    },
    {
    label: "LOANS(LIABILITY)",
    value: "11",
    parentId: 1
    },
    {
    label: "BANK O/D ACCOUNT",
    value: "12",
    parentId: 11
    },
    {
    label: "BRANCH/DIVISION",
    value: "13",
    parentId: 1
    },
    {
    label: "CAPITAL ACCOUNTS",
    value: "14",
    parentId: 1
    },
    {
    label: "CASH IN HAND",
    value: "15",
    parentId: 9
    },
    {
    label: "CURRENT LIABILITIES",
    value: "16",
    parentId: 1
    },
    {
    label: "DIPOSITES(ASSETS)",
    value: "17",
    parentId: 9
    },
    {
    label: "DIRECT EXPENSE",
    value: "18",
    parentId: 1
    },
    {
    label: "DIRECT INCOME",
    value: "19",
    parentId: 1
    },
    {
    label: "DUTIES AND TAXES",
    value: "20",
    parentId: 16
    },
    {
    label: "FIXED ASSETS",
    value: "21",
    parentId: 1
    },
    {
    label: "INDIRECT EXPENSE",
    value: "22",
    parentId: 1
    },
    {
    label: "INDRECT INCOME",
    value: "23",
    parentId: 1
    },
    {
    label: "INVESTMENT",
    value: "24",
    parentId: 1
    },
    {
    label: "LOANS AND ADVANCE(ASSETS)",
    value: "25",
    parentId: 9
    },
    {
    label: "LOANS (LIABILITY)",
    value: "26",
    parentId: 1
    },
    {
    label: "MISC.EXPENSE",
    value: "27",
    parentId: 1
    },
    {
    label: "PROVISIONS",
    value: "28",
    parentId: 16
    },
    {
    label: "PURCHASE ACCOUNTS",
    value: "29",
    parentId: 1
    },
    {
    label: "RESERVES AND SURPLUS",
    value: "30",
    parentId: 14
    },
    {
    label: "SALES ACCOUNTS",
    value: "31",
    parentId: 1
    },
    {
    label: "SECURE LOANS",
    value: "32",
    parentId: 11
    },
    {
    label: "STOCK-IN-HAND",
    value: "33",
    parentId: 9
    },
    {
    label: "ACCOUNT PAYABLE",
    value: "34",
    parentId: 16
    },
    {
    label: "ACCOUNT RECEIVABLE",
    value: "35",
    parentId: 9
    },
    {
    label: "SUSPENCE AC",
    value: "36",
    parentId: 1
    },
    {
    label: "UNPAID EXPENSES",
    value: "37",
    parentId: 28
    },
    {
    label: "UNPAID SALARED",
    value: "38",
    parentId: 34
    },
    {
    label: "UNSECURE LOANS",
    value: "39",
    parentId: 11
    }
];

//
function createDropdown(list){
    var removeItems = [];
    list.map((single)=>{
        var sub = list.filter(sub => sub.parentId == single.value);
        if(sub.length > 0){
        single.sub = sub;
        single.sub.map((obj)=>{
            removeItems.push(obj.value);
            var i = checkParent(obj.parentId,list);
            obj.label = nameFormat(i) + ' '+ obj.label;
        });
        //call recursive
        createDropdown(single.sub);
        }
    });

    //remove childs from list and add them as child
    var newlist = list.filter((obj)=>{
        return removeItems.indexOf(obj.value) === -1;
    });
    return newlist;
}

function checkParent(parentId,list,a=[]){
    if(parentId){
        var parent = list.filter(sub => sub.value == parentId)[0];
        if(typeof parent != "undefined"){
            a.push(parent.value);
            //call recursive
            checkParent(parent.parentId,list,a);
        }
    }
    return a.length;
}

//formating name
function nameFormat(length){
    var a = "";
    for(var i=0;i<length;i++){
        a += "--";
    }
    return a;
}

//ordering list
function ordering(list,a=[]){
    for(var i = 0;i < list.length; i++){
        console.log(list[i]);
        a.push(list[i]);
        if(list[i].sub){
            ordering(list[i].sub,a);
        }
    }
    return a;
}

//input array list
console.log("input");
console.log(list);

console.log("output");
var ans = createDropdown(list);
var order = ordering(ans);
window.order = order;
console.log(order);

