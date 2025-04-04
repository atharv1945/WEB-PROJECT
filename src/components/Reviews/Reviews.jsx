import React, { useState } from 'react';
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
  },
  {
    id: 4,
    name: "Emma Wilson",
    rating: 5,
    date: "March 1, 2024",
    title: "Excellent Battery Life",
    content: "I'm amazed by how long these headphones last on a single charge. I can use them for my entire workday without worrying about battery life. The quick charge feature is also very convenient.",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 5,
    name: "David Chen",
    rating: 4,
    date: "February 28, 2024",
    title: "Great for Gaming",
    content: "These headphones work great for gaming! The spatial audio is impressive, and the microphone quality is crystal clear. My teammates can hear me perfectly during intense gaming sessions.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 6,
    name: "Lisa Anderson",
    rating: 5,
    date: "February 25, 2024",
    title: "Perfect for Travel",
    content: "I travel frequently for work, and these headphones are my go-to companion. The noise cancellation makes flights much more bearable, and they're comfortable enough for long-haul flights.",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 7,
    name: "James Wilson",
    rating: 4,
    date: "February 20, 2024",
    title: "Great Value for Money",
    content: "Considering the features and build quality, these headphones offer excellent value for money. The sound quality is comparable to more expensive brands, and the build is solid.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 8,
    name: "Sophie Brown",
    rating: 5,
    date: "February 15, 2024",
    title: "Stylish and Functional",
    content: "Not only do these headphones sound great, but they also look amazing! The design is modern and sleek, and they're comfortable to wear. I get compliments on them all the time.",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 9,
    name: "Alex Thompson",
    rating: 4,
    date: "February 10, 2024",
    title: "Good for Workouts",
    content: "I use these headphones during my workouts, and they stay securely in place. The sweat resistance is a nice feature, and the sound quality motivates me during intense sessions.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Reviews = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedReviews = showAll ? reviews : reviews.slice(0, 6);

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
          {displayedReviews.map((review, index) => (
            <motion.div
              key={review.id}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: index * 0.1 }}
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
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                      <span className="text-gray-400 text-sm">{review.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{review.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">{review.content}</p>
                    <p className="text-sm text-yellow-400 font-medium">- {review.name}</p>
                  </div>
                </div>
              </UpdateFollower>
            </motion.div>
          ))}
        </div>

        {!showAll && reviews.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
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
              <button
                onClick={() => setShowAll(true)}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg"
              >
                Show More Reviews
              </button>
            </UpdateFollower>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Reviews; 