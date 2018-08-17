/*
  Some context on Context:

    React data flows one way, top-down from parent to child via props. You can lift it via passing a method as a prop, but this gets very messy quickly.

    Context is used to provide a global state - called a store. This state is going to be managed by the context itself. This is done by creating a Provider(which provides the state to its children), and a Consumer(which makes it available).

    An optional step is to create Actions as well, but we won't need them in these applications.

    The next step is the Reducer. This is the method that will keep track of your operations on the state and update it as necessary.

    Dispatch + Action:
      Dispatch is the way that our store interacts with the reducer. It is a function that will set its own state based on the result of the reducer.
      Action is an object that holds the information necessary for the reducer to do its job. It will typically have 2 properties: type and payload.
        Type is used to tell the reducer which type of action you want to perform. This is typically and all uppercase and separated by _ like this: DELETE_BOOK, UPDATE_BOOK, ADD_BOOK
        Payload is the item that you want perform the action on.

        So if you have UPDATE_CONTACT as the type and a book as the payload, you will look for the book in the store and update that one book.

        For ADD_BOOK, you will either unshift or append the book to the store

        For DELETE_BOOK, you will remove the book from the store.

      The syntax for the dispatch is as follows:
        Definition:
          dispatch: action => this.setState(state => reducer(state, action))

          Dispatch takes in an action.
          This action is used to set the state
          The state and the action are passed into the reducer
          The result of the reducer is used a parameter for the setState

        Usage:
          dispatch({
            type: 'ADD_BOOK',
            payload: {
              title: '...', price: 0, . . .
            }
          })

    Reducer:
      Very similar to Array.reduce, except for state/store. 

      Performs an action based on the action.type, using a switch statement. Ours will look like this:
          const reducer = (state, action) => {
            switch(action.type){
              case 'ADD_BOOK':
                return {
                  ...state,
                  books: add the action.payload to the beginning or end.
                }
              case 'UPDATE_BOOK':
                return {
                  ...state,
                  books: find the book by the id and update it
                }
              case 'DELETE_BOOK':
                return {
                  ...state,
                  books: find the book and filter it out
                }
              default:
                return state;
            }
          }







    1: Define the need for the context.
      - Don't just mindlessly put everything in there. Local state is still a useful tool, there are just some things that are re-used throughout the application. If you find yourself passing props and lifting state too deeply, it is probably a good idea to consider context. 

    2: Create the context - React.createContext, Provider, and Consumer
      - The Provider holds the global state ~ or Store ~ for our application. It will be rendered as part of our application around the items that need access to the store.
      - Consumer is pre-defined, just declare and export it.

    3a: Ensure that your components can access the store using the Provider and Consumer.
    
    3b: Define the reducer for your context. This is what will allow you to modify the state of your application. 
    
    3c: Define the actions - Again we will not use them as we are only modifying state and not performing any actions on an external server.


*/
