import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import {
  DirectionsRunOutlined,
  SelfImprovementOutlined,
  LocalHospitalOutlined,
  FitnessCenterOutlined,
  PeopleOutlined,
  SpaOutlined,
} from '@mui/icons-material';

// Styled FeatureCard (unchanged from your original code)
const FeatureCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[2],
  textAlign: 'center',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[4],
  },
  '&:focus-within': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[4],
    outline: `2px solid ${theme.palette.primary.main}`,
  },
}));

// Styled Problem/Solution Card
const ProblemSolutionCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[6],
  },
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '200px',
  textAlign: 'center',
}));

// Data for Problem and Solution sections
const problems = [
  {
    text: 'Sedentary lifestyle leading to health issues',
    icon: <LocalHospitalOutlined color="error" fontSize="large" />,
    chipLabel: 'Health Risks',
  },
  {
    text: 'Lack of motivation and consistency',
    icon: <SelfImprovementOutlined color="error" fontSize="large" />,
    chipLabel: 'Motivation Gap',
  },
  {
    text: 'Limited access to quality facilities',
    icon: <FitnessCenterOutlined color="error" fontSize="large" />,
    chipLabel: 'Access Barriers',
  },
];

const solutions = [
  {
    text: 'Personalized workout plans and progress tracking',
    icon: <FitnessCenterOutlined color="primary" fontSize="large" />,
    chipLabel: 'Personal Training',
  },
  {
    text: 'State-of-the-art gym and equipment',
    icon: <DirectionsRunOutlined color="primary" fontSize="large" />,
    chipLabel: 'Modern Facilities',
  },
  {
    text: 'Community classes and group motivation',
    icon: <PeopleOutlined color="primary" fontSize="large" />,
    chipLabel: 'Community Focus',
  },
  {
    text: 'Yoga, cardio, and holistic wellness programs',
    icon: <SpaOutlined color="primary" fontSize="large" />,
    chipLabel: 'Holistic Fitness',
  },
];

const features = [
  {
    title: 'HIIT Exercise Classes',
    description: 'High-Intensity Interval Training for maximum fat burn and endurance.',
    components: 'Cardio',
    hardware: 'All Levels',
  },
  {
    title: 'Aerobics',
    description: 'Fun, rhythmic workouts to improve cardiovascular health.',
    components: 'Group Fitness',
    hardware: 'Beginner Friendly',
  },
  {
    title: 'Crossfit',
    description: 'Functional high-intensity training with varied workouts.',
    components: 'Strength & Conditioning',
    hardware: 'Intermediate to Advanced',
  },
  {
    title: 'Zumba',
    description: 'Energetic dance fitness classes blending Latin rhythms.',
    components: 'Dance Fitness',
    hardware: 'All Levels',
  },
  {
    title: 'Dance Fitness Classes',
    description: 'Variety of dance styles for fun and effective calorie burning.',
    components: 'Choreography',
    hardware: 'Beginner to Advanced',
  },
  {
    title: 'Private Lessons',
    description: 'One-on-one sessions tailored to your fitness goals.',
    components: 'Personalized',
    hardware: 'Custom',
  },
  {
    title: 'Personal Training',
    description: 'Expert guidance from certified trainers for optimal results.',
    components: 'Coaching',
    hardware: 'Ongoing',
  },
  {
    title: 'Youth Sports',
    description: 'Competitive and recreational sports for young athletes.',
    components: 'Youth Development',
    hardware: 'Ages 8-18',
  },
  {
    title: 'Youth Classes',
    description: 'Age-appropriate fitness and fun activities for kids.',
    components: 'Kids Fitness',
    hardware: 'Ages 5-12',
  },
  {
    title: 'Yoga Classes',
    description: 'Mindful practices for flexibility, strength, and relaxation.',
    components: 'Wellness',
    hardware: 'All Levels',
  },
  {
    title: 'Weight Training',
    description: 'Build muscle and strength with professional equipment.',
    components: 'Resistance Training',
    hardware: 'All Levels',
  },
  {
    title: 'Nutrition Consulting',
    description: 'Personalized diet plans and nutritional advice.',
    components: 'Diet Support',
    hardware: 'Ongoing',
  },
];

