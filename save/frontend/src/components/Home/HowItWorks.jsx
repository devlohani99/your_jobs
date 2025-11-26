import React from "react";
import { FaUserPlus, FaSearch, FaHandshake } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <>
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
            How YourJobs Works
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#64748b',
            marginBottom: '60px',
            maxWidth: '600px',
            margin: '0 auto 60px auto'
          }}>
            Find your perfect job or hire top talent in just three simple steps
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px',
            marginTop: '60px'
          }}>
            <div style={{
              background: 'white',
              padding: '40px 30px',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px auto',
                color: 'white',
                fontSize: '2rem'
              }}>
                <FaUserPlus />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '16px',
                color: '#1e293b'
              }}>
                Create Your Account
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6',
                fontSize: '1rem'
              }}>
                Sign up for free and create your professional profile. Upload your resume, 
                showcase your skills, and let employers find you.
              </p>
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '30px',
                height: '30px',
                background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '14px',
                fontWeight: 'bold'
              }}>
                1
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
              padding: '40px 30px',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(79, 70, 229, 0.3)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              color: 'white'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(79, 70, 229, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(79, 70, 229, 0.3)';
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px auto',
                color: 'white',
                fontSize: '2rem'
              }}>
                <FaSearch />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '16px',
                color: 'white'
              }}>
                Find Jobs or Post Openings
              </h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: '1.6',
                fontSize: '1rem'
              }}>
                Browse thousands of job opportunities or post your job openings. 
                Use our advanced filters to find the perfect match for your needs.
              </p>
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '30px',
                height: '30px',
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '14px',
                fontWeight: 'bold'
              }}>
                2
              </div>
            </div>

            <div style={{
              background: 'white',
              padding: '40px 30px',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #10B981, #059669)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px auto',
                color: 'white',
                fontSize: '2rem'
              }}>
                <FaHandshake />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '16px',
                color: '#1e293b'
              }}>
                Connect & Get Hired
              </h3>
              <p style={{
                color: '#64748b',
                lineHeight: '1.6',
                fontSize: '1rem'
              }}>
                Apply for jobs with one click or review applications from qualified candidates. 
                Start your journey to career success today.
              </p>
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '30px',
                height: '30px',
                background: 'linear-gradient(135deg, #10B981, #059669)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '14px',
                fontWeight: 'bold'
              }}>
                3
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
