function commonParentNode(oNode1, oNode2) {
    let node1Parent = oNode1
    while(node1Parent){
        let node2Parent = oNode2
        while(node2Parent){
            if(node1Parent === node2Parent){
                return node1Parent
            }
            node2Parent = node2Parent.parentNode
        }
        node1Parent = node1Parent.parentNode
    }
    
}

// 递归
function commonParentNode(oNode1, oNode2) {
    if(oNode1.contains(oNode2)){
        return oNode1
    }else{
        return commonParentNode(oNode1.parentNode, oNode2)
    }
} 
