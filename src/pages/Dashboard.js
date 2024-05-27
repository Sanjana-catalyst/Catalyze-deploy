import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Network1 from '../pages/Network1.jpg';
import Network2 from '../pages/Network2.jpg';
import Network3 from '../pages/Network3.jpg';
import Network4 from '../pages/Network4.jpg';
import Podcast1 from '../pages/Podcast1.jpg';
import Podcast2 from '../pages/Podcast2.jpg';
import Podcast3 from '../pages/Podcast3.jpg';
import Podcast4 from '../pages/Podcast4.jpg';
import Hero1 from '../pages/Hero1.jpg';
import Hero2 from '../pages/Hero2.jpg';
import Hero3 from '../pages/Hero3.jpg';
import Hero4 from '../pages/Hero4.jpg';

function Dashboard() {
  const [currentPodcastImage, setCurrentPodcastImage] = useState(Podcast1);
  const [currentNetworkImage, setCurrentNetworkImage] = useState(Network1);
  const [currentHeroImage, setCurrentHeroImage] = useState(Hero1);
  const podcastImages = [Podcast1, Podcast2, Podcast3, Podcast4];
  const networkImages = [Network1, Network2, Network3, Network4];
  const heroImages = [Hero1, Hero2, Hero3, Hero4];

  const delay = 6000; // 3 seconds delay between image changes

  useEffect(() => {
    const podcastInterval = setInterval(() => {
      setCurrentPodcastImage(prevImage => {
        const currentIndex = podcastImages.indexOf(prevImage);
        return podcastImages[(currentIndex + 1) % podcastImages.length];
      });
    }, delay);

    const networkTimeout = setTimeout(() => {
      const networkInterval = setInterval(() => {
        setCurrentNetworkImage(prevImage => {
          const currentIndex = networkImages.indexOf(prevImage);
          return networkImages[(currentIndex + 1) % networkImages.length];
        });
      }, delay);

      return () => clearInterval(networkInterval); // Cleanup function for network interval
    }, 2000); // Start 1 second after podcast interval

    const heroTimeout = setTimeout(() => {
      const heroInterval = setInterval(() => {
        setCurrentHeroImage(prevImage => {
          const currentIndex = heroImages.indexOf(prevImage);
          return heroImages[(currentIndex + 1) % heroImages.length];
        });
      }, delay);

      return () => clearInterval(heroInterval); // Cleanup function for hero interval
    }, 4000); // Start 2 seconds after podcast interval

    return () => {
      clearInterval(podcastInterval);
      clearTimeout(networkTimeout);
      clearTimeout(heroTimeout);
    };
  }, []);

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      
      <h1 className='mt-20 pt-20 ml-4 md:ml-20 text-black text-4xl'>Hi, Akhil</h1>
      <div className='flex flex-col md:flex-row justify-around items-center mt-10 md:mt-20 gap-8 px-4 md:px-20'>
        <a href="http://localhost:3000/Podcast" className="w-full md:w-auto">
          <div className="card w-full md:w-96 h-80 bg-white shadow-xl" style={{ backgroundImage: `url(${currentPodcastImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <button type="button" className="h-full w-full rounded-lg hover:bg-opacity-75">
              <div className="card-body p-4">
                <div className="text-black font-semibold text-2xl absolute top-0 left-0 p-4">
                  Podcast
                </div>
              </div>
            </button>
          </div>
        </a>

        <a href="http://localhost:3000/Networking" className="w-full md:w-auto">
          <div className="card w-full md:w-96 h-80 bg-white shadow-xl" style={{ backgroundImage: `url(${currentNetworkImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <button type="button" className="h-full w-full rounded-lg hover:bg-opacity-75">
              <div className="card-body p-4">
                <div className="text-white font-semibold text-4xl absolute top-0 left-0 p-4">
                  Networking
                </div>
              </div>
            </button>
          </div>
        </a>

        <a href="http://localhost:3000/Hero" className="w-full md:w-auto">
          <div className="card w-full md:w-96 h-80 bg-white shadow-xl" style={{ backgroundImage: `url(${currentHeroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <button type="button" className="h-full w-full rounded-lg hover:bg-opacity-75">
              <div className="card-body p-4">
                <div className="text-white font-semibold text-xl absolute top-0 left-0 p-4">
                  Hero yourself
                </div>
              </div>
            </button>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Dashboard;
