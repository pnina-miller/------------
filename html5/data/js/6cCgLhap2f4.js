﻿window.globalProvideData('slide', '{"title":"Text Entry","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":15,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide15","width":960,"height":540,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0x179F81","alpha":100,"stop":0}]}},"id":"6cCgLhap2f4","actionGroups":{"ReviewInt_6gGmy52N2n0":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6HYWrF0d2BS"},"enabled":{"type":"boolean","value":false}}]},"ReviewIntCorrectIncorrect_6gGmy52N2n0":{"kind":"actiongroup","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6gGmy52N2n0_ReviewShape"}}]},"AnsweredInt_6gGmy52N2n0":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6gGmy52N2n0"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00001100101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00001100101"}]}]},"DisableChoices_6gGmy52N2n0":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6HYWrF0d2BS"},"enabled":{"type":"boolean","value":false}}]},"6gGmy52N2n0_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5yczVqI83Kv.$Status","typea":"property","valueb":"correct","typeb":"string"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6gGmy52N2n0"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5yczVqI83Kv.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"5yczVqI83Kv.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6gGmy52N2n0"}]}]}]}]},"NavigationRestrictionNextSlide_6cCgLhap2f4":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6A98ZKw9iqd"}}]},"NavigationRestrictionPreviousSlide_6cCgLhap2f4":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5sxMkQAR9kr.$QuizComplete","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"starttimer","id":"_player.5sxMkQAR9kr_timer"},{"kind":"showtimer","id":"_player.5sxMkQAR9kr_timer"}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00001100101"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00001100101"}]}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_5wXLeWMTABt","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5wXLeWMTABt","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"exe_actiongroup","id":"6gGmy52N2n0_CheckAnswered"}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6gGmy52N2n0","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6A98ZKw9iqd"}}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6gGmy52N2n0","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6A98ZKw9iqd"}}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6cCgLhap2f4"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6cCgLhap2f4"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5zv9JzWO8SY"}},{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"6gGmy52N2n0_ReviewShape"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6HYWrF0d2BS"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5qIrEau0vsG"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5YQpsz0MKrS"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"66mxq8ASxiz"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6Tbx1WfH7J0"}}]}]},"objects":[{"kind":"stategroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6hYDcu0U9Ob_-823000639","id":"01","linkId":"txt__default_5zv9JzWO8SY","type":"acctext","xPos":9,"yPos":50,"xAccOffset":9,"yAccOffset":50,"width":414,"height":170,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"אני הוא זה שהוסמך לתפקיד.","style":{"fontFamily":"\\"Comix No2 CLM Charset0_55D5A887\\",\\"Comix No2 CLM\\"","fontSize":28,"foregroundColor":"#000000","linkColor":"#000000","ascent":29.021,"descent":12.487,"leading":0,"underlinePosition":-3.883,"underlineThickness":1.549,"xHeight":14.109}}],"style":{"flowDirection":"rightToLeft","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","lineSpacingRule":"multiple","lineSpacing":21,"spacingBefore":0,"spacingAfter":8,"listStyle":{"listType":"none","listTypeFormat":"parentheses","size":100,"bulletFont":"Arial"},"tagType":"P"},"runs":[{"idx":0,"len":25,"flowDirection":"rightToLeft","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Rubik","fontSize":14,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#FDD409","linkColor":"#FFFFFF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":421,"bottom":93,"pngfb":false,"pr":{"l":"Lib","i":778}}},{"kind":"textdata","uniqueId":"6fiLimPSSDi_-705107305","id":"02","linkId":"txt__default_Visited_5zv9JzWO8SY","type":"acctext","xPos":9,"yPos":50,"xAccOffset":17,"yAccOffset":50,"width":414,"height":170,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"אני הוא שהוסמכתי","style":{"fontFamily":"\\"Comix No2 CLM Charset0_55D5A887\\",\\"Comix No2 CLM\\"","fontSize":28,"foregroundColor":"#000000","linkColor":"#000000","ascent":29.021,"descent":12.487,"leading":0,"underlinePosition":-3.883,"underlineThickness":1.549,"xHeight":14.109}},{"text":"*","style":{"fontFamily":"\\"Comix No2 CLM Charset0_55D5A887\\",\\"Comix No2 CLM\\"","fontSize":28,"elevation":"superscript","foregroundColor":"#C00000","linkColor":"#C00000","ascent":29.021,"descent":12.487,"leading":0,"underlinePosition":-3.883,"underlineThickness":1.549,"xHeight":14.109}},{"text":" לתפקיד.","style":{"fontFamily":"\\"Comix No2 CLM Charset0_55D5A887\\",\\"Comix No2 CLM\\"","fontSize":28,"foregroundColor":"#000000","linkColor":"#000000","ascent":29.021,"descent":12.487,"leading":0,"underlinePosition":-3.883,"underlineThickness":1.549,"xHeight":14.109}}],"style":{"flowDirection":"rightToLeft","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","lineSpacingRule":"multiple","lineSpacing":21,"spacingBefore":0,"spacingAfter":8,"listStyle":{"listType":"none","listTypeFormat":"parentheses","size":100,"bulletFont":"Arial"},"tagType":"P"},"runs":[{"idx":0,"len":25,"flowDirection":"rightToLeft","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Rubik","fontSize":14,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#FDD409","linkColor":"#FFFFFF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":418,"bottom":93,"pngfb":false,"pr":{"l":"Lib","i":779}}}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":216,"rotateYPos":112,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-3,"top":-3,"right":434,"bottom":226,"altText":"אני הוא זה שהוסמך לתפקיד.","pngfb":false,"pr":{"l":"Lib","i":692}},"html5data":{"xPos":-3,"yPos":-3,"width":437,"height":229,"strokewidth":4}},"states":[{"kind":"state","name":"_default_Visited","data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":-3,"right":442,"bottom":226,"altText":"אני הוא שהוסמכתי* לתפקיד.","pngfb":false,"pr":{"l":"Lib","i":693}},"html5data":{"xPos":0,"yPos":-3,"width":442,"height":229,"strokewidth":4}}}],"width":432,"height":224,"resume":true,"useHandCursor":true,"id":"5zv9JzWO8SY"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6YggwbkeBl8_1839974744","id":"01","linkId":"txt__default_6YggwbkeBl8","type":"acctext","xPos":9,"yPos":4,"xAccOffset":9,"yAccOffset":4,"width":334,"height":25,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"* מתאימים את הפועל לנושא ולא לאוגד.","style":{"foregroundColor":"#C00000","linkColor":"#C00000","fontFamily":"\\"Rubik Charset0_v8wz5YIGD35F1C54\\",\\"Rubik\\"","ascent":17.453,"descent":4.667,"leading":0,"underlinePosition":-0.933,"underlineThickness":0.933,"xHeight":9.707}}],"style":{"flowDirection":"rightToLeft","justification":"center","tagType":"P"},"runs":[{"idx":0,"len":35,"flowDirection":"rightToLeft","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Rubik","fontSize":14,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#FFFFFF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":322,"bottom":27,"pngfb":false,"pr":{"l":"Lib","i":781}}}],"shapemaskId":"","xPos":56,"yPos":126,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":176,"rotateYPos":16.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":352,"bottom":33,"altText":"* מתאימים את הפועל לנושא ולא לאוגד.","pngfb":false,"pr":{"l":"Lib","i":780}},"html5data":{"xPos":0,"yPos":0,"width":352,"height":33,"strokewidth":0}},"width":352,"height":33,"resume":true,"useHandCursor":true,"id":"6YggwbkeBl8"}],"actionstates":[{"kind":"state","name":"_default","actions":[{"kind":"setobjstate","stateRef":{"type":"string","value":"_default"},"objRef":{"type":"string","value":"5zv9JzWO8SY"}}],"clickdef":[{"kind":"objref","type":"string","value":"5zv9JzWO8SY"},{"kind":"objref","type":"string","value":"6YggwbkeBl8"}]},{"kind":"state","name":"_default_Visited","actions":[{"kind":"setobjstate","stateRef":{"type":"string","value":"_default_Visited"},"objRef":{"type":"string","value":"5zv9JzWO8SY"}}],"clickdef":[{"kind":"objref","type":"string","value":"5zv9JzWO8SY"},{"kind":"objref","type":"string","value":"6YggwbkeBl8"}]}],"shapemaskId":"","xPos":272,"yPos":158,"tabIndex":10,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":216,"rotateYPos":112,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"width":432,"height":224,"resume":true,"useHandCursor":true,"id":"5zv9JzWO8SY","variables":[{"kind":"variable","name":"_visited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_savevisited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetVisitedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"var","value":"#_visited"}},{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"boolean","value":false}}]},"ActGrpSetStatesFinal":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"#_visited","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"5zv9JzWO8SY.$OnStage","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6YggwbkeBl8"}}],"elseActions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"6YggwbkeBl8"}}]}]},"_show":{"kind":"actiongroup","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5zv9JzWO8SY"}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpSetVisitedState"},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_this.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_this"}}]},{"kind":"exe_actiongroup","id":"_this.ActGrpClearStateVars"},{"kind":"exe_actiongroup","id":"_this.ActGrpSetVisitedState"},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"or","statements":[{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#TextEntry11","typea":"var","valueb":"אני הוא שהוסמכתי לתפקיד.","typeb":"string"}]},{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#TextEntry11","typea":"var","valueb":"אני הוא שהוסמכתי לתפקיד","typeb":"string"}]},{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#TextEntry11","typea":"var","valueb":"אני הוא שהסמכתי לתפקיד","typeb":"string"}]},{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#TextEntry11","typea":"var","valueb":"אני הוא שהסמכתי לתפקיד.","typeb":"string"}]}]}]}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5YQpsz0MKrS.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.5YQpsz0MKrS"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5YQpsz0MKrS.#_state","typea":"var","valueb":"תשובה נכונה","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"_parent.5YQpsz0MKrS.ActGrpClearStateVars"},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5YQpsz0MKrS"}}],"elseActions":[{"kind":"adjustvar","variable":"_parent.5YQpsz0MKrS._state","operator":"set","value":{"type":"string","value":"תשובה נכונה"}},{"kind":"exe_actiongroup","id":"_parent.5YQpsz0MKrS.ActGrpClearStateVars"},{"kind":"setobjstate","stateRef":{"type":"string","value":"תשובה נכונה"},"objRef":{"type":"string","value":"_parent.5YQpsz0MKrS"}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5YQpsz0MKrS"}}]}]},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"and","statements":[{"kind":"compare","operator":"noteq","valuea":"_parent.5YQpsz0MKrS.#_state","typea":"var","valueb":"תשובה נכונה","typeb":"string"}]}]}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.66mxq8ASxiz.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.66mxq8ASxiz"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.66mxq8ASxiz.#_state","typea":"var","valueb":"תשובה שגויה","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"_parent.66mxq8ASxiz.ActGrpClearStateVars"},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.66mxq8ASxiz"}}],"elseActions":[{"kind":"adjustvar","variable":"_parent.66mxq8ASxiz._state","operator":"set","value":{"type":"string","value":"תשובה שגויה"}},{"kind":"exe_actiongroup","id":"_parent.66mxq8ASxiz.ActGrpClearStateVars"},{"kind":"setobjstate","stateRef":{"type":"string","value":"תשובה שגויה"},"objRef":{"type":"string","value":"_parent.66mxq8ASxiz"}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.66mxq8ASxiz"}}]}]}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_show"},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"textinput","bindto":"_player.TextEntry11","align":"center","verticalAlign":"top","rtl":true,"numeric":false,"multiline":false,"maxchars":0,"placeholder":"","fontsize":19,"textcolor":"0x000000","bold":false,"italic":false,"font":"Rubik Charset0_v8wz5YIGD35F1C54","marginleft":9,"marginright":9,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":64,"yPos":462,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":428,"rotateYPos":23,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"6HYWrF0d2BS","linkId":"","type":"vectortext","xPos":9,"yPos":4,"xAccOffset":0,"yAccOffset":0,"width":838,"height":46,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":0,"bottom":0,"pngfb":false,"pr":{"l":"Lib","i":177}}},"html5data":{"xPos":0,"yPos":0,"width":856,"height":46,"strokewidth":0}},"width":856,"height":46,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":0,"top":0,"right":856,"bottom":46,"altText":"Text Entry","pngfb":false,"pr":{"l":"Lib","i":705}}},"id":"6HYWrF0d2BS","events":[{"kind":"onlosefocus","actions":[{"kind":"adjustvar","variable":"_player.TextEntry11","operator":"set","value":{"type":"property","value":"$Text"}}]},{"kind":"onkeypress","keycode":13,"shift":false,"ctrl":false,"alt":false,"actions":[{"kind":"eval_interaction","id":"_parent.5yczVqI83Kv"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5qIrEau0vsG_1706902299","id":"01","linkId":"txt__default_5qIrEau0vsG","type":"acctext","xPos":9,"yPos":4,"xAccOffset":9,"yAccOffset":4,"width":182,"height":91,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"3 / 5","style":{"fontFamily":"\\"Comix No2 CLM Charset0_55D5A887\\",\\"Comix No2 CLM\\"","fontSize":60,"ascent":62.188,"descent":26.758,"leading":0,"underlinePosition":-8.32,"underlineThickness":3.32,"xHeight":30.234}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":5,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Rubik","fontSize":14,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#FFFFFF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":173,"bottom":93,"pngfb":false,"pr":{"l":"Lib","i":782}}}],"shapemaskId":"","xPos":408,"yPos":30,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":100,"rotateYPos":49.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":200,"bottom":99,"altText":"3 / 5","pngfb":false,"pr":{"l":"Lib","i":706}},"html5data":{"xPos":0,"yPos":0,"width":200,"height":99,"strokewidth":0}},"width":200,"height":99,"resume":true,"useHandCursor":true,"id":"5qIrEau0vsG"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":198,"id":"01","url":"story_content/5vcWUJnuHe9_FFFFFF_P_0_136_566_566.png","type":"normal","altText":"Set of Hand Drawn Check Marks And Crosses.jpg","width":566,"height":566,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":832,"yPos":382,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":24,"rotateYPos":24,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":48,"bottom":48,"altText":"Set of Hand Drawn Check Marks And Crosses.jpg","pngfb":false,"pr":{"l":"Lib","i":177}},"html5data":{"xPos":0,"yPos":0,"width":48,"height":48,"strokewidth":0}},"states":[{"kind":"state","name":"תשובה נכונה","data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":80,"bottom":126,"altText":"Set of Hand Drawn Check Marks And Crosses.jpg","pngfb":false,"pr":{"l":"Lib","i":783}},"html5data":{"xPos":0,"yPos":0,"width":80,"height":126,"strokewidth":0}}}],"width":48,"height":48,"resume":true,"useHandCursor":true,"id":"5YQpsz0MKrS","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":197,"id":"01","url":"story_content/5vcWUJnuHe9_FFFFFF_P_0_702_566_566.png","type":"normal","altText":"Set of Hand Drawn Check Marks And Crosses.jpg","width":566,"height":566,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":864,"yPos":462,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":24,"rotateYPos":24,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":48,"bottom":48,"altText":"Set of Hand Drawn Check Marks And Crosses.jpg","pngfb":false,"pr":{"l":"Lib","i":177}},"html5data":{"xPos":0,"yPos":0,"width":48,"height":48,"strokewidth":0}},"states":[{"kind":"state","name":"תשובה שגויה","data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":48,"bottom":48,"altText":"Set of Hand Drawn Check Marks And Crosses.jpg","pngfb":false,"pr":{"l":"Lib","i":714}},"html5data":{"xPos":0,"yPos":0,"width":48,"height":48,"strokewidth":0}}}],"width":48,"height":48,"resume":true,"useHandCursor":true,"id":"66mxq8ASxiz","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"stategroup","objects":[{"kind":"expandinglabel","animationtype":"full","showclosebutton":false,"contentheight":0,"borderwidth":0,"arrowxpos":0,"arrowypos":218,"shapemaskId":"","xPos":14,"yPos":-204,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":0,"rotateYPos":0,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"colors":[{"kind":"color","name":"border","fill":{"type":"linear","rotation":0,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":0,"stop":0}]}},{"kind":"color","name":"bg","fill":{"type":"linear","rotation":0,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":0,"stop":0}]}}],"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":0,"bottom":0,"pngfb":false,"pr":{"l":"Lib","i":28}},"html5data":{"xPos":0,"yPos":0,"width":0,"height":0,"strokewidth":0}},"width":250,"height":200,"resume":false,"useHandCursor":true,"id":"6Tbx1WfH7J0_expandinglabel","events":[{"kind":"onclickoutside","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$Expanded","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"object_action","command":"hidecomplete","objRef":{"type":"string","value":"_this"}}]}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","shapemaskId":"","xPos":0,"yPos":0,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":14,"rotateYPos":14,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":29,"bottom":29,"altText":"Marker","pngfb":false,"pr":{"l":"Lib","i":105}},"html5data":{"xPos":-1,"yPos":-1,"width":30,"height":30,"strokewidth":2}},"markerType":"pulse","width":28,"height":28,"resume":true,"useHandCursor":true,"id":"6Tbx1WfH7J0"}],"actionstates":[{"kind":"state","name":"_default","actions":[{"kind":"setobjstate","stateRef":{"type":"string","value":"_default"},"objRef":{"type":"string","value":"6Tbx1WfH7J0"}}],"clickdef":[{"kind":"objref","type":"string","value":"6Tbx1WfH7J0"}]}],"shapemaskId":"","xPos":56,"yPos":262,"tabIndex":11,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":14,"rotateYPos":14,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":6,"scrolling":true,"shuffleLock":false,"width":28,"height":28,"resume":true,"useHandCursor":true,"id":"6Tbx1WfH7J0","actionGroups":{"_show":{"kind":"actiongroup","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6Tbx1WfH7J0_expandinglabel"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6Tbx1WfH7J0"}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"bringtofront","value":{"type":"string","value":"_this"}},{"kind":"object_action","command":"togglecontent","objRef":{"type":"string","value":"6Tbx1WfH7J0_expandinglabel"}},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6pKfFBKr5PJ.5mvqcxzaI5i"}}]},{"kind":"onrollover","actions":[{"kind":"bringtofront","value":{"type":"string","value":"_this"}},{"kind":"object_action","command":"showtitle","objRef":{"type":"string","value":"6Tbx1WfH7J0_expandinglabel"}}]},{"kind":"onrollout","actions":[{"kind":"object_action","command":"hidetitle","objRef":{"type":"string","value":"6Tbx1WfH7J0_expandinglabel"}}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_show"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"txt_6gGmy52N2n0_ReviewShape","id":"01","linkId":"txt_6gGmy52N2n0_ReviewShape","type":"vectortext","altText":"","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":920,"bottom":579,"pngfb":false,"pr":{"l":"Lib","i":784}}}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":9,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":450,"rotateYPos":240,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":920,"bottom":668,"altText":"","pngfb":false,"pr":{"l":"Lib","i":715}},"html5data":{"xPos":1,"yPos":1,"width":918,"height":666,"strokewidth":1}},"width":900,"height":480,"resume":false,"useHandCursor":true,"id":"6gGmy52N2n0_ReviewShape"}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');