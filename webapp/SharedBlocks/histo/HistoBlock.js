sap.ui.define(["sap/ui/core/library", 'sap/uxap/BlockBase'], function (coreLibrary, BlockBase) {
	"use strict";

	var ViewType = coreLibrary.mvc.ViewType;

	var HistoBlock = BlockBase.extend("sap.uxap.sample.SharedBlocks.histo.HistoBlock", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "sap.uxap.sample.SharedBlocks.histo.HistoBlock",
					type: ViewType.XML
				},
				Expanded: {
					viewName: "sap.uxap.sample.SharedBlocks.histo.HistoBlock",
					type: ViewType.XML
				}
			}
		}
	});
	return HistoBlock;
});
