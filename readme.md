# Sythesis

Minor JS set up for DOM manipulation utilizing classes and attributes from html

Currently in jQuery, will be reworked to use vanilla JS.

The 'sythKey' attribute directs where it is routed. The key is passed in like so: 'shrink:width', being split on each ':'. It will go through propertie to value in the order of the given key.

So 'shrink:width' will call Sythesis.controller.shrink.width()

To pass multiple sets of keys, divide them with a '-', such as 'shrink:width-expand:height'

## Vaildity

Validity checks forms for, that's right, valid inputs. Right now it can check validity:password, also validity:required which can pass in :dropdown, :email, :phone, and :name.

This all is mainly an experiment, not meant for use as much for messing around with JS.
