# useCSSJStranslator
It converts CSS Style to JS Style or JS Style to CSS Style


import { useCSStoJStranslate, useJStoCSStranslate } from './useJSCSStranslate';


  const styleStr = "position:relative;display:flex;flex-direction:column;justify-content:space-between;width:100%;"

  const toJStranslated = useCSStoJStranslate(styleStr)
  console.log('JS', toJStranslated)
  //'JS' {position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%'}

  const styleObj = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
  }
  
  const toCSStranslated = useJStoCSStranslate(styleObj)
  console.log('CSS', toCSStranslated)
  //'CSS' position:relative;display:flex;flex-direction:column;justify-content:space-between;width:100%;;
