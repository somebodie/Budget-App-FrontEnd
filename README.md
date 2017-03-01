## What our app does:
- On the homepage you can create an event, add cost items, and see the budget, but if you want to save the user must login/signup
- allows a user to create a personal account to keep track of multiple event budgets
- when the user logs in, the user can create a new event and must enter starting budget
- on login show event example (which they may delete later)
- the user can add cost for the event and see the updated budget live
- the user can update the cost of an item, and also see the updated budget
- the user can delete cost and see their budget update
- timeline
- the user can delete entire events

## Reach goals
- chat
- share (multiple people manage same account)

## Models

### User: has many budgets through events
- id
- name
- email

### budget: has many items
- id
- current
- max
- min

### item
- id
- name
- cost
- url (where to get)
- foreign key for user budget events

### event
- has budget [foreign key]
<!-- - many items [foreign key]-->
- event has many users [foreign key]

## User stories

#### homepage


#### signup
- user navigates to homepage and clicks on the signup button
- signup modal window appears and user enters name, email, and password to signup
- user is redirected to user page

#### login
- user navigates to homepage and clicks on the login button
- login modal window appears and user enters email and password to login
- user is redirected to user page

#### create new event
-
# Budget-App-API
# Budget-App-FrontEnd
