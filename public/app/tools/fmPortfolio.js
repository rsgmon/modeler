/**
 * Created by Rye on 1/13/2016.
 */
app.factory('fmPortfolio', function($resource) {
    return {
        portfolioResource : $resource('/api/portfolios/:_id', { _id: "@id" },
            { update: {method:'PUT', isArray: false }})
    };
});