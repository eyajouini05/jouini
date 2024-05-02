import React from 'react';

function TemplateWithTextAndImage() {
  return (
    <div className="template-container">
      <div className="text-container">
        <h1>The Buzz About Face Sculpting</h1>
        <p>Type in the words “gua sha” on TikTok, and videos of people’s transformative face lifts and glowing skin flood the screen. It’s hard to know what to believe. But one thing is for sure: face sculpting does do some holistic, healing good! So, below are some undebated details, history, and how-tos about this buzzy trend.</p>
      </div>
      <div className="image-container" >
        <img src="https://ohlolly.com/cdn/shop/articles/Screenshot_2024-02-12_at_8.54.40_PM.png?v=1707789539&width=600" alt="Example"  style={{ width: '200px', height: 'auto' }} />
       
      </div>
      <div className="text-container">
        <h1>History</h1>
        <p>Gua sha is an ancient East Asian healing practice that is used to intentionally create friction on the skin by scraping the skin’s barrier, in order to stimulate blood flow and immunity in the body. In Chinese tradition, gua translates to “scrape” and sha is believed to mean “sand” – referring to the speckled redness that’s created from blood flow reaching the skin’s surface (known as petechiae). While the studies from a western medical perspective are more limited, gua sha and sculpting have been practiced for centuries in Asian holistic medicine to heal the body (in a similar way to cupping or acupuncture).</p>
      </div>
      <div className="text-container">
        <h1>Types & Benefits</h1>
        <p>The three most popular forms of face sculpting are the gua sha, the face roller, and a facial tool. All three tools improve blood circulation, relieve jaw and facial tension, promote drainage of the lymph nodes, and, in so doing, help reduce inflammation and puffiness in the face.</p>
      </div>
      <div className="image-container" >
        <img src="https://cdn.shopify.com/s/files/1/0980/9700/files/WYLYS_Tools_01d37e63-a293-44a7-bbdc-4efdf041ed88.jpg?v=1707788755" alt="Example"  style={{ width: '300px', height: 'auto' }} />
       
      </div>

      
    </div>
  );
}

export default TemplateWithTextAndImage;
