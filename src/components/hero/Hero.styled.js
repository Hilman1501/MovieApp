import styled from "styled-components";

export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 30px;
  background-color: #f8fafc;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06); /* ✨ Shadow halus */
  flex-wrap: wrap;
  gap: 20px;
`;

export const HeroContent = styled.div`
  flex: 1 1 400px;
  max-width: 600px;
  padding-left: 40px;
`;

export const HeroTitle = styled.h2`
  font-size: 2.25rem;
  color: #1e293b;
  font-weight: 700;
  margin-bottom: 12px;
  line-height: 1.2;
`;

export const HeroGenre = styled.h3`
  font-size: 1rem;
  color: #64748b;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const HeroSubtitle = styled.p`
  font-size: 1.1rem;
  color: #475569;
  line-height: 1.6;
  margin-bottom: 20px;
`;

export const HeroImage = styled.div`
  flex: 1 1 300px;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08); /* ✨ Shadow lembut untuk gambar */
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.02);
    }
  }
`;
