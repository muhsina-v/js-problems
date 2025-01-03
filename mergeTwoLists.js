var mergeTwoLists = function(list1, list2) {
    let merged=[...list1,...list2];
    merged.sort((a,b)=>a-b)
    console.log(merged);
    
    
    
};
const list1=[1,2,4];
const list2=[1,3,4];
mergeTwoLists (list1,list2);
