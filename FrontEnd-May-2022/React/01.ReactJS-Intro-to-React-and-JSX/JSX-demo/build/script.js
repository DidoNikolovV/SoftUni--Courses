var rootElement = document.getElementById('root');
var root = ReactDOM.createRoot(rootElement);

// const reactElement = React.createElement(
//     'header', 
//     {className: 'site-header'},
//     React.createElement('h1', {}, 'Hello From React!!!'),
//     React.createElement('h2', {}, 'React Slogan')
//     );

var reactElement = React.createElement(
    "header",
    { className: "site-header" },
    React.createElement(
        "h1",
        null,
        "Hello from JSX!"
    ),
    React.createElement(
        "h2",
        null,
        "React slogan"
    )
);

root.render(reactElement);