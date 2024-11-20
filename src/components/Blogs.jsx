import { useState } from 'react';

const blogPosts = [
  {
    title: "How kids think about earth",
    date: "15 Sep 2016",
    likes: 17,
    comments: 4,
    image: "./blog-01.jpg",
    excerpt: "Lorem Ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsumnibh id elit."
  },
  {
    title: "How kids think about earth",
    date: "15 Sep 2016",
    likes: 17,
    comments: 4,
    image: "./blog-02.jpg",
    excerpt: "Lorem Ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsumnibh id elit."
  },
  {
    title: "Standard Post With Preview Image",
    date: "15 Sep 2016",
    likes: 17,
    comments: 4,
    image: "./blog-03.jpg",
    excerpt: "Lorem Ipsum proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsumnibh id elit."
  },
];

function Blog() {
  const [activeBlog, setActiveBlog] = useState(0);

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="text-center space-y-4 mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-black mb-4">LATEST NEWS AND BLOG</h2>
        <p className="text-gray-600">
          Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consec tetuer adipis elit, aliquam eget nibh etlibura.
        </p>
        <div className="mb-6">
          <img
            src="./hdg-01.png"
            alt="Kids Center Milestones"
            className="mx-auto w-40 h-auto object-contain"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
              index === activeBlog ? 'border-4 border-green-500' : ''
            }`}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  {post.likes}
                </div>
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  {post.comments}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">{post.title}</h3>
              <p className="text-gray-600">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-8">
        {blogPosts.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveBlog(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === activeBlog 
                ? 'bg-green-500' 
                : 'bg-gray-300 hover:bg-green-400'
            }`}
            aria-label={`View blog post ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Blog;