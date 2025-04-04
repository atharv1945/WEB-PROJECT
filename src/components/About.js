import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Muffled Music</h1>
      
      <div className="mb-8">
        <p className="text-lg mb-4">
          At Muffled Music, we are passionate about delivering top-tier audio experiences. 
          Our mission is to provide high-quality headphones that redefine how you listen to music. 
          With a keen focus on innovation, design, and sound precision, our products ensure an 
          immersive and noise-free listening journey.
        </p>
      </div>

      <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
      <div className="grid gap-4">
        <div className="flex items-start">
          <span className="mr-2">🎧</span>
          <p><strong>Superior Sound Quality</strong> – Experience crystal-clear audio with deep bass and rich tones.</p>
        </div>
        <div className="flex items-start">
          <span className="mr-2">🔇</span>
          <p><strong>Advanced Noise Cancellation</strong> – Block out distractions and dive into pure music.</p>
        </div>
        <div className="flex items-start">
          <span className="mr-2">💡</span>
          <p><strong>Innovative Design</strong> – Stylish, comfortable, and built for long hours of use.</p>
        </div>
        <div className="flex items-start">
          <span className="mr-2">🌍</span>
          <p><strong>Global Recognition</strong> – Trusted by audiophiles and music lovers worldwide.</p>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-lg font-semibold">
          Join us on our journey to revolutionize the way you experience sound!
        </p>
      </div>
    </div>
  );
};

export default About; 