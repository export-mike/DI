# Super Tiny Destructuring Dependency Injection

What is it?

> dependency injection is a technique whereby one object supplies the dependencies of another object. A dependency is an object that can be used (a service). An injection is the passing of a dependency to a dependent object (a client) that would use it.
> https://en.wikipedia.org/wiki/Dependency_injection

Why?

## Reduce 'Coupling' 
>In software engineering, coupling is the degree of interdependence between software modules; a measure of how closely connected two routines or modules are; the strength of the relationships between modules.
>https://en.wikipedia.org/wiki/Coupling_(computer_programming)
>


Say you are a module that depends on something with a certain shape. You don't care how it works as long as it behaves as expected thats all you care about as a module. When that module changes its implementation details say it changes from being require('a') to require('b') but the exposing interface is the same. To update you are required to update every single place where 'a' is used. 

This is a super tiny implementation that wraps up our modules into containing object which is passed into our consumers.

This is by no means a full implementation in comparision to full DI systems. We can go further with the implementation and allow it to support a graph of dependencies.

This is just an Idea and is more about having a conversation about "decoupled-code".

Clone it and have a play, give feedback, PR's welcome.

