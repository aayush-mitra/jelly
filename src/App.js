import './App.css';
import { useState } from 'react';
import { GiCandyCanes, GiJellyBeans, GiWrappedSweet } from 'react-icons/gi';

const toDisplayImage = (filename) =>
  filename.replace(/\.(heic|heif)$/i, '.jpg');

function App() {
  const candyIcons = [GiCandyCanes, GiWrappedSweet, GiJellyBeans];

  const cards = [
    {
      id: 1,
      title: "Dear Sundari,",
      note: "Happy Valentine's Day! I love you very much. You are the most beautiful, smart, amazing, funny person in the whole world. I am immensely lucky to have you in my life.",
      img: "favicon.svg"
    },
    {
      id: 2,
      title: "Dear Sundari,",
      note: "Remember when we went to Universal? That was one of the most fun days of my life. I remember going on the Hagrid ride next to you. I hope we can go again together one day.",
      img: "10.HEIC"
    },
    {
      id: 3,
      title: "Dear Sundari,",
      note: "It was so cool when we won TSA together. I really enjoyed getting to experience that with you, and to this day, that project is one of my proudest accomplishments.",
      img: "6.HEIC"
    },
    {
      id: 4, 
      title: "Dear Sundari,",
      note: "Prom was one of the most surreal experiences I've ever had. I got to be King and have the most beautiful girl next to me as Queen. I look at these pictures everyday.",
      img: "15.HEIC"
    },
    {
      id: 5,
      title: "Dear Jelly Jazmin,",
      note: "I look back very fondly on our memories in Kentucky. I loved walking around the city with you, and I remember in those moments I thought I couldn't be happier.",
      img: "5.HEIC"
    },
    {
      id: 6,
      title: "Dear Jelly Jazmin,",
      note: "Skating with you was always my favorite date. I hope you go skating with me again sometime.",
      img: "14.HEIC"
    },
    {
      id: 7,
      title: "Dear Jelly Jazmin,",
      note: "Harvard was really cool. I felt really tired and kind of sick last time when we went out, but I hope we can explore Boston more together and see some of the cool stuff.",
      img: "2.HEIC"
    },
    {
      id: 8,
      title: "Dear Sundari,",
      note: "Please come to Princeton some time. I have lots to show you, the campus, the food, the IAS. Whenever I see something nice here, I always think \"I wish jazmin was here to see this.\"",
      img: "16.HEIC"
    },
    {
      id: 9,
      title: "Dear Sundari,",
      note: "Senior year was my favorite. HAS was kind of boring (I didn't actually do it), but it was fun because you were there. I enjoyed every moment there with you.",
      img: "9.HEIC"
    },
    {
      id: 10,
      title: "Dear Sundari,",
      note: "I really enjoyed being your plane buddy. I always feel a little sad whenever I fly now since you're not with me. I hope we travel the world together so we can fly together.",
      img: "11.JPG"
    },
    {
      id: 11,
      title: "Dear Jelly Jazmin",
      note: "I'm glad I got to be a part of your Quince. That was a really big thing, and I learned a lot about the traditions and I learned how to dance a tiny bit.",
      img: '7.HEIC'
    },
    {
      id: 12,
      title: "Dear Jelly Jazmin",
      note: "Remember when we would go to PAE^2 and just hang out and get Chick-fil-a the whole time? That was super fun and tasty. I miss that a lot. If only Ms. Odoms knew.",
      img: "4.HEIC"
    },
    {
      id: 13,
      title: "Dear Jelly Jazmin",
      note: "I miss the dates we went on in senior year a lot. Those were fun, and it always felt really special going to the movies or out to eat.",
      img: "3.JPG"
    },
    {
      id: 14,
      title: "Dear Sundari,",
      note: "This picture's just cool.",
      img: "1.JPG"
    },
    {
      id: 15,
      title: "Dear Sundari,",
      note: "College Fair in October '24. Who knew where we'd be now?",
      img: "13.HEIC"
    },
    {
      id: 16,
      title: "Dear Sundari,",
      note: "I would sometimes feel really trashy after school. Junior/Senior year was really discouraging sometimes. Getting these from you always brightened my day.",
      img: "12.PNG"
    },
    {
      id: 17,
      title: "Dear Jelly Jazmin,",
      note: "I remember this moment feeling like the happiest moment of my life.",
      img: "8.HEIC"
    },
    {
      id: 18,
      title: "Dear Future Wife,",
      note: "This spot is saved for the future.",
      img: "favicon.svg"
    }
  ]
  

  const [openCards, setOpenCards] = useState(() => Array(cards.length).fill(false));

  const toggleCard = (index) => {
    setOpenCards((prev) =>
      prev.map((isOpen, i) => {
        if (i !== index) {
          return isOpen;
        }
        return !isOpen;
      })
    );
  };

  return (
    <main className="app">
      <header className="hero">
        <h1>Happy Valentine&apos;s Day Sundari</h1>
        <p>Here Are Your Candygrams</p>
      </header>

      <section className="card-list" aria-label="Candygram cards">
        {cards.map((card, index) => {
          const isOpen = openCards[index];
          const skewClass = index % 2 === 0 ? 'tilt-left' : 'tilt-right';
          const hingeClass = index % 2 === 0 ? 'hinge-right' : 'hinge-left';
          const CandyIcon = candyIcons[index % candyIcons.length];

          return (
            <article
              key={card.id}
              className={`candygram ${skewClass} ${hingeClass} ${isOpen ? 'open' : ''}`}
            >
              <div
                role="button"
                tabIndex={0}
                className="card-button"
                onClick={() => toggleCard(index)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    toggleCard(index);
                  }
                }}
                aria-expanded={isOpen}
                aria-label={`Open ${card.title}`}
              >
                <div className="envelope-back" />
                <div className="envelope-flap" />
                <div className="card-inner">
                  <h2>{card.title}</h2>
                  <p>{card.note}</p>
                </div>
                <div className="card-cover">
                  <div className="cover-face cover-front">
                    <div className="cover-overlay-icons" aria-hidden="true">
                      <CandyIcon className="candy-icon candy-icon-main" />
                      <GiWrappedSweet className="candy-icon candy-icon-top" />
                      <GiJellyBeans className="candy-icon candy-icon-bottom" />
                    </div>
                    <div className="cover-front-text">
                      <h2>To: Sundari</h2>
                      <h2>From: Riju</h2>
                      <h4>Send To: Cambridge, MA</h4>
                    </div>
                  </div>
                  <div className="cover-face cover-back">
                    <div className="camera-back">
                      <img
                        className="card-photo"
                        src={`${process.env.PUBLIC_URL}/${toDisplayImage(card.img)}`}
                        alt={card.title}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default App;
