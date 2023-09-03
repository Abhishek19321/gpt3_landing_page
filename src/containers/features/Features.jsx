import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'GPT-3: Bridging the Gap, Rebuilding Trust, Instantly. Where Trustworthiness Meets Timeliness. Reignite Trust with GPT-3: Your Instant Truth Detector.',
  },
  {
    title: 'Become the tended active',
    text: 'Your Proactive Partner in Innovation - Where Ideas Flourish! Awaken Possibilities with GPT-3: Your Active Ally for Achievement.',
  },
  {
    title: 'AI is future',
    text: 'AI is not just a technology; its the roadmap to the future. Where science fiction meets the futures reality. The future is bright, and its powered by AIs brilliance.',
  },
  {
    title: 'Empowering Youth',
    text: 'Where the Energy of Youth Meets the Intelligence of AI. The Future Belongs to Youth and AI: Unleash the Potential!Together, We Illuminate Tomorrow.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
