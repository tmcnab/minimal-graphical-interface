The MGI design system predicates itself on the minimal amount of primatives to represent the majority of operations required by a user interfacing with a computer.

This system is predicated on four or more interfaces:
- an output screen that displays a memory buffer
- a touch device that overlays the output screen 
- an independent touch device that moves a pointer on the hardware screen
- a keyboard that inputs characters into a receptive buffer

We also separate the display elements into primatives. These primatives display a particular state in the current user interface.

## 

## Primatives

There are just three primatives that encompass the MGI design system:

- Container
- Content
- Input

### Container

A `Container` arranges items within it. The design of the container is roughly based on the concepts within the [W3C Flexible Box Layout Module Level 1](https://www.w3.org/TR/css-flexbox-1/) specification.

### Content

A `Content` primative displays data of a content type. It displays text, images, video, or whatever can be supported by a driver.

### Input

A `Input` primative is a multi-state display element that is controlled by imput events. When input events happen, they update according to the values.