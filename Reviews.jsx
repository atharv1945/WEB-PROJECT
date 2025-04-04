import React from 'react';
import { motion } from 'framer-motion';
import { UpdateFollower } from 'react-mouse-follower';
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    date: "March 15, 2024",
    title: "Best Wireless Headphones I've Ever Used",
    content: "The Muffled 860-ANC exceeded all my expectations. The noise cancellation is incredible, and the battery life is outstanding. I can use them for hours without any discomfort.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    name: "Sarah Smith",
    rating: 4,
    date: "March 10, 2024",
    title: "Great Sound Quality, Comfortable Design",
    content: "The sound quality is crystal clear, and the bass is just right. The ear cups are super comfortable, even for long listening sessions. The only reason I didn't give it 5 stars is the price point.",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    name: "Mike Johnson",
    rating: 5,
    date: "March 5, 2024",
    title: "Perfect for Professional Use",
    content: "As a music producer, I need headphones that deliver accurate sound. The Muffled 860-ANC provides exactly that. The noise cancellation is a game-changer in the studio.",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Reviews = () => {
  return (
    <section className="bg-brandDark text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Customer Reviews</h1>
          <p className="text-gray-400">Read what our customers have to say about our products</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: index * 0.2 }}
            >
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 999,
                  followSpeed: 1.7,
                  scale: 5,
                  mixBlendMode: "difference",
                }}
              >
                <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
                  <img
                    src={review.image}
                    alt={review.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                      <span className="ml-2 text-gray-400">{review.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{review.title}</h3>
                    <p className="text-gray-400 mb-4">{review.content}</p>
                    <p className="text-sm text-gray-500">- {review.name}</p>
                  </div>
                </div>
              </UpdateFollower>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews; 