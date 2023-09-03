import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="Generative Pre-trained Transformer 3, is a state-of-the-art artificial intelligence language model developed by OpenAI. It is the third iteration of the GPT series and represents a significant advancement in natural language processing and understanding. GPT-3 is built upon a deep neural network architecture known as a transformer, which is designed to process and generate human-like text." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Your digital sidekick for all things information. Turning FAQs into ASAPs." />
      <Feature title="Knowledgebase" text="Navigate the Sea of Information. Elevate Your Expertise with Our Comprehensive Knowledgebase." />
      <Feature title="Education" text="Elevate Education with GPT-3: Where Learning Meets Limitless Possibilities!" />
    </div>
  </div>
);

export default WhatGPT3;
