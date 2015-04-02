# Sythesis

Minor JS set up for DOM manipulation utilizing classes and attributes from html

Currently in jQuery, will be reworked to use vanilla JS.

The 'sythKey' attribute directs where it is routed. The key is passed in like so: 'validity:required', being split on each ':'. It will go through propertie to value in the order of the given key.

So 'validity:required' will call Sythesis.controller.validity.required()

To pass multiple sets of keys, divide them with a '-', such as 'validity:required-validity:unique'

This is mainly an experiment, hopefully one day being worthy of use.
