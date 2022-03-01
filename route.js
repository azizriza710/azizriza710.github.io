window.onload = function() {
    console.log("Router ada")

    var Router = function(name, routes) {
        return {
            name: name,
            routes: routes
        }
    }

    var myFirstRouter = new Router('myFirstRouter', [
        {
            path: '/',
            name: 'Root'
        },
        {
            path: '/category',
            name: 'Category'
        },
        {
            path: '/about',
            name: 'About'
        }
    ])
    console.log(myFirstRouter)
}