import React, { useState } from 'react';
import './ServicesPage.css';

const ServicesPage = () => {
  const [expandedServices, setExpandedServices] = useState({});

  const toggleService = (serviceName) => {
    setExpandedServices(prev => ({
      ...prev,
      [serviceName]: !prev[serviceName]
    }));
  };

  const services = [
    {
      title: 'CREATIVE',
      items: ['Art direction', 'Creative direction']
    },
    {
      title: 'DESIGN',
      items: [
        'Digital Design',
        'UX/UI Design',
        'Web Design',
        'Graphic Design',
        '3D Design',
        'Interactive Design',
        'Illustration Design',
        'Brand Design'
      ]
    },
    {
      title: 'ANIMATION',
      items: [
        '2D Animation',
        '3D Animation',
        'Motion Graphics',
        'Experimental Animation',
        'Typography Animation'
      ]
    },
    {
      title: 'TECHNOLOGY',
      items: [
        'Development',
        'Implementation',
        'Creative Coding',
        'Prototyping',
        'Quality Assurance',
        'Testing'
      ]
    },
    {
      title: 'PROJECT DELIVERY',
      items: [
        'Production Strategy',
        'Project Management',
        'Team Direction'
      ]
    },
    {
      title: 'EXAMPLE PRODUCTS',
      items: [
        'Social Ads',
        'Websites',
        'AR Filters and Experiences',
        'Display Ads (Html5, Static, Rich media)',
        'Digital Out of Home',
        'Static and Animated Assets',
        'Digital Installations',
        'Design Toolkits'
      ]
    }
  ];

  return (
    <div className="services-page">
      <div className="home__services__content">
        <div className="container">
          {services.map((service) => (
            <div key={service.title} className="service">
              <div className="service__title">
                <div className="row">
                  <div className="col col-2 offset-3">
                    <h3 className="small-title">{service.title}</h3>
                  </div>
                  <div className="col col-1 offset-2">
                    <div className="button-container">
                      <button
                        type="button"
                        className={`service__${expandedServices[service.title] ? 'less' : 'more'}`}
                        onClick={() => toggleService(service.title)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {expandedServices[service.title] && (
                <div className="service__content">
                  {service.items.map((item) => (
                    <div key={item} className="service__content__row">
                      <div className="row">
                        <div className="col col-9 offset-3">
                          <p>{item}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="home__services__contact">
        <div className="container">
          <div className="row">
            <div className="col col-12">
              <p>
                Got a project in mind? Drop us a line at{' '}
                <a href="mailto:hello@thirtysixstudio.com">hello@thirtysixstudio.com</a>
                {' '}or use the form below.
              </p>
              <p>
                Not sure what you need? We're here to help you define the undefined.
                Let's explore all creative and technical possibilities together through
                one of our tailored labs, where we champion future-forward thinking
                within an ethical framework.
              </p>
              <div className="animate-btn">
                <a href="#talk-to-us" className="btn small anchor">
                  <span className="btn__text">TALK TO US</span>
                  <span className="btn__anim"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage; 