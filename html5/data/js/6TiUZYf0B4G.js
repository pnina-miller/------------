﻿window.globalProvideData('slide', '{"title":"תרגול","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":9,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide9","width":960,"height":540,"resume":false,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0x179F81","alpha":100,"stop":0}]}},"id":"6TiUZYf0B4G","actionGroups":{"ActGrpOnNextButtonClick":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6pKfFBKr5PJ.5d9nCaHK8vR"}}]},"ActGrpOnPrevButtonClick":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]},"ReviewInt_6RFbusBTdIk":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6oh8PMZDqW2"},"enabled":{"type":"boolean","value":false}}]},"ReviewIntCorrectIncorrect_6RFbusBTdIk":{"kind":"actiongroup","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6RFbusBTdIk_ReviewShape"}}]},"AnsweredInt_6RFbusBTdIk":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6RFbusBTdIk"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"DisableChoices_6RFbusBTdIk":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6oh8PMZDqW2"},"enabled":{"type":"boolean","value":false}}]},"6RFbusBTdIk_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6PqwAFAjde3.$Status","typea":"property","valueb":"correct","typeb":"string"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6RFbusBTdIk"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6PqwAFAjde3.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6PqwAFAjde3.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6RFbusBTdIk"}]}]}]}]},"NavigationRestrictionNextSlide_6TiUZYf0B4G":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnNextButtonClick"}]},"NavigationRestrictionPreviousSlide_6TiUZYf0B4G":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnPrevButtonClick"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6RFbusBTdIk","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.5d9nCaHK8vR"}}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6RFbusBTdIk","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.5d9nCaHK8vR"}}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6TiUZYf0B4G"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6TiUZYf0B4G"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_5wXLeWMTABt","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5wXLeWMTABt","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"exe_actiongroup","id":"6RFbusBTdIk_CheckAnswered"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6AfI8DEp95L"}},{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"6RFbusBTdIk_ReviewShape"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6oh8PMZDqW2"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6T3FceK0aXx"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5lIWkXoaiFT"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5xah2Ej39nY"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6qg8U69obfz"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"5XTTr0V2UnZ_1781894944","id":"01","linkId":"txt__default_6AfI8DEp95L","type":"acctext","xPos":9,"yPos":50,"xAccOffset":9,"yAccOffset":50,"width":414,"height":170,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"היו אלו המורות שהתלוננו.","style":{"fontFamily":"\\"Comix No2 CLM Charset0_55D5A887\\",\\"Comix No2 CLM\\"","fontSize":28,"foregroundColor":"#000000","linkColor":"#000000","ascent":29.021,"descent":12.487,"leading":0,"underlinePosition":-3.883,"underlineThickness":1.549,"xHeight":14.109}}],"style":{"flowDirection":"rightToLeft","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","lineSpacingRule":"multiple","lineSpacing":21,"spacingBefore":0,"spacingAfter":8,"listStyle":{"listType":"none","listTypeFormat":"parentheses","size":100,"bulletFont":"Arial"},"tagType":"P"},"runs":[{"idx":0,"len":24,"flowDirection":"rightToLeft","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Rubik","fontSize":14,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#FDD409","linkColor":"#FFFFFF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":398,"bottom":93,"pngfb":false,"pr":{"l":"Lib","i":728}}},{"kind":"textdata","uniqueId":"6IQaC7TZQZY_-1356524174","id":"02","linkId":"txt_תשובה נכונה_6AfI8DEp95L","type":"acctext","xPos":9,"yPos":50,"xAccOffset":17,"yAccOffset":50,"width":414,"height":170,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"המורות הן שהתלוננו.","style":{"fontFamily":"\\"Comix No2 CLM Charset0_55D5A887\\",\\"Comix No2 CLM\\"","fontSize":28,"foregroundColor":"#000000","linkColor":"#000000","ascent":29.021,"descent":12.487,"leading":0,"underlinePosition":-3.883,"underlineThickness":1.549,"xHeight":14.109}}],"style":{"flowDirection":"rightToLeft","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","lineSpacingRule":"multiple","lineSpacing":21,"spacingBefore":0,"spacingAfter":8,"listStyle":{"listType":"none","listTypeFormat":"parentheses","size":100,"bulletFont":"Arial"},"tagType":"P"},"runs":[{"idx":0,"len":19,"flowDirection":"rightToLeft","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Rubik","fontSize":14,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#FDD409","linkColor":"#FFFFFF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":364,"bottom":93,"pngfb":false,"pr":{"l":"Lib","i":729}}}],"shapemaskId":"","xPos":272,"yPos":158,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":216,"rotateYPos":112,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-3,"top":-3,"right":434,"bottom":226,"altText":"היו אלו המורות שהתלוננו.","pngfb":false,"pr":{"l":"Lib","i":726}},"html5data":{"xPos":-3,"yPos":-3,"width":437,"height":229,"strokewidth":4}},"states":[{"kind":"state","name":"תשובה נכונה","data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":-3,"right":442,"bottom":226,"altText":"המורות הן שהתלוננו.","pngfb":false,"pr":{"l":"Lib","i":727}},"html5data":{"xPos":0,"yPos":-3,"width":442,"height":229,"strokewidth":4}}}],"width":432,"height":224,"resume":false,"useHandCursor":true,"id":"6AfI8DEp95L","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]}},"events":[{"kind":"onrelease","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#המורות","typea":"var","valueb":true,"typeb":"boolean"}]}]}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_this.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_this"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_this.#_state","typea":"var","valueb":"תשובה נכונה","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"_this.ActGrpClearStateVars"},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}],"elseActions":[{"kind":"adjustvar","variable":"_this._state","operator":"set","value":{"type":"string","value":"תשובה נכונה"}},{"kind":"exe_actiongroup","id":"_this.ActGrpClearStateVars"},{"kind":"setobjstate","stateRef":{"type":"string","value":"תשובה נכונה"},"objRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"or","statements":[{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#TextEntry9","typea":"var","valueb":"המורות הן שהתלוננו","typeb":"string"}]},{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#TextEntry9","typea":"var","valueb":"המורות הן שהתלוננו.","typeb":"string"}]}]}]}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5xah2Ej39nY.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.5xah2Ej39nY"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5xah2Ej39nY.#_state","typea":"var","valueb":"תשובה נכונה","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"_parent.5xah2Ej39nY.ActGrpClearStateVars"},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5xah2Ej39nY"}}],"elseActions":[{"kind":"adjustvar","variable":"_parent.5xah2Ej39nY._state","operator":"set","value":{"type":"string","value":"תשובה נכונה"}},{"kind":"exe_actiongroup","id":"_parent.5xah2Ej39nY.ActGrpClearStateVars"},{"kind":"setobjstate","stateRef":{"type":"string","value":"תשובה נכונה"},"objRef":{"type":"string","value":"_parent.5xah2Ej39nY"}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5xah2Ej39nY"}}]}]},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"and","statements":[{"kind":"compare","operator":"noteq","valuea":"_parent.5xah2Ej39nY.#_state","typea":"var","valueb":"תשובה נכונה","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.#המורות","typea":"var","valueb":true,"typeb":"boolean"}]}]}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5lIWkXoaiFT.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.5lIWkXoaiFT"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5lIWkXoaiFT.#_state","typea":"var","valueb":"תשובה שגויה","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"_parent.5lIWkXoaiFT.ActGrpClearStateVars"},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5lIWkXoaiFT"}}],"elseActions":[{"kind":"adjustvar","variable":"_parent.5lIWkXoaiFT._state","operator":"set","value":{"type":"string","value":"תשובה שגויה"}},{"kind":"exe_actiongroup","id":"_parent.5lIWkXoaiFT.ActGrpClearStateVars"},{"kind":"setobjstate","stateRef":{"type":"string","value":"תשובה שגויה"},"objRef":{"type":"string","value":"_parent.5lIWkXoaiFT"}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5lIWkXoaiFT"}}]}]}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"textinput","bindto":"_player.TextEntry9","align":"center","verticalAlign":"center","rtl":true,"numeric":false,"multiline":true,"maxchars":0,"placeholder":"הקלידו כאן את המשפט מתוקן  ואחר כך לחצו על הכרטיס לבדיקת תשובתכם \\n","fontsize":25,"textcolor":"0x000000","bold":false,"italic":false,"font":"Rubik Charset0_v8wz5YIGD35F1C54","marginleft":9,"marginright":9,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":64,"yPos":446,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":428,"rotateYPos":31,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"6oh8PMZDqW2","linkId":"","type":"vectortext","xPos":9,"yPos":4,"xAccOffset":0,"yAccOffset":0,"width":838,"height":62,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":725,"bottom":25,"pngfb":false,"pr":{"l":"Lib","i":731}}},"html5data":{"xPos":0,"yPos":0,"width":856,"height":62,"strokewidth":0}},"width":856,"height":62,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":0,"top":0,"right":856,"bottom":62,"altText":"הקלידו כאן את המשפט מתוקן  ואחר כך לחצו על הכרטיס לבדיקת תשובתכם \\n","pngfb":false,"pr":{"l":"Lib","i":730}}},"id":"6oh8PMZDqW2","events":[{"kind":"onlosefocus","actions":[{"kind":"adjustvar","variable":"_player.TextEntry9","operator":"set","value":{"type":"property","value":"$Text"}}]},{"kind":"onrelease","actions":[{"kind":"adjustvar","variable":"_player.המורות","operator":"set","value":{"type":"boolean","value":true}}]},{"kind":"onkeypress","keycode":13,"shift":false,"ctrl":false,"alt":false,"actions":[{"kind":"eval_interaction","id":"_parent.6PqwAFAjde3"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6T3FceK0aXx_-35674248","id":"01","linkId":"txt__default_6T3FceK0aXx","type":"acctext","xPos":9,"yPos":4,"xAccOffset":9,"yAccOffset":4,"width":182,"height":89,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"1 / 5","style":{"fontFamily":"\\"Comix No2 CLM Charset0_55D5A887\\",\\"Comix No2 CLM\\"","fontSize":60,"ascent":62.188,"descent":26.758,"leading":0,"underlinePosition":-8.32,"underlineThickness":3.32,"xHeight":30.234}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":5,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Rubik","fontSize":14,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#FFFFFF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":157,"bottom":93,"pngfb":false,"pr":{"l":"Lib","i":733}}}],"shapemaskId":"","xPos":408,"yPos":30,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":100,"rotateYPos":48.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":200,"bottom":97,"altText":"1 / 5","pngfb":false,"pr":{"l":"Lib","i":732}},"html5data":{"xPos":0,"yPos":0,"width":200,"height":97,"strokewidth":0}},"width":200,"height":97,"resume":false,"useHandCursor":true,"id":"6T3FceK0aXx"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":210,"id":"01","url":"story_content/5vcWUJnuHe9_FFFFFF_P_0_702_566_566.png","type":"normal","altText":"Set of Hand Drawn Check Marks And Crosses.jpg","width":566,"height":566,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":760,"yPos":430,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":24,"rotateYPos":24,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":48,"bottom":48,"altText":"Set of Hand Drawn Check Marks And Crosses.jpg","pngfb":false,"pr":{"l":"Lib","i":11}},"html5data":{"xPos":0,"yPos":0,"width":48,"height":48,"strokewidth":0}},"states":[{"kind":"state","name":"תשובה שגויה","data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":144,"bottom":70,"altText":"Set of Hand Drawn Check Marks And Crosses.jpg","pngfb":false,"pr":{"l":"Lib","i":734}},"html5data":{"xPos":0,"yPos":0,"width":144,"height":70,"strokewidth":0}}}],"width":48,"height":48,"resume":false,"useHandCursor":true,"id":"5lIWkXoaiFT","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":211,"id":"01","url":"story_content/5vcWUJnuHe9_FFFFFF_P_0_136_566_566.png","type":"normal","altText":"Set of Hand Drawn Check Marks And Crosses.jpg","width":566,"height":566,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":832,"yPos":382,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":24,"rotateYPos":24,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":48,"bottom":48,"altText":"Set of Hand Drawn Check Marks And Crosses.jpg","pngfb":false,"pr":{"l":"Lib","i":11}},"html5data":{"xPos":0,"yPos":0,"width":48,"height":48,"strokewidth":0}},"states":[{"kind":"state","name":"תשובה נכונה","data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":80,"bottom":118,"altText":"Set of Hand Drawn Check Marks And Crosses.jpg","pngfb":false,"pr":{"l":"Lib","i":735}},"html5data":{"xPos":0,"yPos":0,"width":80,"height":118,"strokewidth":0}}}],"width":48,"height":48,"resume":false,"useHandCursor":true,"id":"5xah2Ej39nY","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"stategroup","objects":[{"kind":"expandinglabel","animationtype":"full","showclosebutton":false,"contentheight":0,"borderwidth":0,"arrowxpos":0,"arrowypos":218,"shapemaskId":"","xPos":14,"yPos":-204,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":0,"rotateYPos":0,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"colors":[{"kind":"color","name":"border","fill":{"type":"linear","rotation":0,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":0,"stop":0}]}},{"kind":"color","name":"bg","fill":{"type":"linear","rotation":0,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":0,"stop":0}]}}],"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":0,"bottom":0,"pngfb":false,"pr":{"l":"Lib","i":28}},"html5data":{"xPos":0,"yPos":0,"width":0,"height":0,"strokewidth":0}},"width":250,"height":200,"resume":false,"useHandCursor":true,"id":"6qg8U69obfz_expandinglabel","events":[{"kind":"onclickoutside","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$Expanded","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"object_action","command":"hidecomplete","objRef":{"type":"string","value":"_this"}}]}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","shapemaskId":"","xPos":0,"yPos":0,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":14,"rotateYPos":14,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":29,"bottom":29,"altText":"Marker","pngfb":false,"pr":{"l":"Lib","i":183}},"html5data":{"xPos":-1,"yPos":-1,"width":30,"height":30,"strokewidth":2}},"markerType":"pulse","width":28,"height":28,"resume":false,"useHandCursor":true,"id":"6qg8U69obfz"}],"actionstates":[{"kind":"state","name":"_default","actions":[{"kind":"setobjstate","stateRef":{"type":"string","value":"_default"},"objRef":{"type":"string","value":"6qg8U69obfz"}}],"clickdef":[{"kind":"objref","type":"string","value":"6qg8U69obfz"}]}],"shapemaskId":"","xPos":56,"yPos":262,"tabIndex":9,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":14,"rotateYPos":14,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":6,"scrolling":true,"shuffleLock":false,"width":28,"height":28,"resume":false,"useHandCursor":true,"id":"6qg8U69obfz","actionGroups":{"_show":{"kind":"actiongroup","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6qg8U69obfz_expandinglabel"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6qg8U69obfz"}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"bringtofront","value":{"type":"string","value":"_this"}},{"kind":"object_action","command":"togglecontent","objRef":{"type":"string","value":"6qg8U69obfz_expandinglabel"}},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6pKfFBKr5PJ.5d9nCaHK8vR"}}]},{"kind":"onrollover","actions":[{"kind":"bringtofront","value":{"type":"string","value":"_this"}},{"kind":"object_action","command":"showtitle","objRef":{"type":"string","value":"6qg8U69obfz_expandinglabel"}}]},{"kind":"onrollout","actions":[{"kind":"object_action","command":"hidetitle","objRef":{"type":"string","value":"6qg8U69obfz_expandinglabel"}}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_show"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"txt_6RFbusBTdIk_ReviewShape","id":"01","linkId":"txt_6RFbusBTdIk_ReviewShape","type":"vectortext","altText":"","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":920,"bottom":579,"pngfb":false,"pr":{"l":"Lib","i":737}}}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":8,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":450,"rotateYPos":240,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":920,"bottom":612,"altText":"","pngfb":false,"pr":{"l":"Lib","i":736}},"html5data":{"xPos":1,"yPos":1,"width":918,"height":610,"strokewidth":1}},"width":900,"height":480,"resume":false,"useHandCursor":true,"id":"6RFbusBTdIk_ReviewShape"}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":false,"kind":"slidelayer","isBaseLayer":true}]}');