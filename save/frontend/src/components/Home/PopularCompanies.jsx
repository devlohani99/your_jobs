import React from "react";
import { FaMicrosoft, FaApple, FaGoogle, FaAmazon, FaFacebook } from "react-icons/fa";
import { SiTesla, SiNetflix, SiSpotify } from "react-icons/si";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "Millennium City Centre, Gurugram",
      openPositions: 45,
      icon: <FaMicrosoft />,
      gradient: "linear-gradient(135deg, #00a4dc, #004e92)"
    },
    {
      id: 2,
      title: "Tesla",
      location: "Electronic City, Bangalore",
      openPositions: 28,
      icon: <SiTesla />,
      gradient: "linear-gradient(135deg, #cc2b5e, #753a88)"
    },
    {
      id: 3,
      title: "Apple",
      location: "Millennium City Centre, Gurugram",
      openPositions: 35,
      icon: <FaApple />,
      gradient: "linear-gradient(135deg, #667eea, #764ba2)"
    },
    {
      id: 4,
      title: "Google",
      location: "Whitefield, Bangalore",
      openPositions: 52,
      icon: <FaGoogle />,
      gradient: "linear-gradient(135deg, #4285F4, #34A853)"
    },
    {
      id: 5,
      title: "Amazon",
      location: "Hyderabad, Telangana",
      openPositions: 38,
      icon: <FaAmazon />,
      gradient: "linear-gradient(135deg, #FF9900, #FF6600)"
    },
    {
      id: 6,
      title: "Netflix",
      location: "Mumbai, Maharashtra",
      openPositions: 15,
      icon: <SiNetflix />,
      gradient: "linear-gradient(135deg, #E50914, #B20710)"
    }
  ];

  return (
    <div style={{
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      padding: '80px 0',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 40px',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '800',
          marginBottom: '16px',
          background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Top Companies Hiring
        </h2>
        <p style={{
          fontSize: '1.2rem',
          color: '#64748b',
          marginBottom: '60px',
          maxWidth: '600px',
          margin: '0 auto 60px auto'
        }}>
          Join leading companies that are shaping the future of technology
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {companies.map((element) => (
            <div 
              key={element.id}
              style={{
                background: 'white',
                borderRadius: '20px',
                padding: '32px 24px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                border: '1px solid #f1f5f9',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '20px'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  background: element.gradient,
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
                }}>
                  {element.icon}
                </div>
                <div style={{ textAlign: 'left', flex: 1 }}>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    margin: '0 0 4px 0',
                    color: '#1e293b'
                  }}>
                    {element.title}
                  </h3>
                  <p style={{
                    color: '#64748b',
                    fontSize: '0.9rem',
                    margin: 0,
                    fontWeight: '500'
                  }}>
                    📍 {element.location}
                  </p>
                </div>
              </div>

              <div style={{
                background: `${element.gradient}`,
                color: 'white',
                padding: '12px 20px',
                borderRadius: '10px',
                textAlign: 'center',
                fontWeight: '600',
                fontSize: '0.95rem',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }}>
                {element.openPositions} Open Positions
              </div>

              {/* Decorative background */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '80px',
                height: '80px',
                background: `${element.gradient}`,
                borderRadius: '50%',
                opacity: '0.05'
              }}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
