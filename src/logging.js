// Adapted from http://web.mit.edu/6.813/www/sp18/assignments/as1-implementation/logging.js
//
// A simple Google-spreadsheet-based event logging framework.
//
// Add logging.js to your Web App to log standard input and custom events.
//
// This is currently set up to log every mousedown and keydown
// event, as well as any events that might be triggered within
// the app by triggering the 'log' event anywhere in the doc
// as follows:
//
// document.dispatchEvent(new CustomEvent('log', { detail: {
//   eventName: 'myevent',
//   info: {key1: val1, key2: val2}
// }}));

var ENABLE_NETWORK_LOGGING = true; // Controls network logging.
var ENABLE_CONSOLE_LOGGING = true; // Controls console logging.
var LOG_VERSION = '0.1';           // Labels every entry with version: "0.1".

var TIME_LIMIT_EXCEEDED = 60;

// These event types are intercepted for logging before jQuery handlers.
var EVENT_TYPES_TO_LOG = {
  mousedown: true,
  keydown: true
};

// These event properties are copied to the log if present.
var EVENT_PROPERTIES_TO_LOG = {
  which: true,
  pageX: true,
  pageY: true
};

// This function is called to record some global state on each event.
var GLOBAL_STATE_TO_LOG = function() {
  return {
  };
};

var loggingjs = (function() { // Immediately-Invoked Function Expression (IIFE); ref: http://benalman.com/news/2010/11/immediately-invoked-function-expression/

var startTime = 0;

var startPoint = "";
var checkPoint = "";
var flags = {};
var actions = 0;

var acceptablePaths = {
	"malaysian": ["home", "ramen"],
	"burgers": ["home", "steakhouse"],
	"mediterranean": ["home", "noodles"],
};

// A persistent unique id for the user.
var uid = getUniqueId();

// Hooks up all the event listeners.
function hookEventsToLog() {
  // Set up low-level event capturing.  This intercepts all
  // native events before they bubble, so we log the state
  // *before* normal event processing.
  for (var event_type in EVENT_TYPES_TO_LOG) {
    document.addEventListener(event_type, () => {actions += 1;});
  }
}

// Returns a CSS selector that is descriptive of
// the element, for example, "td.left div" for
// a class-less div within a td of class "left".
function elementDesc(elt) {
  if (elt == document) {
    return 'document';
  } else if (elt == window) {
    return 'window';
  }
  function descArray(elt) {
    var desc = [elt.tagName.toLowerCase()];
    if (elt.id) {
      desc.push('#' + elt.id);
    }
    for (var j = 0; j < elt.classList.length; j++) {
      desc.push('.' + elt.classList[j]);
    }
    return desc;
  }
  var desc = [];
  while (elt && desc.length <= 1) {
    var desc2 = descArray(elt);
    if (desc.length == 0) {
      desc = desc2;
    } else if (desc2.length > 1) {
      desc2.push(' ', desc[0]);
      desc = desc2;
    }
    elt = elt.parentElement;
  }
  return desc.join('');
}

// Parse user agent string by looking for recognized substring.
function findFirstString(str, choices) {
  for (var j = 0; j < choices.length; j++) {
    if (str.indexOf(choices[j]) >= 0) {
      return choices[j];
    }
  }
  return '?';
}

// Generates or remembers a somewhat-unique ID with distilled user-agent info.
function getUniqueId() {
  if (!('uid' in localStorage)) {
    var browser = findFirstString(navigator.userAgent, [
      'Seamonkey', 'Firefox', 'Chromium', 'Chrome', 'Safari', 'OPR', 'Opera',
      'Edge', 'MSIE', 'Blink', 'Webkit', 'Gecko', 'Trident', 'Mozilla']);
    var os = findFirstString(navigator.userAgent, [
      'Android', 'iOS', 'Symbian', 'Blackberry', 'Windows Phone', 'Windows',
      'OS X', 'Linux', 'iOS', 'CrOS']).replace(/ /g, '_');
    var unique = ('' + Math.random()).substr(2);
    localStorage['uid'] = os + '-' + browser + '-' + unique;
  }
  return localStorage['uid'];
}

function sendTimeReport(event, customName, customInfo) {
  if (ENABLE_NETWORK_LOGGING) {
    sendTimeLog(customInfo.info.uuid, customInfo.info.time, customInfo.info.fromTo, customInfo.info.metadata);
  }
}

function sendErrorReport(event, customName, customInfo) {
  if (ENABLE_NETWORK_LOGGING) {
    sendErrorLog(customInfo.info.uuid, customInfo.info.actions, customInfo.info.fromTo, customInfo.info.metadata);
  }
}

function setStart(name) {
	console.log(name)
	if (Date.now() / 1000 - startTime > TIME_LIMIT_EXCEEDED) {
		startPoint = "";
		checkPoint = "";
		flags = {};
		
		startTime = Date.now() / 1000;
		startPoint = name;
		flags[name] = true;
	}
}

function setCheckpoint(checkpoint){
	console.log(checkpoint)
	checkPoint = checkpoint;
	flags[checkpoint] = true;
}

function setEnd(endPoint){
	console.log(endPoint)
	console.log(flags)
	
	if (!(endPoint in acceptablePaths)) {
		return;
	}
	
	for (var requiredPoint of acceptablePaths[endPoint]) {
		if (!(requiredPoint in flags)) {
			return;
		}
	}
	
	sendTimeReport(null, 'timeEvent', {
		eventName: 'time',
		info: {'uuid': getUniqueId(), 'time': Date.now() / 1000 - startTime, 'fromTo': startPoint + '-' + checkPoint + '-' + endPoint, 'metadata': '???'}
	});
	
	sendErrorReport(null, 'errorEvent', {
		eventName: 'error',
		info: {'uuid': getUniqueId(), 'actions': actions, 'fromTo': startPoint + '-' + checkPoint + '-' + endPoint, 'metadata': '???'}
	});
	startPoint = "";
	checkPoint = "";
	flags = {};
	actions = 0;
}

// OK, go.
if (ENABLE_NETWORK_LOGGING) {
  hookEventsToLog();
}

// module pattern to allow some key functions to be "public"
return {
	setStart,
	setCheckpoint,
	setEnd
};

}());

