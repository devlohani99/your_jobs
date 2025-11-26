import React from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const details = [
    {
      id: 1,
      title: "1,23,441",
      subTitle: "Live Jobs",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "91,220",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "2,34,200",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "1,03,761",
      subTitle: "Employers",
      icon: <FaUserPlus />,
    },
  ];

  return (
    <>
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative Background Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '200px',
          height: '200px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '150px',
          height: '150px',
          background: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '50%',
          filter: 'blur(30px)'
        }}></div>

        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          padding: '80px 120px 60px',
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
            width: '100%'
          }}>
            {/* Left Content */}
            <div style={{
              color: 'white',
              zIndex: 10
            }}>
              <h1 style={{
                fontSize: '3.5rem',
                fontWeight: '800',
                lineHeight: '1.2',
                marginBottom: '24px',
                textShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
                Find Your Dream Job with{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
                }}>
                  YourJobs
                </span>
              </h1>
              <p style={{
                fontSize: '1.25rem',
                lineHeight: '1.6',
                marginBottom: '32px',
                opacity: '0.95',
                fontWeight: '400'
              }}>
                Discover thousands of job opportunities that match your skills and passions. 
                Connect with top employers and take the next step in your career journey.
              </p>
              
              <div style={{
                display: 'flex',
                gap: '16px',
                marginBottom: '48px'
              }}>
                <Link 
                  to="/job/getall"
                  style={{
                    background: 'white',
                    color: '#667eea',
                    padding: '16px 32px',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '1.1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 16px rgba(255, 255, 255, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 24px rgba(255, 255, 255, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 16px rgba(255, 255, 255, 0.3)';
                  }}
                >
                  Browse Jobs <FaArrowRight />
                </Link>
                
                <Link 
                  to="/job/post"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    padding: '16px 32px',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '1.1rem',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  Post a Job
                </Link>
              </div>
            </div>

            {/* Right Content - Image */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <div style={{
                width: '100%',
                maxWidth: '500px',
                height: '400px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
              }}>
                <img 
                  src="/heroS.jpg" 
                  alt="Find your dream job" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '16px'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          padding: '32px 120px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '40px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {details.map((element) => (
              <div key={element.id} style={{
                text: 'center',
                color: 'white',
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '24px 20px',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              }}>
                <div style={{
                  fontSize: '2rem',
                  marginBottom: '8px',
                  display: 'flex',
                  justifyContent: 'center',
                  color: '#FFD700'
                }}>
                  {element.icon}
                </div>
                <div style={{ textAlign: 'center' }}>
                  <p style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    margin: '0 0 4px 0',
                    color: 'white'
                  }}>
                    {element.title}
                  </p>
                  <p style={{
                    fontSize: '1rem',
                    margin: 0,
                    opacity: '0.8',
                    fontWeight: '500'
                  }}>
                    {element.subTitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