export default function Hero() {
  return (
    <>
      <title>Flex Fitness | Fitness for All</title>
      <meta
        name="description"
        content="Discover Flex Fitness, a premier fitness club in Bengaluru, India. Join HIIT, Aerobics, Crossfit, Zumba, Yoga, Weight Training, Personal Training, Youth Classes, and more for holistic wellness."
      />
      <meta
        name="keywords"
        content="Flex Fitness, Bengaluru fitness club, HIIT classes Bengaluru, Aerobics Bengaluru, Crossfit Bengaluru, Zumba classes, Dance fitness, Personal training Bengaluru, Youth sports, Yoga classes, Weight training, Nutrition consulting"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://flex-fitness.club" />

      <Box
        id="hero"
        role="banner"
        sx={(theme) => ({
          width: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
          ...theme.applyStyles('dark', {
            backgroundImage:
              'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
          }),
          py: { xs: 8, sm: 12 },
        })}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 10, sm: 16 },
            pb: { xs: 6, sm: 10 },
          }}
        >
          <Stack
            spacing={3}
            useFlexGap
            sx={{ alignItems: 'center', width: { xs: '100%', sm: '80%', md: '60%' } }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: 'clamp(2.5rem, 7vw, 3.75rem)',
                fontWeight: 'bold',
                color: 'primary.main',
                textAlign: 'center',
              }}
            >
              Flex Fitness
            </Typography>
            <Typography
              variant="h6"
              component="h2"
              sx={{
                textAlign: 'center',
                color: 'text.secondary',
                fontWeight: 'medium',
              }}
            >
              Fitness for All
            </Typography>

            <Divider sx={{ width: '60%', mx: 'auto', my: 2 }} />

            {/* Problem Section */}
            <Stack
              spacing={4}
              useFlexGap
              sx={{ alignItems: 'center', width: '100%', mt: 8 }}
            >
              <Typography
                variant="h4"
                component="h3"
                sx={{ textAlign: 'center', fontWeight: 'bold' }}
              >
                Why We Need Fitness?
              </Typography>
              <Grid container spacing={3}>
                {problems.map((problem, index) => (
                  <Grid size={{ xs: 12, sm: 4 }} key={index}>
                    <ProblemSolutionCard tabIndex={0}>
                      <Box sx={{ mb: 2 }}>{problem.icon}</Box>
                      <Typography
                        variant="body2"
                        sx={{ color: 'text.secondary', mb: 1 }}
                      >
                        {problem.text}
                      </Typography>
                      <Chip
                        label={problem.chipLabel}
                        color="error"
                        variant="outlined"
                        size="small"
                      />
                    </ProblemSolutionCard>
                  </Grid>
                ))}
              </Grid>
            </Stack>

            {/* Solution Section */}
            <Stack
              spacing={4}
              useFlexGap
              sx={{ alignItems: 'center', width: '100%', mt: 6 }}
            >
              <Typography
                variant="h4"
                component="h3"
                sx={{ textAlign: 'center', fontWeight: 'bold' }}
              >
                The Solution - Flex Fitness Club
              </Typography>
              <Grid container spacing={3}>
                {solutions.map((solution, index) => (
                  <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                    <ProblemSolutionCard tabIndex={0}>
                      <Box sx={{ mb: 2 }}>{solution.icon}</Box>
                      <Typography
                        variant="body2"
                        sx={{ color: 'text.secondary', mb: 1 }}
                      >
                        {solution.text}
                      </Typography>
                      <Chip
                        label={solution.chipLabel}
                        color="primary"
                        variant="outlined"
                        size="small"
                      />
                    </ProblemSolutionCard>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Stack>

          {/* Features Section */}
          <Stack
            spacing={4}
            useFlexGap
            sx={{ alignItems: 'center', width: '100%', mt: 8 }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{ textAlign: 'center', fontWeight: 'bold' }}
            >
              Our Classes & Services
            </Typography>
            <Grid container spacing={3}>
              {features.map((feature, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
                  <FeatureCard tabIndex={0}>
                    <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary', mt: 1 }}
                    >
                      {feature.description}
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{ mt: 2, justifyContent: 'center' }}
                    >
                      <Chip
                        label={feature.components}
                        color="primary"
                        variant="outlined"
                        size="small"
                      />
                      <Chip
                        label={feature.hardware}
                        color="secondary"
                        variant="outlined"
                        size="small"
                      />
                    </Stack>
                  </FeatureCard>
                </Grid>
              ))}
            </Grid>
          </Stack>

          <Button
            variant="contained"
            color="primary"
            href="https://wa.me/919876543210?text=Hi%20Flex%20Fitness%2C%20I'd%20like%20to%20join%20your%20club!"
            target="_blank"
            size="large"
            sx={{ mt: 4, px: 4, py: 1.5, borderRadius: 2 }}
            aria-label="Contact Flex Fitness via WhatsApp"
          >
            Join Now
          </Button>

          {/* Contact Section */}
          <Stack
            spacing={2}
            useFlexGap
            sx={{ alignItems: 'center', width: '100%', mt: 8 }}
          >
            <Divider sx={{ width: '60%', mx: 'auto', my: 2 }} />
            <Typography
              variant="h4"
              component="h2"
              sx={{ textAlign: 'center', fontWeight: 'bold' }}
            >
              Get in Touch
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: 'center', color: 'text.secondary' }}
            >
              Visit us at our Bengaluru location or{' '}
              <Link
                href="mailto:info@flex-fitness.club"
                color="primary"
                aria-label="Email Flex Fitness"
              >
                email us
              </Link>{' '}
              for inquiries.
              <br />
              Ready to start?{' '}
              <Link
                href="https://calendar.app.google/YourCalendarLink"
                target="_blank"
                color="primary"
                aria-label="Schedule a free trial session"
              >
                Schedule a Free Trial
              </Link>.
            </Typography>
          </Stack>
        </Container>
      </Box>
    </>
  );
}