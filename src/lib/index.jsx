import React from 'react';

const Component = () => {
    return (
        <div className="my-first-component">
            <h2>This is my Component!</h2><hr />
            <p>Hello World! Edit this file to build your own component</p>
            <h4>Tips to build your own component:</h4><hr />
            <ol>
                <li><strong>Javascript/React code:</strong> All the code present in the folder <code>src/lib</code> will be compiled and added to the folder <code>dist</code>.<br />
                    Your <code>package.json</code> has been set with <code>dist/index.js</code> as main script.</li>
                <li><strong>Your scss files:</strong> All css you need has to be present in the file <code>src/styles/index.scss</code>. You can import other scss files in this file if you want to split your code.<br />
                    The css will be compiled and added to the folder <code>dist/styles/index.css</code></li>
                <li><strong>The Playground:</strong> the playgrond is used to test your component. the files <code>src/lib/index.jsx</code> and <code>src/styles/index.scss</code> are included in the playground, so you can test your component with <code>npm start</code></li>
                <li><strong>Building my component:</strong> Start editing your <code>src/lib/index.jsx</code> and <code>src/styles/index.scss</code> to build your component! Once your finish, run <code>npm run build</code> to compile your component.</li>
            </ol>
            <p>You can publish this entire project. The <strong>development</strong> dependencies are ignored through <code>.gitignore</code> and <code>.npmignore</code></p>
            <p>Happy hack!</p>
        </div>
    );
}

export default Component;