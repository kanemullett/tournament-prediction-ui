import { Box, Paper, Typography } from '@mui/material';
import ResponsiveAppBar from '../components/AppBar/AppBar.tsx';

interface IPageTemplate {
  title: string;
  children: React.ReactNode;
}

const PageTemplate = (props: IPageTemplate) => {
  return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <ResponsiveAppBar />
            <Typography
                variant="h4"
                sx={{
                marginLeft: 8,
                marginBottom: 1,
                fontWeight: 'bold',
                paddingBottom: 1,
                fontFamily: 'var(--font-family)',
                }}
            >
                {props.title}
            </Typography>
            <Paper
                elevation={3}
                sx={{
                borderRadius: 2,
                marginLeft: 8,
                marginRight: 8,
                marginBottom: 5,
                padding: 4,
                flexGrow: 1,
                boxSizing: 'border-box',
                }}
            >
                {props.children}
            </Paper>
        </Box>
    );
};

export default PageTemplate;