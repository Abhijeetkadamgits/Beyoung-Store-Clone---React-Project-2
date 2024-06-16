
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Empty from '../image/EmptySearch.gif'
function SearchResult() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const url = `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?search={"name":"${query}"}`;
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'projectID': 'mmvz5wuhf8k7',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setSearchResults(data.data);
      } catch (error) {
        console.error('Error Fetching Data:', error);
        setSearchResults([]);
      } finally {
        setLoading(false); 
      }
    };

    if (query) {
      fetchSearchResults();
    }
  }, [query]);

  return (
    <div className='searchResult-page'>
      <h2>SEARCH RESULTS FOR: {query}</h2>
      <div className="searchResult-section">
        {loading ? (
          <p>Loading...</p>
        ) : searchResults.length > 0 ? (
          <div className="searchResult-container">
            {searchResults.map((item) => (
              <div className="search-product" key={item._id}>
                <Link to={`/details/${item.name}/${item._id}`}>
                  <div className="search-product-img">
                    <img src={item.displayImage} alt={item.name} />
                  </div>
                  <div className="search-product-details">
                    <p>{item.name}</p>
                    <p>₹{item.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-search-result">
              <img src={Empty} alt="" />
              <h2>WE COULDN'T FIND ANY MATCHES</h2>
              <p>Maybe you’ll find the product search differant product:</p>
          </div>
          
        )}
      </div>
    </div>
  );
}

export default SearchResult;
