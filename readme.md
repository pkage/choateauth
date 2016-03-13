# Choate Authentication with Google Logins

A demonstration of how to use google accounts to verify that the a
user is a member of the choate community. 

It is important that you be logged into your Choate google account
when you get your credentials.

## Setup

Begin by installing [Meteor.js](https://meteor.com/). On sane systems (not Windows), you can run:

```
$ curl https://install.meteor.com/ | sh
```

Next, clone the repository onto your system: 

```
git clone https://github.com/quadnix/choateauth
```

Assuming everything went well, `cd` into the directory and start the meteor server:

```
cd choateauth; meteor
```

Then, follow the instructions in the application to set up your google oauth client credentials.

## Why it works

Choate recently partnered with Google to ~~bail from the trainwreck that is OneDrive~~ ensure that Choate students have access to the best collaborative platform possible. To do this, they laid claim to all accounts that are associated with a **valid** choate address. This means that by using the Google-provided OAuth endpoint, we can verify if a Choate email address is actually valid without directly dealing with Choate's ITS.
