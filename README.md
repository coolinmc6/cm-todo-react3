# README

The goal of this app is to create a slightly more complex todo app with an authentication middleware. View the
[live version here](https://coolinmc6.github.io/cm-todo-react3/).

## Part 1
- Authenticate property in redux state XXX
- Action creator XX
- Header that shows "login" or "logoff" depending on authenticate property XX
  - this requires connecting Header to Redux XX
- Add Header to Router XX
- Clicking on the link changes the property XX
- Authenticate Reducer => changes based on action (return action.payload) XX

## Part 1: Random Notes
- mapStateToProps is returning an object { } with what "authenticated" needs to be; don't just put the key-value
pair
- My AuthenticateReducer is pretty self-explanatory; nothing crazy there
- As is my action creator, authentication; I'm not figuring out any values, I have written my header so that I am
passing the true or false value right to my action creator.
- Instead of mapDispatchToProps, I used the newer and easier method of `import * as actions...` and then passing
"actions" instead to my connect function at the bottom.
- When trying to display the button, I was just trying put the if-else statement in the return parens of the 
render function...don't do that.  Simply write some function that I can call in the return statement `{this.authButton()}`
- When adding an onClick handler, it's looking for a function...so I can't just put `{this.props.authentication(true)}`
I have to put `{() => this.props.authentication(true)}`

## Part 2
- Build Authentication HOC that re-routes user based on authentication
- After all that, I can start building the app...

## Part 2 Notes