/////////////////////////////////////////////////////////////////////////////
// CHANGE ME:
// ** Replace the function below by substituting your own google form. **
/////////////////////////////////////////////////////////////////////////////
//
// 1. Create a Google form called "Network Log" at forms.google.com.
// 2. Set it up to have several "short answer" questions; here we assume
//    seven questions: uid, time, eventName, target, info, state, version.
// 3. Run googlesender.py to make a javascript
//    function that submits records directly to the form.
// 4. Put that function in here, and replace the current sendNetworkLog
//    so that your version is called to log events to your form.
//
// For example, the following code was written as follows:
// python googlesender.py https://docs.google.com/forms/d/e/1.../viewform
//
// This preocess changes the ids below to direct your data into your own
// form and spreadsheet. The formid must be customized, and also the form
// field names such as "entry.1291686978" must be matched to your form.
// (The numerical field names for a Google form can be found by inspecting
// the form input fields.) This can be done manually, but since this is an
// error-prone process, it can be easier to use googlesender.py.
//
/////////////////////////////////////////////////////////////////////////////

function sendTimeLog(
	uuid,
    time,
	fromTo,
	metadata) {
  var formid = "e/1FAIpQLSewCG12btr9kmyq4l4DrN-YqRCy2vXNS3ZKo8qCcy0lQuImOg";
  var data = {
    "entry.2067891172": uuid,
    "entry.1800144242": time,
    "entry.1325594305": fromTo,
    "entry.1035910747": metadata
  };
  var params = [];
  for (var key in data) {
    params.push(key + "=" + encodeURIComponent(data[key]));
  }
  // Submit the form using an image to avoid CORS warnings; warning may still happen, but log will be sent. Go check result in Google Form
  (new Image).src = "https://docs.google.com/forms/d/" + formid +
     "/formResponse?" + params.join("&");
}

function sendErrorLog(
	uuid,
    meaningfulactions,
	fromto,
	metadata) {
  var formid = "e/1FAIpQLSdo19mYRtXUNVKYdIFwVzrqgIVTScMI6KUFW7bFV8el_1SbEA";
  var data = {
		"entry.279425833": uuid,
		"entry.1302541332": meaningfulactions,
		"entry.1826990510": fromto,
		"entry.7910104": metadata
  };
  var params = [];
  for (var key in data) {
    params.push(key + "=" + encodeURIComponent(data[key]));
  }
  // Submit the form using an image to avoid CORS warnings; warning may still happen, but log will be sent. Go check result in Google Form
  (new Image).src = "https://docs.google.com/forms/d/" + formid +
     "/formResponse?" + params.join("&");
}

export default loggingjs;