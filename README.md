# Burger Builder

## An App which you can order your customized burgers and sent orders to the backend.

Feel free to try yourself and play with the app. url:https://burger-builder-a6e21.web.app/

## Features
✔️ FrontEnd Project (mainly)
✔️ React Framework used for Front-End\
✔️ Firebase used for Back-End & Database\
✔️ Implementing React Hooks, Redux, and other features
✔️ CSS module implemented
✔️ Light Clean Codes\
✔️ Fully Responsive\
✔️ Valid HTML5 & CSS3

---
## Getting Started 🚀

When you reach the frontpage you have to signin for further use. It can then redirect to the builder page and start to build you own burger. Orders will be stored in the Firebase Database. you can always revisit the orders in the order page to see the past orders.

## Why React?

This project is mainly my second React project, and it has only a purpose to improve the understanding of React framework. React is a widely use framework and has a huge Ecosystem, active community, and high performance. It helps developers to be easier to manage UI states across entire application, and focus on the business logics.

## Redux review

This project utilize redux. Redux is a central state management for the entire app. It gives a place (store) to store the state and can be extract by all components in the app. It can avoid the use of property chain for nested child components from a parent component to pass state as props to them. Since redux can take care of actions and states in a central place, we don't have to manage states in seperate components, and can stick to use more stateless components.

# React Hooks

This is a new feature React team just provide in 16.8. It's the main practice knowledge for this project. React Hooks simply uses functional components. In the past if we need to manage state or use lifecycle hooks, we have to use class-based components. For React hooks we can manage state by using `useState()` hook, and to do lfecycle hooks use `useEffect()` hook for some funcitons with side effects (e.g. http request). This allow use to have more clean codes, and easy to manage states within the components.