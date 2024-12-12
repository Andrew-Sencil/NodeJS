import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

function greetHandler() {
  console.log("Hello World!");
}

function goodbyHandler() {
  console.log("Goodbye World!");
}

// register eventlisteners
myEmitter.on("greet", greetHandler);
myEmitter.on("goodbye", goodbyHandler);

// Emit events
myEmitter.emit("greet");
myEmitter.emit("goodbye");

// Error handling
myEmitter.on("error", (err) => {
  console.log("An Error Occured: ", err);
});

// Simulate error
myEmitter.emit("error", new Error("Something went wrong"));
