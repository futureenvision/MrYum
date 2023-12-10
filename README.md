# Toy Robot Simulator

### Description

This is a toy robot simulator that can be placed on a 5x5 table and moved around. The robot can be placed, rotated ,moved and report its position.

---

### Installation

1. Clone the repository
2. Run `npm ci` to install dependencies
3. Run `npm start` to start the simulator

### Usage

Modify the `instructions.txt` file to change the commands that the robot will execute then run `npm start` to start the simulator.

The commands are as follows:
- MOVE will move the toy robot one unit forward in the direction it is currently facing.
- LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without changing the position of the robot.
- REPORT will announce the X,Y and F of the robot. This can be in any form, but standard
output is sufficient.

### Example:

```
PLACE 0,0,NORTH
MOVE
REPORT
```

Output: `0,1,NORTH`

### Testing

Run `npm test` to run the tests.