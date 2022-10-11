// ---------- TRANSLATE JS TO CSS ----------//
export const useJStoCSStranslate = (styleObj) => {
    return Object.keys(styleObj).reduce((acc, key) => (
        acc + key.split(/(?=[A-Z])/).join('-').toLowerCase() + ':' + styleObj[key] + ';'
        ),'')
}

// ---------- TRANSLATE CSS TO JS ----------//
export const useCSStoJStranslate = (styleStr) => {
    let styleObj = {}
    //remove whitspaces and split it 
    let styleArry = styleStr.replace(/\s/g,'').split(';')
    //remove the last Value from the arry that is --> '' (NOTHING)
    styleArry.pop()
    let maped = styleArry.map((styleAndProp) => (
        styleAndProp.split(':')
    ))

    maped.forEach((arry) => {
        if(/-/.test(arry[0])) {
            let modifyKey = arry[0].split('-')
            //tranform the First char to uppercase
            let newKeyStr = modifyKey[0] + modifyKey[1].charAt(0).toUpperCase() + modifyKey[1].slice(1)
            arry[0] = newKeyStr
        }
        styleObj[arry[0]] = arry[1]
    })
    return styleObj
}
