import React from "react";
import {
  MdOutlineDesignServices,
  MdOutlineWebhook,
  MdAccountBalance,
  MdOutlineAnimation,
} from "react-icons/md";
import { TbAppsFilled } from "react-icons/tb";
import { FaReact, FaArrowRight } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";
import { Link } from "react-router-dom";

const PopularCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Graphics & Design",
      subTitle: "305 Open Positions",
      icon: <MdOutlineDesignServices />,
      gradient: "linear-gradient(135deg, #FF6B6B, #FF8E53)"
    },
    {
      id: 2,
      title: "Mobile App Development", 
      subTitle: "500 Open Positions",
      icon: <TbAppsFilled />,
      gradient: "linear-gradient(135deg, #4ECDC4, #44A08D)"
    },
    {
      id: 3,
      title: "Frontend Web Development",
      subTitle: "200 Open Positions", 
      icon: <MdOutlineWebhook />,
      gradient: "linear-gradient(135deg, #A8EDEA, #FDBB2D)"
    },
    {
      id: 4,
      title: "MERN Stack Development",
      subTitle: "1000+ Open Positions",
      icon: <FaReact />,
      gradient: "linear-gradient(135deg, #667eea, #764ba2)"
    },
    {
      id: 5,
      title: "Account & Finance",
      subTitle: "150 Open Positions",
      icon: <MdAccountBalance />,
      gradient: "linear-gradient(135deg, #f093fb, #f5576c)"
    },
    {
      id: 6,
      title: "Artificial Intelligence", 
      subTitle: "867 Open Positions",
      icon: <GiArtificialIntelligence />,
      gradient: "linear-gradient(135deg, #4facfe, #00f2fe)"
    },
    {
      id: 7,
      title: "Video Animation",
      subTitle: "50 Open Positions",
      icon: <MdOutlineAnimation />,
      gradient: "linear-gradient(135deg, #fa709a, #fee140)"
    },
    {
      id: 8,
      title: "Game Development",
      subTitle: "80 Open Positions", 
      icon: <IoGameController />,
      gradient: "linear-gradient(135deg, #a8edea, #fdbb2d)"
    },
  ];

  return (
    <div style={{
      background: 'white',
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
          Popular Categories
        </h2>
        <p style={{
          fontSize: '1.2rem',
          color: '#64748b',
          marginBottom: '60px',
          maxWidth: '600px',
          margin: '0 auto 60px auto'
        }}>
          Explore opportunities in trending tech fields and growing industries
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '60px'
        }}>
          {categories.map((element) => (
            <div 
              key={element.id}
              style={{
                background: 'white',
                padding: '32px 24px',
                borderRadius: '16px',
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
                width: '64px',
                height: '64px',
                background: element.gradient,
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto',
                color: 'white',
                fontSize: '1.8rem',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
              }}>
                {element.icon}
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                marginBottom: '8px',
                color: '#1e293b',
                lineHeight: '1.2'
              }}>
                {element.title}
              </h3>
              <p style={{
                color: '#64748b',
                fontSize: '0.95rem',
                margin: 0,
                fontWeight: '500'
              }}>
                {element.subTitle}
              </p>
              
              {/* Decorative element */}
              <div style={{
                position: 'absolute',
                top: '-10px',
                right: '-10px',
                width: '40px',
                height: '40px',
                background: `${element.gradient}`,
                borderRadius: '50%',
                opacity: '0.1'
              }}></div>
            </div>
          ))}
        </div>

        <Link 
          to="/job/getall"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
            color: 'white',
            padding: '16px 32px',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1.1rem',
            boxShadow: '0 4px 16px rgba(79, 70, 229, 0.3)',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 24px rgba(79, 70, 229, 0.4)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 16px rgba(79, 70, 229, 0.3)';
          }}
        >
          View All Jobs <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default PopularCategories;
