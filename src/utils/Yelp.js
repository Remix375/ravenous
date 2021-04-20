const apiKey = "hsA2tIG_4iZVwWiVz5dUBMZnDThXaJaHnj_L5zOSLLaRaqtYadHKeAc-5xLDHLf5K3lJfT8wGWXA8XvEzlL5n2pfZ8fNmdvCN3emEVSKItjHwL9oulnDlXuDtt1-YHYx"


const Yelp = {
    search: function(term, location, sortBy) {
        const path = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`
        return fetch(path, {headers: {Authorization: `Bearer ${apiKey}`}})
        .then(response => {
            return response.json()
        })
        .then(jsonResponse => {
            if (jsonResponse.hasOwnProperty("businesses")) {
                return jsonResponse.businesses.map(business => {
                    let returnValue = {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1, 
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                    return returnValue
                })
            }
        })
    }
}

export default Yelp;