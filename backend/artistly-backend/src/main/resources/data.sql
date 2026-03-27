-- ═══════════════════════════════════════════
-- Seed Data for Artistly Platform
-- Matches mock data from the Next.js frontend
-- ═══════════════════════════════════════════

-- ── Artists ──
INSERT INTO artists (id, name, email, phone, category, location, rating, reviews, price_range, image_url, bio, verified, response_time, experience, status, website, social_media, created_at, updated_at)
VALUES
(1, 'Aarav Sharma', 'aarav.sharma@email.com', '9876543210', 'Singer', 'Mumbai, Maharashtra', 4.9, 45, '₹40,000-80,000', '/img/Singer.jpg', 'Professional jazz and pop singer with over 8 years of experience performing at weddings, corporate events, and private parties. Known for my soulful voice and ability to connect with audiences.', true, '2 hours', 'Advanced (5-10 years)', 'APPROVED', NULL, NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

(2, 'Priya Nair', 'priya.nair@email.com', '9876543211', 'Dancer', 'Bengaluru, Karnataka', 4.8, 32, '₹65,000-1,20,000', '/img/Dancer.jpg', 'High-energy dance crew specializing in contemporary fusion, hip-hop, and street dance. Perfect for corporate events, festivals, and entertainment shows.', true, '4 hours', 'Expert (10+ years)', 'APPROVED', NULL, NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

(3, 'Rahul Verma', 'rahul.verma@email.com', '9876543212', 'DJ', 'Goa, Goa', 4.9, 67, '₹30,000-65,000', '/img/DJ.jpg', 'Professional DJ with extensive experience in weddings, corporate events, and nightclub performances. Specializing in electronic, house, and top 40 hits.', true, '1 hour', 'Advanced (5-10 years)', 'PENDING', NULL, NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

(4, 'Aisha Singh', 'aisha.singh@email.com', '9876543213', 'Model', 'Delhi, Delhi', 4.7, 28, '₹80,000-1,60,000', '/img/WomenModel.jpg', 'Motivational speaker and business coach with 12 years of experience. Specializes in leadership development, team building, and personal growth seminars.', true, '6 hours', 'Expert (10+ years)', 'REJECTED', NULL, NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

(5, 'The Jazz Quartet India', 'jazz.quartet@email.com', '9876543214', 'Band', 'Kolkata, West Bengal', 4.8, 41, '₹80,000-1,60,000', '/img/Band.jpg', 'Professional jazz quartet featuring piano, bass, drums, and saxophone. Perfect for upscale events, cocktail parties, and intimate gatherings.', true, '3 hours', 'Expert (10+ years)', 'APPROVED', NULL, NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

(6, 'Suresh Menon', 'suresh.menon@email.com', '9876543215', 'Comedian', 'Ahmedabad, Gujarat', 4.6, 53, '₹40,000-80,000', '/img/StandUp.jpg', 'Stand-up comedian with clean, family-friendly humor. Perfect for corporate events, private parties, and entertainment shows.', false, '5 hours', 'Advanced (5-10 years)', 'APPROVED', NULL, NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

(7, 'Elina Reddy', 'elina.reddy@email.com', '9876543216', 'Singer', 'Hyderabad, Telangana', 4.9, 38, '₹30,000-65,000', '/img/WomenSinger.jpg', 'Bilingual singer specializing in Indian classical, pop, and acoustic performances. Available for weddings, festivals, and cultural events.', true, '2 hours', 'Intermediate (2-5 years)', 'APPROVED', NULL, NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),

(8, 'Rangilo Rajasthan', 'rangilo.rajasthan@email.com', '9876543217', 'Band', 'Chennai, Tamil Nadu', 4.8, 29, '₹65,000-1,20,000', '/img/ClassicalBand.jpg', 'Professional string quartet and ensemble for weddings, galas, and formal events. Repertoire includes classical, contemporary, and custom arrangements.', true, '4 hours', 'Expert (10+ years)', 'APPROVED', NULL, NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- ── Artist Specialties ──
INSERT INTO artist_specialties (artist_id, specialty) VALUES
(1, 'Jazz'), (1, 'Pop'), (1, 'Soul'), (1, 'Wedding Songs'),
(2, 'Bharatanatyam'), (2, 'Contemporary'), (2, 'Folk'),
(3, 'Electronic'), (3, 'House'), (3, 'Wedding'), (3, 'Top 40'),
(4, 'Motivational'), (4, 'Leadership'), (4, 'Business'), (4, 'Team Building'),
(5, 'Jazz'), (5, 'Swing'), (5, 'Blues'), (5, 'Cocktail Music'),
(6, 'Stand-up'), (6, 'Clean Comedy'), (6, 'Corporate'), (6, 'Improv'),
(7, 'Classical'), (7, 'Pop'), (7, 'Acoustic'), (7, 'Bilingual'),
(8, 'Classical'), (8, 'Wedding'), (8, 'Chamber Music'), (8, 'Contemporary');

-- ── Artist Languages ──
INSERT INTO artist_languages (artist_id, language) VALUES
(1, 'English'), (1, 'Hindi'),
(2, 'English'), (2, 'Kannada'), (2, 'Hindi'),
(3, 'English'), (3, 'Hindi'),
(4, 'English'), (4, 'Hindi'),
(5, 'English'), (5, 'Bengali'), (5, 'Hindi'),
(6, 'English'), (6, 'Gujarati'), (6, 'Hindi'),
(7, 'English'), (7, 'Telugu'), (7, 'Hindi'),
(8, 'English'), (8, 'Tamil'), (8, 'Hindi');

-- ── Default Admin User (password: admin123) ──
INSERT INTO users (id, name, email, password, role, created_at)
VALUES (1, 'Admin', 'admin@artistly.com', '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy', 'ADMIN', CURRENT_TIMESTAMP);
