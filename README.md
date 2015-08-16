# Kiwi IRC Extra Styling Options

Used for more dynamic embeds on external sites.

## Installation
Simply host the script and add the URL to config.js
```
conf.client_plugins = [
    "http://oltanis.jpearce.net/kiwi/extras.js"
];
```

### restrict
```
http://web.boostjump.net/?restrict#boostjump
```
Removes all fields but the nickname field, still obeys the channel hash

### no_info
```
http://web.boostjump.net/?no_info&nick=test_?#help
```
Removes all Kiwi IRC related information on the start screen

### large_button
```
http://web.boostjump.net/?no_info&large_button#tf2
```
Expands the start button to full form width

### button=x
```
http://web.boostjump.net/?button=Join%20The%20Chat#esrn
```
Changes the start button text

### title=x
```
http://web.boostjump.net/?title=Login%20to%20the%20chat
```
Changes the title which appears above the nickname field. *Note: this will always change to "Connecting.." when the start button is pressed
