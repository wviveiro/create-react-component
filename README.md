# Create React Component

It creates a library for npm using Creat React App

## How to use it

Download or clone this repository, then build your component!
```
git clone https://github.com/wviveiro/create-react-component.git my-component

cd my-component

npm install

npm start
```

### Tips to build your own component:

1. **package.json** DO NOT FORGET to change the name of your application on `package.json`
1. **Javascript/React code:** All the code present in the folder `src/lib` will be compiled and added to the folder `dist`.<br />
    Your `package.json` has been set with `dist/index.js` as main script.
2. **Your scss files:** All css you need has to be present in the file `src/styles/index.scss`. You can import other scss files in this file if you want to split your code.<br />
    The css will be compiled and added to the folder `dist/styles/index.css`

3. **The Playground:** the playgrond is used to test your component. the files `src/lib/index.jsx` and `src/styles/index.scss` are included in the playground, so you can test your component with `npm start`

4. **Building my component:** Start editing your `src/lib/index.jsx` and `src/styles/index.scss` to build your component! Once your finish, run `npm run build` to compile your component.

You can publish this entire project. The **development** dependencies are ignored through `.gitignore` and `.npmignore`

Happy hack!
