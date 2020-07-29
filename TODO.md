# State (Broad)
* State doesn't reset on signout -> same state is being appended to previous user's view
* Votes aren't being apporopiately posted to server

# Auth
## Frontend
* Need to integrate frontend auth with backend auth via REST
* Need to make basic signup checks -> email already in use, username already in use, passwords match, password(s) are valid
* Deal with sessions and/or local state on client side

## Backend
* Update Sign Up endpoint -> check if username/email/password(s) are valid
* Create sessions/cookies

# UI
* Need to add sidebar with this week's most voted on posts
* Setting Page -> Change username, password, delete account
* Stats Page -> Battls created, posts voted on, winning votes?, total responses


# Overall
* gitignore nodemodules
* hide DB password
* remove unused packages
