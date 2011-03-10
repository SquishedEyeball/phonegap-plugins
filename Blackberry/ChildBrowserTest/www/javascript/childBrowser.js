/*
 * childBrowser usage of the plugin:
 *
 *   window.plugins.child_browser.echo(
 *       // argument passed to the native plugin
 *       'Hello PhoneGap',
 *
 *       // success callback
 *       function(response) {
 *           alert(response);
 *       },
 *
 *       // error callback
 *       function(error) {
 *           alert('error: ' + error);
 *       }
 *   );
 */
(function() {
    var childBrowser = function() {
        return {
            showWebPage: function(url, successCallback, errorCallback) {
		try {
	    		var args = new blackberry.invoke.BrowserArguments(url);
	    		blackberry.invoke.invoke(blackberry.invoke.APP_BROWSER, args);
		}
		catch(err) {
			errorCallback(err.description);
			return;
		}
		successCallback();

		// no native code needed.
                //PhoneGap.exec(successCallback, errorCallback, 'childBrowser', 'showWebPage', [ message ]);
            }
        }
    };

    PhoneGap.addConstructor(function() {
        // add plugin to window.plugins
        PhoneGap.addPlugin('childBrowser', new childBrowser());

        // register plugin on native side
	// nothing to register on the native side?
        //phonegap.PluginManager.addPlugin('ChildBrowser', 'com.phonegap.plugins.childBrowser.ChildBrowser');
    });
})();
