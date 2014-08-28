# README #

UCHAT Ruby is a ruby on rails project for uchat. Nodejs seems to be too new and too many problem with url redirecting. It will be easier to go about just doing it in Rails.

### Checklist for moving over
app/main:

~holder.js~

- tv-show-listing.jade

- ucMainCtrl.js



app/tvshows:

- tvchannel-list.jade

- tvshow-community.jade

- tv-showdetails.jade 

- tvshow-list.jade (similar to: tv-show-listing.jade)

- ucTvshowDetailCtrl.js



app/css:

~home.css~

~tvshow.css~


### What is this repository for? ###

* Quick summary
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

https://gorails.com/setup/ubuntu/14.04#ruby

rake db:create
rails s

### libraries
https://github.com/TigerWolf/beamly
https://github.com/lnussbaum/xmpp4r

### XMPP Tutorial [By Dishank] ###
First include these libraries 
~~~
require 'xmpp4r'
require 'xmpp4r/muc'
require 'xmpp4r/roster'
require 'xmpp4r/client'
~~~

Then create a new Jabber client
~~~
client = Jabber::Client.new(Jabber::JID.new('PUT UNIQUE ID HERE@xmpp.covello.co:6060'))
~~~

Connect to the server
~~~
client.connect
~~~

Register to the server 
~~~
client.register('password')
~~~

Login to the server with existing user
~~~
client.auth('password')
~~~

Muc or multi user chat room
~~~
muc = Jabber::MUC::MUCClient.new(client)
~~~

Joining a room
~~~
muc.join(Jabber::JID::new('UNIQUE_TVSHOW_ID_HERE@conference.xmpp.covello.co:6060')
~~~

Adding callbacks to the client (what to do if you get a message etc.)
~~~
muc.add_join_callback do |m|
  puts "[NEW MEMBER JOINED] " + m.to.jid.node
end

muc.add_message_callback do |m|
  puts "[NEW MESSAGE]" + m.body
end

muc.add_leave_callback do |m|
  puts "[MEMBER LEFT] " + m.to.jid.node
end
~~~

Sending a message to the room
~~~
muc.send(Jabber::Message.new(''chatroom@conference.UNIQUE_TVSHOW_ID_HERE@xmpp.covello.co:6060','MESSAGE HERE'))
~~~

Misc
~~~
see xmpp stanzas
Jabber::debug = true

see roster in room
muc.roster
~~~

## Devise Authentication

#### Checking That a User is Logged In

Add a 'before filter' to the controller you want to protect:
~~~
class ExampleController < ApplicationController
  before_filter :authenticate_user!, except: [:index, :show]

   # Below actions will be omitted
end
~~~

#### Checking If A User Is Authenticated At The View

Use helper method 'user_signed_in?':
~~~
<% if user_signed_in? %>
   # Some logic...
  <% else %>
   # Some logic...
<% end %>
~~~