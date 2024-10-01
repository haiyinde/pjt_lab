import React, { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import OnHeader from '@/components/OnHeader';
import OnFooter from '@/components/OnFooter';
import onboardingImage from '@/assets/onboarding-image.png';
import CommunityAPI from '@/apis/communityAPI';

const OnBoarding = () => {
  const [posts, setPosts] = useState([]); // 포스트 상태 관리
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(''); // 에러 상태

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await CommunityAPI.getPosts(); // CommunityAPI의 getPosts 메서드 호출
        setPosts(response.data); // 받아온 데이터로 상태 업데이트
      } catch (err) {
        setError('Error fetching data'); // 에러 처리
      } finally {
        setLoading(false); // 로딩 상태 종료
      }
    };

    fetchPosts(); // API 호출
  }, []); // 컴포넌트가 마운트될 때 호출

  return (
    <div>
      <OnHeader />
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh',
          }}
        >
          {/* <img
            src={onboardingImage}
            alt="Onboarding"
            style={{ maxWidth: '100%', height: 'auto' }}
          /> */}
        </Box>
        <Box>
          {loading ? (
            <Typography variant="h6">Loading...</Typography>
          ) : error ? (
            <Typography variant="h6">{error}</Typography>
          ) : (
            posts.map(post => (
              <Box key={post.id} sx={{ margin: '16px 0' }}>
                <Typography variant="h6">{post.title}</Typography>
                <Typography variant="body1">{post.body}</Typography>
              </Box>
            ))
          )}
        </Box>
      </Container>
      <OnFooter />
    </div>
  );
};

export default OnBoarding;
