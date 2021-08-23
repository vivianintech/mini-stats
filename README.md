


### How to set up a TypeScript project

1. Create project directory `mkdir [projectName]`

2. Generate package.json file `npm init -y`

3. Generate ts.config file `tsc --init`

4. Install nodemon and concurrently `npm install nodemon concurrently`

5. Create `src` folder in the root dir

6. Create `build` folder in the root dir

7. Inside `src` folder, create `index.ts`. This is the root file of the project

8. Inside `ts.config` file, we'll tell it that `src` directory contains all our source code and `build` directory contains the outputs of our compiled code

  "outDir": "./build",
  "rootDir": "./src"

9. Lastly, set up 3 different scripts to build, run and run those 2 commands simultaneously in `package.json`

  - Remove the unnecessary test command
  - Run typescript compiler in watch mode `"start:build": "tsc -w"`
  - Rerun that file everytime we recompile our code `"start:run": "nodemon build/index.js"`
  - npm is telling concurrently to look inside our package.json file and find the script section and then find all the scripts that has a pattern of start `"start": "concurrently npm start:*"`

  *"Node"*