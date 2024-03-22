import React, { useState, useEffect } from 'react';


const Feed = () => {
    const [feedData, setFeedData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI3MTcwNzhiNS1kNTg4LTQ3MjItODE4Mi1jYTZiOWZhMzU1NTMiLCJlbWFpbCI6InBoaWxpcHVzaWhAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjlkYzI3OTdkOTE0YzY0N2YzMjA1Iiwic2NvcGVkS2V5U2VjcmV0IjoiNTZiM2QwNWU0ODhmNjdlYzJhODdjZWQzM2Y2YTY0YmU2MWY2NDJlMmEwZjIwYjE2ODJmYWM0YTk1OWIyY2IwOCIsImlhdCI6MTcxMTEyMDUzNn0.ezs9BMVWNhgoPXuUa3e3IUzbE6sNR9IFiIXC8oHCXvo'; // Replace 'YOUR_API_KEY' with your actual API key
          const response = await fetch('https://api.pinata.cloud/v3/farcaster/users/', {
            headers: {
              'Authorization': `Bearer ${apiKey}`,
              'Content-Type': 'application/json' // Adjust content type if necessary
            }
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setFeedData(data); // Assuming your API response is an array of data
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

  return (
     <div className="container mx-auto h-screen w-full">
      <h1 className="text-3xl font-bold my-8">Feed</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {feedData.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <p className="text-gray-100">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feed
