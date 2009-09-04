/**
 * Copyright (C) 2009 Orbeon, Inc.
 *
 * This program is free software; you can redistribute it and/or modify it under the terms of the
 * GNU Lesser General Public License as published by the Free Software Foundation; either version
 * 2.1 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Lesser General Public License for more details.
 *
 * The full text of the license is available at http://www.gnu.org/copyleft/lesser.html
 */
YAHOO.tool.TestRunner.add(new YAHOO.tool.TestCase({

    name: "datatable"

/*
    getDl: function() {
        return YAHOO.util.Dom.getElementsByClassName("xbl-fr-accordion-dl")[0];
    },
    getDts: function() {
        return YAHOO.util.Dom.getElementsByClassName("a-m-t", null, this.getDl());
    },
    getDds: function() {
        return YAHOO.util.Dom.getElementsByClassName("a-m-d", null, this.getDl());
    },
    checkIsOpened: function(position, opened) {
        YAHOO.util.Assert.areEqual(YAHOO.util.Dom.hasClass(this.getDts()[position - 1], "a-m-t-expand"), opened);
        YAHOO.util.Assert.areEqual(YAHOO.util.Dom.hasClass(this.getDds()[position - 1], "a-m-d-expand"), opened);
    },
    testInitiallyOpen: function() {
        this.checkIsOpened(1, false);
        this.checkIsOpened(2, true);
        this.checkIsOpened(5, true);
    },
    testOpenAll: function() {
        ORBEON.util.Test.executeCausingAjaxRequest(this, function() {
            YAHOO.util.UserAction.click(YAHOO.util.Dom.get("open-all"));
        }, function() {
            this.wait(function() {
                this.checkIsOpened(1, true);
                this.checkIsOpened(2, true);
                this.checkIsOpened(5, true);
            }, 500);
        });
    },
    testCloseAll: function() {
        ORBEON.util.Test.executeCausingAjaxRequest(this, function() {
            YAHOO.util.UserAction.click(YAHOO.util.Dom.get("close-all"));
        }, function() {
            this.wait(function() {
                this.checkIsOpened(1, false);
                this.checkIsOpened(2, false);
                this.checkIsOpened(5, false);
            }, 500);
        });
    },
    testOpenThird: function() {
        ORBEON.util.Test.executeCausingAjaxRequest(this, function() {
            YAHOO.util.UserAction.click(YAHOO.util.Dom.get("open-third"));
        }, function() {
            this.wait(function() {
                this.checkIsOpened(3, true);
            }, 500);
        });
    },
    testCloseThird: function() {
        ORBEON.util.Test.executeCausingAjaxRequest(this, function() {
            YAHOO.util.UserAction.click(YAHOO.util.Dom.get("close-third"));
        }, function() {
            this.wait(function() {
                this.checkIsOpened(3, false);
            }, 500);
        });
    },
    testOpenStates: function() {
        ORBEON.util.Test.executeCausingAjaxRequest(this, function() {
            YAHOO.util.UserAction.click(YAHOO.util.Dom.get("open-states"));
        }, function() {
            this.wait(function() {
                this.checkIsOpened(5, true);
            }, 500);
        });
    },
    testCloseStates: function() {
        ORBEON.util.Test.executeCausingAjaxRequest(this, function() {
            YAHOO.util.UserAction.click(YAHOO.util.Dom.get("close-states"));
        }, function() {
            this.wait(function() {
                this.checkIsOpened(5, false);
            }, 500);
        });
    },
    testAddState: function() {
        ORBEON.util.Test.executeCausingAjaxRequest(this, function() {
            YAHOO.util.Assert.areEqual(8, this.getDts().length);
            YAHOO.util.UserAction.click(YAHOO.util.Dom.get("add-state"));
        }, function() {
            YAHOO.util.Assert.areEqual(9, this.getDts().length);
        });
    },
    testRemoveState: function() {
        ORBEON.util.Test.executeCausingAjaxRequest(this, function() {
            YAHOO.util.UserAction.click(YAHOO.util.Dom.get("remove-state"));
        }, function() {
            YAHOO.util.Assert.areEqual(8, this.getDts().length);
        });
    }
    */
}));

ORBEON.xforms.Events.orbeonLoadedEvent.subscribe(function() {
    if (parent && parent.TestManager) {
        parent.TestManager.load();
    } else {
        new YAHOO.tool.TestLogger();
        YAHOO.tool.TestRunner.run();
    }
});
